const ResearchPager = () => {
    return (
        <section className='my-container'>
            <h2 className='text-2xl md:text-[42px] pb-2 md:pb-4 font-bold tracking-wide title-color text-center'>Research Paper</h2>
            <p className="text-gray-600 font-medium lg:text-center pb-10 pt-2 lg:mx-10"> Unveiling the Secrets of Popular Colleges: Where Dreams Take Flight. Popular colleges embody a perfect blend of academic excellence, vibrant campus life, and unmatched career opportunities.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-8">
                <a href="https://digitalcommons.mtu.edu/cgi/viewcontent.cgi?article=1043&context=materials_fp" target="_blank" rel="noopener noreferrer">
                    <div className="card rounded-md shadow-2xl border border-inherit bg-gradient-to-r from-gray-700 to-gray-500 hover:scale-105 transition-all duration-200">
                        <figure><img className="h-[250px] w-full p-2 lg:p-4" src="/paper1.JPG" alt="research-pager" /></figure>
                    </div>
                </a>
                <a href="https://hal.science/hal-02120503/document" target="_blank" rel="noopener noreferrer">
                    <div className="card rounded-md shadow-2xl border border-inherit bg-gradient-to-r from-gray-700 to-gray-500 hover:scale-105 transition-all duration-200">
                        <figure><img className="h-[250px] w-full p-2 lg:p-4" src="/paper2.JPG" alt="research-pager" /></figure>
                    </div>
                </a>
                <a href="https://www.researchgate.net/profile/Jonas-Hallstroem/publication/279189030_Technology_for_a_Sustainable_Life_Images_in_Swedish_Children%27s_Literature/links/558d451b08ae18cfc19db3c5/Technology-for-a-Sustainable-Life-Images-in-Swedish-Childrens-Literature.pdf###page=238" target="_blank" rel="noopener noreferrer">
                    <div className="card rounded-md shadow-2xl border border-inherit bg-gradient-to-r from-gray-700 to-gray-500 hover:scale-105 transition-all duration-200">
                        <figure><img className="h-[250px] w-full p-2 lg:p-4" src="/paper3.JPG" alt="research-pager" /></figure>
                    </div> 
                </a>
                <a href="https://hal.science/hal-02120514/document" target="_blank" rel="noopener noreferrer">
                    <div className="card rounded-md shadow-2xl border border-inherit bg-gradient-to-r from-gray-700 to-gray-500 hover:scale-105 transition-all duration-200">
                        <figure><img className="h-[250px] w-full p-2 lg:p-4" src="/paper4.JPG" alt="research-pager" /></figure>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default ResearchPager;