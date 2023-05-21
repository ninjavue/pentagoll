<template>
  <div class="header">
    <div class="container">
      <div class="d-center">
        <router-link to="/">
          <img class="header-logo" src="../../assets/img/logo.svg" />
        </router-link>
        <button class="btn-login">
          <router-link to="/admin"> Kirish </router-link>
        </button>
        <button @click="Dark()" class="header-button">
          <img src="../../assets/icons/sun.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    Dark() {
      document.body.classList.toggle("dark");
    },
  },
};
</script>

<style lang="scss">
.btn-login {
  padding: 8px 16px;
  margin-left: auto;
  background: none;
  border: none;
  margin-right: 30px;
  &:hover {
    a {
      color: red;
      text-decoration: underline;
    }
  }
  a {
    color: #ffffff;
    font-size: 18px;
    text-decoration: none;
  }
}
.header {
  margin-bottom: 40px;
  background: #469264;
  padding: 25px 0;
  &-logo {
    padding: 0;
  }
  &-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 50%;
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>