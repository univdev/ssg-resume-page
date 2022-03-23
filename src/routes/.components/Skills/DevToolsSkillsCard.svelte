<style lang="less">
  .skills {
    padding: 16px;
  }
  .list {
    margin-bottom: 16px;
    list-style: none;
    padding: 0;
    .list__title {
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 4px;
    }
    .list__item {
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 4px;
      padding-left: 8px;
    }
  }
</style>

<AspectRatio
  ratio="{150}">
  <Card>
    <SkillsCard
      slot="front"
      skills="{skills}"></SkillsCard>
    <div slot="back">
      <div class="skills">
        <ul class="list">
          <li class="list__title">Serverless &amp; Deploy</li>
          <li class="list__item">Firebase, Firestore, Firebase Hosting</li>
        </ul>
        <ul class="list">
          <li class="list__title">IDE</li>
          <li class="list__item">Visual Studio Code</li>
        </ul>
        <ul class="list">
          <li class="list__title">Version Control</li>
          <li class="list__item">Git, Github, Gitlab</li>
        </ul>
        <ul class="list">
          <li class="list__title">Web &amp; App Design</li>
          <li class="list__item">Adobe XD</li>
          <li class="list__item">Figma</li>
          <li class="list__item">Zeplin</li>
        </ul>
      </div>
    </div>
  </Card>
</AspectRatio>

<script lang="ts">
  import SkillsCard from '../../../components/SkillsCard.svelte';
  import AspectRatio from '../../../components/AspectRatio.svelte';
  import Card from '../../../components/Card.svelte';

  const skills = [
    '/images/skills/tools/figma/figma@2x.png',
    '/images/skills/tools/firebase/firebase@2x.png',
    '/images/skills/tools/vscode/vscode@2x.png',
    '/images/skills/tools/zeplin/zeplin@2x.png',
    '/images/skills/tools/xd/xd@2x.png',
    '/images/skills/tools/git/git@2x.png',
    '/images/skills/tools/github/github@2x.png',
    '/images/skills/tools/gitlab/gitlab@2x.png',
  ];
</script>