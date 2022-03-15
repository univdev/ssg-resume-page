<style lang="less">
  .front-end-skills {
    width: 100%;
    height: 100%;
    :global(canvas) {
      width: 100%;
      height: 100%;
    }
  }
</style>

<AspectRatio ratio="150">
  <div class="front-end-skills">
  
  </div>
</AspectRatio>

<script lang="ts">
  import AspectRatio from '../../components/AspectRatio.svelte';
  import Matter from 'matter-js';
  import { onMount } from 'svelte';

  let engine = null;

  const drawCanvas = () => {
    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
    } = Matter;
    engine = Engine.create();
    const target = window.document.querySelector('.front-end-skills');
    const width = 300;
    const height = 450;
    const render = Render.create({
        element: target,
        engine: engine,
        options: {
          width,
          height,
          background: '#FFF',
          wireframes: false,
        },
    });

    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: '#FFF',
      },
    };
    const vueOptions = {
      render: {
        sprite: {
          texture: '/Vue.png',
          xScale: .15,
          yScale: .15,
        },
      },
    };
    const reactOptions = {
      render: {
        sprite: {
          texture: '/react.png',
          xScale: .1,
          yScale: .1,
        },
      },
    };
    const vue = Bodies.circle(width / 2, 0, 30, vueOptions);
    const react = Bodies.circle(width / 2, 0, 30, reactOptions);
    const leftWall = Bodies.rectangle(5, height / 2, 10, height, wallOptions);
    const rightWall = Bodies.rectangle(width, height / 2, 10, height, wallOptions);
    const ground = Bodies.rectangle(width / 2, height - 10, width, 20, wallOptions);
    const walls = [leftWall, rightWall, ground];

    Composite.add(engine.world, [vue, react, ...walls]);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
  };

  onMount(async () => {
    drawCanvas();
  });
</script>