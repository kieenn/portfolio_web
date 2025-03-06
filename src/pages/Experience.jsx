import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Intern Developer",
      company: "Traditional Medicine Institute",
      location: "Ho Chi Minh city",
      date: "Jun 2023 - Aug 2023",
      description: ": Participated in the development of an online pharmacy website utilizing C#, HTML, CSS,\n" +
          "Bootstrap, .NET Core, and SQL Server, adhering to the MVC architectural pattern. Contributed to requirement\n" +
          "analysis, database design, and data handling for product, order, and invoice management functionalities.\n" +
          "Additionally, I gained practical experience in maintaining and upgrading desktop computer systems.",
      skills: ["Coding", "Analyst", "Testing", "Data Entry"],
      icon: <FaBriefcase />
    },
    {
      title: "Photographer",
      company: "Loa Tai Xuong",
      location: "Ho Chi Minh city",
      date: "Jan 2024 - Feb 2025",
      description: "",
      skills: ["Editing", "Photography"],
      icon: <FaBriefcase />
    },
    {
      title: "Assistant Trainer",
      company: "AI Education",
      location: "Ho Chi Minh city",
      date: "Sep 2024 - Present",
      description: "I support the instruction of primary and high school teachers, integrating AI tools for enhanced\n" +
          "learning experiences. This involves utilizing Google Workspace for Education and other digital platforms to\n" +
          "deliver engaging and effective lessons.\n",
      skills: ["Communication", "Teaching", "Artificial Intelligence"],
      icon: <FaBriefcase />
    },
    {
      title: "Contractor",
      company: "Outlier",
      location: "Ho Chi Minh city",
      date: "Sep 2024 - Present",
      description: "As a remote Vietnamese language expert for Outlier, I refine AI language models by providing\n" +
          "feedback and revisions on AI-generated text. My tasks include evaluating and ranking different responses, and\n" +
          "rewriting and improving existing outputs. Additionally, I review and rate the work of other language experts,\n" +
          "ensuring high-quality contributions across the platform.\n",
      skills: ["Communication", "Teaching", "Artificial Intelligence"],
      icon: <FaBriefcase />
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-16">Professional Experience</h2>
        
        <VerticalTimeline lineColor="#64ffda">
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{ background: '#0a192f', color: '#ccd6f6', border: '1px solid rgba(136, 146, 176, 0.2)' }}
              contentArrowStyle={{ borderRight: '7px solid #0a192f' }}
              date={exp.date}
              iconStyle={{ background: '#64ffda', color: '#0a192f' }}
              icon={exp.icon}
            >
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <h4 className="text-secondary">{exp.company}</h4>
              <p className="text-tertiary mb-2">{exp.location}</p>
              <p className="mb-4">{exp.description}</p>
              <div>
                <h5 className="font-semibold mb-2">Skills Used:</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-primary border border-secondary/30 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;