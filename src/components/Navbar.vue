<template>
  <div class="w-full flex items-center py-4 px-16">
    <div class="w-6/12">
      <router-link to="/">
        <button>
          <img
            class="w-40 h-12 select-none"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
            alt=""
          />
        </button>
      </router-link>
    </div>
    <div class="w-6/12 flex justify-end">
      <div class="space-x-8 font-mono font-semibold text-sm">
        <a
          href="https://github.com/carloselsrop?tab=repositories"
          target="_blank"
        >
          <RMCircularButton
            :img="'https://cdn.iconscout.com/icon/free/png-256/github-3215409-2673827.png'"
            label="@carloselsrop"
            :bounce="true"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import RMCircularButton from './RMCircularButton.vue';

export default {
  components: {
    RMCircularButton,
  },
};
</script>
