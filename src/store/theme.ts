import { darkTheme } from 'naive-ui';

const themeStore = defineStore('theme', {
  state: () => ({
    selectedIndex: 0,
    themeOptions: {
      light: null,
      dark: darkTheme,
    },
  }),
  actions: {
    changeTheme() {
      const keys = Object.keys(this.themeOptions);
      if (this.selectedIndex < keys.length - 1) {
        this.selectedIndex += 1;
      } else {
        this.selectedIndex = 0;
      }
    },
  },
  getters: {
    getCurrentTheme(state) {
      return Object.values(state.themeOptions)[state.selectedIndex];
    },
    getThemeName(state) {
      const themeName = Object.keys(state.themeOptions)[state.selectedIndex];
      return `${themeName.charAt(0).toUpperCase()}${themeName.slice(1)}`;
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

export default themeStore;
