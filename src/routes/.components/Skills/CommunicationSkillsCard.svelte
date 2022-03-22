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
          <li class="list__title">Product</li>
          <li class="list__item">Moqups</li>
        </ul>
        <ul class="list">
          <li class="list__title">Wiki &amp; Teamwork</li>
          <li class="list__item">Notion</li>
          <li class="list__item">Trello</li>
        </ul>
        <ul class="list">
          <li class="list__title">Messenger</li>
          <li class="list__item">Slack</li>
        </ul>
        <ul class="list">
          <li class="list__title">Security &amp; Sharing</li>
          <li class="list__item">Passwork</li>
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
    '/images/skills/communicators/moqups/moqups@2x.png',
    '/images/skills/communicators/passwork/passwork@2x.png',
    '/images/skills/communicators/slack/slack@2x.png',
    '/images/skills/communicators/trello/trello@2x.png',
    '/images/skills/communicators/notion/notion@2x.png',
  ];
</script>