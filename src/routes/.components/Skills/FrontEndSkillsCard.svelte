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
          <li class="list__title">Languages</li>
          <li class="list__item">HTML5, CSS3, Javascript, Typescript</li>
        </ul>
        <ul class="list">
          <li class="list__title">Web</li>
          <li class="list__item">Vue, Nuxt</li>
          <li class="list__item">React, React Redux</li>
        </ul>
        <ul class="list">
          <li class="list__title">Mobile App</li>
          <li class="list__item">React Native, React Native Navigation</li>
        </ul>
        <ul class="list">
          <li class="list__title">Preprocessor</li>
          <li class="list__item">Less</li>
          <li class="list__item">Pug</li>
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
    '/images/skills/front/vue/vue@2x.png',
    '/images/skills/front/typescript/typescript@2x.png',
    '/images/skills/front/html5/html5@2x.png',
    '/images/skills/front/css3/css3@2x.png',
    '/images/skills/front/javascript/javascript@2x.png',
    '/images/skills/front/pug/pug@2x.png',
    '/images/skills/front/less/less@2x.png',
    '/images/skills/front/react/react@2x.png',
  ];
</script>