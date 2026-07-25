import { forwardRef } from 'react';
import { CVData } from './CVCreatorTab';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface CVPreviewProps {
    data: CVData;
    templateStyle?: 'international' | 'rirekisho' | 'shokumukerekisho';
}

export const CVPreview = forwardRef<HTMLDivElement, CVPreviewProps>(({ data, templateStyle = 'international' }, ref) => {
    // Japanese JIS Rirekisho Format (履歴書)
    if (templateStyle === 'rirekisho') {
        return (
            <div 
                ref={ref} 
                className="bg-white text-slate-900 p-8 md:p-12 w-full font-serif print:p-6 text-xs leading-normal border border-gray-300"
                style={{ minHeight: '1122px' }}
            >
                {/* Title & Photo */}
                <div className="flex justify-between items-start mb-4 border-b-2 border-black pb-2">
                    <div>
                        <h1 className="text-2xl font-bold tracking-widest">履 歴 書</h1>
                        <span className="text-[10px] text-gray-500 font-mono">（JIS Standard Format）</span>
                    </div>
                    <div className="w-20 h-24 border border-dashed border-gray-400 flex flex-col items-center justify-center text-[10px] text-gray-400 text-center p-1">
                        写真貼付<br/>(3cm × 4cm)
                    </div>
                </div>

                {/* Personal Info Grid */}
                <table className="w-full border-collapse border border-black mb-4 text-xs">
                    <tbody>
                        <tr className="border-b border-black">
                            <td className="w-20 bg-gray-100 p-1.5 font-bold border-r border-black">ふりがな</td>
                            <td className="p-1.5 border-r border-black">{data.personalInfo.fullName}</td>
                            <td className="w-20 bg-gray-100 p-1.5 font-bold border-r border-black">性別</td>
                            <td className="w-16 p-1.5">男/女</td>
                        </tr>
                        <tr className="border-b border-black">
                            <td className="bg-gray-100 p-1.5 font-bold border-r border-black">氏名</td>
                            <td colSpan={3} className="p-1.5 font-bold text-sm">{data.personalInfo.fullName}</td>
                        </tr>
                        <tr className="border-b border-black">
                            <td className="bg-gray-100 p-1.5 font-bold border-r border-black">現住所</td>
                            <td colSpan={3} className="p-1.5">{data.personalInfo.location || '〒---'}</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-100 p-1.5 font-bold border-r border-black">連絡先</td>
                            <td className="p-1.5 border-r border-black">{data.personalInfo.phone}</td>
                            <td className="bg-gray-100 p-1.5 font-bold border-r border-black">Email</td>
                            <td className="p-1.5">{data.personalInfo.email}</td>
                        </tr>
                    </tbody>
                </table>

                {/* Education & Work History Table */}
                <div className="mb-4">
                    <h2 className="font-bold border-b border-black pb-1 mb-2 text-sm">【学歴・職歴】</h2>
                    <table className="w-full border-collapse border border-black text-xs">
                        <thead>
                            <tr className="bg-gray-100 border-b border-black">
                                <th className="w-16 p-1 border-r border-black text-center">年</th>
                                <th className="w-12 p-1 border-r border-black text-center">月</th>
                                <th className="p-1 text-left">学歴・職歴（項目）</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Education */}
                            <tr className="border-b border-gray-300">
                                <td colSpan={3} className="bg-gray-50 text-center font-bold p-1">学歴 (Education)</td>
                            </tr>
                            {data.education?.map((edu, idx) => (
                                <tr key={idx} className="border-b border-gray-300">
                                    <td className="p-1.5 border-r border-black text-center">{edu.period.split('-')[0] || ''}</td>
                                    <td className="p-1.5 border-r border-black text-center">4</td>
                                    <td className="p-1.5">{edu.institution} {edu.degree} 入学・卒業</td>
                                </tr>
                            ))}

                            {/* Work Experience */}
                            <tr className="border-b border-gray-300">
                                <td colSpan={3} className="bg-gray-50 text-center font-bold p-1">職歴 (Work Experience)</td>
                            </tr>
                            {data.experience?.map((exp, idx) => (
                                <tr key={idx} className="border-b border-gray-300">
                                    <td className="p-1.5 border-r border-black text-center">{exp.period.split('-')[0] || ''}</td>
                                    <td className="p-1.5 border-r border-black text-center">4</td>
                                    <td className="p-1.5 font-bold">{exp.company} （{exp.role}） 入社</td>
                                </tr>
                            ))}
                            <tr>
                                <td className="p-1.5 border-r border-black"></td>
                                <td className="p-1.5 border-r border-black"></td>
                                <td className="p-1.5 text-right font-bold">以上</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* License & Qualifications */}
                <div className="mb-4">
                    <h2 className="font-bold border-b border-black pb-1 mb-2 text-sm">【免許・資格】</h2>
                    <table className="w-full border-collapse border border-black text-xs">
                        <tbody>
                            {data.certificates && data.certificates.length > 0 ? (
                                data.certificates.map((cert, idx) => (
                                    <tr key={idx} className="border-b border-gray-300">
                                        <td className="w-16 p-1.5 border-r border-black text-center">2024</td>
                                        <td className="w-12 p-1.5 border-r border-black text-center">7</td>
                                        <td className="p-1.5">{cert} 取得</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="p-2 text-gray-500">JLPT N2 / IELTS 資格なし</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Self PR / Reason for Applying */}
                <div>
                    <h2 className="font-bold border-b border-black pb-1 mb-1 text-sm">【志望の動機・自己PR】</h2>
                    <div className="border border-black p-3 rounded text-xs leading-relaxed min-h-[100px] whitespace-pre-line">
                        {data.summary || '日本語での自己PR・志望動機...'}
                    </div>
                </div>
            </div>
        );
    }

    // Default International Format
    return (
        <div 
            ref={ref} 
            className="bg-white text-slate-900 p-10 md:p-14 w-full h-full font-sans print:p-8"
            style={{ minHeight: '1122px' }}
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
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-2 border-b border-slate-300 pb-1">Professional Summary</h2>
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
                <div className="mb-6">
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

            {/* Certificates */}
            {data.certificates && data.certificates.length > 0 && (
                <div>
                    <h2 className="text-lg font-bold text-slate-800 uppercase tracking-wider mb-3 border-b border-slate-300 pb-1">Certificates & Awards</h2>
                    <ul className="list-disc list-outside ml-5 space-y-1">
                        {data.certificates.map((cert, index) => (
                            <li key={index} className="text-sm text-slate-700 leading-relaxed">
                                {cert}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
});

CVPreview.displayName = 'CVPreview';
