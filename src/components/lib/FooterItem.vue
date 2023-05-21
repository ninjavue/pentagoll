<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-9 col-md-12">
          <div class="row">
            <div class="col-3 col-sm-6 col-xl-12">
              <router-link to="/">
                <img src="../../assets/img/logo.svg" alt="" />
              </router-link>
            </div>
            <div class="col-3 col-sm-6 col-xl-12">
              <ul class="footer-menu">
                <li>
                  <router-link to="/"> Main </router-link>
                </li>
                <li>
                  <router-link to="/"> Mach center </router-link>
                </li>
                <li>
                  <router-link to="/"> Football </router-link>
                </li>
                <li>
                  <router-link to="/"> Tennis </router-link>
                  <router-link to="/"> Cybersport </router-link>
                </li>
              </ul>
            </div>
            <div class="col-3 col-sm-6 col-xl-12">
              <ul class="footer-menu">
                <li>
                  <router-link to="/"> Main </router-link>
                </li>
                <li>
                  <router-link to="/"> Mach center </router-link>
                </li>
                <li>
                  <router-link to="/"> Football </router-link>
                </li>
                <li>
                  <router-link to="/"> Tennis </router-link>
                  <router-link to="/"> Cybersport </router-link>
                </li>
              </ul>
            </div>
            <div class="col-3 col-sm-6 col-xl-12">
              <ul class="footer-menu">
                <li>
                  <router-link to="/"> Main </router-link>
                </li>
                <li>
                  <router-link to="/"> Mach center </router-link>
                </li>
                <li>
                  <router-link to="/"> Football </router-link>
                </li>
                <li>
                  <router-link to="/"> Tennis </router-link>
                  <router-link to="/"> Cybersport </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-3 col-md-12">
          <div class="row">
            <div class="col-3 footer-col"></div>
            <a href="/" class="footer-media"
              ><img src="../../assets/icons/tw.svg" alt=""
            /></a>
            <a href="/" class="footer-media"
              ><img src="../../assets/icons/yt.svg" alt=""
            /></a>
            <a href="/" class="footer-media"
              ><img src="../../assets/icons/wk.svg" alt=""
            /></a>
            <a href="/" class="footer-media"
              ><img src="../../assets/icons/sk.svg" alt=""
            /></a>
            <a href="/" class="footer-media"
              ><img src="../../assets/icons/in.svg" alt=""
            /></a>
            <a href="/" class="footer-media"
              ><img src="../../assets/icons/fc.svg" alt=""
            /></a>
            <a href="/" class="footer-media">
              <img src="../../assets/icons/tg.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="footer-text">© 2023 Footboll. All rights reserved</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  padding-top: 50px;
  background: #469264;
  &-text {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    text-align: center;
    padding: 38px;
    color: #ffffff;
    border-top: 1px solid #ffffff;
    margin-top: 40px;
  }
  &-media {
    width: 25%;
    img {
      padding: 15px;
    }
    img:hover {
      transform: scale(1.08);
    }
  }
  &-menu {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    margin-top: 20px;
    li {
      margin-bottom: 25px;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 25px;
      a {
        color: #ffffff;
        &:hover {
          color: red;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .footer-media {
    width: 14%;
  }
  .row .footer-col.footer-col {
    width: 0;
  }
}
@media (max-width: 500px) {
  .footer-media {
    width: 25%;
  }
  .row .footer-col.footer-col {
    width: 0;
  }
}
</style>