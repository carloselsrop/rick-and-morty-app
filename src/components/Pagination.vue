<template>
  <div class="flex justify-center w-full items-center space-x-4">
    <!-- Previous -->
    <button
      @click="isFirstPage ? 0 : handlePagination(currentPage - 1)"
      :class="isFirstPage ? 'opacity-10 cursor-not-allowed' : ''"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <!-- Numbers -->
    <button @click="handlePagination(page)" v-for="page in data" :key="page">
      <div>{{ page }}</div>
    </button>
    <!-- Forward -->
    <button
      @click="isLastPage ? 0 : handlePagination(currentPage + 1)"
      :class="isLastPage ? 'opacity-10 cursor-not-allowed' : ''"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Number,
    },
  },
  data: () => ({
    currentPage: 1,
  }),
  computed: {
    isFirstPage() {
      return this.currentPage === 1;
    },
    isLastPage() {
      return this.currentPage >= this.data;
    },
  },
  methods: {
    handlePagination(page) {
      this.currentPage = page;
      this.$emit('pagination', page);
    },
  },
};
</script>
