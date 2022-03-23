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
    .skills {
      .skills__item {
        @media screen and (max-width: 768px) {
          padding-top: 16px;
          padding-bottom: 16px;
        }
      }
    }
  }
</style>

<div class="skills-section" id="skills">
  <div class="container">
    <div class="row title-row">
      <div class="col-lg-12">
        <div class="title">Skills</div>
      </div>
    </div>
    <div class="row skills">
      <div class="col-lg-4 skills__item">
        <SkillsCard
          title="Front End">
          <FrontEndSkillsCard />
        </SkillsCard>
      </div>
      <div class="col-lg-4 skills__item">
        <SkillsCard
          title="Dev Tools">
          <DevToolsSkillsCard />
        </SkillsCard>
      </div>
      <div class="col-lg-4 skills__item">
        <SkillsCard
          title="Communication Tools">
          <CommunicationSkillsCard />
        </SkillsCard>
      </div>
    </div>
  </div>
</div>

<script lang="ts">
  import FrontEndSkillsCard from './FrontEndSkillsCard.svelte';
  import CommunicationSkillsCard from './CommunicationSkillsCard.svelte';
  import DevToolsSkillsCard from './DevToolsSkillsCard.svelte';
  import SkillsCard from './SkillsCard.svelte';
</script>