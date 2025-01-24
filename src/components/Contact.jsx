import  { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id='contact' className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-600 to-purple-600">
            Contact Me
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Lets connect and create something amazing together
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>
            
            <div className="flex items-center space-x-4">
              <Mail className="text-indigo-600 w-10 h-10" />
              <div>
                <p className="text-gray-600">Email</p>
                <a href="mailto:example@email.com" className="text-indigo-600 font-semibold">
                  anshiksuhane9@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-purple-600 w-10 h-10" />
              <div>
                <p className="text-gray-600">Phone</p>
                <p className="text-purple-600 font-semibold">+91 9301932210</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-green-600 w-10 h-10" />
              <div>
                <p className="text-gray-600">Location</p>
                <p className="text-green-600 font-semibold">Katni, Madhya Pradesh, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Linkedin className="text-indigo-600 w-10 h-10" />
              <div>
                <p className="text-gray-600">LinkedIn</p>
                <a href="https://www.linkedin.com/in/anshik-suhane-003a89316/" className="text-indigo-600 font-semibold">
                  https:///www.linkedin.com
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 
                    transition duration-300"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 
                    transition duration-300"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500 
                    transition duration-300"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 
                  text-white font-bold py-3 rounded-lg 
                  hover:from-indigo-700 hover:to-purple-700 
                  transition duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;