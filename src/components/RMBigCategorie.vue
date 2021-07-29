<template>
  <div
    class="
      sm:w-full
      md:w-10/12
      lg:w-6/12
      xl:w-3/12
      w-1/3
      border-4 border-blue-400
      card
      sm:cardsm
      rounded-lg
      shadow-xl
      transform
      hover:scale-110
      duration-300
      flex-col flex
    "
    :style="{ backgroundImage: 'url(' + url_image + ')' }"
  >
    <div class="flex justify-center items-center px-4 h-full">
      <router-link :to="`/${path}`">
        <button
          :style="{
            backgroundImage:
              'url(https://i.pinimg.com/originals/5b/53/73/5b537363393dc26c68b566fe482eb32d.png)',
          }"
          class="
            select-none
            button
            uppercase
            px-8
            py-4
            text-center
            font-bold
            rounded-2xl
            font-mono
            text-gray-100
          "
        >
          {{ labelButton }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Label',
    },
    url_image: {
      type: String,
      default: '',
    },
    labelButton: {
      type: String,
      default: 'Label Button',
    },
    path: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.card {
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.cardsm {
  height: 200px;
}

.button {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
