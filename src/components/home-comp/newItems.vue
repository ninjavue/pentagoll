<template>
  <div class="new-item">
    <div class="new-item-title">Yangiliklar</div>
    <div class="row">
      <div
        class="col-3 col-md-4 col-sm-6 col-xl-12"
        v-for="(item, index) of news"
        :key="item.id"
      >
        <div class="new-item-box" v-if="index <= count" @click="subId(item.id)">
          <div class="new-item-img">
            <img :src="`${item.image}`" alt="" />
          </div>
          <p class="mt-10 mb-10" style="min-height: 60px; overflow: hidden">
            <router-link to="/about" class="news-item-title">
              {{ item.title.substring(0, 35) }}
            </router-link>
          </p>
          <p style="min-height: 60px; overflow: hidden">
            <router-link to="/about" class="new-item-text">
              {{ item.description.substring(0, 50) }}
            </router-link>
          </p>
          <span>12.05.2021 12:54</span>
        </div>
      </div>
    </div>
    <button class="new-item-button" @click="count += 8">
      Barchasi ko’rish
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 7,
    };
  },
  computed: {
    url() {
      return this.$store.getters.url;
    },
    news() {
      return this.$store.getters.news;
    },
  },
  methods: {
    subId(id) {
      this.$store.dispatch("getGame", id);
    },
  },
  mounted() {
    this.$store.dispatch("getAllNews");
  },
};
</script>

<style lang="scss">
.news-item {
  &-title {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
    margin-top: 10px;
    min-height: 60px;
    overflow: hidden;
  }
}
.new-item {
  &-button {
    padding: 21px;
    font-size: 24px;
    font-weight: 700;
    width: 100%;
    background: #eaeaea;
    border-radius: 10px;
    margin-top: 30px;
    &:hover {
      background: #469264;
      color: #fff;
    }
  }
  &-title {
    background: #469264;
    border-radius: 10px;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    padding: 21px 30px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  &-box {
    width: 95%;
    background: #f4f5f7;
    border-radius: 10px;
    overflow: hidden;
    padding: 15px;
    margin: 10px;
    max-height: 380px;
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      text-align: right;
    }
  }
  &-img {
    width: 100%;
    min-height: 180px;
    max-height: 180px;
    overflow: hidden;
    border-radius: 10px;
    img {
      width: 100%;
      min-height: 180px;
      border-radius: 10px;
      overflow: hidden;
      background-repeat: no-repeat;
      // object-fit: cover;
      // background-size: contain;
    }
  }

  &-text {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    margin: 16px 0;
    min-height: 60px;
    overflow: hidden;
  }
}

@media (max-width: 900px) {
  .new-item-box {
    max-height: 379px;
  }
}
</style>