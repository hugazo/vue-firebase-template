import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
} from 'firebase/auth';

import firebaseInstance from '@/services/firebase';


type AuthState = {
  user: null | User;
};

const auth = getAuth(firebaseInstance);

const authStore = defineStore('auth', {
  state: () => {
    const state: AuthState = {
      user: null,
    };
    return state;
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    logged(state) : boolean {
      return Boolean(state.user);
    },
  },
  actions: {
    init() {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (updatedUser) => {
          if (updatedUser) {
            this.user = updatedUser;
            resolve(updatedUser);
          } else {
            this.user = null;
            resolve(null);
          }
        });
      });
    },
    async loginWithPopup() {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    },
    async logout() {
      await signOut(auth);
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: sessionStorage,
      },
    ],
  },
});

export default authStore;
