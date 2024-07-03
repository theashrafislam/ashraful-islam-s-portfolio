const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Ashraful Islam</h2>
                <p className="text-sm mb-4">
                Ashraful Islam is an Electrical Engineer by training, but his true passion is web development and he specializes in creating innovative web applications.
                </p>
                <hr className="border-gray-300 my-4" />
                <div className="text-sm">
                    <p>&copy; {new Date().getFullYear()} Ashraful Islam. All rights reserved.</p>
                    <p>Built with <span className="text-teal-500">React</span> and <span className="text-teal-500">Tailwind CSS</span>.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;