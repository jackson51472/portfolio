"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAngular,
  FaObjectGroup,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiDjango, SiSpringboot } from "react-icons/si";

// about data
const about = {
  title: "Sobre mim",
  description:
    "Sou um programador apaixonado com experiência em HTML, CSS, JavaScript e Python. Atuei como Monitor na Faculdade Metodista Granbery e estou cursando Sistema de Informação, com habilidades em Django, Ruby e Machine Learning. Proativo e dedicado, busca sempre novos desafios..",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Jackson Faria",
    },
    {
      fieldName: "Telefone",
      fieldValue: "(+55) 32 985108911",
    },
    {
      fieldName: "Experiência",
      fieldValue: "2+ Anos",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Email",
      fieldValue: "jacksonapparesido@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Inglês, Português",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Experiência",
  description:
    "Tenho ampla experiência em desenvolvimento web e back-end, com habilidades sólidas em Python, Django, Spring Boot, e proficiência em HTML, CSS, JavaScript, Angular e Android.",
  items: [
    {
      company: "FMG-Faculdade Metodista Granbery",
      position: "Monitor de turma",
      duration: "2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Minhas qualificações",
  description:
    "Atualmente, meu foco está em aprofundar meus conhecimentos em machine learning e ferramentas de back end. Estou explorando algoritmos avançados e técnicas de análise de dados, enquanto aprimoro minhas habilidades em frameworks como Django e Spring Boot. Essa combinação me permite criar aplicações eficientes e inteligentes. Estou sempre em busca de novos desafios para impulsionar meu crescimento profissional.",
  items: [
    {
      institution: "Udemy",
      degree: "Formação IA e Machine Learning",
      duration: "25 Horas",
    },
    {
      institution: "DIO",
      degree: "Formação Ruby Developer",
      duration: "36 Horas",
    },
    {
      institution: "DIO",
      degree: "Formação Java Developer",
      duration: "76 Horas",
    },
    {
      institution: "DIO",
      degree: "Formação Machine Learning Specialist",
      duration: "96 Horas",
    },
    {
      institution: "FMG-Faculdade Metodista Granbery",
      degree: "Graduação em Sistema de Informação",
      duration: "2022-2025",
    },
    
  ],
};

// skills data
const skills = {
  title: "Minhas skills",
  description:
    "Tenho habilidades sólidas em tecnologias de back-end, incluindo Python, Django, e Spring Boot. Além disso, sou proficiente em HTML, CSS e JavaScript para desenvolvimento web e tenho experiência com Angular para front-end e desenvolvimento Android.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaPython />,
      name: "Pyhton",
    },
    {
      icon: <SiDjango />,
      name: "Django",
    },
    {
      icon: <SiSpringboot />,
      name: "Springboot",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaAngular />,
      name: "Angula",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Minhas qualificações</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
