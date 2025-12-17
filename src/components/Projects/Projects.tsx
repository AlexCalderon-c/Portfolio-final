import React, { useState } from 'react';

interface Project {
    type: 'Fullstack' | 'Frontend' | 'Backend';
    title: string;
    description: string;
}

const Projects: React.FC = () => {
    const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Fullstack'>('All');

    const projects: Project[] = [
        { type: 'Fullstack', title: 'Test', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit accusamus? Ullam reprehenderit perferendis architecto.' },
        { type: 'Fullstack', title: 'Test', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit accusamus? Ullam reprehenderit perferendis architecto.' },
        { type: 'Frontend', title: 'Test', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit accusamus? Ullam reprehenderit perferendis architecto.' },
        { type: 'Backend', title: 'Test', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit accusamus? Ullam reprehenderit perferendis architecto.' },
        { type: 'Backend', title: 'Test', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit accusamus? Ullam reprehenderit perferendis architecto.' },
    ];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.type === filter);

    return (
        <section className="my-24">
            <h3 className="text-3xl font-bold mb-9 text-white">Projects</h3>

            <nav className="w-full md:w-2/5 mb-12 sticky top-24 z-10">
                <ul className="flex justify-around bg-menu text-white p-3 rounded-2xl list-none ">
                    {(['All', 'Frontend', 'Backend', 'Fullstack'] as const).map((item) => (
                        <li
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`cursor-pointer transition-colors ${filter === item ? 'text-secondary font-bold' : 'hover:text-secondary'
                                }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="space-y-24">
                {filteredProjects.map((project, index) => (
                    <article
                        key={index}
                        className="min-h-[420px] flex flex-col md:flex-row justify-around items-center border border-secondary bg-banner rounded-2xl p-12 gap-8"
                    >
                        <div className="flex flex-col gap-5 max-w-full md:max-w-[40%] text-textgray">
                            <span className="text-secondary font-semibold">{project.type}</span>
                            <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                            <p>{project.description}</p>
                            <button className="px-4 py-2 rounded-2xl max-w-[35%] border-none bg-secondary text-white hover:bg-opacity-80 transition-all">
                                Code
                            </button>
                            <div className="p-4 border border-border rounded-2xl bg-projectbg min-h-[60px]">
                                {/* Technology icons placeholder */}
                            </div>
                        </div>
                        <div className="w-full md:min-w-[50%] min-h-[308px] bg-menu rounded-2xl">
                            {/* Project image placeholder */}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
