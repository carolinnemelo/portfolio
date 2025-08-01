import { FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";

type DownloadButtonProps = {
  filePath: string;
  label: string;
};

export function DownloadButton({ filePath, label }: DownloadButtonProps) {
  return (
    <a
      href={filePath}
      download
      className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md transition-colors"
    >
      <FaDownload />
      {label}
    </a>
  );
}