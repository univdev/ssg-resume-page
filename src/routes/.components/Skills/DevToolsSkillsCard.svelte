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
    '/images/skills/tools/figma/figma@2x.png',
    '/images/skills/tools/firebase/firebase@2x.png',
    '/images/skills/tools/vscode/vscode@2x.png',
    '/images/skills/tools/zeplin/zeplin@2x.png',
    '/images/skills/tools/git/git@2x.png',
    '/images/skills/tools/github/github@2x.png',
  ];
</script>