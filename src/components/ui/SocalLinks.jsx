import React from 'react'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocalLinks = () => {
    return (
        <div className="mt-8 flex justify-center space-x-4">
            {/* GitHub */}
            <a
                href="https://github.com/israilyas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#141420] hover:bg-[#1F1F2E] transition-colors"
            >
                <FaGithub className="text-white text-xl" />
            </a>

            {/* LinkedIn */}
            <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#141420] hover:bg-[#1F1F2E] transition-colors"
            >
                <FaLinkedin className="text-white text-xl" />
            </a>

            {/* Twitter */}
            <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#141420] hover:bg-[#1F1F2E] transition-colors"
            >
                <FaTwitter className="text-white text-xl" />
            </a>

            {/* Internal Contact Link */}
            <Link
                to="/contact"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#141420] hover:bg-[#1F1F2E] transition-colors"
            >
                <FaEnvelope className="text-white text-xl" />
            </Link>
        </div>
    )
}

export default SocalLinks
