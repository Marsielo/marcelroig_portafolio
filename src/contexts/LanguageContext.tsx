import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  es: {
    // Navigation
    'nav.inicio': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos y Empresas',
    'nav.achievements': 'Otros logros',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Marcel Roig Gil',
    'hero.subtitle': 'Ingeniero Informático y de Telecomunicaciones',
    'hero.tagline': 'Erudito · Visionario · Artista',
    'hero.cta.about': 'Sobre mí',
    'hero.cta.contact': 'Contacto',
    
    // About
    'about.title': 'Sobre mí',
    'about.name': 'Marcel Roig Gil',
    'about.age': '21 años',
    'about.download.cv': 'Descargar CV',
    'about.intro': 'Mi vida y mis ambiciones no se ciñen únicamente a lo académico. Ante todo soy amante del conocimiento, la ciencia y el arte, así como músico y deportista nato. Tengo muy buenas habilidades comunicativas y un carácter poético y perfeccionista.',
    'about.formation.title': 'Formación Académica',
    'about.formation.university': 'Universidad Autónoma de Barcelona',
    'about.formation.cs': 'Grado en Ingeniería Informática',
    'about.formation.cs.subtitle': 'Mención en Tecnologías de la Información',
    'about.formation.telecom': 'Grado en Ingeniería de Sistemas de Telecomunicación',
    'about.formation.skills': 'Competencias y habilidades',
    'about.formation.cs.skill1.title': 'Lenguajes de desarrollo de software',
    'about.formation.cs.skill1.desc': 'Python, C++, Java, lenguajes web (HTML/JavaScript/CSS)...',
    'about.formation.cs.skill2.title': 'Arquitectura de sistemas',
    'about.formation.cs.skill2.desc': 'Diseño de soluciones escalables y mantenibles, especialidad en TI',
    'about.formation.cs.skill3.title': 'Bases de datos',
    'about.formation.cs.skill3.desc': 'Implementación y gestión de bases de datos relacionales y no relacionales (SQL)',
    'about.formation.cs.skill4.title': 'Web, redes sociales y empresa',
    'about.formation.cs.skill4.desc': 'Experiencia en la digitalización y el marketing empresarial',
    'about.formation.telecom.skill1.title': 'Circuitos eléctricos y Computadores',
    'about.formation.telecom.skill1.desc': 'Diseño de circuitos, ensamblaje, puertas lógicas y arquitectura del computador (microprocesador)',
    'about.formation.telecom.skill2.title': 'Redes avanzadas',
    'about.formation.telecom.skill2.desc': 'Protocolos TCP/IP y OSI, tráfico (Wireshark) y servicios de red (DNS, DHCP...)',
    'about.formation.telecom.skill3.title': 'Señales y sistemas',
    'about.formation.telecom.skill3.desc': 'Análisis de señales en dominio temporal y frecuencial (Octave, MATLAB)',
    'about.formation.telecom.skill4.title': 'Ondas y radiación',
    'about.formation.telecom.skill4.desc': 'Electromagnetismo, óptica, radio y antenas',
    'about.languages.title': 'Idiomas',
    'about.languages.spanish': 'Castellano',
    'about.languages.catalan': 'Catalán',
    'about.languages.english': 'Inglés',
    'about.languages.native': 'Nativo',
    'about.languages.intermediate': 'Intermedio',
    'about.music.title': 'Música',
    'about.music.desc': 'Pianista y vocalista desde pequeño, la música es mi mundo de belleza ordenada. Amante de todo tipo de estilos y compositor de mis propias obras.',
    'about.music.desc2': 'Mis canciones publicadas en las redes bajo el apodo "SeaSky" muestran mis gustos variados y el recorrido de mis habilidades musicales.',
    'about.music.youtube': 'Canal de YouTube: SeaSky',
    'about.sports.title': 'Deporte',
    'about.sports.desc1': 'Desde siempre he estado ligado al deporte, y domino varias disciplinas como el gimnasio, la calistenia, el boxeo, las artes marciales, el tenis, el parkour, la acrobacia y los deportes de resistencia.',
    'about.sports.desc2': 'En 2024, fundé una asociación sin ánimo de lucro llamada',
    'about.sports.parkour': 'PARKOUR PALAU',
    'about.sports.desc3': ', que tiene como misión promover entre los jóvenes una filosofía de vida saludable en torno al movimiento, la exploración, la creatividad y la comunidad.',
    'about.sports.instagram': 'Instagram: Parkour Palau',
    
    // Projects
    'projects.title': 'Proyectos y Empresas',
    'projects.founder': 'FUNDADOR',
    'projects.enersea.name': 'EnerSea Foods',
    'projects.enersea.desc': 'Empresa de alimentación saludable dedicada a ofrecer productos nutritivos y sostenibles. Especializada en alimentos marinos y opciones saludables para un estilo de vida equilibrado.',
    'projects.blackbox.name': 'Black Box Informática',
    'projects.blackbox.desc': 'Negocio de desarrollo web especializado en crear soluciones digitales para pequeñas y grandes empresas. Desde sitios web corporativos hasta aplicaciones web complejas y sistemas personalizados.',
    'projects.parkour.name': 'Asociación Juvenil Parkour Palau',
    'projects.parkour.desc': 'Asociación sin ánimo de lucro dedicada a promover la filosofía saludable del arte del movimiento en jóvenes. Fomentando valores de superación, disciplina y trabajo en equipo a través del parkour.',
    
    // Achievements
    'achievements.title': 'Otros logros',
    'achievements.mensa.name': 'Mensa Internacional',
    'achievements.mensa.subtitle': 'SOCIO MIEMBRO',
    'achievements.mensa.desc': 'Mensa es una asociación internacional de superdotados fundada en Inglaterra en el 1946. Para entrar debe tenerse un cociente intelectual superior a 132.',
    'achievements.conferences.name': 'Conferencias en Universidades',
    'achievements.conferences.subtitle': 'PONENTE',
    'achievements.conferences.desc': 'Universidades como ESADE o la UAB han contado conmigo para exponer mi conocimiento en diferentes áreas como la ciencia y tecnología, la innovación histórica y, como factor común, mis características reflexiones filosóficas y metafísicas.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.email': 'Email',
    'contact.phone': 'Teléfono',
    'contact.address': 'Dirección',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  },
  en: {
    // Navigation
    'nav.inicio': 'Home',
    'nav.about': 'About Me',
    'nav.projects': 'Projects & Companies',
    'nav.achievements': 'Other Achievements',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Marcel Roig Gil',
    'hero.subtitle': 'Computer and Telecommunications Engineer',
    'hero.tagline': 'Scholar · Visionary · Artist',
    'hero.cta.about': 'About Me',
    'hero.cta.contact': 'Contact',
    
    // About
    'about.title': 'About Me',
    'about.name': 'Marcel Roig Gil',
    'about.age': '21 years old',
    'about.download.cv': 'Download CV',
    'about.intro': 'My life and ambitions are not limited to academics alone. Above all, I am a lover of knowledge, science and art, as well as a natural musician and athlete. I have very good communication skills and a poetic and perfectionist character.',
    'about.formation.title': 'Academic Background',
    'about.formation.university': 'Autonomous University of Barcelona',
    'about.formation.cs': 'Bachelor\'s Degree in Computer Engineering',
    'about.formation.cs.subtitle': 'Specialization in Information Technologies',
    'about.formation.telecom': 'Bachelor\'s Degree in Telecommunications Systems Engineering',
    'about.formation.skills': 'Skills and Competencies',
    'about.formation.cs.skill1.title': 'Software Development Languages',
    'about.formation.cs.skill1.desc': 'Python, C++, Java, web languages (HTML/JavaScript/CSS)...',
    'about.formation.cs.skill2.title': 'Systems Architecture',
    'about.formation.cs.skill2.desc': 'Design of scalable and maintainable solutions, IT specialization',
    'about.formation.cs.skill3.title': 'Databases',
    'about.formation.cs.skill3.desc': 'Implementation and management of relational and non-relational databases (SQL)',
    'about.formation.cs.skill4.title': 'Web, Social Media and Business',
    'about.formation.cs.skill4.desc': 'Experience in digitalization and business marketing',
    'about.formation.telecom.skill1.title': 'Electrical Circuits and Computers',
    'about.formation.telecom.skill1.desc': 'Circuit design, assembly, logic gates and computer architecture (microprocessor)',
    'about.formation.telecom.skill2.title': 'Advanced Networks',
    'about.formation.telecom.skill2.desc': 'TCP/IP and OSI protocols, traffic (Wireshark) and network services (DNS, DHCP...)',
    'about.formation.telecom.skill3.title': 'Signals and Systems',
    'about.formation.telecom.skill3.desc': 'Signal analysis in time and frequency domain (Octave, MATLAB)',
    'about.formation.telecom.skill4.title': 'Waves and Radiation',
    'about.formation.telecom.skill4.desc': 'Electromagnetism, optics, radio and antennas',
    'about.languages.title': 'Languages',
    'about.languages.spanish': 'Spanish',
    'about.languages.catalan': 'Catalan',
    'about.languages.english': 'English',
    'about.languages.native': 'Native',
    'about.languages.intermediate': 'Intermediate',
    'about.music.title': 'Music',
    'about.music.desc': 'Pianist and vocalist since childhood, music is my world of ordered beauty. Lover of all styles and composer of my own works.',
    'about.music.desc2': 'My songs published on social media under the alias "SeaSky" showcase my varied tastes and the journey of my musical skills.',
    'about.music.youtube': 'YouTube Channel: SeaSky',
    'about.sports.title': 'Sports',
    'about.sports.desc1': 'I have always been connected to sports, and I master several disciplines such as gym, calisthenics, boxing, martial arts, tennis, parkour, acrobatics and endurance sports.',
    'about.sports.desc2': 'In 2024, I founded a nonprofit association called',
    'about.sports.parkour': 'PARKOUR PALAU',
    'about.sports.desc3': ', whose mission is to promote among young people a healthy life philosophy around movement, exploration, creativity and community.',
    'about.sports.instagram': 'Instagram: Parkour Palau',
    
    // Projects
    'projects.title': 'Projects & Companies',
    'projects.founder': 'FOUNDER',
    'projects.enersea.name': 'EnerSea Foods',
    'projects.enersea.desc': 'Healthy food company dedicated to offering nutritious and sustainable products. Specialized in marine foods and healthy options for a balanced lifestyle.',
    'projects.blackbox.name': 'Black Box Informática',
    'projects.blackbox.desc': 'Web development business specialized in creating digital solutions for small and large companies. From corporate websites to complex web applications and custom systems.',
    'projects.parkour.name': 'Parkour Palau Youth Association',
    'projects.parkour.desc': 'Non-profit association dedicated to promoting the healthy philosophy of the art of movement in young people. Fostering values of self-improvement, discipline and teamwork through parkour.',
    
    // Achievements
    'achievements.title': 'Other Achievements',
    'achievements.mensa.name': 'Mensa International',
    'achievements.mensa.subtitle': 'MEMBER',
    'achievements.mensa.desc': 'Mensa is an international association of gifted people founded in England in 1946. To enter you must have an intelligence quotient higher than 132.',
    'achievements.conferences.name': 'University Conferences',
    'achievements.conferences.subtitle': 'SPEAKER',
    'achievements.conferences.desc': 'Universities such as ESADE and UAB have counted on me to present my knowledge in different areas such as science and technology, historical innovation and, as a common factor, my characteristic philosophical and metaphysical reflections.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'es') ? saved : 'es';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
