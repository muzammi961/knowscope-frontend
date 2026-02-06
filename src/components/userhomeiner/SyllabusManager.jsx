// SyllabusManager.jsx
import React from 'react';

const SyllabusManager = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-black">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-300 px-6 lg:px-10 py-3 bg-white sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-black">
              <div className="size-6 bg-black flex items-center justify-center rounded-sm">
                <span className="material-symbols-outlined text-white text-sm">school</span>
              </div>
              <h2 className="text-black text-lg font-bold leading-tight tracking-tight">SmartLearn AI</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-gray-500 hover:text-black text-sm font-medium transition-colors" href="#">Dashboard</a>
              <a className="text-black text-sm font-bold border-b-2 border-black pb-1" href="#">Syllabus</a>
              <a className="text-gray-500 hover:text-black text-sm font-medium transition-colors" href="#">Courses</a>
              <a className="text-gray-500 hover:text-black text-sm font-medium transition-colors" href="#">Reports</a>
            </nav>
          </div>
          <div className="flex flex-1 justify-end items-center gap-6">
            <label className="hidden sm:flex items-center relative min-w-40 max-w-64">
              <span className="material-symbols-outlined absolute left-3 text-gray-400 text-xl">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2 rounded-lg text-sm border-none bg-gray-100 focus:ring-1 focus:ring-black placeholder:text-gray-500 focus:outline-none" 
                placeholder="Quick find..."
              />
            </label>
            <div className="flex items-center gap-3">
              <button className="material-symbols-outlined text-gray-500 hover:text-black cursor-pointer">notifications</button>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border border-gray-300" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbjCpqktQPdVMq-SVQkgHLJdLQXGSm8uQ1XAWeExYlSK-bO2x2ey8oRwz2g2dg5n_a6m4ll1Q4X4oiXqn7L3ugryg5FHdQ2dtNAAvZzy0Mj6Nl9rtgxghMZa1OBrS3VGpN0Tsbfi20-nrwrQcGDzbg6vypKsVDx6PYk5QX8QWlxwOBynUUvCCKu4BShojcVWanoGe2A3dDXOI9zIJatkeeNaBFnA0hyX25c2NXnLYv5ircskelgJHgDPCp0bLAnxALf1uerXPF7xc")'}}
                ></div>
                <span className="hidden lg:block text-sm font-semibold">Alex Johnson</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 lg:px-10 py-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-6 text-sm">
            <a className="text-gray-500 hover:text-black" href="#">Dashboard</a>
            <span className="material-symbols-outlined text-xs text-gray-400">chevron_right</span>
            <span className="text-black font-semibold">Syllabus Manager</span>
          </nav>

          {/* Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-4xl font-black text-black tracking-tight">Syllabus Manager</h1>
              <p className="text-gray-500 mt-1">Organize and track curriculum progress across all subjects.</p>
            </div>
            <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-bold text-sm hover:opacity-90 transition-all shadow-sm active:scale-[0.98]">
              <span className="material-symbols-outlined text-xl">add</span>
              <span>Add New Syllabus</span>
            </button>
          </div>

          {/* Subjects Accordion Section */}
          <div className="flex flex-col gap-4">
            {/* Subject 1: Physics */}
            <details className="group bg-white border border-gray-300 rounded-lg overflow-hidden" open>
              <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-gray-50 transition-colors list-none">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-black bg-gray-100 p-2 rounded-lg">rocket_launch</span>
                  <div>
                    <h3 className="text-xl font-black text-black uppercase tracking-tight">Physics</h3>
                    <p className="text-xs text-gray-500 font-medium">12/24 TOPICS COMPLETED • GRADE 12</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-black group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="p-6 pt-2 border-t border-gray-200 flex flex-col gap-8">
                {/* Chapter 1 */}
                <div>
                  <h4 className="text-sm font-bold text-black mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    Mechanics
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                    <div className="flex items-start gap-3 group">
                      <input 
                        defaultChecked 
                        className="custom-checkbox mt-0.5" 
                        id="topic-1" 
                        type="checkbox"
                      />
                      <label className="text-sm leading-tight cursor-pointer text-gray-700" htmlFor="topic-1">
                        Kinematics: Motion in one dimension
                      </label>
                    </div>
                    <div className="flex items-start gap-3 group">
                      <input 
                        defaultChecked 
                        className="custom-checkbox mt-0.5" 
                        id="topic-2" 
                        type="checkbox"
                      />
                      <label className="text-sm leading-tight cursor-pointer text-gray-700" htmlFor="topic-2">
                        Newton's Laws of Motion
                      </label>
                    </div>
                    <div className="flex items-start gap-3 group">
                      <input className="custom-checkbox mt-0.5" id="topic-3" type="checkbox"/>
                      <label className="text-sm leading-tight cursor-pointer text-gray-700" htmlFor="topic-3">
                        Work, Energy, and Power
                      </label>
                    </div>
                    <div className="flex items-start gap-3 group">
                      <input className="custom-checkbox mt-0.5" id="topic-4" type="checkbox"/>
                      <label className="text-sm leading-tight cursor-pointer text-gray-700" htmlFor="topic-4">
                        Rotational Dynamics
                      </label>
                    </div>
                  </div>
                </div>

                {/* Chapter 2 */}
                <div>
                  <h4 className="text-sm font-bold text-black mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    Thermodynamics
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                    <div className="flex items-start gap-3 group">
                      <input className="custom-checkbox mt-0.5" id="topic-5" type="checkbox"/>
                      <label className="text-sm leading-tight cursor-pointer text-gray-700" htmlFor="topic-5">
                        Laws of Thermodynamics
                      </label>
                    </div>
                    <div className="flex items-start gap-3 group">
                      <input className="custom-checkbox mt-0.5" id="topic-6" type="checkbox"/>
                      <label className="text-sm leading-tight cursor-pointer text-gray-700" htmlFor="topic-6">
                        Entropy and Heat Engines
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            {/* Subject 2: Chemistry */}
            <details className="group bg-white border border-gray-300 rounded-lg overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-gray-50 transition-colors list-none">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-black bg-gray-100 p-2 rounded-lg">science</span>
                  <div>
                    <h3 className="text-xl font-black text-black uppercase tracking-tight">Chemistry</h3>
                    <p className="text-xs text-gray-500 font-medium">8/30 TOPICS COMPLETED • GRADE 12</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-black group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="p-6 pt-2 border-t border-gray-200 flex flex-col gap-8">
                <div>
                  <h4 className="text-sm font-bold text-black mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-black rounded-full"></span>
                    Organic Chemistry
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                    <div className="flex items-start gap-3">
                      <input className="custom-checkbox mt-0.5" id="chem-1" type="checkbox"/>
                      <label className="text-sm leading-tight cursor-pointer text-gray-700" htmlFor="chem-1">
                        Hydrocarbons: Alkanes, Alkenes, Alkynes
                      </label>
                    </div>
                    <div className="flex items-start gap-3">
                      <input className="custom-checkbox mt-0.5" id="chem-2" type="checkbox"/>
                      <label className="text-sm leading-tight cursor-pointer text-gray-700" htmlFor="chem-2">
                        Aromatic Compounds
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            {/* Subject 3: Mathematics */}
            <details className="group bg-white border border-gray-300 rounded-lg overflow-hidden">
              <summary className="flex cursor-pointer items-center justify-between p-5 hover:bg-gray-50 transition-colors list-none">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-black bg-gray-100 p-2 rounded-lg">calculate</span>
                  <div>
                    <h3 className="text-xl font-black text-black uppercase tracking-tight">Mathematics</h3>
                    <p className="text-xs text-gray-500 font-medium">18/20 TOPICS COMPLETED • GRADE 12</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-black group-open:rotate-180 transition-transform duration-300">expand_more</span>
              </summary>
              <div className="p-6 pt-2 border-t border-gray-200">
                <div className="bg-gray-50 rounded p-4 text-center border border-dashed border-gray-400">
                  <p className="text-sm text-gray-500">Expand for details on Calculus and Algebra modules.</p>
                </div>
              </div>
            </details>
          </div>

          {/* Syllabus Stats Summary */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-300 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-500 uppercase">Overall Progress</span>
                <span className="material-symbols-outlined text-black">analytics</span>
              </div>
              <p className="text-3xl font-black">62%</p>
              <div className="w-full bg-gray-200 h-2 mt-4 rounded-full overflow-hidden">
                <div className="bg-black h-full" style={{ width: '62%' }}></div>
              </div>
            </div>
            
            <div className="p-6 bg-white border border-gray-300 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-500 uppercase">Total Subjects</span>
                <span className="material-symbols-outlined text-black">auto_stories</span>
              </div>
              <p className="text-3xl font-black">08</p>
              <p className="text-xs text-gray-500 mt-4">3 currently active in this semester</p>
            </div>
            
            <div className="p-6 bg-white border border-gray-300 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-gray-500 uppercase">Upcoming Exams</span>
                <span className="material-symbols-outlined text-black">event</span>
              </div>
              <p className="text-3xl font-black">12</p>
              <p className="text-xs text-gray-500 mt-4">Next: Physics Mechanics (Oct 12)</p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-300 py-8 px-6 lg:px-10 mt-12 bg-white">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-sm">copyright</span>
              <span className="text-xs font-medium">2024 SmartLearn AI. High-Fidelity Learning.</span>
            </div>
            <div className="flex gap-8">
              <a className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors" href="#">Documentation</a>
              <a className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors" href="#">Privacy</a>
              <a className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors" href="#">Support</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Custom CSS for Checkbox */}
      <style jsx>{`
        .custom-checkbox {
          appearance: none;
          width: 1.25rem;
          height: 1.25rem;
          border: 1px solid #333333;
          border-radius: 0.125rem;
          background-color: white;
          display: inline-grid;
          place-content: center;
          cursor: pointer;
        }
        .custom-checkbox::before {
          content: "";
          width: 0.65em;
          height: 0.65em;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em #333333;
          clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        }
        .custom-checkbox:checked::before {
          transform: scale(1);
        }
        .custom-checkbox:checked + label {
          text-decoration: line-through;
          color: #757575;
        }
      `}</style>
    </div>
  );
};

export default SyllabusManager;