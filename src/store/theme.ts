import { darkTheme, useOsTheme } from 'naive-ui';


const themeStore = defineStore('theme', {
  state: () => ({
    themes: [
      {
        name: 'light',
        icon: 'tabler-sun',
        resolver: () => null,
      },
      {
        name: 'dark',
        icon: 'tabler-moon',
        resolver: () => darkTheme,
      },
      {
        name: 'system',
        icon: 'tabler-computer',
        resolver: () => {
          const osThemeRef = useOsTheme();
          const value = osThemeRef.value === 'dark' ? darkTheme : null;
          return value;
        },
      },
    ],
    selectedTheme: 0,
  }),
  actions: {
    changeTheme() {
      if (this.selectedTheme < this.themes.length - 1) {
        this.selectedTheme += 1;
      } else {
        this.selectedTheme = 0;
      }
    },
  },
  getters: {
    getTheme(state) {
      return state.themes[state.selectedTheme];
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
        paths: ['selectedTheme'],
      },
    ],
  },
});

export default themeStore;
