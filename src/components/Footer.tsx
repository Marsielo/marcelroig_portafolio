import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm opacity-90">
          © {new Date().getFullYear()} Marcel Roig Gil. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
