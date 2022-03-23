<style lang="less">
  .time-line {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    .year {
      font-size: 32px;
      line-height: 38px;
      font-family: 'Black Han Sans', 'Noto Sans KR';
    }
    .list {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      list-style: none;
      padding: 0;
      margin-top: 16px;
      &::before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #FFF;
      }
      &::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 100%;
        top: 0;
        right: 50%;
        border-radius: 5px;
        background-color: white;
        transform: translateX(50%);
      }
      .list__item {
        position: relative;
        z-index: 2;
        max-width: 780px;
        width: 100%;
        padding: 16px;
        background-color: #FFF;
        border-radius: 8px;
        margin-top: 24px;
        color: var(--bs-dark);
        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        .date {
          color: var(--bs-gray-500);
          margin-bottom: 16px;
        }
        .descriptions {
          list-style: none;
          padding-left: 16px;
          border-left: 2px solid #EEE;
          .description {
            & + .description {
              margin-top: 8px;
            }
          }
        }
      }
    }
  }
</style>

<div class="time-line">
  <div class="year">{year}</div>
  <ul class="list">
    {#each items as item}
      <li class="list__item">
        <div class="title">{item.title}</div>
        {#if item.date}<div class="date">{item.date}</div>{/if}
        <ul class="descriptions">
          {#each item.descriptions as description}
            <li class="description">{description}</li>
          {/each}
        </ul>
      </li>
    {/each}
  </ul>
</div>

<script lang="ts" context="module">
  export type History = {
    title: String,
    descriptions: Array<String>,
    date?: String,
  };
</script>

<script lang="ts">
  export let year;
  export let items: Array<any> = [];
</script>