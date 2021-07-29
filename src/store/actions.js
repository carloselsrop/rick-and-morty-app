import axios from 'axios';

export default {
  async fetchCharacters({ commit }, filter) {
    try {
      const {
        data: { info, results },
      } = await axios.get('https://rickandmortyapi.com/api/character', {
        params: { perpage: 5, ...filter },
      });
      commit('fetch characters', { info, results }, filter);
    } catch (error) {
      console.error(error);
    }
  },
};
