import { Route, Routes } from "react-router";
import Projects from '../pages/projects';
import Cv from '../pages/cv';
import Home from "../pages/home";



export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/cv" element={<Cv/>} />
        </Routes>
    )
}