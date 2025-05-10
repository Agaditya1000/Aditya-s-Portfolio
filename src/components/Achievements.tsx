import React from 'react';
import { achievements } from '../data/resumeData';
import { Trophy, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id} 
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 bg-gradient-to-br from-blue-600 to-indigo-600 p-6 flex items-center justify-center">
                    <Trophy className="text-white/80 w-16 h-16" />
                  </div>
                  
                  <div className="md:w-3/4 p-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{achievement.title}</h3>
                    
                    <ul className="mb-4 space-y-2">
                      {achievement.description.map((item, index) => (
                        <li key={index} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={achievement.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      View Certificate
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;