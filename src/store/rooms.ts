import { RouterLink } from 'vue-router';

import authStore from '@/composables/auth';
import { User } from 'firebase/auth';

import {
  getFirestore,
  collection,
  connectFirestoreEmulator,
  query,
  onSnapshot,
  doc,
  setDoc,
  DocumentSnapshot,
  Unsubscribe,
} from 'firebase/firestore';

import firebaseInstance from '@/services/firebase';

import firebaseConfig from '../../firebase.json';

const db = getFirestore(firebaseInstance);

const rooms = collection(db, 'rooms');

// Room Types Definition
interface Room {
  id?: string,
  name: string,
  owner: string,
}

interface Rooms extends Array<Room> {}

interface ChatsState {
  selectedRoom: string | null,
  rooms: Rooms,
  unsuscribe: Unsubscribe | null,
}

// Firebase Devtools Plugin

if (import.meta.env.MODE !== 'production') {
  // eslint-disable-next-line no-console
  console.log('Chats Connected To Firebase Local Emulator');
  const emulatorHost = import.meta.env.FIREBASE_EMULATOR_URL as string;
  connectFirestoreEmulator(db, emulatorHost, firebaseConfig.emulators.firestore.port);
}

// Router Menu Constructor

const menuLabel = (room: Room) => {
  const props = {
    to: {
      name: 'chat-id',
      params: { id: room.id },
    },
  };
  return h(RouterLink, props, {
    default: () => room.name,
  });
};

const roomsStore = defineStore('rooms', {
  state: () => {
    const state: ChatsState = {
      selectedRoom: null,
      rooms: [],
      unsuscribe: null,
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
      const mappedMenuData = state.rooms.map((room) => {
        const label = menuLabel(room);
        return {
          key: room.id,
          label: () => label,
        };
      });
      return mappedMenuData;
    },
  },
  actions: {
    initRooms() {
      this.rooms = [];
      const q = query(rooms);
      const unsuscribe = onSnapshot(q, (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          this.handleNewDoc(change.doc, change.type);
        });
      });
      this.unsuscribe = unsuscribe;
    },
    exitRooms() {
      if (this.unsuscribe) {
        this.unsuscribe();
        this.$reset();
      }
    },
    selectRoom(value: string | null) {
      this.selectedRoom = value;
    },
    handleNewDoc(docSnap: DocumentSnapshot, type: string) {
      const data = docSnap.data() as Room;
      const room = {
        id: docSnap.id,
        ...data,
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
      const auth = authStore();
      const user = auth.store.getUser as User;
      await setDoc(doc(rooms), {
        name,
        owner: user.uid,
      });
    },
    newRoom(room: Room) {
      this.rooms.push(room);
    },
    modifyRoom(room: Room) {
      const roomIndex = this.rooms.findIndex((value: Room) => value.id === room.id);
      this.rooms[roomIndex] = room;
    },
    deleteRoom(room: Room) {
      const roomIndex = this.rooms.findIndex((value: Room) => value.id === room.id);
      this.rooms.splice(roomIndex, 1);
    },
  },
});

export default roomsStore;
