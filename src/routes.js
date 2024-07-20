import { Route, useLocation, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import LoadingPage from './components/global/LoadingPage';

import NavBar from './components/NavBars';
import Footer from './components/Footer/footers/Footer';

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

    const ScrollToTop = () => {
        const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return null;
    };

    return (
        <>
            <NavBar />
            <ScrollToTop />
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/services" element={<OurServices />} />
                    <Route path="/service/:id" element={<Service />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/blogs" element={<OurBlogs />} />
                    <Route path="/blog/:id" element={<Blog />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
};

export default RoutesPath;
