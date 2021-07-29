<template>
  <div>
    <Navbar />
    <div class="container mx-auto">
      <Character :characters="characters.results" @search="handleSearch" />
    </div>
    <div>
      <Pagination :data="pages" @pagination="pagination" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Character from '../components/Character.vue';
import Pagination from '../components/Pagination.vue';

export default {
  components: {
    Navbar,
    Footer,
    Character,
    Pagination,
  },
  data() {
    return {
      filter: {},
    };
  },
  computed: {
    ...mapState(['loading', 'characters']),

    pages() {
      return this.characters.info?.pages || 0;
    },
  },
  async created() {
    await this.fetchCharacters();
  },
  methods: {
    ...mapActions(['fetchCharacters']),

    async pagination(index) {
      this.filter = {
        ...this.filter,
        page: index,
      };
      await this.fetchCharacters(this.filter);
    },

    async handleSearch(name) {
      this.filter = {
        ...this.filter,
        name,
        page: 1,
      };
      await this.fetchCharacters(this.filter);
    },
  },
};
</script>
