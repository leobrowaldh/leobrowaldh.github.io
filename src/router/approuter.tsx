import { Route, Routes } from "react-router";
import Projects from '../pages/projects';
import Cv from '../pages/cv';
import Home from "../pages/home";
import Contact from "../pages/contact";



export function AppRouter({ setSelectedNav }: { setSelectedNav: (id: number) => void }) {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/cv" element={<Cv setSelectedNav={setSelectedNav}/>} />
            <Route path="/contact" element={<Contact/>} />
        </Routes>
    )
}