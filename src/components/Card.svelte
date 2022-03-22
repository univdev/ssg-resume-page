<style lang="less">
  .card {
    position: relative;
    width: 100%;
    height: 100%;
    perspective: 700px;
    border: none;
    &:hover {
      .content {
        transform: rotateY(180deg);
      }
      .front {
        z-index: 1;
      }
      .back {
        z-index: 2;
      }
    }
    .content {
      position: relative;
      width: 100%;
      height: 100%;
      transition: .6s all;
      border-radius: 8px;
      border: 1px solid #EEE;
      overflow: hidden;
    }
    .front {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 2;
      transition: .6s all;
    }
    .back {
      position: absolute;
      left: 0;
      top: 0;
      background-color: white;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: .6s all;
      transform: rotateY(180deg);
    }
  }
</style>

<div class="card">
  <div class="content">
    <div class="front">
      <slot name="front"></slot>
    </div>
    <div class="back">
      <slot name="back"></slot>
    </div>
  </div>
</div>

<script lang="ts">
</script>