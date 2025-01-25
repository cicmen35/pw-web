// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home_page', label: 'Home' },
    { href: '/publications', key: 'list_of_publications', label: 'Publications' },
    { href: '/cv_wo_publications', key: 'cv_wo_publications', label: 'CV' },
    { href: '/time_table', key: 'time_table', label: 'Teaching' },
    { href: '/current_or_past_researches', key: 'current_or_past_researches', label: 'Research' },
];

const Main = () => {
    return (
        <main className="flex flex-col items-start justify-start min-h-screen bg-gray-100 px-8">
            <h1 className="text-5xl font-bold text-blue-600">Personal web page of Pavel Eichler.</h1>
            <p className="mt-4 text-lg text-gray-700">
                This is the starting point of my web application. Navigate through the links to explore more.
            </p>
            <div className="flex flex-col items-center justify-center w-full max-w-md">
                <video
                    className="w-full h-auto rounded-lg shadow-lg"
                    src="/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </main>
    );
};

export default Main;
