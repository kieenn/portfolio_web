import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-secondary">Hello, I'm</span><br />
                Mai Nguyen Trung Kien
              </h1>
              <h2 className="text-2xl md:text-3xl text-tertiary mb-6">Software Engineer</h2>
              <p className="text-lg mb-8 text-tertiary max-w-lg">
                Currently a senior software engineering student at Saigon University, I'm deeply engaged in mastering the intricacies of full-stack development.
                My coursework and personal projects have provided me with hands-on experience in building complete, scalable applications.
                In addition, I've gained valuable backend developer experience, albeit less than a year,
                allowing me to understand the critical role of server-side logic in application development.
                I'm passionate about the entire development lifecycle, from conceptualizing ideas to deploying finished products.
                My drive to solve complex problems and build innovative, user-focused applications stems from a desire to create technology that makes a positive impact.
                I'm actively seeking opportunities to apply my skills in a professional setting and contribute to a team that values innovation and collaboration.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#contact" 
                  className="bg-secondary text-primary px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors duration-300"
                >
                  Contact Me
                </a>
                <a 
                  href="./portfolio_web/assest/cv - Mai Nguyen Trung Kien.pdf"
                  className="border border-secondary text-secondary px-6 py-3 rounded-md font-medium hover:bg-secondary/10 transition-colors duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDownload className="mr-2" /> Resume
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
                  <img 
                    src="./portfolio_web/src/assest/avt.JPG"
                    alt="my avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-8 w-full max-w-md"></div>
                  <iframe
                    width="100%" 
                    height="352"
                    src="https://open.spotify.com/embed/playlist/6QKvr8StHZYwsiN2v8BJMb?utm_source="
                    allow="autoplay; encrypted-media"               
                    className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
              I'm a highly motivated software engineering professional, passionate about building robust and efficient applications.
            </p>
              <p className="text-lg mb-6">
                As a developer undergraduate at Saigon University with a degree in Information Technology,
                I've cultivated a solid understanding of software development lifecycles and problem-solving techniques.
                I strive for excellence in my work, driven by a desire to deliver high-quality, impactful software solutions.
              </p>
              <p className="text-lg">
                My long-term goal is to specialize as an AI Engineer. To achieve this, I'm actively pursuing opportunities to deepen my knowledge in areas
                such as machine learning, data structures, and algorithms, and to apply these skills in practical software development contexts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-secondary mb-2">Technical Skills</h4>
                  <ul className="space-y-2">
                    <li><span className="font-bold">PROGRAMMING LANGUAGES:</span> Python, C/C++, Java, JavaScript, PHP, C#</li>
                    <li><span className="font-bold">DATABASES</span>: SQLite, MySQL, Microsoft SQL Server, Neo4j, MongoDB,Postgres</li>
                    <li><span className="font-bold">SOFTWARE & TOOL</span>: VS Code, Eclipse, Jupyter Notebook, JetBrains, Cursor, Git, Trae IDE</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-secondary mb-2">Soft Skills</h4>
                  <ul className="space-y-2">
                    <li>Teamwork</li>
                    <li>Multitasking</li>
                    <li>Prolem-solving</li>
                    <li>Time Management</li>
                    <li>Creativity</li>
                    <li>Fast learner</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-secondary mb-2">Education</h4>
                <p className="font-semibold">Sai Gon University</p>
                <p>Information Technology</p>
                <p className="text-tertiary">2021 - 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-lg mb-6">
                I'm always open to discussing new projects, opportunities, or partnerships. Feel free to reach out to me using any of the following contact methods.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-secondary mr-4" size={24} />
                  <a href="mailto:mainguyentrungkienn2509@gmail.com" className="hover:text-secondary transition-colors duration-300">
                  mainguyentrungkienn2509@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <FaPhone className="text-secondary mr-4" size={24} />
                  <a href="tel:0355881925" className="hover:text-secondary transition-colors duration-300">
                    0355881925
                  </a>
                </div>
                <div className="flex items-center">
                  <FaLinkedin className="text-secondary mr-4" size={24} />
                  <a href="https://www.linkedin.com/in/kiien2509/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
                    linkedin.com/in/kiien2509
                  </a>
                </div>
                <div className="flex items-center">
                  <FaGithub className="text-secondary mr-4" size={24} />
                  <a href="https://github.com/kieenn" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors duration-300">
                    github.com/kieenn
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 bg-dark border border-tertiary/30 rounded-md focus:outline-none focus:border-secondary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 bg-dark border border-tertiary/30 rounded-md focus:outline-none focus:border-secondary"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 bg-dark border border-tertiary/30 rounded-md focus:outline-none focus:border-secondary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-secondary text-primary px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition-colors duration-300 justify-self-start"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;