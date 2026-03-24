const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI("AIzaSyD8s1q86kNdgViyDhCPT6se9OrcnKsCEL4");

const RESUME_DATA = `
PERSONAL DETAILS:
Purna Suresh Ghadi, Ghatkopar, Mumbai. Phone: 8355829226. Email: purnaghadi923@gmail.com.
Objective: Aspiring Data Scientist and Software Developer.

PROFESSIONAL EXPERIENCE:
1. Software Developer at Talent Corner HR Services (June 6, 2025 – Present). Developed Sarthi360 CRM, SarthIQ, and Sarthi Jobs Portal. Won Outstanding Performance Award 2025.
2. AI & Python Developer Intern at Hungama Digital Media (Sept 2024 – Dec 2024). Projects: Logs Extraction Tool, Hungama Fusion AI Chatbot, Redmine Data Extraction, AI Image Generator.
3. AI Python Developer Intern at Stark Cyber Tech (May 2024 – Aug 2024). Built AI automation tools and a Live Location Tracker.
4. Data Science Intern at Dezignolics (March 2023 – March 2023). Data analysis and ML modeling.

ACADEMIC PROJECTS:
- Diabetes Prediction Model (Jan-Feb 2023).
- IPL Dataset Prediction Model (July-Aug 2023).
- Sports Club Management System (University Project).
- Crime Rate Prediction Model.

EDUCATION:
- Master’s (PG) AI & IT: D G Ruparel College (2022–2024). CGPI: 8.52.
- B.Sc IT: D G Ruparel College (2019–2022). GPA: 7.89.
- HSC: Ramniranjan Jhunjhunwala College (2019). Score: 63.69%.
- SSC: Holy Cross High School (2017). Score: 88.20%.

TECHNICAL SKILLS:
Python, Java, SQL, HTML, CSS, React.js, Node.js, Tailwind CSS. ML models: Linear Regression, SVM, XGBoost, Random Forest, PCA. DevOps: Docker, ElasticSearch, DigitalOcean. Data Viz: Power BI.

CERTIFICATIONS: Data Science Course (Dcodetech), Business Analytics with Excel.
AWARDS: Outstanding Performance Award (2025) for Sarthi360 CRM development.
`;

app.post('/chat', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `You are the personal AI assistant for Purna Ghadi. 
    Use this resume data to answer: ${RESUME_DATA}. 
    User Question: ${req.body.message}. 
    Keep it professional and brief. If you don't know, say contact Purna at purnaghadi923@gmail.com.`;

    const result = await model.generateContent(prompt);
    res.json({ response: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: "API Failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));