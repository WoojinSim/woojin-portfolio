/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from "react";
import Matter from "matter-js";
import "matter-wrap";
import { mainContainer } from "./styles/PlayGround.styles";

const PlayGround: React.FC = () => {
  const goundRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const [dimension, setDimension] = useState({ width: 800, height: 600 });

  /**
   * 화면 크기 변경 시 화면 크기 데이터 업데이트
   */
  useEffect(() => {
    const updateDimension = () => {
      if (goundRef.current) {
        setDimension({
          width: goundRef.current.offsetWidth,
          height: goundRef.current.offsetHeight,
        });
      }
    };
    updateDimension();
    window.addEventListener("resize", updateDimension);
    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, []);

  /**
   * 플레이그라운드 랜더링
   */
  useEffect(() => {
    if (!goundRef.current) return;

    const { Engine, Render, Bodies, Runner, Composite, Mouse, MouseConstraint } = Matter;

    if (!engineRef.current) {
      // 엔진 생성
      const engine = Engine.create();
      const world = engine.world;

      // 렌더러 생성
      const render = Render.create({
        element: goundRef.current,
        engine: engine,
        options: {
          width: goundRef.current.offsetWidth,
          height: goundRef.current.offsetHeight,
          wireframes: false,
          background: "transparent",
        },
      });
      Render.run(render);

      // 러너 생성
      const runner = Runner.create();
      Runner.run(runner, engine);

      // 바닥 생성
      Composite.add(world, [
        Bodies.rectangle(
          goundRef.current.offsetWidth / 2,
          goundRef.current.offsetHeight + 5, // 바닥 아래에 5px 여백 추가 (도형 높이만큼)
          goundRef.current.offsetWidth * 1.5,
          10,
          {
            isStatic: true,
            friction: 5,
            render: { fillStyle: "transparent" },
          }
        ),
      ]);

      // 도형들 생성
      Composite.add(world, [
        Bodies.polygon(200, 460, 3, 200, { density: 10, friction: 5, render: { fillStyle: "#757575" } }),
        Bodies.polygon(400, 460, 5, 200, { density: 10, friction: 5, render: { fillStyle: "#C0C0C0" } }),
        Bodies.rectangle(600, 460, 200, 200, { density: 10, friction: 5, render: { fillStyle: "#E0E0E0" } }),
        Bodies.circle(800, 460, 100, { density: 10, friction: 5, render: { fillStyle: "#03aeef" } }),
      ]);

      // 마우스 조작
      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });
      Composite.add(world, mouseConstraint);
      render.mouse = mouse;

      // 렌더링 시점
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: goundRef.current.offsetWidth, y: goundRef.current.offsetHeight },
      });

      // Matter-Wrap 플러그인 사용
      Matter.use("matter-wrap");
      const allBodies = Composite.allBodies(world);
      allBodies.forEach((body) => {
        body.plugin.wrap = {
          min: { x: 0 },
          max: { x: goundRef.current!.offsetWidth },
        };
      });

      engineRef.current = engine;
      renderRef.current = render;
    }

    if (renderRef.current) {
      const render = renderRef.current;
      render.canvas.width = dimension.width;
      render.canvas.height = dimension.height;
      render.bounds.max = { x: dimension.width, y: dimension.height };
    }
  }, [dimension]);

  return <div css={mainContainer} ref={goundRef}></div>;
};

export default PlayGround;
