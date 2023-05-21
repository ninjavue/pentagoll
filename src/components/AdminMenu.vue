<template>
  <div class="flex-column flex-shrink-0 p-3 bg-light admin-left">
    <a
      href="/"
      class="align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none pt-100"
    >
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-2 mt-50">Admin Panel</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" v-on:click="btnAdmin = 'new'">
        <router-link
          to="/admin"
          :class="`nav-link link-dark ${btnAdmin == 'new' ? 'active' : ''}`"
          aria-current="page"
        >
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#home"></use>
          </svg>
          Yangiliklar
        </router-link>
      </li>
      <li v-on:click="btnAdmin = 'match'">
        <router-link
          to="/admin/match"
          :class="`nav-link link-dark ${btnAdmin == 'match' ? 'active' : ''}`"
        >
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          Mavsum
        </router-link>
      </li>
      <li v-on:click="btnAdmin = 'seasson'">
        <router-link
          to="/admin/subject"
          :class="`nav-link link-dark ${btnAdmin == 'seasson' ? 'active' : ''}`"
        >
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#table"></use>
          </svg>
          Matchlar
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnAdmin: "new",
    };
  },
};
</script>

<style>
</style>