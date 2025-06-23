import { Route, Routes } from "react-router";
import Home from '../pages/home';
import Projects from '../pages/projects';
import Cv from '../pages/cv';



export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Cv/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/cv" element={<Cv/>} />
        </Routes>
    )
}