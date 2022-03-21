<style lang="less">
  .skills-card {
    border-radius: 8px;
    background-color: var(--bs-white);
    padding: 16px;
    .skills-card__title {
      font-size: 18px;
      font-family: "Black Han Sans";
      margin-bottom: 16px;
      text-align: center;
    }
  }
</style>

<div class="skills-card">
  <div class="skills-card__title">{title}</div>
  <div class="skills-card__content">
    <slot></slot>
  </div>
</div>

<script lang="ts">
  export let title = '';
</script>