import {useState} from "react";
import {Download, FileText} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useLanguage} from "@/hooks/useLanguage.ts";

// Import CV preview images
import curriculumEs from "@/assets/Curriculum ES - Sebastián López Osorno 1 of 1.webp";
import curriculumEn from "@/assets/Curriculum EN -  Sebastián López Osorno 1 of 1.webp";
import atsEs from "@/assets/ATS ES - Sebastián López Osorno 1 of 1.webp";
import atsEn from "@/assets/ATS EN - Sebastián López Osorno 1 of 1.webp";
import atsExtentEs1 from "@/assets/ATS-Extent ES - Sebastián López Osorno 1 of 2.webp";
import atsExtentEs2 from "@/assets/ATS-Extent ES - Sebastián López Osorno 2 of 2.webp";
import atsExtentEn1 from "@/assets/ATS-Extent EN - Sebastián López Osorno 1 of 2.webp";
import atsExtentEn2 from "@/assets/ATS-Extent EN - Sebastián López Osorno 2 of 2.webp";

interface ResumeVersion {
    id: string;
    labelEs: string;
    labelEn: string;
    downloadLinkEs: string;
    downloadLinkEn: string;
    imagesEs: string[];
    imagesEn: string[];
}

const resumeVersions: ResumeVersion[] = [
    {
        id: "curriculum",
        labelEs: "Curriculum Vitae",
        labelEn: "Curriculum Vitae",
        downloadLinkEs: "https://drive.google.com/file/d/1pmHqe91duxnTnBWO50zPptxnqwRU9KUe/view",
        downloadLinkEn: "https://drive.google.com/file/d/10czuGeKwLX0BG3HTMvFDsQQck8W3GUmh/view",
        imagesEs: [curriculumEs],
        imagesEn: [curriculumEn],
    },
    {
        id: "ats",
        labelEs: "ATS (Compacto)",
        labelEn: "ATS (Compact)",
        downloadLinkEs: "https://drive.google.com/file/d/1GHCQrzC4kSq51dIXwoNz0yAT9Njr219D/view",
        downloadLinkEn: "https://drive.google.com/file/d/1QcHGNLeGNUJ7vmFQgE27dmT4By3wB5qi/view",
        imagesEs: [atsEs],
        imagesEn: [atsEn],
    },
    {
        id: "ats-extent",
        labelEs: "ATS Extendido",
        labelEn: "ATS Extended",
        downloadLinkEs: "https://drive.google.com/file/d/1TYX6UQevCLL9ECwDrS6YyCtXUIlHVtgm/view",
        downloadLinkEn: "https://drive.google.com/file/d/1u3vjDhKSSw8j9fOYpaXdNTiCO8mdwyS0/view",
        imagesEs: [atsExtentEs1, atsExtentEs2],
        imagesEn: [atsExtentEn1, atsExtentEn2],
    },
];

const ResumeSection = () => {
    const {t, lang} = useLanguage();
    const [selectedVersion, setSelectedVersion] = useState<string>("curriculum");

    const currentResume = resumeVersions.find((v) => v.id === selectedVersion);
    const downloadLink = lang === "es" ? currentResume?.downloadLinkEs : currentResume?.downloadLinkEn;
    const images = lang === "es" ? currentResume?.imagesEs : currentResume?.imagesEn;

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

                {/* CV Preview Images */}
                <div className="max-w-4xl mx-auto animate-fade-in-bounce delay-200">
                    <a
                        href={downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        aria-label={`${t("resume.viewFull")} - ${lang === "es" ? currentResume?.labelEs : currentResume?.labelEn}`}
                    >
                        <div
                            className="relative rounded-lg overflow-hidden border border-border bg-background glow-hover cursor-pointer group">
                            <div className="flex flex-col gap-4">
                                {images?.map((img, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={img}
                                            alt={`${lang === "es" ? currentResume?.labelEs : currentResume?.labelEn} - ${t("resume.page")} ${index + 1}`}
                                            className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
                                            width="816"
                                            height="1056"
                                            loading="lazy"
                                            decoding="async"
                                            srcSet={`${img} 816w, ${img} 1632w`}
                                            sizes="(max-width: 896px) 100vw, 816px"
                                        />
                                        {/* Hover overlay */}
                                        <div
                                            className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <span
                                                className="bg-background/90 text-foreground px-4 py-2 rounded-lg font-medium shadow-lg">
                                                {t("resume.clickToView")}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </a>

                    {/* Download Button */}
                    <div className="flex justify-center mt-6">
                        <Button
                            asChild
                            size="lg"
                            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg glow-hover transition-all duration-300"
                        >
                            <a
                                href={downloadLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${t("resume.download")} ${lang === "es" ? currentResume?.labelEs : currentResume?.labelEn} PDF`}
                            >
                                <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform"/>
                                {t("resume.download")}
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeSection;