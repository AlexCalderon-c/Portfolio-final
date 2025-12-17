import React from 'react';

const About: React.FC = () => {
    return (
        <section className="my-24 text-white">
            <h3 className="text-3xl font-bold mb-9">About me</h3>

            <article className="min-h-[420px] flex flex-col md:flex-row justify-between items-center border border-bgc rounded-2xl p-12 bg-section text-bgc gap-8">
                <div className="w-full md:min-w-[50%] min-h-[300px] bg-banner rounded-2xl">
                    {/* About image placeholder */}
                </div>
                <div className="flex flex-col gap-8 max-w-full md:max-w-[40%]">
                    <h4 className="text-2xl font-bold">Test</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, sit accusamus? Ullam reprehenderit perferendis architecto.</p>
                </div>
            </article>
        </section>
    );
};

export default About;
