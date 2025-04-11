"use client";
import {
  motion,
  MotionStyle,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { useState } from "react";

export function FoldableCard() {
  const [isFolded, setIsFolded] = useState(false);

  const xDrag = useMotionValue(0);
  const xLeftSection = useTransform(xDrag, [0, 300], ["100%", "0%"]);
  const xRightSection = useTransform(xDrag, [0, 300], ["-100%", "0%"]);
  const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
  const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

  useMotionValueEvent(xDrag, "change", (currentX) => {
    if (currentX < 260) {
      setIsFolded(false);
    } else {
      setIsFolded(true);
    }
  });
  return (
    <section className="overflow-x-clip">
      <motion.div
        animate={isFolded ? "open" : "folded"}
        variants={{
          open: { scale: 1 },
          folded: { scale: 0.9 },
        }}
        initial="folded"
        className="flex flex-col items-center"
      >
        <motion.div
          variants={{ open: { rotate: 0 }, hovering: { rotate: 0 } }}
          whileHover="hovering"
          initial={{ rotate: 3 }}
          className="mx-auto grid aspect-video h-[80vh] p-8"
        >
          <div className="aspect-video h-full w-full grid grid-cols-3 [grid-area:1/1]">
            <motion.div
              style={{ x: xLeftSection, skewY: "-1deg" }}
              className="map-image origin-bottom-right border-r border-zinc-500/20 shadow-2xl"
            />
            <motion.div
              style={
                {
                  scaleX: centerScale,
                  "--brightness": centerBrightness,
                  filter: "brightness(var(--brightness))",
                } as MotionStyle
              }
              className="map-image brightness-[--brightness]"
            />
            <motion.div
              style={{ x: xRightSection, skewY: "1deg" }}
              className="map-image origin-bottom-left border-l border-zinc-500/20 shadow-2xl"
            />
          </div>
          <motion.div
            drag="x"
            className="[grid-area:1/1] relative z-10 cursor-grab active:cursor-grabbing"
            _dragX={xDrag}
            dragConstraints={{
              left: 0,
              right: 300,
            }}
            dragTransition={{
              modifyTarget: (target) => {
                return target > 150 ? 300 : 0;
              },
              timeConstant: 200,
            }}
          />
        </motion.div>
        <motion.div
          variants={{
            folded: { opacity: 0, scale: 0.9, y: 30 },
            open: { opacity: 1, scale: 1, y: 0 },
          }}
        > CRAY CRAY</motion.div>
      </motion.div>
    </section>
  );
}
