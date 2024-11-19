import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col">
                {/* Header */}
                <header className="bg-neutral-950 text-white py-4">
                    <div className="max-w-screen-xl mx-auto">
                    <h1 className="text-2xl font-bold">Two-Column Layout</h1>
                    </div>
                </header>

                {/* Main Content (Two Columns) */}
                <main className="flex-grow bg-base-100">
                    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-4 py-6">
                    {/* Left Column */}
                    <aside className="bg-gray-100 flex-shrink-0 w-full md:w-1/4 p-4 rounded shadow">
                        <h2 className="text-lg font-bold mb-4">Sidebar</h2>
                        <ul className="space-y-2">
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                        <li>Link 4</li>
                        </ul>
                    </aside>

                    {/* Right Column */}
                    <section className="flex-grow bg-white p-6 rounded shadow">
                        <h2 className="text-lg font-bold mb-4">Main Content</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                        efficitur mauris. Curabitur euismod, libero in cursus gravida,
                        magna libero gravida purus, sit amet vehicula enim lorem a erat.
                        </p>
                        <p className="mt-4">
                        Add more content here to test the scrolling functionality. The
                        right column will stretch as the content grows.
                        </p>
                        {/* Add more dummy content */}
                        <div className="mt-10">
                        {[...Array(10)].map((_, i) => (
                            <p key={i} className="mb-2">
                            Dummy text to ensure scrolling works as expected. Row {i + 1}.
                            </p>
                        ))}
                        </div>
                    </section>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-black text-white py-4">
                    <div className="max-w-screen-xl mx-auto text-center">
                    <p>&copy; 2024 Exclusive | All rights reserved</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;