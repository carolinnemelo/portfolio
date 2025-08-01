import { FaEnvelope, FaPhone, FaMapMarker, FaGlobe, FaLinkedin, FaGithub } from "react-icons/fa";

type ResumeHeaderProps = {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
};

export function ResumeHeader({
  name,
  title,
  email,
  phone,
  location,
  website,
  linkedin,
  github
}: ResumeHeaderProps) {
  return (
    <header className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">{name}</h1>
          <h2 className="text-xl text-slate-600 mt-1">{title}</h2>
        </div>
        
        <div className="flex flex-col gap-2 text-sm">
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
            <FaEnvelope /> {email}
          </a>
          <a href={`tel:${phone}`} className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
            <FaPhone /> {phone}
          </a>
          <div className="flex items-center gap-2 text-slate-600">
            <FaMapMarker /> {location}
          </div>
          <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
            <FaGlobe /> {website}
          </a>
          <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
            <FaLinkedin /> {linkedin}
          </a>
          <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600">
            <FaGithub /> {github}
          </a>
        </div>
      </div>
    </header>
  );
}