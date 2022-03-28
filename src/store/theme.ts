import { darkTheme, useOsTheme } from 'naive-ui';
import { BuiltInGlobalTheme } from 'naive-ui/lib/themes/interface';

const osThemeRef = useOsTheme();

type ThemeResolver = null | BuiltInGlobalTheme;

const themeStore = defineStore('theme', {
  state: () => ({
    themes: [
      {
        name: 'Light',
        resolver: (): ThemeResolver => null,
      },
      {
        name: 'Dark',
        resolver: (): ThemeResolver => darkTheme,
      },
      {
        name: 'System',
        resolver: (): ThemeResolver => (osThemeRef.value === 'dark' ? darkTheme : null),
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
