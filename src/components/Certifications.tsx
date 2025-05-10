import React from 'react';
import { certifications } from '../data/resumeData';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((certification) => (
              <a
                key={certification.id}
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-24 bg-gradient-to-r from-blue-500 to-indigo-600 relative flex items-center justify-center p-4">
                  <Award className="text-white/20 w-16 h-16 absolute" />
                  <h3 className="text-white font-semibold text-center relative z-10 text-sm md:text-base">
                    {certification.title}
                  </h3>
                </div>
                
                <div className="p-4 flex items-center justify-center">
                  <span className="text-gray-600 dark:text-gray-400 font-medium flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    View Certificate
                    <ExternalLink size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;