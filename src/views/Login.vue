<template>
  <div></div>
  <div class="bg h-screen flex flex-col items-center">
    <div class="mt-28 mb-4 flex flex-col items-center">
      <div class="mb-8">
        <img
          class="w-52 select-none"
          src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png"
          alt=""
        />
      </div>
      <div class="text-black font-bold font-mono text-xl select-none">
        Sign in Rick and Morty Page
      </div>
    </div>
    <div
      class="
        w-80
        h-60
        shadow-xl
        bg1
        border-2 border-gray-300
        rounded-xl
        mb-4
        px-4
      "
    >
      <div class="font-bold text-xs mt-4 pb-1 select-none">
        Username or email address
      </div>
      <input
        class="
          mb-6
          w-full
          py-1
          px-2
          rounded
          border border-gray-300
          focus:border-gray-500
          focus:outline-none
          transition
          duration-300
        "
        type="email"
      />
      <div class="flex justify-between items-center">
        <div class="font-bold text-xs select-none pb-1">Password</div>
        <button class="text-xs text-blue-400 underline select-none">
          forgot password?
        </button>
      </div>
      <input
        class="
          w-full
          py-1
          rounded
          mb-6
          px-2
          border border-gray-300
          focus:outline-none
          focus:border-gray-500
          transition
          duration-300
        "
        type="password"
      />
      <router-link to="/">
        <button
          class="
            w-full
            py-2
            text-white
            bg2
            text-xs
            rounded
            select-none
            font-bold
            uppercase
          "
        >
          Sign in
        </button>
      </router-link>
    </div>
    <div
      class="
        w-80
        bg1
        flex
        justify-around
        items-center
        py-4
        rounded
        border-2 border-gray-300
        shadow-xl
      "
    >
      <div class="font-bold text-sm select-none">Don't have an account?</div>
      <router-link to="/register">
        <button
          class="
            select-none
            text-xs
            border-2 border-gray-500
            py-1
            px-2
            rounded
            transform
            hover:scale-110
            duration-300
            uppercase
            font-bold
            shadow
            bg2
            text-white
          "
        >
          click here!
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.bg {
  width: 100%;
  background-color: #ffffff;
}
.bg1 {
  background-color: #e8e8e8;
}
.bg2 {
  background-color: #2f9022;
}
</style>

<script>
export default {
  created() {
    this.$cookies.set('prueba', 'SHUEREK', Infinity);
  },
};
</script>
