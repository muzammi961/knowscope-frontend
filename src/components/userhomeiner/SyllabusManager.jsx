import React from 'react';
import SmartLearnAINavbar from './navbarside/SmartLearnAINavbar';

const SyllabusManager = () => {
const subjects = [
  {
    id: 'english',
    name: 'English',
    description: 'Literature & Language',
    progress: 75,
    icon: (
      <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
      </svg>
    )
  },
  {
    id: 'malayalam',
    name: 'Malayalam',
    description: 'Regional Language',
    progress: 40,
    icon: (
      <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="m5 8 6 6"></path>
        <path d="m4 14 6-6 2-3"></path>
        <path d="M2 5h12"></path>
        <path d="M7 2h1"></path>
        <path d="m22 22-5-10-5 10"></path>
        <path d="M14 18h6"></path>
      </svg>
    )
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Molecules & Reactions',
    progress: 65,
    icon: (
      <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2v8L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45L14 10V2"></path>
        <path d="M8.5 2h7"></path>
        <path d="M7 16h10"></path>
      </svg>
    )
  },
  {
    id: 'physics',
    name: 'Physics',
    description: 'Forces & Energy',
    progress: 32,
    icon: (
      <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="1"></circle>
        <path d="M15.93 11.01c.73.84.73 2.14 0 2.98l-7.86 9.01c-.73.84-1.91.84-2.64 0a1.72 1.72 0 0 1 0-2.48l7.86-9.01c.73-.84 1.91-.84 2.64 0Z"></path>
        <path d="M8.07 11.01c-.73.84-.73 2.14 0 2.98l7.86 9.01c.73.84 1.91.84 2.64 0a1.72 1.72 0 0 0 0-2.48l-7.86-9.01c-.73-.84-1.91-.84-2.64 0Z"></path>
        <path d="M11 8.07c.84-.73 2.14-.73 2.98 0l9.01 7.86c.84.73.84 1.91 0 2.64a1.72 1.72 0 0 1-2.48 0l-9.01-7.86c-.84-.73-.84-1.91 0-2.64Z"></path>
      </svg>
    )
  },
  {
    id: 'biology',
    name: 'Biology',
    description: 'Life & Organisms',
    progress: 90,
    icon: (
      <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 18h8"></path>
        <path d="M3 22h18"></path>
        <path d="M14 22a7 7 0 1 0 0-14h-1"></path>
        <path d="M9 14h2"></path>
        <path d="M9 12a2 2 0 1 1-2-2V6h6v4a2 2 0 1 1-2 2Z"></path>
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path>
      </svg>
    )
  },
  {
    id: 'hindi',
    name: 'Hindi',
    description: 'Language & Literature',
    progress: 50,
    icon: (
      <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16v16H4z"></path>
        <path d="M4 8h16"></path>
        <path d="M8 4v16"></path>
      </svg>
    )
  },
  {
    id: 'mathematics',
    name: 'Mathematics',
    description: 'Numbers & Equations',
    progress: 70,
    icon: (
      <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h16v16H4z"></path>
        <path d="M4 12h16"></path>
        <path d="M12 4v16"></path>
      </svg>
    )
  },
  {
    id: 'socialscience',
    name: 'Social Science',
    description: 'History, Geography & Civics',
    progress: 60,
    icon: (
      <svg className="mb-6" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2v20M2 12h20"></path>
        <path d="M4 4l16 16"></path>
      </svg>
    )
  }
];

  const handleSubjectClick = (subjectId) => {
    console.log(`Subject clicked: ${subjectId}`);
    // Add your navigation or modal logic here
  };

  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      {/* Main Header */}
        <SmartLearnAINavbar/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-8 md:px-12 flex-1">
        {/* Subject Grid Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <article
              key={subject.id}
              onClick={() => handleSubjectClick(subject.id)}
              className="subject-card group p-8 bg-white border border-gray-200 rounded-lg cursor-pointer flex flex-col justify-between h-64 hover:transform hover:-translate-y-1 hover:border-black transition-all duration-200"
            >
              <div>
                {subject.icon}
                <h2 className="text-xl font-bold">{subject.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{subject.description}</p>
              </div>
              
              <div className="mt-auto">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-sm font-medium">Progress</span>
                  <span className="text-sm font-bold">{subject.progress}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-black transition-all duration-300" 
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

    

      {/* Global Styles */}
      <style jsx>{`
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
};

export default SyllabusManager;