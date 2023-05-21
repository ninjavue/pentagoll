<template>
  <div class="news-table">
    <div class="news-table-title">Jadval</div>
    <select name="" id="" v-model="selectedItemId">
      <option v-for="item of infos" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th></th>
          <th>Команда</th>
          <th>И</th>
          <th>O</th>
        </tr>
      </thead>
      <tbody v-for="(list, index) of infoId" :key="list.id">
        <tr>
          <td>{{ index + 1 }}</td>
          <td>
            <img :src="`${list.team.image}`" alt="" />
          </td>
          <td>{{ list.team.name }}</td>
          <td>{{ list.points }}</td>
          <td>{{ list.currentTur }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedItemId: "bb9f3d3e-6bc0-4dc3-bd3f-bc968cc4e258",
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
  },
  methods: {
    submit(itemId) {
      this.$store.dispatch("getCategory", itemId);
    },
  },
  watch: {
    selectedItemId(newValue) {
      this.submit(newValue);
    },
  },
  mounted() {
    this.$store.dispatch("getAllInfo");
    this.$store.dispatch("getCategory", "7f9c5df2-80bc-4d2b-bc03-d5bf5ba7b6ff");
  },
};
</script>

<style lang="scss">
.news-table {
  background: #f4f5f7;
  border-radius: 10px;
  padding: 20px 5px;
  margin-top: 8px;
  margin-left: 10px;
  max-height: 800px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &-title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #000000;
  }
  & > select {
    outline: none;
    width: 100%;
    background: #ffffff;
    border-radius: 6px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    border: none;
    padding: 12px;
    margin-top: 25px;
    margin-bottom: 20px;
    cursor: pointer;
    option {
      font-size: 16px;
      font-weight: 400;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    thead {
      th {
        &:last-child {
          padding: 0 10px;
        }
      }
    }
    tbody {
      &:nth-child(2n) {
        padding-left: 20px;
        background: #ffffff;
        border-radius: 6px;
        overflow: hidden;
      }
      tr {
        td {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 25px;
          padding: 13px 0;
          &:last-child {
            padding: 0 10px;
          }
          img {
            height: 30px;
            width: 30px;
            border-radius: 50%;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>