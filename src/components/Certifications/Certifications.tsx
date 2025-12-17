import React from 'react';

interface Certification {
    title: string;
    content: string;
}

const Certifications: React.FC = () => {
    const certifications: Certification[] = [
        {
            title: 'Certification Title',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor ipsa earum commodi cumque, asperiores impedit sint doloribus distinctio quam laborum deleniti expedita, repudiandae voluptatibus eaque saepe minima? Assumenda, unde!',
        },
        {
            title: 'Certification Title',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor ipsa earum commodi cumque, asperiores impedit sint doloribus distinctio quam laborum deleniti expedita, repudiandae voluptatibus eaque saepe minima? Assumenda, unde!',
        },
        {
            title: 'Certification Title',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor ipsa earum commodi cumque, asperiores impedit sint doloribus distinctio quam laborum deleniti expedita, repudiandae voluptatibus eaque saepe minima? Assumenda, unde!',
        },
        {
            title: 'Certification Title',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolor ipsa earum commodi cumque, asperiores impedit sint doloribus distinctio quam laborum deleniti expedita, repudiandae voluptatibus eaque saepe minima? Assumenda, unde!',
        },
    ];

    return (
        <section className="my-24 text-white">
            <h3 className="text-3xl font-bold mb-9">Certifications</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-x-5 md:gap-y-10">
                {certifications.map((cert, index) => (
                    <article
                        key={index}
                        className="p-5 bg-banner rounded-2xl border border-secondary flex flex-col gap-3"
                    >
                        <header className="flex justify-between items-center">
                            <span className="text-2xl font-bold">{cert.title}</span>
                            <span className="text-secondary">📜</span>
                        </header>
                        <div className="w-full border-t border-secondary"></div>
                        <p className="text-textgray">{cert.content}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
