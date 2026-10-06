import fs from 'fs';
import path from 'path';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

async function generateExactResume() {
  const pdfDoc = await PDFDocument.create();
  // Standard US Letter: 612 x 792 pt
  const page = pdfDoc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const primaryColor = rgb(0.08, 0.08, 0.08); // Near black
  const secondaryColor = rgb(0.2, 0.2, 0.2);
  const linkColor = rgb(0.05, 0.35, 0.75); // Blue for links
  const ruleColor = rgb(0.2, 0.2, 0.2);

  let y = height - 36;
  const leftMargin = 36;
  const rightMargin = width - 36;
  const contentWidth = rightMargin - leftMargin;

  // Title: Yash Pratap Singh
  page.drawText('Yash Pratap Singh', {
    x: leftMargin,
    y: y,
    size: 20,
    font: fontBold,
    color: primaryColor,
  });

  y -= 16;

  // Contact line 1
  page.drawText('LinkedIn: ', { x: leftMargin, y, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('https://www.linkedin.com/in/yash-pratap-singh1904/', {
    x: leftMargin + 42,
    y,
    size: 8.5,
    font: fontRegular,
    color: linkColor,
  });

  page.drawText('E-mail: ', { x: 380, y, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('yashh.p.s90@gmail.com', {
    x: 415,
    y,
    size: 8.5,
    font: fontRegular,
    color: linkColor,
  });

  y -= 11;

  // Contact line 2
  page.drawText('GitHub: ', { x: leftMargin, y, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('https://github.com/Yash-Pratap-Singh-1904', {
    x: leftMargin + 36,
    y,
    size: 8.5,
    font: fontRegular,
    color: linkColor,
  });

  page.drawText('Mobile: ', { x: 380, y, size: 8.5, font: fontBold, color: primaryColor });
  page.drawText('+91-7819854956', {
    x: 418,
    y,
    size: 8.5,
    font: fontRegular,
    color: primaryColor,
  });

  y -= 13;

  function drawSectionHeader(title) {
    page.drawText(title, {
      x: leftMargin,
      y,
      size: 10,
      font: fontBold,
      color: primaryColor,
    });
    y -= 3;
    page.drawLine({
      start: { x: leftMargin, y },
      end: { x: rightMargin, y },
      thickness: 0.75,
      color: ruleColor,
    });
    y -= 10;
  }

  function wrapText(text, maxWidth, font, size) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (const word of words) {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth <= maxWidth) {
        currentLine = testLine;
      } else {
        if (currentLine) lines.push(currentLine);
        currentLine = word;
      }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
  }

  function drawBullet(text, indent = 46, bulletChar = '•') {
    const bulletX = leftMargin + 8;
    const textX = leftMargin + 16;
    const maxW = rightMargin - textX;
    const lines = wrapText(text, maxW, fontRegular, 8.2);

    page.drawText(bulletChar, {
      x: bulletX,
      y,
      size: 8,
      font: fontRegular,
      color: primaryColor,
    });

    lines.forEach((line, index) => {
      page.drawText(line, {
        x: textX,
        y: y - (index * 9.5),
        size: 8.2,
        font: fontRegular,
        color: secondaryColor,
      });
    });

    y -= (lines.length * 9.5) + 1.5;
  }

  // --- SKILLS ---
  drawSectionHeader('SKILLS');

  const skillsList = [
    { label: 'Languages: ', value: 'Java, Python, C, C++, SQL' },
    { label: 'Libraries/Frameworks: ', value: 'NumPy, Pandas, Scikit-learn, Matplotlib, HTML, CSS, Javascript' },
    { label: 'Tools/Platforms: ', value: 'Git, GitHub, Jupyter Notebook, Google Colab, VS Code, Cisco Packet Tracer, Linux' },
    { label: 'Soft Skills: ', value: 'Problem-Solving, Analytical Thinking, Team Collaboration, Continuous Learning, Cross-Functional Communication, Adaptability, Disciplined' }
  ];

  skillsList.forEach((item) => {
    const bulletX = leftMargin + 8;
    const textX = leftMargin + 16;
    page.drawText('•', { x: bulletX, y, size: 8, font: fontRegular, color: primaryColor });
    page.drawText(item.label, { x: textX, y, size: 8.2, font: fontBold, color: primaryColor });
    const labelW = fontBold.widthOfTextAtSize(item.label, 8.2);
    const valueLines = wrapText(item.value, rightMargin - (textX + labelW), fontRegular, 8.2);
    
    if (valueLines.length === 1) {
      page.drawText(item.value, { x: textX + labelW, y, size: 8.2, font: fontRegular, color: secondaryColor });
      y -= 10;
    } else {
      const fullText = item.label + item.value;
      const allLines = wrapText(fullText, rightMargin - textX, fontRegular, 8.2);
      allLines.forEach((l, lIdx) => {
        if (lIdx === 0) {
          page.drawText(item.label, { x: textX, y, size: 8.2, font: fontBold, color: primaryColor });
          const remainder = l.slice(item.label.length);
          page.drawText(remainder, { x: textX + labelW, y, size: 8.2, font: fontRegular, color: secondaryColor });
        } else {
          page.drawText(l, { x: textX, y: y - (lIdx * 9.5), size: 8.2, font: fontRegular, color: secondaryColor });
        }
      });
      y -= (allLines.length * 9.5) + 1.5;
    }
  });

  y -= 3;

  // --- PROJECTS ---
  drawSectionHeader('PROJECTS');

  // Project 1
  page.drawText('Role-Based Hospital Management System (MediFlow)', { x: leftMargin, y, size: 9, font: fontBold, color: primaryColor });
  page.drawText(' | GitHub', { x: leftMargin + fontBold.widthOfTextAtSize('Role-Based Hospital Management System (MediFlow)', 9), y, size: 9, font: fontRegular, color: linkColor });
  page.drawText("Jul' 2026", { x: rightMargin - 45, y, size: 8.5, font: fontBold, color: primaryColor });
  y -= 11;

  drawBullet('Architected an enterprise-grade hospital management portal in Java implementing strict Role-Based Access Control (RBAC) across 7 distinct actors (Admin, Doctor, Patient, Pharmacist, Cashier, Lab Specialist, Receptionist) to enforce end-to-end medical data privacy.');
  drawBullet('Engineered a decoupled, multi-department pipeline managing state transitions across patient registration, clinical diagnosis, dynamic lab test routing, and automated multi-tier billing calculations.');
  drawBullet('Applied core Object-Oriented Design (OOP) principles—including polymorphism, interfaces, and composition alongside Java Collections and custom exception handling to ensure data integrity and zero redundant record duplication across workflows.');

  page.drawText('Tech: ', { x: leftMargin + 8, y, size: 8.2, font: fontBold, color: primaryColor });
  page.drawText('Java, Object-Oriented Programming (OOP), Data Structures & Collections, RBAC, HTML/CSS, JavaScript, Git', {
    x: leftMargin + 36,
    y,
    size: 8.2,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 13;

  // Project 2
  page.drawText('MedPredict: Clinical Health Risk Prediction Platform', { x: leftMargin, y, size: 9, font: fontBold, color: primaryColor });
  page.drawText(' | GitHub', { x: leftMargin + fontBold.widthOfTextAtSize('MedPredict: Clinical Health Risk Prediction Platform', 9), y, size: 9, font: fontRegular, color: linkColor });
  page.drawText("Apr' 2025", { x: rightMargin - 45, y, size: 8.5, font: fontBold, color: primaryColor });
  y -= 11;

  drawBullet('Architected the backend ML data pipeline across 4 clinical disease modules (Obesity, Heart Disease, Sleep Apnea, Diabetes), implementing data deduplication (723 rows removed), imputation, and target leakage prevention.');
  drawBullet('Handled clinical class imbalance using SMOTE and trained ensemble architectures (XGBoost, Random Forest), achieving 84.93% accuracy (84.39% F1-score) on Obesity classification and 78.69% accuracy on Heart Disease screening.');
  drawBullet('Evaluated cross-validation performance via 10-fold Stratified Cross-Validation and engineered an optimized inference pipeline with custom probability thresholding (0.3 threshold) to maximize clinical recall for high-risk detection.');

  page.drawText('Tech: ', { x: leftMargin + 8, y, size: 8.2, font: fontBold, color: primaryColor });
  page.drawText('Python, Scikit-Learn, XGBoost, Random Forest, SMOTE, Pandas, NumPy, 10-Fold Cross-Validation, Flask', {
    x: leftMargin + 36,
    y,
    size: 8.2,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 14;

  // --- TRAINING & INTERNSHIP ---
  drawSectionHeader('TRAINING & INTERNSHIP');

  // Internship 1
  page.drawText('Data Structures and Algorithms using Java Programming | CipherSchools', { x: leftMargin, y, size: 8.8, font: fontBold, color: primaryColor });
  page.drawText(' | Certificate', { x: leftMargin + fontBold.widthOfTextAtSize('Data Structures and Algorithms using Java Programming | CipherSchools', 8.8), y, size: 8.8, font: fontRegular, color: linkColor });
  page.drawText("Aug' 2026", { x: rightMargin - 48, y, size: 8.2, font: fontBold, color: primaryColor });
  y -= 10.5;

  drawBullet('Completed intensive core computer science training, mastering Data Structures, Algorithms, and Object Oriented Programming (OOP) paradigms in Java.');
  drawBullet('Solved algorithmic challenges focused on time-space complexity optimization (O(n log n)) across trees, graphs, dynamic programming, and recursion.');
  drawBullet('Engineered a role-based hospital management capstone using Java Collections, abstract interfaces, and robust exception handling to simulate enterprise workflows.');

  // Internship 2
  page.drawText('Machine Learning Intern | YHills Edutech', { x: leftMargin, y, size: 8.8, font: fontBold, color: primaryColor });
  page.drawText(' | Certificate', { x: leftMargin + fontBold.widthOfTextAtSize('Machine Learning Intern | YHills Edutech', 8.8), y, size: 8.8, font: fontRegular, color: linkColor });
  page.drawText("Apr' 2025", { x: rightMargin - 48, y, size: 8.2, font: fontBold, color: primaryColor });
  y -= 10.5;

  drawBullet('Developed and evaluated supervised machine learning models in Python using NumPy, Pandas, and Scikit-Learn, achieving robust baseline accuracy across tabular datasets.');
  drawBullet('Implemented end-to-end data preprocessing pipelines, covering automated missing value imputation, outlier detection, and categorical feature encoding to improve data quality.');
  drawBullet('Optimized model evaluation workflows using cross-validation and hyper parameter tuning, standardizing performance benchmarking against precision, recall, and ROC-AUC metrics.');

  y -= 2;

  // --- CERTIFICATES ---
  drawSectionHeader('CERTIFICATES');

  const certList = [
    { title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate | Oracle | Certificate', date: "Sep' 2026" },
    { title: 'Database Management System Part – 2 | Infosys Springboard | Certificate', date: "Aug' 2026" },
    { title: 'Database Management System Part – 1 | Infosys Springboard | Certificate', date: "Jul' 2026" },
    { title: 'Programming in JAVA | Neo Colab (LPU & iamneo) | Certificate', date: "May' 2026" },
    { title: 'Machine Learning with Python | YHills | Certificate', date: "Apr' 2025" },
    { title: 'Linux Commands and Shell Scripting | Skillera | Certificate', date: "Nov' 2024" },
  ];

  certList.forEach((c) => {
    page.drawText('•', { x: leftMargin + 8, y, size: 8, font: fontRegular, color: primaryColor });
    page.drawText(c.title, { x: leftMargin + 16, y, size: 8.2, font: fontRegular, color: primaryColor });
    page.drawText(c.date, { x: rightMargin - 48, y, size: 8, font: fontBold, color: primaryColor });
    y -= 9.5;
  });

  y -= 2;

  // --- ACHIEVEMENTS ---
  drawSectionHeader('ACHIEVEMENTS');

  const achieveList = [
    { text: 'Serving as Head of Technical Team — Accenture Emph Club | LPU CPE | Link', date: 'Present' },
    { text: 'Earned/Secured "Top Performer" & Contest Winner among 500+ participants — Tech Synergy Coding Contest | CipherSchools | Certificate', date: "July' 2026" },
    { text: 'Secured 3rd Position among 300+ CS students — Byte Battle 1.0: Technical Quiz Competition | Lovely Professional University | Certificate', date: "Nov' 2024" },
    { text: 'Secured Top 30 Rank among 1,000+ engineering participants — CodeXtreme 2.0 Neo Codeathon | iamneo & LPU | Certificate', date: "Apr' 2024" },
  ];

  achieveList.forEach((a) => {
    const lines = wrapText(a.text, rightMargin - (leftMargin + 16 + 55), fontRegular, 8.2);
    page.drawText('•', { x: leftMargin + 8, y, size: 8, font: fontRegular, color: primaryColor });
    lines.forEach((l, lIdx) => {
      page.drawText(l, { x: leftMargin + 16, y: y - (lIdx * 9.5), size: 8.2, font: fontRegular, color: primaryColor });
    });
    page.drawText(a.date, { x: rightMargin - 48, y, size: 8, font: fontBold, color: primaryColor });
    y -= (lines.length * 9.5) + 1;
  });

  y -= 2;

  // --- CO-CURRICULAR ACTIVITIES ---
  drawSectionHeader('CO-CURRICULAR ACTIVITIES');

  const coCurrList = [
    { text: 'Community Outreach Intern — CyberSmart Awareness (WNS Cares Foundation) | Certificate', date: "Sep' 2025" },
    { text: 'Computer Programming Trainee (72-Hour MOOC) — iamneo Platform & LPU | Certificate', date: "May' 2025" },
    { text: 'Advanced Data Analysis Participant — Data Made Easy: Excel Workshop | LPU CPE | Certificate', date: "Feb' 2025" },
  ];

  coCurrList.forEach((c) => {
    page.drawText('•', { x: leftMargin + 8, y, size: 8, font: fontRegular, color: primaryColor });
    page.drawText(c.text, { x: leftMargin + 16, y, size: 8.2, font: fontRegular, color: primaryColor });
    page.drawText(c.date, { x: rightMargin - 48, y, size: 8, font: fontBold, color: primaryColor });
    y -= 9.5;
  });

  y -= 2;

  // --- EDUCATION ---
  drawSectionHeader('EDUCATION');

  // College
  page.drawText('Lovely Professional University', { x: leftMargin, y, size: 8.8, font: fontBold, color: primaryColor });
  page.drawText('Phagwara, Punjab', { x: rightMargin - 90, y, size: 8.2, font: fontBold, color: primaryColor });
  y -= 10;
  page.drawText('Bachelor of Technology — Computer Science and Engineering | CGPA: 8.62', { x: leftMargin, y, size: 8.2, font: fontRegular, color: primaryColor });
  page.drawText("Aug' 2024 – Present", { x: rightMargin - 90, y, size: 8.2, font: fontRegular, color: secondaryColor });
  y -= 11;

  // 12th
  page.drawText('Maria School', { x: leftMargin, y, size: 8.8, font: fontBold, color: primaryColor });
  page.drawText('Jaspur, Uttarakhand', { x: rightMargin - 95, y, size: 8.2, font: fontBold, color: primaryColor });
  y -= 10;
  page.drawText('Intermediate; Percentage: 73.5%', { x: leftMargin, y, size: 8.2, font: fontRegular, color: primaryColor });
  page.drawText("Apr' 2022 – Mar 2023", { x: rightMargin - 95, y, size: 8.2, font: fontRegular, color: secondaryColor });
  y -= 11;

  // 10th
  page.drawText('Maria School', { x: leftMargin, y, size: 8.8, font: fontBold, color: primaryColor });
  page.drawText('Jaspur, Uttarakhand', { x: rightMargin - 95, y, size: 8.2, font: fontBold, color: primaryColor });
  y -= 10;
  page.drawText('Matriculation; Percentage: 87.6%', { x: leftMargin, y, size: 8.2, font: fontRegular, color: primaryColor });
  page.drawText("Apr' 2020 – Mar 2021", { x: rightMargin - 95, y, size: 8.2, font: fontRegular, color: secondaryColor });

  // Save PDF bytes
  const pdfBytes = await pdfDoc.save();

  fs.mkdirSync('public/resume', { recursive: true });
  fs.writeFileSync('public/resume/Yash_Pratap_Singh_Resume.pdf', pdfBytes);
  fs.writeFileSync('public/Yash_Pratap_Singh_Resume.pdf', pdfBytes);
  console.log('Exact resume generated successfully, size:', pdfBytes.length);
}

generateExactResume().catch(console.error);
