import GraduateGallery from "../GraduateGallery/GraduateGallery";
import HomePageCollege from "../HomePageCollege/HomePageCollege";
import ResearchPager from "../ResearchPaper/ResearchPager";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <>
        <HomePageCollege />
        <GraduateGallery />
        <ResearchPager />
        <Testimonials />
        </>
    );
};

export default Home;