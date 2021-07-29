<template>
  <div class="flex">
    <div class="bg1 w-3/5 sm:hidden lg:flex flex justify-end">
      <router-link to="/login">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-green-500 rotate mr-4 mt-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="ro und"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </router-link>
    </div>
    <div class="lg:w-2/5 sm:w-full h-screen bg2 flex items-center flex-col">
      <div class="mt-16 mb-12">
        <img
          class="w-52 select-none"
          src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png"
          alt=""
        />
      </div>
      <div
        class="
          text-white
          font-bold font-mono
          text-xl
          select-none
          mb-8
          capitalize
        "
      >
        Register in Rick and Morty Page
      </div>
      <div class="space-y-12">
        <!-- name -->
        <div class="flex items-center space-x-2">
          <div class="w-1/2">
            <div class="text-white select-none font-mono font-bold uppercase">
              Name:
            </div>
            <input
              class="
                px-2
                py-1
                rounded
                bg-gray-300
                border-2
                focus:outline-none
                focus:border-green-400
                duration-300
              "
              type="text"
            />
          </div>
          <div class="w-1/2">
            <div class="text-white select-none font-mono font-bold uppercase">
              Lastname:
            </div>
            <input
              class="
                px-2
                py-1
                rounded
                bg-gray-300
                border-2
                focus:outline-none
                focus:border-green-400
                duration-300
              "
              type="text"
            />
          </div>
        </div>
        <!-- Email -->
        <div>
          <div class="text-white select-none font-mono font-bold uppercase">
            Email:
          </div>
          <input
            class="
              px-4
              w-full
              py-1
              rounded
              bg-gray-300
              border-2
              focus:outline-none
              focus:border-green-400
              duration-300
            "
            type="text"
          />
        </div>
        <!-- password -->
        <div class="flex items-center space-x-2">
          <div class="w-1/2">
            <div class="text-white select-none font-mono font-bold uppercase">
              Password:
            </div>
            <input
              class="
                px-2
                py-1
                rounded
                bg-gray-300
                border-2
                focus:outline-none
                focus:border-green-400
                duration-300
              "
              type="password"
            />
          </div>
          <div class="w-1/2">
            <div class="text-white select-none font-mono font-bold uppercase">
              Confirm Password:
            </div>
            <input
              class="
                px-2
                py-1
                rounded
                bg-gray-300
                border-2
                focus:outline-none
                focus:border-green-400
                duration-300
              "
              type="password"
            />
          </div>
        </div>
        <!-- Birthday and phonenumber -->
        <div class="flex items-center space-x-2">
          <div class="w-1/2">
            <div class="text-white select-none font-mono font-bold uppercase">
              Birthday:
            </div>
            <input
              class="
                px-2
                py-1
                rounded
                bg-gray-300
                border-2
                focus:outline-none
                focus:border-green-400
                duration-300
              "
              type="date"
            />
          </div>
          <div class="w-1/2">
            <div class="text-white select-none font-mono font-bold uppercase">
              Phone Number:
            </div>
            <input
              class="
                px-2
                py-1
                rounded
                bg-gray-300
                border-2
                focus:outline-none
                focus:border-green-400
                duration-300
              "
              type="text"
            />
          </div>
        </div>
        <!-- Register Button -->
        <router-link to="/login">
          <button
            class="
              mt-12
              w-full
              bg-green-500
              py-2
              rounded
              uppercase
              text-white
              font-bold
              select-none
            "
          >
            Register
          </button>
        </router-link>
        <div
          class="
            flex
            items-center
            flex-col
            text-xs
            justify-end
            mt-24
            text-gray-300
            uppercase
          "
        >
          <div>Todos los derechos no reservados por carloselsrop</div>
          <div>Made with love ♥</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg1 {
  background-image: url("https://www.xtrafondos.com/wallpapers/rick-y-morty-portal-dimensional-6603.jpg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  transform: rotateY(180deg);
}
.rotate {
  transform: rotateY(180deg);
}
.bg2 {
  background-color: #252525;
}
</style>
