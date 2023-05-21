<template>
  <div class="admin">
    <AdminMenu />
    <div class="admin-table">
      <div class="d-flex mb-70">
        <button class="hum" @click="onHide">
          <img src="../assets/icons/list.svg" alt="" />
        </button>
        <button
          type="button"
          class="btn btn-primary ms-auto add"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Yangilik kiritish
        </button>
      </div>

      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <form class="p-3" @submit.prevent="onSubmit">
              <div class="mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="selected"
                  @change="submit(selected)"
                >
                  <option value="" selected>Chempionatni tanlang</option>
                  <option v-for="item of infos" :key="item.id" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="post.home"
                >
                  <option
                    v-for="item of infoId"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.team.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <div class="d-flex gap-3">
                  <div class="w-50">
                    <input
                      type="number"
                      v-model="post.homeGoal"
                      id="fileInput"
                      className="form-control text-start "
                    />
                  </div>
                  <div class="w-50">
                    <input
                      type="number"
                      v-model="post.awayGoal"
                      id="fileInput"
                      className="form-control text-start "
                    />
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="post.away"
                >
                  <option
                    v-for="item of infoId"
                    :key="item.id"
                    :value="item.id"
                  >
                    {{ item.team.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <div class="w-50">
                  <label htmlFor="fileInput" className="text-start mt-3 w-100">
                    Boshlanish vaqti
                    <input
                      type="date"
                      class="form-control w-100"
                      v-model="post.startTime"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Qo'shish
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="info-head">
          <button
            v-for="(info, index) of infos"
            :key="info.id"
            @click="
              () => {
                btnSub = index;
                sub(info.id);
              }
            "
            :class="`btn ${btnSub == index ? 'active' : ''}`"
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
    </div>
  </div>
</template>
  
<script>
import AdminMenu from "@/components/AdminMenu.vue";
import axios from "axios";
export default {
  data() {
    return {
      btnSub: 0,
      selected: "",
      post: {
        home: "",
        away: "",
        startTime: "",
        homeGoal: "",
        awayGoal: "",
      },
    };
  },
  computed: {
    url() {
      return this.$store.getters.url;
    },
    infos() {
      return this.$store.getters.infos;
    },
    infoId() {
      return this.$store.getters.infoId;
    },
    games() {
      return this.$store.getters.games;
    },
  },
  methods: {
    sub(id) {
      console.log(id);
      this.$store.dispatch("getAllGame", id);
    },
    onHide() {
      document.querySelector(".admin-left").classList.toggle("dn");
      document.querySelector(".admin-table").classList.toggle("big");
    },
    submit(itemId) {
      console.log(itemId);
      this.$store.dispatch("getCategory", itemId);
    },
    onSubmit() {
      axios
        .post(`http://18.181.217.30:8080/api/v1/matches`, this.post)
        .then((res) => {
          console.log(res);
        });
    },
  },
  mounted() {
    this.$store.dispatch("getAllInfo");
    this.$store.dispatch("getAllGame", "7f9c5df2-80bc-4d2b-bc03-d5bf5ba7b6ff");
  },
  components: { AdminMenu },
};
</script>
  
<style lang="scss">
@import "../assets/css/admin.scss";
</style>