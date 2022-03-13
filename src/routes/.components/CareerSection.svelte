<style lang="less">
  .career-section {
    background-color: #EFEFEF;
    .container {
      padding: 60px 16px;
    }
    .title {
      text-align: center;
      font-size: 36px;
      font-family: "Black Han Sans";
      margin-bottom: 48px;
    }
    .content {
      display: flex;
      justify-content: center;
    }
    :global(.career-item) {
      margin: auto;
    }
  }
</style>

<section class="career-section">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="title">Career</div>
      </div>
    </div>
    <div class="row">
      <div class="content col-md-12">
        <CareerItem
          class="career-item"
          name="스타셸 스튜디오"
          startDate="2018-09-15"
          endDate="2021-07-16 (+ 프리랜서 4개월)"
          role="프론트엔드 엔지니어 / 엔지니어링 매니저"
          image="{StarshellLogo}"
          logoBackgroundColor="#000"/>
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  import CareerItem from '../../components/CareerItem.svelte';
  import StarshellLogo from 'images/starshell-logo.png';
</script>