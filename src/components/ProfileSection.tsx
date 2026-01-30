import { useLanguage } from "@/hooks/useLanguage";
import { useRoleTypewriter } from "@/hooks/useRoleTypewriter";
import { 
  Briefcase, 
  Settings, 
  Database, 
  Code2, 
  BarChart3, 
  Server, 
  Zap, 
  Users, 
  TrendingUp, 
  Layers, 
  Brain,
  Cpu
} from "lucide-react";
import profileImage from "@/assets/profile-section.png";

const ProfileSection = () => {
  const { t, lang } = useLanguage();

  const roles = [
    t("profile.roles.zoho"),
    t("profile.roles.backend"),
    t("profile.roles.dataAnalyst"),
    t("profile.roles.integration"),
    t("profile.roles.martech"),
    t("profile.roles.itManager"),
    t("profile.roles.iot"),
  ];

  const { displayText, isPaused } = useRoleTypewriter({ roles, typingSpeed: 60, pauseDuration: 2500 });

  const services = [
    {
      icon: Settings,
      title: t("profile.services.crm.title"),
      items: [
        t("profile.services.crm.item1"),
        t("profile.services.crm.item2"),
        t("profile.services.crm.item3"),
        t("profile.services.crm.item4"),
      ],
    },
    {
      icon: Code2,
      title: t("profile.services.backend.title"),
      items: [
        t("profile.services.backend.item1"),
        t("profile.services.backend.item2"),
        t("profile.services.backend.item3"),
      ],
    },
    {
      icon: BarChart3,
      title: t("profile.services.bi.title"),
      items: [
        t("profile.services.bi.item1"),
        t("profile.services.bi.item2"),
        t("profile.services.bi.item3"),
      ],
    },
    {
      icon: Server,
      title: t("profile.services.infra.title"),
      items: [
        t("profile.services.infra.item1"),
        t("profile.services.infra.item2"),
        t("profile.services.infra.item3"),
      ],
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: t("profile.benefits.vision.title"),
      description: t("profile.benefits.vision.description"),
    },
    {
      icon: TrendingUp,
      title: t("profile.benefits.costs.title"),
      description: t("profile.benefits.costs.description"),
    },
    {
      icon: Layers,
      title: t("profile.benefits.integration.title"),
      description: t("profile.benefits.integration.description"),
    },
    {
      icon: Zap,
      title: t("profile.benefits.autonomy.title"),
      description: t("profile.benefits.autonomy.description"),
    },
    {
      icon: Users,
      title: t("profile.benefits.versatility.title"),
      description: t("profile.benefits.versatility.description"),
    },
  ];

  return (
    <section id="profile" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">{t("profile.title")}</h2>
          <p className="section-subtitle">{t("profile.subtitle")}</p>
        </div>

        {/* Profile Summary with Image */}
        <div className="max-w-5xl mx-auto mb-20 animate-fade-in-bounce">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-110" />
                  <img
                    src={profileImage}
                    alt="Sebastián López Osorno"
                    className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/50 shadow-xl"
                  />
                </div>
              </div>
              
              {/* Profile Text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                  Sebastián López Osorno
                </h3>
                <p className="text-lg text-primary font-medium mb-4">
                  {t("profile.headline")}
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t("profile.summary1")}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("profile.summary2")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rotating Roles */}
        <div className="text-center mb-20 animate-fade-in-bounce delay-200">
          <div className="inline-flex items-center gap-3 mb-4">
            <Briefcase className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-serif font-bold gradient-text">{t("profile.rolesTitle")}</h3>
          </div>
          <div className="h-16 flex items-center justify-center">
            <p className="text-2xl md:text-4xl font-mono font-bold text-primary">
              {displayText}
              <span className={`inline-block w-0.5 h-6 md:h-8 bg-primary ml-1 align-middle ${isPaused ? 'animate-pulse' : 'animate-[blink_0.7s_infinite]'}`} />
            </p>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t("profile.rolesDescription")}
          </p>
        </div>

        {/* Services */}
        <div className="mb-20 animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold gradient-text mb-2">{t("profile.servicesTitle")}</h3>
            <p className="text-muted-foreground">{t("profile.servicesSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 glow-hover animate-fade-in-bounce"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-serif font-bold text-foreground">{service.title}</h4>
                </div>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits / Value Proposition */}
        <div className="animate-slide-up">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold gradient-text mb-2">{t("profile.benefitsTitle")}</h3>
            <p className="text-muted-foreground">{t("profile.benefitsSubtitle")}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl bg-muted/30 border border-border hover:border-primary/50 hover:bg-muted/50 transition-all duration-300 glow-hover animate-fade-in-bounce"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="font-serif font-bold text-foreground text-sm">{benefit.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
