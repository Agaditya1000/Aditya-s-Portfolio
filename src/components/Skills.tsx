import React from 'react';
import { skills } from '../data/resumeData';

const Skills: React.FC = () => {
  const technicalSkills = skills.technical;
  const creativeSkills = skills.creative;
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                Technical Skills
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    <div 
                      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    >
                      {skill}
                    </div>
                    <div className="absolute inset-0 bg-blue-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Creative Skills */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </span>
                Creative Skills
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {creativeSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="group relative"
                  >
                    <div 
                      className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg font-medium shadow-md transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    >
                      {skill}
                    </div>
                    <div className="absolute inset-0 bg-indigo-400 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skill visualization */}
          <div className="mt-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Skills Proficiency</h3>
            
            <div className="space-y-4">
              {[
                { name: 'HTML/CSS', percentage: 90 },
                { name: 'JavaScript/React', percentage: 85 },
                { name: 'Backend Development', percentage: 80 },
                { name: 'Database Management', percentage: 75 },
                { name: 'UI/UX Design', percentage: 70 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%`, transition: 'width 1s ease-in-out' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;