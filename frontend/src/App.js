import { useDispatch, useSelector } from "react-redux";
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Intro from "./components/intro/Index";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import { useEffect } from "react";
import { fetchAllProjects, fetchProfileImage, fetchSiteContent } from "./slice/siteContentSlice";
import Loading from "./components/loading";
import Admin from "./admin";
import SiteSettings from "./admin/setting/setting";
import SignIn from "./admin/signin";
import { fetchUserDetails } from "./slice/userSlice";
import UploadProfile from "./admin/uploadProfile";
import Projects from "./admin/projects";
import ProjectDetail from "./components/portfolio/projectDetail/Index";

function App() {
    const dispatch = useDispatch();
    const { siteContentStatus, siteProfileImageStatus } = useSelector(state => state.siteContent);
    const { userStatus, userData } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchSiteContent());
        dispatch(fetchProfileImage());
        dispatch(fetchUserDetails());
        dispatch(fetchAllProjects());
    }, [dispatch]);


    if (siteContentStatus === "loading" || siteProfileImageStatus === "loading" || userStatus === "loading") {
        return (
            <Loading />
        )
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin" element={
                    <div className="App">
                        <Admin />
                    </div>
                } />

                <Route path="/admin/upload-profile" Component={UploadProfile} />
                <Route path="/admin/projects" Component={Projects} />
                <Route path="/project/:id" Component={ProjectDetail} />



                {/* Publically Availabe */}
                <Route path="/admin/sign-in/" Component={
                    SignIn} />
                <Route path="/admin/settings" Component={SiteSettings} />
                <Route
                    path="*"
                    element={
                        <div className="App">
                            <Intro />
                            <Skills />
                            <Portfolio />
                            {/*     <Blogs /> */}
                            <Contact />
                            <Footer />
                        </div>
                    }
                />
            </Routes>
        </BrowserRouter>

    );
}

export default App;
