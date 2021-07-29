export default {
  loading(state) {
    state.loading = !state.loading;
  },

  'fetch characters': function (state, payload) {
    state.characters = payload;
  },
};
