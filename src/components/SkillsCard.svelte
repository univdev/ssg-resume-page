<style lang="less">
  .skills-card {
    width: 100%;
    height: 100%;
    :global(canvas) {
      width: 100%;
      height: 100%;
    }
  }
</style>

<div
  bind:this="{canvas}"
  class="skills-card"></div>

<script lang="ts">
  import Matter from 'matter-js';
  import { onMount, tick } from 'svelte';
  export let skills: Array<String> = [];
  export let width: number = 800;
  export let height: number = 1200;

  const {
    Engine,
    Render,
    Runner,
    Bodies,
    Composite,
  } = Matter;

  let canvas = null;

  const getWalls = () => {
    const options = {
      isStatic: true,
      render: {
        fillStyle: '#FFFFFF',
      },
    };
    return [
      Bodies.rectangle(0, height / 2, 10, height * 3, options),
      Bodies.rectangle(width, height / 2, 10, height * 3, options),
      Bodies.rectangle(width / 2, height, width, 20, options),
    ];
  };
  const getBalls = (balls) => {
    return [...balls].map((ball, index) => {
      return Bodies.circle(width / 2, -650 * (index + 1), 150, {
        render: {
          sprite: {
            texture: ball,
            xScale: .6,
            yScale: .6,
          },
        },
      });
    });
  };
  const onRender = () => {
    const engine = Engine.create();
    const render = Render.create({
      element: canvas,
      engine: engine,
      options: {
        width,
        height,
        background: '#FFF',
        wireframes: false,
      },
    });
    const balls = getBalls(skills);
    const walls = getWalls();
    Composite.add(engine.world, [...walls]);
    Composite.add(engine.world, [...balls]);
    const runner = Runner.create();
    Render.run(render);
    Runner.run(runner, engine);
  };

  onMount(async () => {
    await tick();
    onRender();
  });
</script>