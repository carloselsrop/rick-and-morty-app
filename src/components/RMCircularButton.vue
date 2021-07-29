<template>
  <button
    :class="bounce == true ? 'animate-bounce' : ''"
    class="
      flex
      font-bold font-mono
      items-center
      select-none
      border border-gray-500
      px-2
      shadow-xl
      transform
      hover:scale-105
      duration-300
      py-1
      rounded-xl
      hover:bg-green-200
    "
  >
    <img class="w-8 h-8" :src="img" alt="icon" />
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    bounce: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
