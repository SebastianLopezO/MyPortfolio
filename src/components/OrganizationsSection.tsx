import {useState} from "react";
import {ChevronDown, ChevronUp, ExternalLink, Github} from "lucide-react";
import {useLanguage} from "@/hooks/useLanguage.ts";

interface Repository {
    name: string;
    org: string;
}

interface Organization {
    name: string;
    slug: string;
    descriptionEs: string;
    descriptionEn: string;
    metricsUrl: string;
    githubUrl: string;
    repos: Repository[];
}

const organizations: Organization[] = [
    {
        name: "EngineeringSebastian-s",
        slug: "EngineeringSebastian-s",
        descriptionEs: "Proyectos de mi carrera de Ingeniería Informática en el Politécnico Jaime Isaza Cadavid, abarcando IA, bases de datos, sistemas operativos y redes.",
        descriptionEn: "Computer Engineering projects from Politécnico Jaime Isaza Cadavid covering AI, databases, operating systems, and networks.",
        metricsUrl: "https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/orgs/metrics.engineeringsebastians.svg",
        githubUrl: "https://github.com/EngineeringSebastian-s",
        repos: [
            {name: "DB2", org: "EngineeringSebastian-s"},
            {name: "SistemasOperativos", org: "EngineeringSebastian-s"},
            {name: "ARQH", org: "EngineeringSebastian-s"},
            {name: "TLP2", org: "EngineeringSebastian-s"},
            {name: "TLP1", org: "EngineeringSebastian-s"},
            {name: "Grafos", org: "EngineeringSebastian-s"},
            {name: "Arboles", org: "EngineeringSebastian-s"},
            {name: "Polinomios", org: "EngineeringSebastian-s"},
            {name: "MatricesDispersas", org: "EngineeringSebastian-s"},
            {name: "SemioticaInformatica", org: "EngineeringSebastian-s"},
            {name: "AP4", org: "EngineeringSebastian-s"},
            {name: "SistemaDeNotas", org: "EngineeringSebastian-s"},
            {name: "AP3", org: "EngineeringSebastian-s"},
            {name: "AP2", org: "EngineeringSebastian-s"},
            {name: "AP1", org: "EngineeringSebastian-s"},
            {name: "CarSpace", org: "EngineeringSebastian-s"},
        ],
    },
    {
        name: "TechnicalSebastians",
        slug: "TechnicalSebastians",
        descriptionEs: "Proyectos del Técnico en Programación de Software en IUSH, incluyendo aplicaciones web y herramientas de sistema.",
        descriptionEn: "Software Programming Technique projects from IUSH including web applications and system tools.",
        metricsUrl: "https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/orgs/metrics.technicalsebastians.svg",
        githubUrl: "https://github.com/TechnicalSebastians",
        repos: [
            {name: "VideoToAscii", org: "TechnicalSebastians"},
            {name: "SitePersist", org: "TechnicalSebastians"},
            {name: "CalculadoraNasa", org: "TechnicalSebastians"},
            {name: "AdminSitePersist", org: "TechnicalSebastians"},
        ],
    },
    {
        name: "VocationalSebastian-s",
        slug: "VocationalSebastian-s",
        descriptionEs: "Proyectos del Técnico Auxiliar en Desarrollo de Software en Pascual Bravo, en colaboración con INEM.",
        descriptionEn: "Technical High School projects at Pascual Bravo in collaboration with INEM.",
        metricsUrl: "https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/orgs/metrics.vocationalsebastians.svg",
        githubUrl: "https://github.com/VocationalSebastian-s",
        repos: [
            {name: "TheCompanyDream", org: "VocationalSebastian-s"},
            {name: "InstintoAcuatico", org: "VocationalSebastian-s"},
            {name: "BitMapConvertColor", org: "VocationalSebastian-s"},
            {name: "BingoExcel", org: "VocationalSebastian-s"},
            {name: "CalculadoraJava", org: "VocationalSebastian-s"},
            {name: "PositionHorse", org: "VocationalSebastian-s"},
            {name: "GuiaPython", org: "VocationalSebastian-s"},
            {name: "DimensionCube", org: "VocationalSebastian-s"},
        ],
    },
    {
        name: "SmartPotTech",
        slug: "SmartPotTech",
        descriptionEs: "Sistema de gestión hidropónica integrado con IoT, monitoreo en tiempo real, control automatizado de nutrientes y simulación con Wokwi.",
        descriptionEn: "IoT-integrated hydroponic management system with real-time monitoring, automated nutrient control, and Wokwi simulation.",
        metricsUrl: "https://raw.githubusercontent.com/SebastianLopezO/SebastianLopezO/main/metrics/orgs/metrics.smartpottech.svg",
        githubUrl: "https://github.com/SmartPotTech",
        repos: [
            {name: "SmartPot-API", org: "SmartPotTech"},
            {name: ".github", org: "SmartPotTech"},
            {name: "SmartPot-Web", org: "SmartPotTech"},
            {name: "SmartPot-DB", org: "SmartPotTech"},
            {name: "SmartPot-IoT", org: "SmartPotTech"},
            {name: "SmartPot-Middleware", org: "SmartPotTech"},
            {name: "SmartPot-DataAnalytics", org: "SmartPotTech"},
            {name: "SmartPot-DataGenerator", org: "SmartPotTech"},
            {name: "SmartPot-Mail", org: "SmartPotTech"},
            {name: "SmartPot-Cache", org: "SmartPotTech"},
        ],
    },
];

const OrganizationsSection = () => {
    const [expandedOrg, setExpandedOrg] = useState<string | null>(null);
    const {lang} = useLanguage();

    const toggleOrg = (slug: string) => {
        setExpandedOrg(expandedOrg === slug ? null : slug);
    };

    return (
        <div className="space-y-6 max-w-6xl mx-auto">
            {organizations.map((org, index) => (
                <div
                    key={org.slug}
                    className="rounded-lg bg-card border border-border overflow-hidden animate-fade-in-bounce"
                    style={{animationDelay: `${index * 100}ms`}}
                >
                    {/* Organization Header */}
                    <div className="p-5">
                        <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <Github className="h-5 w-5 text-primary"/>
                                    <h3 className="text-xl font-serif font-bold text-foreground">
                                        {org.name}
                                    </h3>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {lang === "es" ? org.descriptionEs : org.descriptionEn}
                                </p>
                            </div>
                            <a
                                href={org.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-primary hover:underline shrink-0"
                            >
                                <ExternalLink className="h-4 w-4"/>
                                {lang === "es" ? "Ver Organización" : "View Organization"}
                            </a>
                        </div>

                        {/* Metrics Image */}
                        <div className="mb-4">
                            <img
                                src={org.metricsUrl}
                                alt={`${org.name} metrics`}
                                className="w-full rounded-lg border border-border"
                                loading="lazy"
                            />
                        </div>

                        {/* Toggle Repos Button */}
                        <button
                            onClick={() => toggleOrg(org.slug)}
                            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            {expandedOrg === org.slug ? (
                                <>
                                    <ChevronUp className="h-4 w-4"/>
                                    {lang === "es" ? "Ocultar Repositorios" : "Hide Repositories"} ({org.repos.length})
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="h-4 w-4"/>
                                    {lang === "es" ? "Ver Repositorios" : "View Repositories"} ({org.repos.length})
                                </>
                            )}
                        </button>
                    </div>

                    {/* Repos Grid - Expandable */}
                    {expandedOrg === org.slug && (
                        <div className="px-5 pb-5 animate-fade-in">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {org.repos.map((repo) => (
                                    <a
                                        key={repo.name}
                                        href={`https://github.com/${repo.org}/${repo.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <img
                                            src={`https://github-readme-stats-one-liart-24.vercel.app/api/pin/?username=${repo.org}&repo=${repo.name}&theme=dark`}
                                            alt={repo.name}
                                            className="w-full rounded-lg border border-border hover:border-primary/50 transition-colors"
                                            loading="lazy"
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default OrganizationsSection;
