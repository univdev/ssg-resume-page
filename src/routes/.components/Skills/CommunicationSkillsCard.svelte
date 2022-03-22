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
    '/images/skills/communicators/moqups/moqups@2x.png',
    '/images/skills/communicators/passwork/passwork@2x.png',
    '/images/skills/communicators/slack/slack@2x.png',
    '/images/skills/communicators/trello/trello@2x.png',
    '/images/skills/communicators/notion/notion@2x.png',
  ];
</script>