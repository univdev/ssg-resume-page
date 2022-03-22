<style lang="less">
</style>

<AspectRatio
  ratio="{150}">
  <Card>
    <SkillsCard
      slot="front"
      skills="{skills}"></SkillsCard>
    <div slot="back"></div>
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