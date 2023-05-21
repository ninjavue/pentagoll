<template>
  <HeaderItem />
  <main>
    <router-view />
  </main>
  <FooterItem />
</template>

<script>
import FooterItem from "./components/lib/FooterItem.vue";
import HeaderItem from "./components/lib/HeaderItem.vue";
export default {
  components: {
    HeaderItem,
    FooterItem,
  },
};
</script>

<style lang="scss">
@import "./assets/css/helper.scss";
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap");
body {
  font-family: "Manrope";
  color: #000000;
  transition: 0.5s;
}
</style>
