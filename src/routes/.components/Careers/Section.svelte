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
    .button-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      padding-left: 16px;
      padding-right: 16px;
      .resume-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 40px;
        padding-right: 40px;
        height: 60px;
        text-decoration: none;
        border-radius: 40px;
        color: inherit;
        background-color: var(--bs-dark);
        color: var(--bs-white);
        font-size: 21px;
        line-height: 24px;
        .resume-button__text {
          display: inline-block;
          margin-left: 8px;
        }
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
    <div class="button-container">
      <a
        class="resume-button"
        href="https://univdev.notion.site/0ff97a5f243b42c697c3a1a7926f36a5"
        target="_blank">
        <i class="fas fa-file"></i>
        <span class="resume-button__text">
          경력기술서
        </span>
      </a>
    </div>
  </div>
</section>

<script lang="ts">
  import Starshell from './Starshell.svelte';
  import DangamSoft from './DangamSoft.svelte';
</script>