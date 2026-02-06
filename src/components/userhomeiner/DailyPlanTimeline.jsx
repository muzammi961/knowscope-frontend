// DailyPlanTimeline.jsx
import React from 'react';

const DailyPlanTimeline = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-black">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header / Navigation */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-300 px-6 md:px-20 py-4 bg-white sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-black">
              <div className="size-8 flex items-center justify-center bg-black text-white rounded">
                <span className="material-symbols-outlined text-xl">school</span>
              </div>
              <h2 className="text-lg font-extrabold leading-tight tracking-tight uppercase">SmartLearn AI</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-gray-600 hover:text-black text-sm font-semibold transition-colors" href="#">Dashboard</a>
              <a className="text-black text-sm font-bold border-b-2 border-black" href="#">Courses</a>
              <a className="text-gray-600 hover:text-black text-sm font-semibold transition-colors" href="#">Resources</a>
              <a className="text-gray-600 hover:text-black text-sm font-semibold transition-colors" href="#">Settings</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-gray-100 rounded-lg px-3 py-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-gray-400 text-sm">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-sm p-0 w-32 md:w-48 placeholder:text-gray-400 focus:outline-none" 
                placeholder="Search topics..." 
                type="text"
              />
            </div>
            <div 
              className="size-10 rounded-full bg-gray-100 border border-gray-300 bg-cover bg-center"
              style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCnD8_babUKxCzGxdOPr5j_CDgqQzMGN8zCVKwlrOHpQH_4zy5k6_2xrXpGWcWqUsc8oXzNd9okupRSdSArdZbSpegcg2GRLiwSs5MpNVn7C9PTz4bxxJFu_9fbrEJNl432wqkxbBxKRAE3ty2Xm1bu_RG9pt-wvS0TWSrNRTWeyA3ntfxFqpgfjJO_GAktK4R4OzC69C7MQ_lYzFmb8L_LXm-JWW_4TvtUgtvqBSAtDBNzm5IuquBQE54ukMQnulKccU2L-vJ_A2A')`}}
            ></div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 max-w-4xl mx-auto w-full px-6 py-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 mb-8 text-sm font-medium">
            <a className="text-gray-400 hover:text-black" href="#">SmartLearn AI</a>
            <span className="material-symbols-outlined text-xs text-gray-300">chevron_right</span>
            <span className="text-black">Today's Path</span>
          </div>

          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-5xl font-black text-black mb-2 tracking-tighter">Daily Plan</h1>
            <p className="text-lg text-gray-600">Follow your personalized learning path for today.</p>
          </div>

          {/* Timeline Section */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-20 top-0 bottom-0 w-px bg-black opacity-20 z-0"></div>
            
            <div className="space-y-12">
              {/* Slot 1: Completed */}
              <div className="relative pl-12 flex flex-col md:flex-row md:items-start gap-6 group">
                {/* Marker */}
                <div className="absolute left-0 top-0 size-[40px] bg-black rounded-full flex items-center justify-center z-10 shadow-lg ring-4 ring-white">
                  <span className="material-symbols-outlined text-white text-xl">check</span>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 p-8 border border-black rounded-lg bg-white hover:border-gray-400 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">09:00 AM • MORNING SESSION</span>
                      <h3 className="text-2xl font-bold text-black mt-1">Quantum Physics</h3>
                    </div>
                    <span className="bg-gray-100 text-black px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm border border-gray-300">Completed</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Introduction to wave-particle duality and Schrödinger's equation through interactive simulations.
                  </p>
                  <div className="flex items-center gap-4">
                    <button className="text-xs font-bold uppercase underline tracking-tighter hover:text-gray-600 transition-colors">
                      Review Notes
                    </button>
                    <button className="text-xs font-bold uppercase underline tracking-tighter hover:text-gray-600 transition-colors">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>

              {/* Slot 2: Next Up */}
              <div className="relative pl-12 flex flex-col md:flex-row md:items-start gap-6 group">
                {/* Marker */}
                <div className="absolute left-0 top-0 size-[40px] bg-white border-2 border-black rounded-full flex items-center justify-center z-10 shadow-lg ring-4 ring-white">
                  <span className="material-symbols-outlined text-black text-xl">play_arrow</span>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 p-8 border-2 border-black rounded-lg bg-gray-50 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Visual Accent */}
                  <div className="absolute top-0 right-0 p-4">
                    <span className="material-symbols-outlined text-gray-200 text-6xl">science</span>
                  </div>
                  
                  <div className="flex justify-between items-start mb-4 relative z-10">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-black">02:00 PM • AFTERNOON SESSION</span>
                      <h3 className="text-2xl font-bold text-black mt-1">Organic Chemistry Quiz</h3>
                    </div>
                    <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm">
                      Next Up
                    </span>
                  </div>
                  
                  <p className="text-gray-800 leading-relaxed mb-6 max-w-lg relative z-10 font-medium">
                    Test your knowledge on alkanes, alkenes, and functional groups. 20 questions, 30 minutes.
                  </p>
                  
                  <button className="bg-black text-white px-8 py-3 font-bold text-sm rounded-lg hover:scale-[1.02] active:scale-95 transition-transform relative z-10">
                    Start Quiz Now
                  </button>
                </div>
              </div>

              {/* Slot 3: Scheduled */}
              <div className="relative pl-12 flex flex-col md:flex-row md:items-start gap-6 group">
                {/* Marker */}
                <div className="absolute left-0 top-0 size-[40px] bg-white border border-gray-300 rounded-full flex items-center justify-center z-10 ring-4 ring-white">
                  <span className="material-symbols-outlined text-gray-400 text-xl">psychology</span>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 p-8 border border-gray-300 rounded-lg bg-white hover:border-gray-400 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-500">07:00 PM • EVENING SESSION</span>
                      <h3 className="text-2xl font-bold text-black mt-1">Review AI Doubt Explanations</h3>
                    </div>
                    <span className="text-gray-300 px-3 py-1 text-[10px] font-black uppercase tracking-widest">Scheduled</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Deep dive into the 3 complex concepts you flagged during the Quantum Physics module earlier today.
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-gray-400 text-sm">auto_awesome</span>
                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-tight">Personalized by SmartLearn AI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Spacing for floating button */}
          <div className="h-32"></div>
        </main>

        {/* Floating Action Button */}
        <div className="fixed bottom-10 left-0 right-0 flex justify-center z-50 px-6">
          <button className="flex items-center justify-center gap-3 bg-black text-white px-10 h-16 rounded-lg shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-gray-200">
            <span className="material-symbols-outlined text-2xl">refresh</span>
            <span className="text-base font-bold tracking-tight uppercase">Re-generate Plan with AI</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyPlanTimeline;