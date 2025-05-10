import React from 'react';
import { personalInfo, careerObjective } from '../data/resumeData';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-[1.01] transition-transform duration-300">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {careerObjective}
            </p>
            
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Personal Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">Name:</span> {personalInfo.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">Location:</span> {personalInfo.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">Email:</span> {personalInfo.email}
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">Phone:</span> {personalInfo.phone}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">LinkedIn:</span>{" "}
                    <a 
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Profile
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">GitHub:</span>{" "}
                    <a 
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Agaditya1000
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;