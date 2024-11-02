import { Download } from "lucide-react";
import { Button } from "./button";
import Documentlogo from "../../assets/document-logo.png";

interface CVTemplateDownloadProps {
  fileName: string;
  title: string;
}

export const CVTemplateDownload: React.FC<CVTemplateDownloadProps> = ({
  fileName,
  title,
}) => {
  const handleDownload = () => {
    const templateUrl = `/${fileName}`;
    const link = document.createElement("a");
    link.href = templateUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-6">
      <div className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <img src={Documentlogo} alt={title} className="w-10 h-10 mr-4" />
        <span className="text-lg font-semibold text-gray-800">{title}</span>
        <Button
          onClick={handleDownload}
          className="ml-auto bg-black text-white"
        >
          <Download className="mr-2 h-4 w-4" /> Descargar
        </Button>
      </div>
    </div>
  );
};
