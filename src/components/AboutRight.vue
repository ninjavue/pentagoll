<template>
  <div class="about-right">
    <div class="about-right-title">Asosiy</div>
    <div class="about-right-box">
      <div class="box-text">
        Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
      </div>
      <span>12.05.2021 12:54</span>
    </div>
    <div class="about-right-box">
      <div class="box-text">
        Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
      </div>
      <span>12.05.2021 12:54</span>
    </div>
    <div class="about-right-box">
      <div class="box-text">
        Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
      </div>
      <span>12.05.2021 12:54</span>
    </div>
    <div class="about-right-box">
      <div class="box-text">
        Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
      </div>
      <span>12.05.2021 12:54</span>
    </div>
    <div class="about-right-box">
      <div class="box-text">
        Messi Goal.com saytida yilning eng yaxshi futbolchisi deb topildi
      </div>
      <span>12.05.2021 12:54</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-right {
  max-height: 700px;
  overflow-y: scroll;
  margin-top: 70px;
  background: #f4f5f7;
  border-radius: 10px;
  padding: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  &-title {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
  }
  &-box {
    border-bottom: 1px solid #d2d2d2;
    &:last-child {
      border: none;
    }
    .box-text {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 27px;
      margin-top: 25px;
      margin-bottom: 20px;
    }
    span {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      text-align: right;
      color: #898989;
      margin-bottom: 15px;
    }
  }
}
</style>