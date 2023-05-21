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
            <form class="p-3" @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Yangilik sarlovhasi</label
                >
                <input
                  type="text"
                  class="form-control"
                  v-model="title"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Argintina jahon chepioni"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Yangilik Matni</label
                >
                <textarea
                  v-model="description"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="mb-3">
                <label htmlFor="fileInput" className="text-start mt-3">
                  Rasmni tanlang:
                  <input
                    type="file"
                    id="fileInput"
                    className="form-control text-start "
                    accept=".jpg, .jpeg, .png"
                    required
                  />
                </label>
              </div>
              <button class="btn" data-bs-dismiss="modal">Close</button>
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
              <th scope="col" class="ps-5">Photo</th>
              <th scope="col">Yanglik</th>
              <th scope="col">Matn</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) of news" :key="item.id">
              <th scope="row">{{ index + 1 }}</th>
              <td class="table-img">
                <img :src="`${item.image}`" alt="" />
              </td>
              <td>{{ item.title.substring(0, 100) }}</td>
              <td>{{ item.description.substring(0, 200) }}</td>
              <td class="d-flex gap-3">
                <button class="admin-btn">
                  <img src="../assets/icons/edit.svg" alt="" />
                  <span class="text-blue">Edit</span>
                </button>
                <button class="admin-btn" @click="gameId(item.id)">
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
      title: "",
      description: "",
      image: "",
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
    onHide() {
      document.querySelector(".admin-left").classList.toggle("dn");
      document.querySelector(".admin-table").classList.toggle("big");
    },
    handleSubmit(event) {
      event.preventDefault();
      const fileInput = document.querySelector("#fileInput");
      const formData = new FormData();
      formData.append("image", fileInput.files[0]);
      formData.append("title", this.title);
      formData.append("description", this.description);
      console.log(formData);
      try {
        axios.post(`${this.url}/news`, formData).then((res) => {
          const data = res.json();
          console.log(data);
        });
      } catch (error) {
        console.log(error);
      }
    },
    gameId(id) {
      this.$store.dispatch("deleteGame", id);
    },
  },
  mounted() {
    this.$store.dispatch("getAllNews");
  },
  components: { AdminMenu },
};
</script>

<style lang="scss">
@import "../assets/css/admin.scss";
</style>