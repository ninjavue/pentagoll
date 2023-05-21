<template>
  <div class="news-image">
    <div class="row">
      <div class="col-12">
        <div class="news-image-box big">
          <img src="../../../assets/img/home1.svg" alt="" />
        </div>
      </div>
      <div class="col-4 col-xl-6">
        <div class="news-image-box">
          <img src="../../../assets/img/home2.svg" alt="" />
        </div>
      </div>
      <div class="col-4 col-xl-6">
        <div class="news-image-box">
          <img src="../../../assets/img/new.svg" alt="" />
        </div>
      </div>
      <div class="col-4 col-xl-6">
        <div class="news-image-box">
          <img src="../../../assets/img/new2.svg" alt="" />
        </div>
      </div>
      <div class="col-4 col-xl-6">
        <div class="news-image-box">
          <img src="../../../assets/img/new3.svg" alt="" />
        </div>
      </div>
      <div class="col-4 col-xl-6">
        <div class="news-image-box">
          <img src="../../../assets/img/new4.svg" alt="" />
        </div>
      </div>
      <div class="col-4 col-xl-6">
        <div class="news-image-box">
          <img src="../../../assets/img/new5.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.news-image {
  &-box {
    width: 100%;
    max-height: 300px;
    padding: 8px;
    &.big {
      max-height: 480px;
    }
    img {
      background-repeat: no-repeat;
      object-fit: contain;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
      border-radius: 10px;
    }
  }
}
</style>