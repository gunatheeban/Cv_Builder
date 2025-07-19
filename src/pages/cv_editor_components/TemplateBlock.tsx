import React from 'react';

interface TemplateBlockProps {
  previewRef: React.RefObject<HTMLDivElement>;
  data: any;
  cvRef: React.RefObject<HTMLDivElement>;
}

export default function TemplateBlock({ previewRef, data, cvRef }: TemplateBlockProps) {
  return (
    <div ref={previewRef} className="hidden">
      <div 
        ref={cvRef}
        className="w-[210mm] min-h-[297mm] bg-white p-8 shadow-lg"
        style={{ 
          margin: `${data.pageSettings.marginTop}cm ${data.pageSettings.marginRight}cm ${data.pageSettings.marginBottom}cm ${data.pageSettings.marginLeft}cm`,
          backgroundColor: data.bgColor 
        }}
      >
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{data.name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{data.title}</h2>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span>{data.email}</span>
            <span>{data.phone}</span>
            <span>{data.address}</span>
          </div>
        </div>

        {/* About Section */}
        {data.about && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
              About
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{data.about}</p>
          </div>
        )}

        {/* Experience Section */}
        {data.experiences && data.experiences.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
              Experience
            </h3>
            {data.experiences.map((exp: any, index: number) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-900">{exp.title}</h4>
                  <span className="text-sm text-gray-600">
                    {new Date(exp.from).getFullYear()} - {exp.present ? 'Present' : new Date(exp.to).getFullYear()}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-1">{exp.company} • {exp.location}</p>
                <p className="text-sm text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {data.educations && data.educations.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
              Education
            </h3>
            {data.educations.map((edu: any, index: number) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-medium text-gray-900">{edu.degree} in {edu.major}</h4>
                  <span className="text-sm text-gray-600">
                    {new Date(edu.from).getFullYear()} - {edu.present ? 'Present' : new Date(edu.to).getFullYear()}
                  </span>
                </div>
                <p className="text-sm text-gray-700">{edu.school}</p>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {data.skills && data.skills.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-300 pb-1">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {data.skills.map((skill: any, index: number) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">{skill.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i < skill.level ? 'bg-gray-900' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}