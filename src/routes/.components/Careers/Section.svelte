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
    .career-item-container {
      display: flex;
      align-items: center;
      & + .career-item-container {
        margin-top: 48px;
      }
      :global(.career-item) {
        margin: auto;
      }
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
      <div class="career-item-container col-md-12">
        <Starshell />
      </div>
      <div class="career-item-container col-md-12">
        <DangamSoft />
      </div>
    </div>
  </div>
</section>

<script lang="ts">
  import Starshell from './Starshell.svelte';
  import DangamSoft from './DangamSoft.svelte';
</script>