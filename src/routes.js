import { Route, useLocation, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import LoadingPage from './components/global/LoadingPage';

import NavBar from './components/NavBars';
import Footer from './components/Footer/footers/Footer';
import ScrollToTopButton from './components/global/ScrollToTopButton';
import { useBasicData } from './hooks/useBasicData';
import { Helmet } from 'react-helmet-async';

// Pages
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/About"));
const OurServices = lazy(() => import("./pages/OurServices"));
const Service = lazy(() => import("./pages/Service"));
const Projects = lazy(() => import("./pages/Projects"));
const Project = lazy(() => import("./pages/Project"));
const OurBlogs = lazy(() => import("./pages/OurBlogs"));
const Blog = lazy(() => import("./pages/Blog"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

const RoutesPath = () => {
    const { basicData } = useBasicData()

    const ScrollToTop = () => {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    };
    console.log(basicData?.data?.fav_icon)
    return (
        <>
            <Helmet>
                <title>{basicData?.data?.name}</title>
                <link rel="icon" href={basicData?.data?.fav_icon} />
                <link rel="icon" href={basicData?.data?.fav_icon} />
                <meta name="description" content="Web site created using create-react-app" />
                <link rel="apple-touch-icon" href={basicData?.data?.fav_icon} />
                <link rel="manifest" href={basicData?.data?.fav_icon} />
            </Helmet>
            <NavBar />
            <ScrollToTop />
            <ScrollToTopButton />
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<OurServices />} />
                    <Route path="/service/:serviceSlug" element={<Service />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:projectSlug" element={<Project />} />
                    <Route path="/blogs" element={<OurBlogs />} />
                    <Route path="/blog/:blogSlug" element={<Blog />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
};

export default RoutesPath;
