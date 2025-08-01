type SectionHeadingProps = {
  title: string;
  gradientFrom: string;
  gradientTo: string;
};

export function SectionHeading({
  title,
  gradientFrom,
  gradientTo,
}: SectionHeadingProps) {
  return (
    <h2 className={`text-3xl font-bold mb-12 bg-gradient-to-r from-${gradientFrom} to-${gradientTo} bg-clip-text text-transparent`}>
      {title}
    </h2>
  );
}