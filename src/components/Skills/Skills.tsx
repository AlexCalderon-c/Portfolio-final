import React from 'react';

interface SkillCategory {
    title: string;
}

const Skills: React.FC = () => {
    const skillCategories: SkillCategory[] = [
        { title: 'Frontend' },
        { title: 'Backend' },
        { title: 'Tools' },
        { title: 'Additional' },
    ];

    return (
        <section className="my-24 text-white">
            <h3 className="text-3xl font-bold mb-9">Skills</h3>

            <div className="min-h-[700px] grid grid-cols-1 md:grid-cols-2 gap-8 border border-bgc rounded-2xl p-8">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-banner min-h-full w-full flex flex-col items-center justify-center rounded-2xl p-5 gap-3 border border-secondary"
                    >
                        <span className="text-4xl font-bold">{category.title}</span>
                        <div className="w-full min-h-[300px] bg-projectbg rounded-2xl border border-border">
                            {/* Skill icons placeholder */}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
