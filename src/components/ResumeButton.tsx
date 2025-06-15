
import { Download } from "lucide-react";

const ResumeButton = () => (
  <a
    href="/lovable-uploads/ritik-arora-resume.pdf"
    download
    className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-accent hover:scale-105 transition-all duration-300"
  >
    <Download size={18} />
    Download Resume
  </a>
);

export default ResumeButton;
