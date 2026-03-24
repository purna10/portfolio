import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, 
  Award, Code, Database, BrainCircuit, Terminal, 
  BookOpen, CheckCircle, Lightbulb, ShieldCheck 
} from 'lucide-react';
import Chatbot from './Chatbot';

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500/30 font-sans">
      
      {/* --- STICKY NAV --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-emerald-400 tracking-tighter uppercase">Purna Ghadi</span>
          <div className="hidden md:flex space-x-6 text-[10px] font-black uppercase tracking-[0.2em]">
            <a href="#experience" className="hover:text-emerald-400 transition">Experience</a>
            <a href="#projects" className="hover:text-emerald-400 transition">Projects</a>
            <a href="#skills" className="hover:text-emerald-400 transition">Skills</a>
            <a href="#education" className="hover:text-emerald-400 transition">Education</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* --- HEADER & CONTACT --- */}
        <motion.section {...fadeIn} className="mb-24">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">Purna Ghadi</h1>
          <div className="flex flex-wrap gap-6 text-emerald-400 font-mono text-sm mb-10">
            <span className="flex items-center gap-2"><MapPin size={16}/> Ghatkopar, Mumbai</span>
            <span className="flex items-center gap-2"><Phone size={16}/> 8355829226</span>
            <span className="flex items-center gap-2"><Mail size={16}/> purnaghadi923@gmail.com</span>
          </div>
          <p className="max-w-3xl text-xl text-slate-400 leading-relaxed">
            Aspiring <span className="text-white font-semibold underline decoration-emerald-500 underline-offset-4">Data Scientist</span> and Software Developer experienced in Artificial Intelligence, Machine Learning, and full-stack development. 
          </p>
        </motion.section>

        {/* --- OBJECTIVE --- */}
        <section className="mb-32">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
            <h2 className="text-emerald-400 uppercase text-xs font-black tracking-widest mb-4 flex items-center gap-2">
              <Lightbulb size={16}/> Objective
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Highly motivated professional with a strong educational background in Artificial Intelligence and Information Technology. Passionate about data science, AI development, and scalable software solutions, and eager to contribute to the growth and success of an organization.
            </p>
          </div>
        </section>

        {/* --- PROFESSIONAL EXPERIENCE --- */}
        <section id="experience" className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <Terminal className="text-emerald-400" /> Professional Experience
          </h2>
          
          <div className="space-y-16">
            {/* 1. Software Developer */}
            <div className="relative pl-8 border-l-2 border-emerald-500">
              <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-0 shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Software Developer</h3>
                <span className="text-emerald-400 font-mono">June 6, 2025 – Present</span>
              </div>
              <p className="text-slate-300 font-bold mb-4 uppercase text-xs tracking-widest">Talent Corner HR Services</p>
              <ul className="text-slate-400 space-y-3 text-sm list-disc list-inside leading-relaxed">
                <li>Developed <span className="text-white">Sarthi360</span>, a company CRM system used for internal business operations.</li>
                <li>Managed the entire project lifecycle from development to deployment.</li>
                <li>Worked as a Project Leader, coordinating development and system improvements.</li>
                <li>Managed and maintained internal platforms SarthIQ and Sarthi Jobs Portal.</li>
                <li>Implemented new features, system optimizations, and cloud deployments.</li>
                <li>Utilized AI models to automate processes and enhance platform efficiency.</li>
              </ul>
            </div>

            {/* 2. AI & Python Intern */}
            <div className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-[9px] top-0"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">AI & Python Developer Intern</h3>
                <span className="text-slate-500 font-mono">Sept 2024 – Dec 2024</span>
              </div>
              <p className="text-slate-400 font-bold mb-6 uppercase text-xs tracking-widest">Hungama Digital Media Entertainment Pvt. Ltd.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                  <h5 className="text-emerald-400 text-xs font-bold mb-1">Logs Extraction Tool</h5>
                  <p className="text-slate-500 text-xs">Python-based tool to extract and analyze server logs.</p>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                  <h5 className="text-emerald-400 text-xs font-bold mb-1">Hungama Fusion AI Chatbot</h5>
                  <p className="text-slate-500 text-xs">AI chatbot for automation and internal assistance.</p>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                  <h5 className="text-emerald-400 text-xs font-bold mb-1">Redmine Data Extraction</h5>
                  <p className="text-slate-500 text-xs">Automated extraction and processing of project data.</p>
                </div>
                <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                  <h5 className="text-emerald-400 text-xs font-bold mb-1">AI Image Generator</h5>
                  <p className="text-slate-500 text-xs">AI-based system to generate images.</p>
                </div>
              </div>
            </div>

            {/* 3. Stark Cyber Tech */}
            <div className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-[9px] top-0"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">AI Python Developer Intern</h3>
                <span className="text-slate-500 font-mono">May 2024 – Aug 2024</span>
              </div>
              <p className="text-slate-400 font-bold mb-4 uppercase text-xs tracking-widest">Stark Cyber Tech</p>
              <ul className="text-slate-500 space-y-2 text-sm list-disc list-inside">
                <li>Developed AI-based automation tools using Python.</li>
                <li>Worked on data processing and machine learning tasks.</li>
                <li><span className="text-slate-300">Live Location Tracker:</span> Track live location using generated URLs.</li>
              </ul>
            </div>

            {/* 4. Dezignolics */}
            <div className="relative pl-8 border-l-2 border-slate-800">
              <div className="absolute w-4 h-4 bg-slate-800 rounded-full -left-[9px] top-0"></div>
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Data Science Intern</h3>
                <span className="text-slate-500 font-mono">March 2023 – March 2023</span>
              </div>
              <p className="text-slate-400 font-bold mb-4 uppercase text-xs tracking-widest">Dezignolics</p>
              <ul className="text-slate-500 space-y-2 text-sm list-disc list-inside">
                <li>Worked on data analysis and machine learning models.</li>
                <li>Performed data preprocessing and predictive modeling tasks.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- ACADEMIC PROJECTS --- */}
        <section id="projects" className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12">Academic Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-emerald-500/50 transition">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-white">Diabetes Prediction</h4>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Jan - Feb 2023</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Built a machine learning model using a Kaggle dataset to predict diabetes risk. Performed data preprocessing, model training, and evaluation.</p>
              <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 font-bold rounded border border-emerald-500/20">SCIKIT-LEARN</span>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-emerald-500/50 transition">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-bold text-white">IPL Prediction Model</h4>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">July - Aug 2023</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Applied machine learning techniques for sports data analysis and prediction based on historical IPL datasets.</p>
              <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 font-bold rounded border border-emerald-500/20">DATA ANALYSIS</span>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-emerald-500/50 transition">
              <h4 className="text-xl font-bold text-white mb-2">Sports Club Management</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Developed a web-based system to manage club activities and member records as a University Project.</p>
              <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 font-bold rounded border border-emerald-500/20">WEB SYSTEMS</span>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl group hover:border-emerald-500/50 transition">
              <h4 className="text-xl font-bold text-white mb-2">Crime Rate Prediction</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">Built a machine learning model to analyze and predict crime trends using public statistical data.</p>
              <span className="text-[10px] px-2 py-1 bg-emerald-500/10 text-emerald-400 font-bold rounded border border-emerald-500/20">PREDICTIVE ML</span>
            </div>
          </div>
        </section>

        {/* --- EDUCATION --- */}
        <section id="education" className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <BookOpen className="text-emerald-400" /> Education
          </h2>
          <div className="space-y-8">
            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h4 className="text-xl font-bold text-white">Master’s (PG) – AI & Information Technology</h4>
                <p className="text-slate-400">D G Ruparel College, Mahim, Mumbai</p>
                <p className="text-slate-500 text-xs">Sept 2022 – Aug 2024</p>
              </div>
              <div className="mt-4 md:mt-0 text-2xl font-black text-emerald-400">CGPI: 8.52</div>
            </div>

            <div className="p-8 bg-slate-900/30 border border-slate-800 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h4 className="text-xl font-bold text-white">Bachelor of Science (B.Sc IT)</h4>
                <p className="text-slate-400">D G Ruparel College, Mahim, Mumbai</p>
                <p className="text-slate-500 text-xs">July 2019 – May 2022</p>
              </div>
              <div className="mt-4 md:mt-0 text-2xl font-black text-emerald-400">GPA: 7.89</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-xl">
                <h5 className="text-slate-300 font-bold uppercase text-[10px] tracking-widest mb-1">HSC (2019)</h5>
                <p className="text-slate-500 text-xs mb-2">Ramniranjan Jhunjhunwala College</p>
                <div className="text-lg font-bold text-white">63.69%</div>
              </div>
              <div className="p-6 bg-slate-900/10 border border-slate-900 rounded-xl">
                <h5 className="text-slate-300 font-bold uppercase text-[10px] tracking-widest mb-1">SSC (2017)</h5>
                <p className="text-slate-500 text-xs mb-2">Holy Cross High School</p>
                <div className="text-lg font-bold text-white">88.20%</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SKILLS & CERTIFICATIONS --- */}
        <section id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 uppercase text-xs tracking-widest text-emerald-400">Technical Skills</h2>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase mb-3 tracking-widest">Programming & Dev</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Java", "SQL", "HTML", "CSS", "React.js", "Node.js", "Tailwind CSS"].map(s => <span key={s} className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs text-slate-300 rounded">{s}</span>)}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase mb-3 tracking-widest">Machine Learning</p>
                <div className="flex flex-wrap gap-2">
                  {["Linear Regression", "Logistic Regression", "Decision Trees", "SVM", "Random Forest", "XGBoost", "AdaBoost", "K-Means", "PCA"].map(s => <span key={s} className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs text-emerald-400 rounded">{s}</span>)}
                </div>
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase mb-3 tracking-widest">Cloud & DevOps</p>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "GitHub", "Postman", "Vercel", "DigitalOcean", "Render", "ElasticSearch"].map(s => <span key={s} className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs text-slate-300 rounded">{s}</span>)}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 uppercase text-xs tracking-widest text-emerald-400">Awards & Recognition</h2>
            <div className="p-8 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl mb-12">
              <Award className="text-emerald-400 mb-4" size={32} />
              <h4 className="text-xl font-bold text-white mb-2">Outstanding Performance Award (2025)</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Recognized by <span className="text-white">Talent Corner HR Services</span> for successfully developing the Sarthi360 CRM system and demonstrating exceptional performance and contribution towards improving internal business operations.</p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 uppercase text-xs tracking-widest text-emerald-400">Certifications</h2>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={16}/>
                <div>
                  <h5 className="text-white font-bold text-sm">Data Science Course</h5>
                  <p className="text-slate-500 text-xs">Dcodetech Industrial Training, Thane</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <CheckCircle className="text-emerald-500 shrink-0 mt-1" size={16}/>
                <div>
                  <h5 className="text-white font-bold text-sm">Business Analytics with Excel</h5>
                  <p className="text-slate-500 text-xs">Beginner Level Certification</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* --- SOFT SKILLS & DECLARATION --- */}
        <footer className="pt-20 border-t border-slate-900">
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {["Problem Solving", "Critical Thinking", "Adaptability", "Communication", "Team Collaboration", "Time Management"].map(skill => (
              <span key={skill} className="px-4 py-2 bg-slate-900 text-[10px] font-bold uppercase tracking-widest text-slate-500 rounded-full border border-slate-800">{skill}</span>
            ))}
          </div>
          
          <div className="text-center">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 mb-8">Declaration</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto italic mb-12">"I hereby declare that the information provided is true to the best of my knowledge and belief."</p>
            <p className="text-emerald-400 font-mono text-xs mb-2">Yours faithfully,</p>
            <p className="text-3xl font-bold text-white">Purna Suresh Ghadi</p>
          </div>
        </footer>
      </main>

      <Chatbot />
    </div>
  );
};

export default App;