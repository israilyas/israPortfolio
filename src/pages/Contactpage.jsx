// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Header from '../components/Header';
// import PageHero from '../components/ui/PageHero';

// const ContactPage = () => {
//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     try {
//       // Replace with your actual form submission logic
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//       setTimeout(() => setSubmitStatus(null), 5000);
//     } catch (error) {
//       setSubmitStatus('error');
//       setTimeout(() => setSubmitStatus(null), 5000);
//     }

//     setIsSubmitting(false);
//   };

//   // Status message component
//   const StatusMessage = () => {
//     if (!submitStatus) return null;

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className={`p-4 rounded-lg mb-6 ${submitStatus === 'success' ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'
//           }`}
//       >
//         {submitStatus === 'success'
//           ? "Message sent successfully! I'll get back to you soon."
//           : "There was an error sending your message. Please try again."}
//       </motion.div>
//     );
//   };

//   return (
//     <div className="bg-[#000319] text-white min-h-screen">
//       <Header />

//       {/* Hero Section */}
//       <PageHero
//         headingWhite="Get in"
//         headingPur="Touch"
//         desc="Let's collaborate on your next project. I'm available for remote work, freelance opportunities, and interesting collaborations."
//       />

//       {/* Contact Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="flex flex-col gap-8"
//             >
//               <div>
//                 <h2 className="text-3xl font-bold mb-6">Let's <span className="text-[#A78BFA]">Connect</span></h2>
//                 <p className="text-gray-300 mb-8">
//                   I'm passionate about creating exceptional web experiences. Whether you need a new website,
//                   want to revamp an existing one, or are looking for a developer to join your team remotely,
//                   I'd love to hear from you.
//                 </p>
//               </div>

//               {/* Contact Methods */}
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-[#141420] rounded-lg">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium">Email</h3>
//                     <a href="mailto:contact@yourname.com" className="text-[#A78BFA] hover:underline">contact@yourname.com</a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-[#141420] rounded-lg">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium">Location</h3>
//                     <p className="text-gray-300">Working Remotely Worldwide</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-[#141420] rounded-lg">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-medium">Availability</h3>
//                     <p className="text-gray-300">Open for freelance and remote opportunities</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Links */}
//               <div>
//                 <h3 className="text-lg font-medium mb-4">Connect with me</h3>
//                 <div className="flex gap-4">
//                   <motion.a
//                     href="https://github.com/yourusername"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-[#141420] rounded-lg hover:bg-[#1E1E2D] transition-colors"
//                     whileHover={{ y: -5 }}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" viewBox="0 0 24 24" fill="currentColor">
//                       <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
//                     </svg>
//                   </motion.a>

//                   <motion.a
//                     href="https://linkedin.com/in/yourusername"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-[#141420] rounded-lg hover:bg-[#1E1E2D] transition-colors"
//                     whileHover={{ y: -5 }}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                     </svg>
//                   </motion.a>

//                   <motion.a
//                     href="https://twitter.com/yourusername"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-[#141420] rounded-lg hover:bg-[#1E1E2D] transition-colors"
//                     whileHover={{ y: -5 }}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                     </svg>
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             {/* Contact Form */}
//             {/* <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               className="bg-[#141420] p-8 rounded-lg shadow-lg"
//             >
//               <h2 className="text-3xl font-bold mb-6 text-center">
//                 Send a <span className="text-[#A78BFA]">Message</span>
//               </h2>

//               {/* Status Message 
//               <StatusMessage />

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   {/* Name Input */}
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg bg-[#1E1E2D] text-white border border-gray-700 focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
//                     />
//                   </div>

//                   {/* Email Input 
//                   <div>
//                     <label className="block text-sm font-medium text-gray-300 mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg bg-[#1E1E2D] text-white border border-gray-700 focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
//                     />
//                   </div>
//                 </div>

//                 {/* Subject Input 
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Subject
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-lg bg-[#1E1E2D] text-white border border-gray-700 focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
//                   />
//                 </div>

//                 {/* Message Input 
//                 <div>
//                   <label className="block text-sm font-medium text-gray-300 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="5"
//                     className="w-full px-4 py-3 rounded-lg bg-[#1E1E2D] text-white border border-gray-700 focus:border-[#A78BFA] focus:ring-1 focus:ring-[#A78BFA]"
//                   ></textarea>
//                 </div>

//                 {/* Submit Button 
//                 <div className="text-center">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full md:w-auto px-6 py-3 bg-[#A78BFA] hover:bg-[#9165F5] transition-colors text-white font-medium rounded-lg"
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </button>
//                 </div>
//               </form>
//             </motion.div> */}

//             {/* <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="bg-[#141420] p-6 md:p-8 rounded-xl shadow-xl"
//             >
//               <h2 className="text-2xl font-bold mb-6">Send Me a <span className="text-[#A78BFA]">Message</span></h2>

//               <StatusMessage />

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-[#1E1E2D] border border-[#2c2c40] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-[#1E1E2D] border "

//                   />
//                 </div>
//               </form>
//             </motion.div> */}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ContactPage

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import PageHero from '../components/ui/PageHero';
import { FaFacebook } from "react-icons/fa";

const ContactOption = ({ icon, title, value, link, delay = 0 }) => {
  return (
    <motion.a
      href={link}
      target={link.startsWith('http') ? "_blank" : "_self"}
      rel={link.startsWith('http') ? "noopener noreferrer" : ""}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay }}
      viewport={{ once: true }}
      // whileHover={{ scale: 1.03 }}
      className="flex items-center gap-5 bg-[#141420] p-6 rounded-xl hover:shadow-lg hover:shadow-[#A78BFA]/10 transition-all"
    >
      <div className="p-4 bg-[#1E1E2D] rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-[#A78BFA]">{value}</p>
      </div>
    </motion.a>
  );
};

const ContactPage = () => {
  return (
    <div className="bg-[#000319] text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <PageHero
        headingWhite="Get in"
        headingPur="Touch"
        desc="Let's collaborate on your next project. I'm available for remote work, freelance opportunities, and interesting collaborations."
      />

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Let's <span className="text-[#A78BFA]">Connect</span></h2>
            <p className="text-gray-300">
              I'm a remote developer specializing in creating responsive, modern web applications.
              I work on freelance projects and build personal projects to continuously improve my skills.
              Feel free to reach out through any of the channels below for collaboration opportunities.
            </p>
          </motion.div>

          {/* Contact Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            <ContactOption
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>}
              title="Email"
              value="israqureshi138@gmal.com"
              link="mailto:israqureshi138@gmal.com"
              delay={0.1}
            />
{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg> */}
            <ContactOption
              icon={<FaFacebook className='text-[#A78BFA] h-6 w-6' />}
              title="facebook"
              value="isra-ilyas"
              link="https://www.facebook.com/israilyas.qureshii"
              delay={0.2}
            />

            <ContactOption
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>}
              title="GitHub"
              value="github.com/israilyas"
              link="https://github.com/israilyas"
              delay={0.3}
            />

            <ContactOption
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>}
              title="LinkedIn"
              value="isra-ilyas-quresh"
              link="https://www.linkedin.com/in/isra-ilyas-qureshi-a88670264/"
              delay={0.4}
            />
          </div>

          {/* Work Preferences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#141420] p-8 rounded-xl max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6">Work <span className="text-[#A78BFA]">Preferences</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Remote Work
                </h3>
                <p className="text-gray-300 text-sm">
                  I'm highly experienced with remote work dynamics and tools. I value clear communication and deliver quality results regardless of location.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Availability
                </h3>
                <p className="text-gray-300 text-sm">
                  I'm currently available for new projects and can adapt to different time zones. My typical response time is within 24 hours.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  Project Types
                </h3>
                <p className="text-gray-300 text-sm">
                  I specialize in web development projects including responsive websites, web applications, and UI/UX implementations. I'm particularly interested in projects using React and Next.js.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  Collaboration Tools
                </h3>
                <p className="text-gray-300 text-sm">
                  I'm comfortable with various collaboration tools including GitHub, Figma, Slack, Discord, Trello, and Notion. I'm open to working with your preferred tools.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-gradient-to-r from-[#1E1E2D] to-[#141420]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to <span className="text-[#A78BFA]">work together</span>?</h2>
            <p className="text-gray-300 mb-10">
              Whether you have a specific project in mind or just want to explore possibilities, I'm excited to hear from you!
            </p>
            <motion.a
              href="mailto:israqureshi138@gmal.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#A78BFA] text-white rounded-lg font-medium text-lg inline-block hover:bg-[#9B7DE3] transition-colors"
            >
              Send an Email
            </motion.a>
          </motion.div>
        </div>
      </section>
      </div>
  )}


  export default ContactPage