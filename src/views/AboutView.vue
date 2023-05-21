<template>
  <div class="container">
    <div class="about">
      <div class="row">
        <div class="col-9 col-md-12">
          <div class="about-box">
            <span>2 soat oldin.</span>
            <div class="about-title">
              {{ game.title }}
            </div>
            <div class="about-img">
              <img :src="`${game.image}`" alt="" />
            </div>
            <div class="about-text">
              <p>
                {{ game.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-3 mt-120 col-md-12">
          <AboutRight />
          <AboutRight />
        </div>
      </div>
      <NewsBoxs />
    </div>
  </div>
</template>

<script>
import AboutRight from "@/components/AboutRight.vue";
import NewsBoxs from "@/components/home-comp/newsBoxs.vue";
export default {
  name: "HomeView",
  components: { NewsBoxs, AboutRight },
  computed: {
    game() {
      return this.$store.getters.game;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>


<style lang="scss">
.about {
  &-box {
    padding: 10px;
    span {
      font-style: normal;
      font-weight: 500;
      font-size: 22px;
      line-height: 30px;
      color: #333333;
    }
  }
  &-title {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  &-img {
    width: 100%;
    height: 550px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
    border-radius: 15px;
    max-height: 550px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
    }
  }
  &-text {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 45px;
    padding-bottom: 75px;
    margin-top: 40px;
    border-bottom: 1px solid #d2d2d2;
    height: 1000px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@media (max-width: 500px) {
  .about-img {
    height: 300px;
  }
  .about-text {
    height: 100%;
    overflow: hidden;
  }
}
</style>
