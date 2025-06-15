
import { Download } from "lucide-react";

const ResumeButton = () => (
  <a
    href="/lovable-uploads/ritik-arora-resume.pdf"
    download
    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-sm hover:bg-primary/90 transition-all duration-300"
  >
    <Download size={18} />
    Download Resume
  </a>
);

export default ResumeButton;
