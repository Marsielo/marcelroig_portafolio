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
    'about.intro': 'Mi vida y mis aspiraciones trascienden lo académico. Ante todo, soy un amante del conocimiento, la ciencia y el arte, además de un músico y deportista nato. Poseo sólidas habilidades comunicativas, así como un carácter poético y perfeccionista que guía todo lo que emprendo.',
    'about.quote': 'La curiosidad es mi brújula; la disciplina, mi camino.',
    'about.formation.title': 'Formación Académica',
    'about.formation.university': 'Universidad Autónoma de Barcelona',
    'about.formation.cs': 'Grado en Ingeniería Informática',
    'about.formation.cs.subtitle': 'Mención en Tecnologías de la Información',
    'about.formation.telecom': 'Grado en Ingeniería de Sistemas de Telecomunicación',
    'about.formation.skills': 'Competencias y habilidades',
    'about.formation.cs.skill1.title': 'Lenguajes de desarrollo de software',
    'about.formation.cs.skill1.desc': 'Python, C/C++, Java, SQL, lenguajes web (HTML/JavaScript/CSS/PHP), Dart/Flutter...',
    'about.formation.cs.skill2.title': 'Arquitectura de sistemas',
    'about.formation.cs.skill2.desc': 'Diseño de soluciones escalables y mantenibles, especialidad en TI',
    'about.formation.cs.skill3.title': 'Bases de datos',
    'about.formation.cs.skill3.desc': 'Implementación y gestión de bases de datos relacionales (SQL) y no relacionales',
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
    'about.music.title': 'Música',
    'about.music.desc': 'Pianista y vocalista desde niño, he encontrado en la música un mundo de belleza ordenada. Disfruto explorar todo tipo de estilos y componer mis propias piezas.',
    'about.music.desc2.before': 'Bajo el seudónimo ',
    'about.music.desc2.after': ', he publicado en redes varias de mis canciones, donde se refleja tanto la diversidad de mis influencias como la evolución de mis habilidades musicales.',
    'about.music.youtube': 'Ver mi canal de YouTube',
    'about.sports.title': 'Deporte',
    'about.sports.desc1': 'Practicante de múltiples deportes y disciplinas, trabajo cada día para mantener un equilibrio sólido entre salud física y mental mediante esfuerzo y constancia. Entre mis actividades más habituales se encuentran el gimnasio y la calistenia, el boxeo y las artes marciales, el tenis, el parkour y las acrobacias, así como deportes de resistencia como el running, la natación o el ciclismo.',
    'about.sports.desc2': 'Soy fundador de la asociación sin ánimo de lucro ',
    'about.sports.parkour': 'PARKOUR PALAU',
    'about.sports.desc3': ', dedicada a promover entre los jóvenes la filosofía saludable del arte del movimiento.',
    'about.sports.instagram': 'Ver Instagram de Parkour Palau',
    'about.sports.website': 'Ver Página Web de Parkour Palau',
    'about.others.title': 'Otros',
    'about.others.languages.title': 'Idiomas',
    'about.others.languages.spanish': 'Castellano',
    'about.others.languages.catalan': 'Catalán',
    'about.others.languages.english': 'Inglés',
    'about.others.languages.native': 'Nativo',
    'about.others.languages.intermediate': 'Intermedio',
    'about.others.licenses.title': 'Permisos de conducir',
    'about.others.licenses.car': 'Coche',
    'about.others.licenses.carLevel': 'B',
    'about.others.licenses.motorcycle': 'Moto',
    'about.others.licenses.motorcycleLevel': 'A2',
    
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
    'achievements.mensa.desc': 'Mensa es una asociación internacional de superdotados fundada en Inglaterra en el 1946. Para entrar debe tenerse un cociente intelectual superior a 132, por encima del 98% de la población.',
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
    'about.intro': 'My life and aspirations transcend academics. Above all, I am a lover of knowledge, science, and art, as well as a natural musician and athlete. I possess strong communication skills and a poetic, perfectionist character that guides everything I undertake.',
    'about.quote': 'Curiosity is my compass; discipline, my path.',
    'about.formation.title': 'Academic Background',
    'about.formation.university': 'Autonomous University of Barcelona',
    'about.formation.cs': 'Bachelor\'s Degree in Computer Engineering',
    'about.formation.cs.subtitle': 'Specialization in Information Technologies',
    'about.formation.telecom': 'Bachelor\'s Degree in Telecommunications Systems Engineering',
    'about.formation.skills': 'Skills and Competencies',
    'about.formation.cs.skill1.title': 'Software Development Languages',
    'about.formation.cs.skill1.desc': 'Python, C/C++, Java, SQL, web languages (HTML/JavaScript/CSS/PHP), Dart/Flutter...',
    'about.formation.cs.skill2.title': 'Systems Architecture',
    'about.formation.cs.skill2.desc': 'Design of scalable and maintainable solutions, IT specialization',
    'about.formation.cs.skill3.title': 'Databases',
    'about.formation.cs.skill3.desc': 'Implementation and management of relational (SQL) and non-relational databases',
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
    'about.music.title': 'Music',
    'about.music.desc': 'A pianist and vocalist since childhood, I have found in music a world of ordered beauty. I enjoy exploring all kinds of styles and composing my own pieces.',
    'about.music.desc2.before': 'Under the pseudonym ',
    'about.music.desc2.after': ', I have published several of my songs on social media, reflecting both the diversity of my influences and the evolution of my musical skills.',
    'about.music.youtube': 'View my YouTube channel',
    'about.sports.title': 'Sports',
    'about.sports.desc1': 'Practitioner of multiple sports and disciplines, I work every day to maintain a solid balance between physical and mental health through effort and perseverance. Among my most frequent activities are gym and calisthenics, boxing and martial arts, tennis, parkour and acrobatics, as well as endurance sports such as running, swimming, and cycling.',
    'about.sports.desc2': 'I am the founder of the nonprofit organization ',
    'about.sports.parkour': 'PARKOUR PALAU',
    'about.sports.desc3': ', dedicated to promoting the healthy philosophy of the art of movement among young people.',
    'about.sports.instagram': 'View Parkour Palau Instagram',
    'about.sports.website': 'View Parkour Palau Website',
    'about.others.title': 'Others',
    'about.others.languages.title': 'Languages',
    'about.others.languages.spanish': 'Spanish',
    'about.others.languages.catalan': 'Catalan',
    'about.others.languages.english': 'English',
    'about.others.languages.native': 'Native',
    'about.others.languages.intermediate': 'Intermediate',
    'about.others.licenses.title': 'Driver\'s Licenses',
    'about.others.licenses.car': 'Car',
    'about.others.licenses.carLevel': 'B',
    'about.others.licenses.motorcycle': 'Motorcycle',
    'about.others.licenses.motorcycleLevel': 'A2',
    
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
    'achievements.mensa.desc': 'Mensa is an international association of gifted people founded in England in 1946. To enter you must have an intelligence quotient higher than 132, above 98% of the population.',
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
