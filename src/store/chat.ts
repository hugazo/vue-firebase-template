import {
  getFirestore,
  collection,
  connectFirestoreEmulator,
  query,
  onSnapshot,
  doc,
  setDoc,
  DocumentSnapshot,
} from 'firebase/firestore';

import firebaseInstance from '@/services/firebase';

import firebaseConfig from '../../firebase.json';

const db = getFirestore(firebaseInstance);

const chats = collection(db, 'chats');

type RoomData = {
  name: string,
};

interface RoomDefinition extends RoomData {
  id: string,
}

type ChatsState = {
  initialized: boolean;
  rooms: RoomDefinition[];
};

if (import.meta.env.MODE !== 'production') {
  // eslint-disable-next-line no-console
  console.log('Chats Connected To Firebase Local Emulator');
  const emulatorHost = import.meta.env.FIREBASE_EMULATOR_URL as string;
  connectFirestoreEmulator(db, emulatorHost, firebaseConfig.emulators.firestore.port);
}

const chatsStore = defineStore('chats', {
  state: () => {
    const state: ChatsState = {
      initialized: false,
      rooms: [],
    };
    return state;
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
      },
    ],
  },
  getters: {
    getRooms(state) {
      return state.rooms;
    },
    getRoomMenuData(state) {
      const mappedMenuData = state.rooms.map((room) => ({
        key: room.id,
        label: room.name,
      }));
      return mappedMenuData;
    },
  },
  actions: {
    initRooms() {
      this.rooms = [];
      const q = query(chats);
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          this.handleNewDoc(change.doc, change.type);
        });
      });
    },
    handleNewDoc(docSnap: DocumentSnapshot, type: string) {
      const data = docSnap.data() as RoomData;
      const name: string = data.name as string;
      const room = {
        id: docSnap.id,
        name,
      };
      if (type === 'added') {
        this.newRoom(room);
      }
      if (type === 'modified') {
        this.modifyRoom(room);
      }
      if (type === 'removed') {
        this.deleteRoom(room);
      }
    },
    async createRoom(name: string) {
      await setDoc(doc(chats), {
        name,
      });
    },
    newRoom(room: RoomDefinition) {
      this.rooms.push(room);
    },
    modifyRoom(room: RoomDefinition) {
      const roomIndex = this.rooms.findIndex((value: RoomDefinition) => value.id === room.id);
      this.rooms[roomIndex] = room;
    },
    deleteRoom(room: RoomDefinition) {
      const roomIndex = this.rooms.findIndex((value: RoomDefinition) => value.id === room.id);
      this.rooms.splice(roomIndex, 1);
    },
  },
});

export default chatsStore;
