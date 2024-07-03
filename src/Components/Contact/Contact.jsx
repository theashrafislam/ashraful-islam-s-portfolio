import emailjs from 'emailjs-com';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qedbzyq', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message Sent Successfully!');
      }, (error) => {
        console.log(error.text);
        alert('An error occurred, please try again.');
      });

    e.target.reset();
  };

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Information</h2>
          <p>Email: <a href="mailto:example@example.com" className="text-teal-400">example@example.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-teal-400">+1234567890</a></p>
          <div className="mt-4 flex space-x-4">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-2xl">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-2xl">
              <FaFacebook />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-teal-400 text-2xl">
              <FaGithub />
            </a>
          </div>
          <p className="mt-8">Do you have a project in mind or questions about my work? Let's talk about your project! Contact me and I'll be happy to discuss how we can bring your ideas to life.</p>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <form onSubmit={sendEmail} className="bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input type="text" id="name" name="name" className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" name="message" className="mt-1 p-2 w-full bg-gray-700 text-white rounded-md" rows="4" required></textarea>
            </div>
            <button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;