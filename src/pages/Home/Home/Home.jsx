import DynamicTitle from "../../../components/DynamicTitle";
import GraduateGallery from "../GraduateGallery/GraduateGallery";
import HomePageCollege from "../HomePageCollege/HomePageCollege";
import ResearchPager from "../ResearchPaper/ResearchPager";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <>
        <DynamicTitle>Home</DynamicTitle>
        <HomePageCollege />
        <GraduateGallery />
        <ResearchPager />
        <Testimonials />
        </>
    );
};

export default Home;