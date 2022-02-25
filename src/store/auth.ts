import {
  getAuth,
  connectAuthEmulator,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
  User,
  signInWithEmailAndPassword,
  signInWithRedirect,
  AuthProvider,
} from 'firebase/auth';

import firebaseInstance from '@/services/firebase';

import firebaseConfig from '../../firebase.json';

type AuthState = {
  user: null | User;
  loading: boolean,
};

const auth = getAuth(firebaseInstance);

if (import.meta.env.MODE !== 'production') {
  // eslint-disable-next-line no-console
  console.log('Auth Connected To Firebase Local Emulator');
  const { FIREBASE_EMULATOR_URL } = import.meta.env;
  connectAuthEmulator(auth, `http://${FIREBASE_EMULATOR_URL}:${firebaseConfig.emulators.auth.port}`);
}

const authStore = defineStore('auth', {
  state: () => {
    const state: AuthState = {
      user: null,
      loading: false,
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
    loadingStatus(state) : boolean {
      return state.loading;
    },
  },
  actions: {
    init() {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (updatedUser) => {
          this.loading = false;
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
    async signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      await this.loginWithRedirect(provider);
    },
    async signInWithFacebook() {
      const provider = new FacebookAuthProvider();
      await this.loginWithRedirect(provider);
    },
    async signInWithGithub() {
      const provider = new GithubAuthProvider();
      await this.loginWithRedirect(provider);
    },
    async loginWithRedirect(provider: AuthProvider) {
      try {
        this.loading = true;
        await signInWithRedirect(auth, provider);
      } finally {
        this.loading = false;
      }
    },
    async loginWithEmailAndPassword(email: string, password: string) {
      try {
        this.loading = true;
        await signInWithEmailAndPassword(auth, email, password);
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.loading = true;
      await signOut(auth);
      this.loading = false;
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
