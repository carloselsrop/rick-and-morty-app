<template>
  <div>
    <Navbar />
    <div class="back flex justify-center py-16 px-16">
      <RMBigCategorie
        :url_image="'https://www.xtrafondos.com/wallpapers/vertical/todos-los-personajes-de-rick-y-morty-5642.jpg'"
        labelButton="characters"
        :path="'characters'"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import RMBigCategorie from '../components/RMBigCategorie.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    RMBigCategorie,
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.back {
  background-image: url("https://wallpaperaccess.com/full/401096.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
</style>
