// StudentProfile.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";

const StudentProfile = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-black">
      <div className="layout-container flex h-full grow flex-col">
        {/* Navigation Header */}
        {/* <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-300 bg-white px-6 md:px-20 py-4 sticky top-0 z-50">
          <div className="flex items-center gap-4 text-black">
            <div className="size-6">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-xl font-extrabold leading-tight tracking-tighter">SmartLearn AI</h2>
          </div>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-black text-sm font-bold uppercase tracking-wider hover:underline" href="#">Dashboard</a>
              <a className="text-black text-sm font-bold uppercase tracking-wider hover:underline" href="#">Courses</a>
              <a className="text-black text-sm font-bold uppercase tracking-wider hover:underline underline underline-offset-4" href="#">Profile</a>
            </nav>
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded bg-gray-200 text-black h-10 w-10 border border-gray-300 hover:bg-gray-300 transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
            </div>
          </div>
        </header> */}

        <main className="flex-1 flex flex-col max-w-[1200px] mx-auto w-full p-6 md:p-12 gap-12">
          {/* Profile Hero Section */}
          <section className="flex flex-col md:flex-row items-center md:items-end gap-8 pb-8 border-b border-gray-300">
            <div className="relative">
              <div className="size-40 rounded-full border-2 border-black overflow-hidden bg-white">
                <img 
                  alt="Profile Picture" 
                  className="w-full h-full object-cover grayscale" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXKJZl3C4-iNR1Jq4QAqQ-3kNYxZZlB9R7A8xS-ZwcYhyEtJcsAjdx2y3tGFiDUO_e_0l7w4FaAzXecDHaeSU5o53mZeb8oOiFIz48V6781QwAhEXCaYzN-OYmY6wGwGcxo9jgO0z-_MibI-J5qyoa79fZten_-KKDPNFeI-Yw9P_djcujJbIsmc3DaEvYuThFZ08ssVa91_fyI25F_jn9mULZUAPkwM3NMye_BWJQoKCMl4mFU24Dbo-MtEm7AeEySPRZxMenxxp1"
                />
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start flex-1 gap-2">
              <div className="bg-black text-white text-[10px] md:text-xs font-black uppercase px-3 py-1 tracking-widest rounded-sm mb-1">
                Goal: Ace Finals
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">John Doe</h1>
              <p className="text-gray-600 font-medium text-lg">Student ID: SL-98234 — Year 2024</p>
            </div>
          </section>

          {/* Stats Grid Section */}
          <section>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-500">Success Metrics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
                <span className="material-symbols-outlined text-black scale-110">schedule</span>
                <div>
                  <p className="text-3xl font-black text-black tracking-tight">128h</p>
                  <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">Studied</p>
                </div>
              </div>
              <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
                <span className="material-symbols-outlined text-black scale-110">menu_book</span>
                <div>
                  <p className="text-3xl font-black text-black tracking-tight">5</p>
                  <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">Courses</p>
                </div>
              </div>
              <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
                <span className="material-symbols-outlined text-black scale-110">school</span>
                <div>
                  <p className="text-3xl font-black text-black tracking-tight">42</p>
                  <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">Tests Taken</p>
                </div>
              </div>
              <div className="hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all flex flex-col gap-4 bg-white p-8 border border-black">
                <span className="material-symbols-outlined text-black scale-110">psychology</span>
                <div>
                  <p className="text-3xl font-black text-black tracking-tight">94%</p>
                  <p className="text-xs font-bold uppercase text-gray-600 tracking-wider">AI Accuracy</p>
                </div>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Academic Details */}
            <div className="lg:col-span-1 space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Academic Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-4 border-b border-gray-300">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 mb-1">Stream</p>
                    <p className="text-lg font-bold text-black">Science</p>
                  </div>
                  <a className="text-sm font-bold text-gray-500 hover:text-black underline" href="#">Edit</a>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-300">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 mb-1">Grade</p>
                    <p className="text-lg font-bold text-black">12th Grade</p>
                  </div>
                  <a className="text-sm font-bold text-gray-500 hover:text-black underline" href="#">Edit</a>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-gray-300">
                  <div>
                    <p className="text-xs font-bold uppercase text-gray-500 mb-1">Target Date</p>
                    <p className="text-lg font-bold text-black">June 2024</p>
                  </div>
                  <a className="text-sm font-bold text-gray-500 hover:text-black underline" href="#">Edit</a>
                </div>
              </div>
            </div>

            {/* AI Persona Insight */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-500">AI Persona Insight</h3>
              <div className="bg-black text-white p-10 flex flex-col gap-6 relative overflow-hidden">
                <span className="material-symbols-outlined absolute top-4 right-4 text-white/10 text-8xl pointer-events-none">auto_awesome</span>
                <h4 className="text-2xl font-black uppercase tracking-tight">Learner Profile Analysis</h4>
                <p className="text-xl font-medium leading-relaxed opacity-90 relative z-10">
                  AI recognizes you are strongest in <span className="underline decoration-white/40 decoration-4 underline-offset-4">Mathematics</span> and need more focus on <span className="underline decoration-white/40 decoration-4 underline-offset-4">Physics</span>. Your preferred learning tone is <span className="italic">Concise</span>.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="px-4 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest">Logic-Oriented</div>
                  <div className="px-4 py-2 border border-white/20 text-xs font-bold uppercase tracking-widest">Visual Learner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Actions Section */}
          <section className="border-t border-gray-300 pt-12 mt-4 pb-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded bg-green-100 flex items-center justify-center text-green-600">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-wider text-black">Connected to Google</p>
                  <p className="text-xs font-medium text-gray-600">john.doe@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
                <button className="flex-1 md:flex-none px-10 py-3 bg-white border border-black text-black font-black uppercase text-xs tracking-[0.2em] hover:shadow-[4px_4px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
                  Logout
                </button>
                <button className="flex-1 md:flex-none px-10 py-3 bg-gray-100 text-gray-500 font-bold uppercase text-xs tracking-[0.2em] hover:bg-red-50 hover:text-red-600 transition-colors">
                  Delete Data
                </button>
              </div>
            </div>
          </section>
        </main>

        {/* Simple Footer */}
        <footer className="p-8 border-t border-gray-300 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
            SmartLearn AI © 2024 — Precision Learning Systems
          </p>
        </footer>
      </div>
    </div>
  );
};

export default StudentProfile;