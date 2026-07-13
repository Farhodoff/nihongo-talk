import { forwardRef } from 'react';
import { CVData } from './CVCreatorTab';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface CVPreviewProps {
    data: CVData;
}

export const CVPreview = forwardRef<HTMLDivElement, CVPreviewProps>(({ data }, ref) => {
    return (
        <div 
            ref={ref} 
            className="bg-white text-slate-900 p-10 md:p-14 w-full h-full font-sans print:p-8"
            style={{ minHeight: '1122px' }} // Approximate A4 height
        >
            {/* Header / Personal Info */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">{data.personalInfo.fullName}</h1>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    {data.personalInfo.email && (
                        <div className="flex items-center gap-1.5">
                            <Mail className="w-4 h-4" />
                            <span>{data.personalInfo.email}</span>
                        </div>
                    )}
                    {data.personalInfo.phone && (
                        <div className="flex items-center gap-1.5">
                            <Phone className="w-4 h-4" />
                            <span>{data.personalInfo.phone}</span>
                        </div>
                    )}
                    {data.personalInfo.location && (
                        <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{data.personalInfo.location}</span>
                        </div>
                    )}
                    {data.personalInfo.linkedin && (
                        <div className="flex items-center gap-1.5">
                            <Linkedin className="w-4 h-4" />
                            <a href={data.personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
                        </div>
                    )}
                    {data.personalInfo.github && (
                        <div className="flex items-center gap-1.5">
                            <Github className="w-4 h-4" />
                            <a href={data.personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
                        </div>
                    )}
                </div>
            </div>

            {/* Professional Summary */}
            {data.summary && (
                <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2">Professional Summary</h2>
                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{data.summary}</p>
                </div>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-300 pb-1">Experience</h2>
                    <div className="space-y-4">
                        {data.experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-base font-bold text-slate-900">{exp.role}</h3>
                                    <span className="text-sm font-medium text-slate-600">{exp.period}</span>
                                </div>
                                <div className="text-sm font-semibold text-slate-700 mb-2">{exp.company}</div>
                                <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1">
                                    {exp.description.map((bullet, idx) => (
                                        <li key={idx} className="leading-relaxed pl-1">{bullet}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-300 pb-1">Education</h2>
                    <div className="space-y-3">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-baseline">
                                <div>
                                    <h3 className="text-base font-bold text-slate-900">{edu.degree}</h3>
                                    <div className="text-sm text-slate-700">{edu.institution}</div>
                                </div>
                                <span className="text-sm font-medium text-slate-600">{edu.period}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <div>
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-300 pb-1">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill, index) => (
                            <span key={index} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-sm font-medium text-slate-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});

CVPreview.displayName = 'CVPreview';
