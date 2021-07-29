<template>
  <div>
    <!-- SEARCH -->
    <div class="flex justify-center mb-8">
      <div class="search-box">
        <button class="btn-search flex items-center justify-center">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <input
          v-model="search"
          @keydown.enter="handleSearch"
          type="text"
          class="input-search"
          placeholder="Busca un personaje..."
        />
      </div>
    </div>
    <!-- CARDS -->
    <div class="flex w-full flex-row flex-wrap">
      <!-- card-inner -->
      <div class="flex flex-row w-full flex-wrap">
        <!-- card -->
        <div
          v-for="char in characters"
          :key="char"
          class="
            flex flex-col
            mr-12
            hover-img
            bg
            w-1/6
            transform
            hover:scale-110
            duration-300
            h-60
            px-4
            mb-8
            rounded-xl
          "
          :style="{ backgroundImage: 'url(' + char.image + ')' }"
        >
          <figcaption class="space-y-2">
            <div class="text-xl select-none">{{ char.name }}</div>
            <div class="flex items-center">
              <div
                :class="
                  char.status === 'Alive'
                    ? 'bg-green-500 w-2 h-2 mr-2 rounded-full'
                    : 'bg-red-500 w-2 h-2 mr-2 rounded-full'
                "
              ></div>
              <div class="text-xs select-none">{{ char.status }}</div>
            </div>
            <div class="flex items-center">
              <div v-if="char.species === 'Human'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2
                  2 0 002 2 2 2 0 012 2v2.945M8
                  3.935V5.5A2.5 2.5 0 0010.5
                  8h.5a2 2 0 012 2 2 2 0 104
                  0 2 2 0 012-2h1.064M15 20.488V18a2
                  2 0 012-2h3.064M21 12a9 9
                  0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div v-else-if="char.species === 'Alien'">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9
                  9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9
                  9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0
                  18c-1.657 0-3-4.03-3-9s1.343-9
                  3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div class="text-xs select-none">{{ char.species }}</div>
            </div>
            <div class="text-xs select-none">{{ char.gender }}</div>
            <div class="text-xs select-none">{{ char.location.name }}</div>
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    characters: {
      type: [],
    },
  },
  data: () => ({
    isOpen: false,
    search: '',
  }),

  methods: {
    handleSearch() {
      this.$emit('search', this.search);
    },
  },
};
</script>

<style scoped>
.bg {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.hover-img {
  background-color: #000;
  color: #fff;
  display: inline-block;
  overflow: hidden;
  position: relative;
  text-align: center;
}

.hover-img * {
  box-sizing: border-box;
  transition: all 0.45s ease;
}

.hover-img:before,
.hover-img:after {
  background-color: rgba(0, 0, 0, 0.5);
  border-top: 32px solid rgba(0, 0, 0, 0.5);
  border-bottom: 32px solid rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  transition: all 0.3s ease;
  z-index: 1;
  opacity: 0;
  transform: scaleY(2);
}

.hover-img img {
  vertical-align: top;
  max-width: 100%;
  backface-visibility: hidden;
}

.hover-img figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1em;
  opacity: 0;
  z-index: 2;
  transition-delay: 0.1s;
  font-size: 24px;
  font-family: sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.hover-img:hover:before,
.hover-img:hover:after {
  transform: scale(1);
  opacity: 1;
}

.hover-img:hover > img {
  opacity: 0.7;
}

.hover-img:hover figcaption {
  opacity: 1;
}

.search-box {
  width: fit-content;
  height: fit-content;
  position: relative;
}

.input-search {
  height: 50px;
  width: 50px;
  border-style: none;
  padding: 10px;
  font-size: 18px;
  letter-spacing: 2px;
  outline: none;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;
  background-color: #22a6b3;
  padding-right: 40px;
  color: #010303;
}
.input-search::placeholder {
  color: rgb(255, 255, 255);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 500;
}
.btn-search {
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color: #ffffff;
  background-color: transparent;
  pointer-events: painted;
}
.btn-search:focus ~ .input-search {
  width: 300px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
.input-search:focus {
  width: 300px;
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
</style>
