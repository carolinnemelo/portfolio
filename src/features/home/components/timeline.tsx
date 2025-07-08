import { TimelineItem } from "./timeline-item";

export function Timeline() {
  return (
    <section className="text-center flex flex-col px-2 md:px-16 py-6 md:py-12">
      <h2>My Journey</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet repellat.
      </p>
      <TimelineItem
        title={"First"}
        subtitle={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet repellat possimus laboriosam a"
        }
      />
    </section>
  );
}
