'use client';

import React from 'react';

const Resume = () => {
  return (
    <div id="resume" className="min-h-screen bg-gray-100 text-gray-800 font-sans py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">John Loyd Serapion</h1>
            <p className="text-gray-600 mt-2">20 years old | johnloydserapion@gmail.com | +63992183234</p>
          </div>
          <div className="mt-4 md:mt-0">
            <a 
              href="/Resume_JohnLoyd.pdf" 
              download 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              {/* Optional download icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0-8l-4 4m4-4l4 4M12 4v8" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* About */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">About Me</h2>
          <p>
            Hello! My name is John Loyd Serapion. I am a passionate and motivated student currently pursuing my studies in Information Technology at Sorsogon State University, Bulan Campus. I am dedicated to continuously learning and improving my skills, especially in programming, web development, and emerging technologies.
          </p>
        </section>

        {/* Skills & Interests */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Skills & Interests</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Web Development (HTML, CSS, JavaScript)</li>
            <li>Programming in Java & C++</li>
            <li>Database Management</li>
            <li>UI/UX Design</li>
            <li>Problem Solving & Critical Thinking</li>
            <li>Team Collaboration</li>
          </ul>
        </section>

        {/* Goals */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Goals</h2>
          <p>
            My goal is to become a professional software developer who can build innovative and user-friendly solutions. I aim to contribute to projects that make technology more accessible and impactful in people’s daily lives.
          </p>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Educational Background</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Colambis Elementary School (2010-2016)</li>
            <li>Casiguran Technical Vocational School (2017-2020)</li>
            <li>Mercedes B. Peralta Senior High School (2021-2023)</li>
            <li>Sorsogon State University Bulan Campus (2023-2027)</li>
          </ul>
        </section>

        {/* Courses by Year */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Courses by Year</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">First Year Level</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Introduction To Computing</li>
              <li>Understanding the Self</li>
              <li>Environmental Science</li>
              <li>Algebra</li>
              <li>Discrete Math</li>
              <li>PATHFIT 1</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Second Year Level</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Object Oriented Programming</li>
              <li>Platform Technologies</li>
              <li>Ethics</li>
              <li>Quantitative Methods</li>
              <li>Mathematics in Modern World</li>
              <li>PATHFIT 2</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Third Year Level</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Advance Database Management System</li>
              <li>Frontend Development</li>
              <li>Art Appreciation</li>
              <li>System Integration and Architecture</li>
              <li>UI and UX Design</li>
              <li>Application Development and Emerging Technologies</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Projects</h2>
          <p>
            [List your notable projects here with links or brief descriptions. Example: “E-Commerce Website – Full stack development with Next.js, Tailwind CSS, and MySQL.”]
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Contact</h2>
          <p>Email: johnloydserapion@gmail.com</p>
          <p>Phone: +63992183234</p>
        </section>

      </div>
    </div>
  );
};

export default Resume;
