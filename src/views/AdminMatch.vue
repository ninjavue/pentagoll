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
          class="btn btn-primary ms-auto"
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
            <form class="p-3" @submit.prevent="matchSubmit">
              <div class="mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="post.ligaId"
                >
                  <option value="" selected>Chempionatni tanlang</option>
                  <option v-for="item of infos" :key="item.id" :value="item.id">
                    {{ item.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Sana / vaqt</label
                >
                <div class="d-flex gap-3">
                  <div class="w-50">
                    <label>
                      Boshlash yili
                      <input
                        type="number"
                        class="form-control"
                        v-model="post.startTime"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="2022"
                      />
                    </label>
                  </div>
                  <div class="w-50">
                    <label name="" id="">
                      Tugash yili
                      <input
                        type="number"
                        class="form-control"
                        v-model="post.endTime"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="2024"
                      />
                    </label>
                  </div>
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
      <div class="scroll-x">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">№</th>
              <th scope="col">Rasm</th>
              <th scope="col">Seasson</th>
              <th scope="col">Boshlandi</th>
              <th scope="col">Tugadi</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) of matchs" :key="item.id">
              <th scope="row">{{ i + 1 }}</th>
              <td class="table-img small">
                <img :src="`${item.liga.image}`" alt="" />
              </td>
              <td class="w-40">{{ item.liga.name }}</td>
              <td>{{ item.startTime }}</td>
              <td>{{ item.endTime }}</td>
              <td class="d-flex gap-3">
                <button class="admin-btn">
                  <img src="../assets/icons/edit.svg" alt="" />
                  <span class="text-blue">Edit</span>
                </button>
                <button class="admin-btn">
                  <img src="../assets/icons/delete.svg" alt="" />
                  <span class="text-red"> Delete</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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
      post: {
        ligaId: "",
        startTime: "",
        endTime: "",
      },
    };
  },
  components: {
    AdminMenu,
  },
  computed: {
    url() {
      return this.$store.getters.url;
    },
    infos() {
      return this.$store.getters.infos;
    },
    matchs() {
      return this.$store.getters.matchs;
    },
  },
  methods: {
    onHide() {
      document.querySelector(".admin-left").classList.toggle("dn");
      document.querySelector(".admin-table").classList.toggle("big");
    },
    matchSubmit() {
      console.log(this.post);
      axios.post(`http://18.181.217.30:8080/api/v1/seasson`, this.post);
    },
  },
  mounted() {
    this.$store.dispatch("getAllSeasson");
    this.$store.dispatch("getAllInfo");
  },
};
</script>
  
<style lang="scss">
@import "../assets/css/admin.scss";
</style>