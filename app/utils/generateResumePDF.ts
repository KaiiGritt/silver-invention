import { jsPDF } from 'jspdf';

export const generateResumePDF = () => {
  const doc = new jsPDF();

  // Set initial position
  let yPos = 20;

  // Title/Name
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('John Loyd Serapion', 105, yPos, { align: 'center' });

  yPos += 10;

  // Contact Info
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('20 years old | johnloydserapion96@gmail.com | +63992183234', 105, yPos, { align: 'center' });

  yPos += 15;

  // About Me Section
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('About Me', 20, yPos);

  yPos += 7;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const aboutText = 'Hello! My name is John Loyd Serapion. I am a passionate and motivated student currently pursuing my studies in Information Technology at Sorsogon State University, Bulan Campus. I am dedicated to continuously learning and improving my skills, especially in programming, web development, and emerging technologies.';
  const aboutLines = doc.splitTextToSize(aboutText, 170);
  doc.text(aboutLines, 20, yPos);

  yPos += aboutLines.length * 5 + 10;

  // Skills & Interests
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Skills & Interests', 20, yPos);

  yPos += 7;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const skills = [
    'Web Development (HTML, CSS, JavaScript)',
    'Programming in Java & C++',
    'Database Management',
    'UI/UX Design',
    'Problem Solving & Critical Thinking',
    'Team Collaboration'
  ];

  skills.forEach((skill) => {
    doc.text(`• ${skill}`, 25, yPos);
    yPos += 6;
  });

  yPos += 5;

  // Goals
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Goals', 20, yPos);

  yPos += 7;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const goalText = 'My goal is to become a professional software developer who can build innovative and user-friendly solutions. I aim to contribute to projects that make technology more accessible and impactful in people\'s daily lives.';
  const goalLines = doc.splitTextToSize(goalText, 170);
  doc.text(goalLines, 20, yPos);

  yPos += goalLines.length * 5 + 10;

  // Educational Background
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Educational Background', 20, yPos);

  yPos += 7;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const education = [
    'Colambis Elementary School (2010-2016)',
    'Casiguran Technical Vocational School (2017-2020)',
    'Mercedes B. Peralta Senior High School (2021-2023)',
    'Sorsogon State University Bulan Campus (2023-2027)'
  ];

  education.forEach((edu) => {
    doc.text(`• ${edu}`, 25, yPos);
    yPos += 6;
  });

  yPos += 5;

  // Check if we need a new page
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }

  // Courses by Year
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Courses by Year', 20, yPos);

  yPos += 10;

  // First Year
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('First Year Level', 25, yPos);

  yPos += 6;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const firstYear = [
    'Introduction To Computing',
    'Understanding the Self',
    'Environmental Science',
    'Algebra',
    'Discrete Math',
    'PATHFIT 1'
  ];

  firstYear.forEach((course) => {
    doc.text(`• ${course}`, 30, yPos);
    yPos += 5;
  });

  yPos += 5;

  // Check if we need a new page
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }

  // Second Year
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Second Year Level', 25, yPos);

  yPos += 6;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const secondYear = [
    'Object Oriented Programming',
    'Platform Technologies',
    'Ethics',
    'Quantitative Methods',
    'Mathematics in Modern World',
    'PATHFIT 2'
  ];

  secondYear.forEach((course) => {
    doc.text(`• ${course}`, 30, yPos);
    yPos += 5;
  });

  yPos += 5;

  // Check if we need a new page
  if (yPos > 250) {
    doc.addPage();
    yPos = 20;
  }

  // Third Year
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Third Year Level', 25, yPos);

  yPos += 6;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const thirdYear = [
    'Advance Database Management System',
    'Frontend Development',
    'Art Appreciation',
    'System Integration and Architecture',
    'UI and UX Design',
    'Application Development and Emerging Technologies'
  ];

  thirdYear.forEach((course) => {
    doc.text(`• ${course}`, 30, yPos);
    yPos += 5;
  });

  yPos += 10;

  // Contact
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Contact', 20, yPos);

  yPos += 7;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Email: johnloydserapion96@gmail.com', 25, yPos);
  yPos += 6;
  doc.text('Phone: +639307116484', 25, yPos);

  // Save the PDF
  doc.save('Resume_JohnLoyd_Serapion.pdf');
};
