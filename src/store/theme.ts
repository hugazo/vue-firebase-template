import { Dark } from 'quasar';

type ThemeValues = boolean | 'auto';

interface Theme {
  name: string,
  value: ThemeValues,
}
interface Themes extends Array<Theme> {}

interface ThemeState {
  themes: Themes,
  selectedTheme: 0 | 1 | 2,
}

const themeStore = defineStore('theme', {
  state: () => {
    const state: ThemeState = {
      themes: [
        {
          name: 'Light',
          value: false,
        },
        {
          name: 'Dark',
          value: true,
        },
        {
          name: 'System',
          value: 'auto',
        },
      ],
      selectedTheme: 0,
    };
    return state;
  },
  actions: {
    changeTheme() {
      if (this.selectedTheme < this.themes.length - 1) {
        this.selectedTheme += 1;
      } else {
        this.selectedTheme = 0;
      }
      const selectedTheme = this.themes[this.selectedTheme];
      this.loadTheme(selectedTheme.value);
    },
    loadTheme(value: ThemeValues) {
      Dark.set(value);
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
