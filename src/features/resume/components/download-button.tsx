import { FaDownload } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function DownloadButton() {
  return (
    <Button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-6 py-5">
      <FaDownload />
      <span>Download Resume</span>
    </Button>
  );
}