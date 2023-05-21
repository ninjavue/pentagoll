<template>
  <div class="news">
    <div class="row">
      <div class="col-9 col-md-12">
        <NewsImage />
      </div>
      <div class="col-3 col-md-12">
        <NewsTable />
      </div>
    </div>
  </div>
</template>

<script>
import NewsImage from "./news/newsImage.vue";
import NewsTable from "./news/newsTable.vue";

export default {
  components: { NewsImage, NewsTable },
};
</script>

<style lang="scss">
.news {
  margin-top: 50px;
}
</style>