import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

type Props = {
  name: string;
  title: string;
};

export function ResumeHeader({ name, title }: Props) {

  const contactInfo = [
    {
      Icon: FaPhone,
      label: "+46 730343289",
      href: "tel:+46730343289",
    },
    {
      Icon: FaEnvelope,
      label: "carolinnepmelo@gmail.com",
      href: "mailto:carolinnepmelo@gmail.com",
    },
    {
      Icon: FaGlobe,
      label: "carolinne.se",
      href: "https://carolinne.se",
    },
    {
      Icon: FaMapMarkerAlt,
      label: "Stockholm, Sweden",
      href: undefined,
    },
  ];

  return (
    <header className="mb-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-accent">{name}</h1>
          <h2 className="text-xl md:text-2xl text-paragraph mt-2">{title}</h2>
        </div>

        <div className="mt-6 md:mt-0 text-paragraph">
          {contactInfo.map(({ Icon, label, href }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="text-paragraph" />
              {href ? (
                <Link href={href} className="hover:text-accent">
                  {label}
                </Link>
              ) : (
                <span>{label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <Separator className="my-4" />
    </header>
  );
}
