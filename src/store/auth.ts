import {
  getAuth,
  connectAuthEmulator,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut,
  User,
  signInWithRedirect,
  AuthProvider,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from 'firebase/auth';
import firebaseInstance from '@/services/firebase';

import {
  error,
  success,
  info,
} from '@services/notifier';

import firebaseConfig from '../../firebase.json';

type AuthState = {
  user: null | User;
  loading: boolean,
  promptForEmail: boolean,
  emailForSignIn: string,
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
      promptForEmail: false,
      emailForSignIn: '',
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
    askEmail(state) : boolean {
      return state.promptForEmail;
    },
  },
  actions: {
    init() {
      return new Promise((resolve) => {
        // Sets the listener for auth changes
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
        // Email link auth logic
        const emailLink = window.location.href;
        if (isSignInWithEmailLink(auth, emailLink)) {
          if (!this.emailForSignIn) {
            info('It seems you are authenticating from another device, please input your email to continue.');
            this.promptForEmail = true;
          } else {
            info('Receiving authentication session');
            this.signInWithEmail(this.emailForSignIn);
          }
        }
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
    async signInWithEmail(email: string) {
      try {
        await signInWithEmailLink(auth, email, window.location.href);
      } catch (_e) {
        error('Can\'t sign in with the provided email');
      } finally {
        this.promptForEmail = false;
      }
    },
    async loginWithRedirect(provider: AuthProvider) {
      try {
        this.loading = true;
        await signInWithRedirect(auth, provider);
      } finally {
        this.loading = false;
      }
    },
    async emailAuth(email: string) {
      try {
        this.loading = true;
        const settings = {
          url: window.location.href,
          handleCodeInApp: true,
        };
        await sendSignInLinkToEmail(auth, email, settings);
        this.emailForSignIn = email;
        success('An email with a magic link has been sent, check your email!');
      } catch (_e) {
        throw new Error('Can\'t log in with the provided credentials');
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
        key: 'user',
        storage: sessionStorage,
      },
      {
        key: 'emailForSignIn',
        storage: localStorage,
      },
      {
        key: 'promptForEmail',
        storage: localStorage,
      },
    ],
  },
});

export default authStore;
