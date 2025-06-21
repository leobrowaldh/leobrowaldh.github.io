import { div } from "motion/react-client";
import { Route, Routes } from "react-router";
import Home from '../pages/home';



export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            
        </Routes>
    )
}