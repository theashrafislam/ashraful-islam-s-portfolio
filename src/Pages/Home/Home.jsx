import { FaLinkedin, FaGithub, FaFacebook, FaGraduationCap } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faReact,
    faNodeJs,
    faGit,
    faGithub,
    faFigma
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className="bg-gray-100 text-gray-900">
            {/* Hero Section */}
            <section className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6 flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <img
                            src="./ashraful-islam.jpg" // Update this path to your image
                            alt="Ashraful Islam"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Ashraful Islam</h1>
                        <p className="text-xl sm:text-2xl mb-8">Full Stack Web Developer</p>
                        <p className="text-md sm:text-lg mb-8">
                            Ashraful Islam is a skilled full-stack developer known for developing robust and efficient applications. Specializing in front-end and back-end development, he is skilled in JavaScript and has a wide range of skills with extensive experience. Ashraful's deep passion and unwavering commitment to web development, accentuated by his in-depth understanding and expertise of technology, has solidified his reputation in the industry.
                        </p>
                        <a
                            href="/path/to/your/resume.pdf" // Update this path to your resume
                            className="inline-block px-6 py-3 bg-teal-500 text-white rounded-md text-lg hover:bg-teal-600"
                            download
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </section>

            {/* Skills Section */}

            <section id="skills" className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Frontend */}
                        <div className="text-center">
                            <FontAwesomeIcon icon={faHtml5} className="text-6xl text-orange-500" />
                            <p className="mt-2 text-xl font-medium">HTML</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faCss3Alt} className="text-6xl text-blue-500" />
                            <p className="mt-2 text-xl font-medium">CSS</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faJsSquare} className="text-6xl text-yellow-500" />
                            <p className="mt-2 text-xl font-medium">JavaScript</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faReact} className="text-6xl text-cyan-500" />
                            <p className="mt-2 text-xl font-medium">React JS</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faReact} className="text-6xl text-blue-600" />
                            <p className="mt-2 text-xl font-medium">Tailwind CSS</p>
                        </div>

                        {/* Backend */}
                        <div className="text-center">
                            <FontAwesomeIcon icon={faNodeJs} className="text-6xl text-green-500" />
                            <p className="mt-2 text-xl font-medium">Node JS</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faDatabase} className="text-6xl text-green-700" />
                            <p className="mt-2 text-xl font-medium">MongoDB</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faDatabase} className="text-6xl text-yellow-600" />
                            <p className="mt-2 text-xl font-medium">Firebase</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faCodeBranch} className="text-6xl text-gray-700" />
                            <p className="mt-2 text-xl font-medium">Express JS</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faReact} className="text-6xl text-black" />
                            <p className="mt-2 text-xl font-medium">Next JS</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faCodeBranch} className="text-6xl text-gray-600" />
                            <p className="mt-2 text-xl font-medium">JSON</p>
                        </div>

                        {/* Tools */}
                        <div className="text-center">
                            <FontAwesomeIcon icon={faGit} className="text-6xl text-orange-600" />
                            <p className="mt-2 text-xl font-medium">Git</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faGithub} className="text-6xl text-black" />
                            <p className="mt-2 text-xl font-medium">GitHub</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faCodeBranch} className="text-6xl text-blue-600" />
                            <p className="mt-2 text-xl font-medium">VSCode</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faFigma} className="text-6xl text-pink-500" />
                            <p className="mt-2 text-xl font-medium">Figma</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faCodeBranch} className="text-6xl text-blue-700" />
                            <p className="mt-2 text-xl font-medium">Netlify</p>
                        </div>
                        <div className="text-center">
                            <FontAwesomeIcon icon={faCodeBranch} className="text-6xl text-purple-600" />
                            <p className="mt-2 text-xl font-medium">DevTools</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id='projects' className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Projects</h2>
                    <div className="flex flex-wrap justify-center">

                        {/* MediZone Project */}
                        <div className="bg-white text-gray-900 shadow-md rounded-lg p-6 m-4 w-full sm:w-1/2 lg:w-1/4">
                            <h3 className="text-xl font-semibold mb-4">MediZone</h3>
                            <p>MediZone is a multi-vendor medicine selling e-commerce platform with secure payments and a robust dashboard system.</p>
                            <ul className="list-disc list-inside mt-2 text-left">
                                <li>Secure Payments</li>
                                <li>Admin Dashboard</li>
                                <li>Seller Dashboard</li>
                            </ul>
                            <h4 className="mt-4 font-semibold">Tech Used:</h4>
                            <p>React, Tailwind, Node.js, Express, MongoDB</p>
                            <div className="mt-4 flex flex-col items-center space-y-2">
                                <a href="https://medizone-d0736.web.app/" target='_blank' className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded-md inline-block">Live Site</a>
                                <a href="https://github.com/theashrafislam/mediZone-client-side" target='_blank' className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded-md inline-block">GitHub Client</a>
                                <a href="https://github.com/theashrafislam/mediZone-server-side" target='_blank' className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded-md inline-block">GitHub Server</a>
                            </div>
                        </div>

                        {/* Bistro Boss Project */}
                        <div className="bg-white text-gray-900 shadow-md rounded-lg p-6 m-4 w-full sm:w-1/2 lg:w-1/4">
                            <h3 className="text-xl font-semibold mb-4">Bistro Boss</h3>
                            <p>Bistro Boss is a culinary community platform with secure payments, personalized dashboards, and secure login.</p>
                            <ul className="list-disc list-inside mt-2 text-left">
                                <li>Secure Payments</li>
                                <li>Personalized Dashboard</li>
                                <li>Secure Login</li>
                            </ul>
                            <h4 className="mt-4 font-semibold">Tech Used:</h4>
                            <p>React, Tailwind, Node.js, Express, MongoDB</p>
                            <div className="mt-4 flex flex-col items-center space-y-2">
                                <a href="https://bistro-boss-c3a33.web.app/" target='_blank' className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded-md inline-block">Live Site</a>
                                <a href="https://github.com/theashrafislam/bistro-boss-client" target='_blank' className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded-md inline-block">GitHub Client</a>
                                <a href="https://github.com/theashrafislam/bistro-boss-server" target='_blank' className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded-md inline-block">GitHub Server</a>
                            </div>
                        </div>

                        {/* StudyHub Connect Project */}
                        <div className="bg-white text-gray-900 shadow-md rounded-lg p-6 m-4 w-full sm:w-1/2 lg:w-1/4">
                            <h3 className="text-xl font-semibold mb-4">StudyHub Connect</h3>
                            <p>StudyHub Connect is a collaborative learning platform with a blog banner and FAQs. Users can manage and track tasks, view profiles, and more.</p>
                            <ul className="list-disc list-inside mt-2 text-left">
                                <li>Task Management</li>
                                <li>Profile Section</li>
                                <li>Academic Collaboration</li>
                            </ul>
                            <h4 className="mt-4 font-semibold">Tech Used:</h4>
                            <p>React, Tailwind, Node.js, Express, MongoDB</p>
                            <div className="mt-4 flex flex-col items-center space-y-2">
                                <a href="https://studyhub-connect-1f372.web.app" target='_blank' className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded-md inline-block">Live Site</a>
                                <a href="https://github.com/theashrafislam/studyHub-connec-client-side" target='_blank' className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded-md inline-block">GitHub Client</a>
                                <a href="https://github.com/theashrafislam/studyHub-connect-server-side" target='_blank' className="text-white bg-teal-500 hover:bg-teal-700 py-2 px-4 rounded-md inline-block">GitHub Server</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id='education' className="bg-gray-100 text-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Education</h2>
                    <div className="flex flex-wrap justify-center">

                        {/* Education Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full sm:w-1/2 lg:w-1/4">
                            <div className="flex items-center justify-center mb-4">
                                <FaGraduationCap size={40} className="text-teal-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Dudhghata Balukhando High School</h3>
                            <p className="mb-2">SSC</p>
                            <p className="mb-2">Studied from 2014 to 2019</p>
                        </div>

                        {/* Education Card */}
                        <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full sm:w-1/2 lg:w-1/4">
                            <div className="flex items-center justify-center mb-4">
                                <FaGraduationCap size={40} className="text-teal-500" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">UCEP Institute of Science & Technology - UIST, Dhaka</h3>
                            <p className="mb-2">Diploma in Electrical Engineering</p>
                            <p className="mb-2">2019 - 2023</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id='contact' className="bg-gray-900 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Me</h2>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="https://www.linkedin.com/in/theashrafislam/"
                            target='_black'
                            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                        >
                            <FaLinkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/theashrafislam"
                            target='_black'
                            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                        >
                            <FaGithub size={24} />
                        </a>
                        <a
                            href="https://www.facebook.com/theashrafislam"
                            target='_black'
                            className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
                        >
                            <FaFacebook size={24} />
                        </a>
                    </div>
                    <p className="text-sm mt-4">Email: theashrafislam@gmail.com</p>
                    <p className="text-sm">Phone: +880 1639568198</p>
                </div>
            </section>
        </div>
    );
};

export default Home;