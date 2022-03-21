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
  import AspectRatio from '../../../components/AspectRatio.svelte';
  import Typescript from 'images/skills/front/typescript/typescript@2x.png';
  import Vue from 'images/skills/front/vue/vue@2x.png';
  import HTML5 from 'images/skills/front/html5/html5@2x.png';
  import CSS3 from 'images/skills/front/css3/css3@2x.png';
  import Javascript from 'images/skills/front/javascript/javascript@2x.png';
  import Pug from 'images/skills/front/pug/pug@2x.png';
  import Less from 'images/skills/front/less/less@2x.png';
  import React from 'images/skills/front/react/react@2x.png';
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
    const width = 800;
    const height = 1200;
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
        fillStyle: '#FFFFFF',
      },
    };
    const balls = [
      Typescript, Vue, HTML5, Javascript,
      CSS3, Pug, Less, React,
    ].map((material) => {
      return Bodies.circle(
        width / 2, -100, 150,
        {
          render: {
            sprite: {
              texture: material,
              xScale: .6,
              yScale: .6,
            },
          },
        });
    });
    const leftWall = Bodies.rectangle(5, height / 2, 10, height * 3, wallOptions);
    const rightWall = Bodies.rectangle(width, height / 2, 10, height * 3, wallOptions);
    const ground = Bodies.rectangle(width / 2, height - 10, width, 20, wallOptions);
    const walls = [leftWall, rightWall, ground];

    Composite.add(engine.world, [...balls, ...walls]);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);
  };

  onMount(async () => {
    drawCanvas();
  });
</script>