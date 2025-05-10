import React from 'react';
import { education } from '../data/resumeData';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Education</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

            {education.map((edu, index) => (
              <div 
                key={edu.id} 
                className={`mb-12 md:mb-8 flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 z-10 border-4 border-white dark:border-gray-800"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div 
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-blue-600 dark:border-blue-400 transform hover:scale-[1.02] transition-transform duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {edu.institution}
                    </h3>
                    
                    {edu.degree && (
                      <p className="text-gray-700 dark:text-gray-300 mb-2 flex items-center justify-start md:justify-end">
                        <GraduationCap size={18} className={`inline-block mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`} /> 
                        {edu.degree} {edu.field && `- ${edu.field}`}
                      </p>
                    )}
                    
                    <p className="text-gray-600 dark:text-gray-400 flex items-center justify-start md:justify-end">
                      <Calendar size={18} className={`inline-block mr-2 ${index % 2 === 0 ? 'md:order-2 md:ml-2 md:mr-0' : ''}`} /> 
                      {edu.duration}
                    </p>
                  </div>
                </div>
                
                {/* Empty div for the other side on mobile */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;