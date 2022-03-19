<style lang="less">
  .skills-section {
    background-color: #BBE2F2;
    .container {
      padding: 80px 16px;
    }
    .title-row {
      margin-bottom: 24px;
    }
    .title {
      font-size: 32px;
      text-align: center;
      font-family: "Black Han Sans";
    }
  }
</style>

<div class="skills-section">
  <div class="container">
    <div class="row title-row">
      <div class="col-lg-12">
        <div class="title">Skills</div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4">
        <SkillsCard
          title="Front End">
          <FrontEndSkillsCard />
        </SkillsCard>
      </div>
      <div class="col-lg-4">
        <SkillsCard
          title="Dev Tools" />
      </div>
      <div class="col-lg-4">
        <SkillsCard
          title="Communication Tools" />
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import FrontEndSkillsCard from './FrontEndSkillsCard.svelte';
  import SkillsCard from '../../components/SkillsCard.svelte';
</script>