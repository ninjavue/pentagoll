<template>
  <div class="home">
    <div class="container">
      <InfoItem />
      <InfoItem />
      <NewsItem />
      <NewsBoxs />
    </div>
  </div>
</template>

<script>
import InfoItem from "@/components/home-comp/InfoItem.vue";
import NewsItem from "@/components/home-comp/NewsItem.vue";
import NewsBoxs from "@/components/home-comp/newsBoxs.vue";

export default {
  name: "HomeView",
  components: { InfoItem, NewsItem, NewsBoxs },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
