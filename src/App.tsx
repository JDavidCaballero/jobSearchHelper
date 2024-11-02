import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { ExternalLink } from "lucide-react";
import { CVTemplateDownload } from "./components/ui/cvTemplate";
import { cvTemplate, cvTips, jobPlatforms } from "./data/appData";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Asistente de Búsqueda de Empleo
      </h1>
      <Tabs defaultValue="platforms" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="platforms">Plataformas de Empleo</TabsTrigger>
          <TabsTrigger value="cv-tips">Consejos para el CV</TabsTrigger>
        </TabsList>
        <TabsContent value="platforms">
          <Card>
            <CardHeader>
              <CardTitle>Plataformas de Búsqueda de Empleo</CardTitle>
              <CardDescription>
                Explora estas plataformas para encontrar tu próxima oportunidad
                laboral
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="w-16 h-16 mr-10 rounded"
                    />
                    <span className="text-lg font-semibold">
                      {platform.name}
                    </span>
                    <ExternalLink className="ml-auto" size={20} />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="cv-tips">
          <Card>
            <CardHeader>
              <CardTitle>Consejos para Escribir un CV</CardTitle>
              <CardDescription>
                Sigue estas pautas para crear un CV profesional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {cvTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                Plantillas de CV que podrias usar!
              </h3>
              {cvTemplate.map((template, index) => (
                <CVTemplateDownload
                  fileName={template.name}
                  title={template.title}
                  key={index}
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
