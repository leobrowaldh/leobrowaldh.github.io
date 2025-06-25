import SharedLayoutAnimation from "../components/sharedLayoutAnimations";


export default function Projects() {
    return (
        <div className="justify-center items-center flex flex-col h-screen">
            <div className="flex flex-col items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-24 text-gray-400 mb-6 animate-bounce"
                    fill="none"
                    viewBox="0 0 48 48"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20v-2a12 12 0 1124 0v2M6 20h36v18a4 4 0 01-4 4H10a4 4 0 01-4-4V20z"
                    />
                    <circle cx="24" cy="34" r="4" />
                </svg>
                <h1 className="text-3xl font-bold text-gray-700 mb-2">Work in Progress</h1>
                <p className="text-lg text-gray-500">This page is under construction. Please check back soon!</p>
            </div>
        </div>
    )
}