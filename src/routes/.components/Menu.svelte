<style lang="less">
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 9999;
    transition: .6s all;
    pointer-events: none;
    &--active {
      background-color: rgba(0, 0, 0, .2);
      pointer-events: visible;
    }
  }
  .menu {
    position: fixed;
    width: 100%;
    height: 100%;
    left: -100%;
    top: 0;
    max-width: calc(100% - 120px);
    background-color: var(--bs-white);
    z-index: 10000;
    transition: .6s all;
    padding: 0;
    &--active {
      left: 0;
    }
    .menu-list {
      padding: 0;
      list-style: none;
      padding: 16px 0;
      &__item {
        text-align: center;
        font-size: 18px;
        font-family: "Black Han Sans", "Noto Sans KR";
        a {
          width: 100%;
          height: 100%;
          padding: 16px;
          display: block;
          color: var(--bs-dark);
          text-decoration: none;
          transition: .2s;
          &:hover {
            color: var(--bs-blue);
          }
        }
      }
    }
  }
</style>

<div
  class:overlay--active="{visible}"
  class="overlay"
  on:click="{() => visible = false}">
</div>

<nav
  class:menu--active="{visible}"
  class="menu">
  <ul class="menu-list">
    {#each menu as item}
      <li class="menu-list__item">
        <a href="{item.link}">{item.text}</a>
      </li>
    {/each}
  </ul>
</nav>

<script lang="ts">
  export let visible: Boolean = false;
  export let menu: Array<any> = [];
</script>