import { SiReaddotcv } from "react-icons/si";
import { FaMedapps } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GlassIcons from '../components/glassIcons'

export default function Home() {
    const items = [
        { icon: <FaMedapps />, color: 'blue', label: 'Projects' },
        { icon: <SiReaddotcv />, color: 'blue', label: 'VC' },
        { icon: <FaGithub />, color: 'blue', label: 'Github' },
        { icon: <FaLinkedin />, color: 'blue', label: 'LinkedIn' },
        ];
    return (
        <div className="justify-center items-center flex flex-col h-screen">
            <p className='pb-10'>Hi!</p>
            <GlassIcons items={items} className="custom-class"/>
        </div>
    )
}