<template>
  <div class="info">
    <div class="info-head">
      <button
        v-for="(info, index) of infos"
        :key="info.id"
        @click="
          () => {
            btnClass = index;
            submit(info.id);
          }
        "
        :class="`btn ${btnClass == index ? 'active' : ''}`"
      >
        <!-- https://cdn.dribbble.com/users/928104/screenshots/2216851/animation.gif -->
        <span>
          <img
            :src="`${info.image
              .split([`http://localhost:8080`])
              .join([`http://18.181.217.30:8080/`])}`"
            alt=""
          />
        </span>
        {{ info.name }}
      </button>
    </div>
    <div class="info-body">
      <div class="info-row">
        <div
          class="col-3 col-md-4 col-sm-6 col-xl-12"
          v-for="game of games"
          :key="game.id"
        >
          <div class="info-box">
            <div class="info-box-title">
              <img :src="`${game.homeImage}`" alt="" />
              {{ game.homeTeam }}
            </div>
            <div class="info-box-score">
              {{ game.homeGoal }}:{{ game.awayGoal }}
            </div>
            <div class="info-box-title">
              <img :src="`${game.awayImage}`" alt="" />
              {{ game.awayTeam }}
            </div>
            <span class="info-date">11.11.2021 23:59</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnClass: 0,
    };
  },
  computed: {
    url() {
      return this.$store.getters.url;
    },
    infos() {
      return this.$store.getters.infos;
    },
    games() {
      return this.$store.getters.games;
    },
  },
  methods: {
    submit(id) {
      console.log(id);
      this.$store.dispatch("getAllGame", id);
    },
  },
  mounted() {
    this.$store.dispatch("getAllInfo");
    this.$store.dispatch("getAllGame", "7f9c5df2-80bc-4d2b-bc03-d5bf5ba7b6ff");
  },
};
</script>

<style lang="scss">
.info {
  margin-top: 40px;
  &-row {
    display: flex;
    flex-wrap: wrap;
  }
  &-box {
    background: #f4f5f7;
    border-radius: 10px 10px 10px 0px;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13x;
    margin: 5px;
    line-height: 19px;
    gap: 5px;
    position: relative;
    margin-top: 28px;
    margin-bottom: 30px;
    & > span {
      position: absolute;
      left: 0;
      bottom: -25px;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      background: #ffffff;
      border: 1px solid #f4f5f7;
      padding: 5px 13px;
      border-radius: 0px 0px 10px 10px;
      &.info-date-dark {
        border-color: black;
        background: #000;
      }
    }
    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;

      img {
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        object-fit: contain;
        margin-right: 5px;
      }
    }
  }
  &-head {
    min-width: 100%;
    background: #dae9e0;
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    button {
      padding: 11px 13px;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #777777;
      display: flex;
      justify-content: center;
      border-radius: 10px;
      align-items: center;
      background: none;
      border: none;
      &:hover,
      &.active {
        background: #469264;
        color: #fff;
      }
      span {
        width: 28px;
        height: 28px;
        background: #fff;
        border-radius: 50%;
        margin-right: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .info-head button {
    width: 50%;
    &:first-child {
      width: 100%;
    }
  }
}
</style>