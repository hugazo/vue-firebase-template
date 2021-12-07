import auth from '@services/firebase';

import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
} from 'firebase/auth';

type AuthState = {
  user: null | User;
  loading: boolean,
  logged: boolean,
};

const authStore = defineStore('auth', {
  state: () => {
    const state: AuthState = {
      user: null,
      loading: false,
      logged: false,
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
          }
        });
      });
    },
    async loginWithPopup() {
      this.loading = true;
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      this.loading = false;
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
