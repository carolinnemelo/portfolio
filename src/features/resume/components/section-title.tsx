type SectionTitleProps = {
  title: string;
};

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-xl font-bold mb-6 pb-2 inline-block text-accent">
      <span className="border-l-4 border-accent pl-3">{title}</span>
    </h2>
  );
}