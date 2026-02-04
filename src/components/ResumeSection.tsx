import {useState} from "react";
import {Download, FileText} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useLanguage} from "@/hooks/useLanguage";

interface ResumeVersion {
    id: string;
    labelEs: string;
    labelEn: string;
    driveIdEs: string;
    driveIdEn: string;
    downloadLinkEs: string;
    downloadLinkEn: string;
}

const resumeVersions: ResumeVersion[] = [
    {
        id: "curriculum",
        labelEs: "Curriculum Vitae",
        labelEn: "Curriculum Vitae",
        driveIdEs: "1pmHqe91duxnTnBWO50zPptxnqwRU9KUe",
        driveIdEn: "10czuGeKwLX0BG3HTMvFDsQQck8W3GUmh",
        downloadLinkEs: "https://drive.google.com/file/d/1pmHqe91duxnTnBWO50zPptxnqwRU9KUe/view",
        downloadLinkEn: "https://drive.google.com/file/d/10czuGeKwLX0BG3HTMvFDsQQck8W3GUmh/view",
    },
    {
        id: "ats",
        labelEs: "ATS (Compacto)",
        labelEn: "ATS (Compact)",
        driveIdEs: "1GHCQrzC4kSq51dIXwoNz0yAT9Njr219D",
        driveIdEn: "1QcHGNLeGNUJ7vmFQgE27dmT4By3wB5qi",
        downloadLinkEs: "https://drive.google.com/file/d/1GHCQrzC4kSq51dIXwoNz0yAT9Njr219D/view",
        downloadLinkEn: "https://drive.google.com/file/d/1QcHGNLeGNUJ7vmFQgE27dmT4By3wB5qi/view",
    },
    {
        id: "ats-extent",
        labelEs: "ATS Extendido",
        labelEn: "ATS Extended",
        driveIdEs: "1TYX6UQevCLL9ECwDrS6YyCtXUIlHVtgm",
        driveIdEn: "1u3vjDhKSSw8j9fOYpaXdNTiCO8mdwyS0",
        downloadLinkEs: "https://drive.google.com/file/d/1TYX6UQevCLL9ECwDrS6YyCtXUIlHVtgm/view",
        downloadLinkEn: "https://drive.google.com/file/d/1u3vjDhKSSw8j9fOYpaXdNTiCO8mdwyS0/view",
    },
];

const ResumeSection = () => {
    const {t, lang} = useLanguage();
    const [selectedVersion, setSelectedVersion] = useState<string>("curriculum");

    const currentResume = resumeVersions.find((v) => v.id === selectedVersion);
    const driveId = lang === "es" ? currentResume?.driveIdEs : currentResume?.driveIdEn;
    const downloadLink = lang === "es" ? currentResume?.downloadLinkEs : currentResume?.downloadLinkEn;
    const embedUrl = `https://drive.google.com/file/d/${driveId}/preview`;

    return (
        <section id="resume" className="py-20 md:py-32 bg-card/50">
            <div className="container px-4">
                <div className="text-center mb-12 animate-slide-up">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <FileText className="h-8 w-8 text-primary"/>
                        <h2 className="section-title">{t("resume.title")}</h2>
                    </div>
                    <p className="section-subtitle">{t("resume.subtitle")}</p>
                </div>

                {/* Version Selector */}
                <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-bounce" role="group"
                     aria-label="Versiones del currículum">
                    {resumeVersions.map((version) => (
                        <Button
                            key={version.id}
                            variant={selectedVersion === version.id ? "default" : "outline"}
                            onClick={() => setSelectedVersion(version.id)}
                            className={`transition-all duration-300 ${
                                selectedVersion === version.id
                                    ? "bg-primary text-primary-foreground"
                                    : "border-primary/50 hover:border-primary hover:bg-primary/10"
                            }`}
                            aria-label={`Ver ${lang === "es" ? version.labelEs : version.labelEn}`}
                            aria-pressed={selectedVersion === version.id}
                        >
                            {lang === "es" ? version.labelEs : version.labelEn}
                        </Button>
                    ))}
                </div>

                {/* PDF Viewer */}
                <div className="max-w-4xl mx-auto animate-fade-in-bounce delay-200">
                    <div className="relative rounded-lg overflow-hidden border border-border bg-background glow-hover">
                        <div className="aspect-[8.5/11] w-full">
                            <iframe
                                src={embedUrl}
                                className="w-full h-full"
                                allow="autoplay"
                                title={`Resume - ${currentResume?.labelEn}`}
                            />
                        </div>
                    </div>

                    {/* Download Button */}
                    <div className="flex justify-center mt-6">
                        <a href={downloadLink} target="_blank" rel="noopener noreferrer"
                           aria-label={`Descargar ${lang === "es" ? currentResume?.labelEs : currentResume?.labelEn} en PDF`}>
                            <Button
                                size="lg"
                                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg glow-hover transition-all duration-300"
                                aria-label="Descargar currículum"
                            >
                                <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform"/>
                                {t("resume.download")}
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;
