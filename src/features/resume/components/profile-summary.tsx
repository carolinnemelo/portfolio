import Image from "next/image";

type ProfileSummaryProps = {
  imageSrc: string;
  altText: string;
  summary: string;
};

export function ProfileSummary({
  imageSrc,
  altText,
  summary,
}: ProfileSummaryProps) {
  return (
    <section className="mb-10 flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-shrink-0">
        <div className="w-52 h-52 mx-auto md:mx-0 overflow-hidden rounded-full">
          <Image
            src={imageSrc}
            alt={altText}
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </div>

      <p className="text-paragraph text-lg">{summary}</p>
    </section>
  );
}
