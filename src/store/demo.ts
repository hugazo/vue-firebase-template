import { acceptHMRUpdate, defineStore } from 'pinia';


const useStore = defineStore('demo', {
  state: () => ({
    counter: 0,
    clicks: 0,
  }),
  getters: {
    getCounter: (state) => state.counter,
    getClicks: (state) => state.clicks,
  },
  actions: {
    sum() {
      this.counter += 1;
      this.clicks += 1;
    },
    rest() {
      this.counter -= 1;
      this.clicks += 1;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}

export default useStore;
