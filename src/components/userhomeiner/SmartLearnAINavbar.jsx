// // Dashboard.jsx
// import React, { useState } from 'react';
// import SmartLearnAI from './SmartLearnAI';
// import SmartLearnAIHowItWorks from './SmartLearnAIHowItWorks';
// import StudentProfile from './StudentProfile';
// import StudentProfileSetup from './StudentProfileSetup';
// import SyllabusDailyPlan from './SyllabusDailyPlan';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('Dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const tabs = [
//     { id: 'Dashboard', label: '🏠 Dashboard', icon: '🏠', component: <SmartLearnAI /> },
//     { id: 'HowItWorks', label: '📘 How It Works', icon: '📘', component: <SmartLearnAIHowItWorks /> },
//     { id: 'Syllabus', label: '🗓️ Syllabus', icon: '🗓️', component: <SyllabusDailyPlan /> },
//     { id: 'DailyPlan', label: '📅 Daily Plan', icon: '📅', component: <SyllabusDailyPlan /> },
//     { id: 'Doubts', label: '❓ Doubts', icon: '❓', component: <div>Doubts Component</div> },
//     { id: 'Tests', label: '📝 Tests', icon: '📝', component: <div>Tests Component</div> },
//     { id: 'Progress', label: '📊 Progress', icon: '📊', component: <div>Progress Component</div> },
//     { id: 'AIMentor', label: '🤖 AI Mentor', icon: '🤖', component: <div>AI Mentor Component</div> },
//     { id: 'Profile', label: '👤 Profile', icon: '👤', component: <StudentProfile /> },
//     { id: 'Setup', label: '⚙️ Setup', icon: '⚙️', component: <StudentProfileSetup /> },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Top Navbar for Desktop */}
//       <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//               <div className="size-8 bg-black flex items-center justify-center rounded mr-3">
//                 <span className="material-symbols-outlined text-white">bolt</span>
//               </div>
//               <h1 className="text-xl font-bold text-black">SmartLearn AI</h1>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden md:block">
//               <div className="flex items-center space-x-1">
//                 {tabs.slice(0, 8).map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => setActiveTab(tab.id)}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
//                       activeTab === tab.id
//                         ? 'bg-black text-white'
//                         : 'text-gray-600 hover:text-black hover:bg-gray-100'
//                     }`}
//                   >
//                     <span className="text-lg">{tab.icon}</span>
//                     {tab.label.replace(/[🏠📘🗓️📅❓📝📊🤖👤⚙️]/g, '').trim()}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Profile & Mobile Menu Button */}
//             <div className="flex items-center gap-4">
//               <button className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
//                 <span className="material-symbols-outlined text-2xl">menu</span>
//               </button>
//               <div className="flex items-center gap-3">
//                 <div className="text-right hidden md:block">
//                   <p className="text-sm font-medium">Alex Johnson</p>
//                   <p className="text-xs text-gray-500">Premium Student</p>
//                 </div>
//                 <div className="size-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
//                   <img
//                     alt="Profile"
//                     className="w-full h-full object-cover"
//                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBMkNxIaSaZuqGVCGYlunFGntWN3NAXcuYjLZfzxKek1GEPpLfmwEQnJhsTCIc4bnKaXhar_VT71yTCY72Vy4ciJGXPyJppmWCl4HKgMwlBlE7zbMcBWg8u37iRZawKpWNXi2gRTSmYX2zRb-rqaIm9JcDeX6iCsXRF8r_DGPt0870ZrBaL7hbs-XU1ltQg6JeNnqLKOHW2GCU_L7-dsJHj8_VSQhrTNjr37viU5D7MtgQRX50OEb5_7RaDbsCFN9p3kJe1vbMaO4"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       {sidebarOpen && (
//         <div className="md:hidden fixed inset-0 z-40">
//           <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}></div>
//           <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center">
//                   <div className="size-8 bg-black flex items-center justify-center rounded mr-3">
//                     <span className="material-symbols-outlined text-white">bolt</span>
//                   </div>
//                   <h2 className="text-lg font-bold">SmartLearn AI</h2>
//                 </div>
//                 <button onClick={() => setSidebarOpen(false)}>
//                   <span className="material-symbols-outlined">close</span>
//                 </button>
//               </div>
//               <div className="space-y-2">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab.id}
//                     onClick={() => {
//                       setActiveTab(tab.id);
//                       setSidebarOpen(false);
//                     }}
//                     className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
//                       activeTab === tab.id
//                         ? 'bg-black text-white'
//                         : 'text-gray-600 hover:bg-gray-100'
//                     }`}
//                   >
//                     <span className="text-xl">{tab.icon}</span>
//                     <span className="font-medium">{tab.label}</span>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Breadcrumb */}
//         <div className="mb-6 flex items-center text-sm text-gray-600">
//           <span className="material-symbols-outlined mr-2">home</span>
//           <span>SmartLearn AI</span>
//           <span className="mx-2">›</span>
//           <span className="font-medium text-black">{activeTab}</span>
//         </div>

//         {/* Content Area */}
//         <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
//           {tabs.find(tab => tab.id === activeTab)?.component || <div>Select a tab to view content</div>}
//         </div>

//         {/* Quick Stats Bar */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="size-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                 <span className="material-symbols-outlined text-blue-600">schedule</span>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">128h</p>
//                 <p className="text-sm text-gray-600">Studied</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="size-12 bg-green-100 rounded-lg flex items-center justify-center">
//                 <span className="material-symbols-outlined text-green-600">menu_book</span>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">5</p>
//                 <p className="text-sm text-gray-600">Courses</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="size-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                 <span className="material-symbols-outlined text-purple-600">school</span>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">94%</p>
//                 <p className="text-sm text-gray-600">Accuracy</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
//             <div className="flex items-center gap-3">
//               <div className="size-12 bg-orange-100 rounded-lg flex items-center justify-center">
//                 <span className="material-symbols-outlined text-orange-600">psychology</span>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold">42</p>
//                 <p className="text-sm text-gray-600">Tests Taken</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t border-gray-200 py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center gap-3 mb-4 md:mb-0">
//               <div className="size-6 bg-black flex items-center justify-center rounded">
//                 <span className="material-symbols-outlined text-white text-sm">bolt</span>
//               </div>
//               <p className="text-sm font-medium">SmartLearn AI © 2024</p>
//             </div>
//             <div className="flex gap-6">
//               <a href="#" className="text-sm text-gray-600 hover:text-black">Privacy</a>
//               <a href="#" className="text-sm text-gray-600 hover:text-black">Terms</a>
//               <a href="#" className="text-sm text-gray-600 hover:text-black">Support</a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;



// SmartLearnAINavbar.jsx
import React from 'react';

const SmartLearnAINavbar = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Sticky Master Navbar (64px) */}
      <nav className="sticky top-0 z-50 h-16 w-full bg-white border-b border-black px-6 flex items-center justify-between">
        {/* Left: Branding */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="bg-black text-white p-1.5 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined !text-[20px]">school</span>
          </div>
          <h1 className="text-black text-lg font-bold tracking-tight">SmartLearn AI</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Active State (Pill) */}
          <a className="active-pill flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full transition-all hover:bg-gray-800" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-semibold">Dashboard</span>
          </a>
          
          {/* Standard Link */}
          <a className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-sm font-medium">Syllabus</span>
          </a>
          
          {/* Standard Link */}
          <a className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-sm font-medium">Daily Plan</span>
          </a>
          
          {/* Standard Link */}
          <a className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">help_center</span>
            <span className="text-sm font-medium">Doubts</span>
          </a>
          
          {/* Standard Link */}
          <a className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">assignment</span>
            <span className="text-sm font-medium">Tests</span>
          </a>
          
          {/* Standard Link */}
          <a className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">bar_chart</span>
            <span className="text-sm font-medium">Progress</span>
          </a>
          
          {/* AI Mentor Link */}
          <a className="nav-link-hover flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-black transition-colors" href="#">
            <span className="material-symbols-outlined">smart_toy</span>
            <span className="text-sm font-medium">AI Mentor</span>
          </a>
        </div>

        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-4 shrink-0">
          <button className="p-2 text-gray-600 hover:text-black transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="h-8 w-px bg-gray-300 mx-1"></div>
          <div className="flex items-center gap-3 pl-1">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-xs font-bold text-black leading-none">Alex Rivera</span>
              <span className="text-[10px] text-gray-500 font-medium">Pro Student</span>
            </div>
            <div 
              className="h-10 w-10 rounded-full border-2 border-black bg-cover bg-center overflow-hidden"
              style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCkQmjJ6i55lHOl-QgtifcHRvzKE2OMVAPWrlJvkFGAKLZ7LyVn6rFEPd1RiWo-bq6e8XGFwa5PU-P-0MpUc0POsGcegaDK2ZLCP--oTzZNPkuGQTcTtyX40n8Wj_5_JL_l8NvKRocVSOcaVJ6vy_aSq-GneW5UKrY4Wy8h21BKcXInOcDEv8LiroPDHfh4-Odt5gboz7PzLcmLnwlPFwy9ZPOFm_pyhX1CklvZaV2JlOw7PIzXM_HUcHABKV5bWZRNpbklW_Pu-bE')`}}
            ></div>
          </div>
        </div>
      </nav>

     

      <style jsx>{`
        .nav-link-hover {
          position: relative;
        }
        .nav-link-hover::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #000000;
          transition: width 0.2s ease;
        }
        .nav-link-hover:hover::after {
          width: 100%;
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          font-size: 20px;
        }
        .active-pill .material-symbols-outlined {
          font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
};

export default SmartLearnAINavbar;