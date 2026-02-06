// StudentProfileSetup.jsx
import React from 'react';
import { useNavigate } from "react-router-dom";

const StudentProfileSetup = () => {
let navigate=useNavigate()



  return (
    <div className="bg-white min-h-screen font-sans text-black antialiased">
      {/* Global Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gray-200 z-50">
        <div className="h-full bg-black" style={{ width: '33%' }}></div>
      </div>

      <main className="min-h-screen flex items-center justify-center p-6 md:p-12">
        {/* Main Onboarding Card */}
        <div className="w-full max-w-[960px] bg-white border border-gray-300 shadow-sm relative overflow-hidden flex flex-col min-h-[700px]">
          {/* Step Header */}
          <div className="px-8 pt-12 pb-6 flex flex-col items-center text-center">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-500 mb-4">Step 01 of 03</span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black">Welcome to the Future of Learning</h1>
            <p className="mt-4 text-gray-500 max-w-lg">Let's set up your academic profile to personalize your AI learning assistant.</p>
          </div>

          {/* Content Area */}
          <div className="flex-1 px-8 md:px-20 pb-12 overflow-y-auto">
            <div className="max-w-2xl mx-auto">
              {/* Profile Photo Uploader */}
              <div className="flex flex-col items-center mb-12">
                <div className="relative group">
                  <div className="w-28 h-28 rounded-full border border-gray-300 flex items-center justify-center bg-white overflow-hidden hover:border-black transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-3xl font-light text-gray-500">add_a_photo</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-black text-white p-1 rounded-full border-2 border-white">
                    <span className="material-symbols-outlined text-sm block">edit</span>
                  </div>
                </div>
                <p className="mt-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Upload Profile Photo</p>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black">Full Name</label>
                  <input 
                    className="border-b border-gray-300 border-t-0 border-x-0 p-3 px-0 focus:ring-0 focus:border-black placeholder:text-gray-400 text-lg transition-colors bg-transparent focus:outline-none" 
                    placeholder="Johnathan Doe" 
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black">Nickname</label>
                  <input 
                    className="border-b border-gray-300 border-t-0 border-x-0 p-3 px-0 focus:ring-0 focus:border-black placeholder:text-gray-400 text-lg transition-colors bg-transparent focus:outline-none" 
                    placeholder="John" 
                    type="text"
                  />
                </div>
              </div>

              {/* Grade Level Selection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Grade Level</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Freshman', 'Sophomore', 'Junior', 'Senior'].map((grade, index) => (
                    <div 
                      key={grade}
                      className={`border p-4 text-center cursor-pointer flex flex-col justify-between aspect-square transition-all hover:border-black ${
                        index === 0 ? 'border-black bg-black text-white' : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-xs font-bold">0{index + 1}</span>
                      <span className="text-sm uppercase tracking-tighter">{grade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stream Selection */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Select Your Stream</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['Computer Science', 'Science', 'Commerce', 'Arts', 'Medical', 'Engineering'].map((stream) => (
                    <div 
                      key={stream}
                      className="border border-gray-300 p-4 flex items-center justify-between group cursor-pointer hover:bg-black hover:text-white transition-colors"
                    >
                      <span className="text-sm font-medium">{stream}</span>
                      <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100">check</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Tone Preferences */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">AI Learning Style</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: 'psychology', label: 'Strict', description: 'Focus on discipline and structure' },
                    { icon: 'face', label: 'Friendly', description: 'Encouraging and supportive approach' },
                    { icon: 'auto_awesome', label: 'Adaptive', description: 'Adjusts to your mood and energy' }
                  ].map((style) => (
                    <div 
                      key={style.label}
                      className="border border-gray-300 p-6 flex flex-col items-center gap-4 text-center hover:border-black transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-3xl">{style.icon}</span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest">{style.label}</p>
                        <p className="text-xs text-gray-500 mt-1">{style.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Settings Toggles */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Learning Preferences</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Proactive Notifications', description: 'Get reminders for study sessions' },
                    { label: 'Daily Study Summaries', description: 'Receive end-of-day progress reports' },
                    { label: 'Focus Mode', description: 'Minimal distractions during study' }
                  ].map((setting) => (
                    <div 
                      key={setting.label}
                      className="flex items-center justify-between p-4 border border-gray-300 hover:border-black transition-colors"
                    >
                      <div>
                        <p className="text-sm font-bold uppercase tracking-widest">{setting.label}</p>
                        <p className="text-xs text-gray-500">{setting.description}</p>
                      </div>
                      <button className="w-12 h-6 bg-gray-300 rounded-full p-1 flex items-center">
                        <div className="w-4 h-4 bg-white rounded-full transition-transform translate-x-0"></div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Identity Placeholder */}
              <div className="mt-16 pt-16 border-t border-gray-300 opacity-30 select-none grayscale pointer-events-none">
                <h2 className="text-2xl font-bold mb-8">Academic Identity</h2>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="border border-black p-4 text-center">Freshman</div>
                  <div className="border border-gray-300 p-4 text-center">Sophomore</div>
                  <div className="border border-gray-300 p-4 text-center">Senior</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Navigation Footer */}
          <div className="px-8 py-6 border-t border-gray-300 flex justify-between items-center bg-white">
            <button className="px-8 py-3 text-sm font-bold uppercase tracking-widest border border-gray-300 hover:border-black transition-all text-black flex items-center gap-2 hover:bg-gray-50">
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back
            </button>
            <button onClick={()=>navigate('/SmartLearnAIHome')} className="px-10 py-3 text-sm font-bold uppercase tracking-widest bg-black text-white hover:bg-gray-800 transition-all flex items-center gap-2">
              Next Step
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>

      {/* Loading State Overlay (Hidden) */}
      <div className="hidden fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-[1px] border-gray-300 border-t-black rounded-full animate-spin mb-8"></div>
        <div className="text-center">
          <p className="text-black text-sm tracking-tighter mb-2">PROCESSING_DATA_STREAM...</p>
          <p className="text-gray-500 text-xs uppercase tracking-widest animate-pulse">AI is analyzing your syllabus and goals...</p>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed top-0 right-0 p-12 -z-10 opacity-5">
        <span className="text-[200px] font-extrabold tracking-tighter leading-none select-none">AI</span>
      </div>
    </div>
  );
};

export default StudentProfileSetup;