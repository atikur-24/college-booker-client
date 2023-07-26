
const GraduateGallery = () => {
    return (
        <section className="my-container">
            <h2 className='text-2xl md:text-[42px] pb-2 md:pb-4 font-bold tracking-wide title-color text-center'>Graduation Gallery</h2>
            <p className="text-gray-600 lg:text-center pb-10 pt-2 lg:mx-10"> Unveiling the Secrets of Popular Colleges: Where Dreams Take Flight. Popular colleges embody a perfect blend of academic excellence, vibrant campus life, and unmatched career opportunities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-12">
                <div className="space-y-2 lg:space-y-4 mb-5 shadow-2xl bg-base-100">
                    <img className="h-64 w-full lg:h-[350px] rounded-lg rounded-b-none" src="https://img.freepik.com/premium-photo/graduates-stand-with-diplomas-lobby-university_85574-14580.jpg?w=740" alt="toy" />
                    <p className="text-xl lg:text-2xl font-bold text-center py-5 lg:py-8 tracking-wide">NSUE University</p>
                </div>
                <div className="space-y-2 lg:space-y-4 mb-5 shadow-2xl bg-base-100">
                    <img className="h-64 w-full lg:h-[350px] rounded-lg rounded-b-none" src="https://img.freepik.com/premium-photo/happy-cute-brunette-caucasian-grad-girl-is-smiling-blurred-class-mates-are_115086-776.jpg?w=740" alt="toy" />
                    <p className="text-xl lg:text-2xl font-bold text-center py-5 lg:py-8 tracking-wide">Medical College</p>
                </div>
                <div className="space-y-2 lg:space-y-4 mb-5 shadow-2xl bg-base-100">
                    <img className="h-64 w-full lg:h-[350px] rounded-lg rounded-b-none" src="https://img.freepik.com/free-photo/group-colleagues-with-diploma_23-2148522297.jpg?w=740&t=st=1690213238~exp=1690213838~hmac=6835c2506c0bb0f405dd7f39010dca0d05940a40dda5bc3767bbb87ae30b783a" alt="toy" />
                    <p className="text-xl lg:text-2xl font-bold text-center py-5 lg:py-8 tracking-wide">Engineering Institute</p>
                </div>
                <div className="space-y-2 lg:space-y-4 mb-5 shadow-2xl bg-base-100">
                    <img className="h-64 w-full lg:h-[350px] rounded-lg rounded-b-none" src="https://img.freepik.com/free-photo/graduation-concept-with-students-holding-blank-certificate-template_23-2148201847.jpg?w=740&t=st=1690212804~exp=1690213404~hmac=7279bc8147420aa4eeba898b8acfa066192364474eb24748773d9751b2ca9dbb" alt="toy" />
                    <p className="text-xl lg:text-2xl font-bold text-center py-5 lg:py-8 tracking-wide">Arts College</p>
                </div>
            </div>
        </section>
    );
};

export default GraduateGallery;