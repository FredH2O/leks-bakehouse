import { FaFacebook, FaInstagram, FaCheck } from "react-icons/fa";

const certified = [
  "Certified HACCP 1, 2, and 3",
  "Allergen Awareness",
  "HSE Registered",
];

export default function Footer() {
  return (
    <footer className="bg-zinc-100 border-t border-slate-600 text-zinc-700 text-center py-8 mt-10">
      <div className="container mx-auto space-y-3 text-sm px-6 max-w-4xl">
        {/* Business Name */}
        <div>
          <h2 className="text-xl text-zinc-900 font-pacifico">
            Lek's Bakehouse
          </h2>
          <p className="text-sm mt-1 italic">
            "Homemade cakes & desserts in Dublin."
          </p>
        </div>

        {/* Contact & Location */}
        <div className="">
          <p className="text-zinc-600">📍 Based in Lucan Village</p>
          <a
            href="mailto:leksbakehouse@gmail.com"
            className="text-zinc-600 hover:text-blue-500"
          >
            ✉️ leksbakehouse@gmail.com
          </a>
        </div>

        {/* Opening Hours */}
        <div className="">
          <p className="font-medium text-zinc-800">⌚ Open Hours</p>
          <p className="text-sm text-zinc-600">Mon - Sat: 9AM - 6PM</p>
          <p className="text-sm text-zinc-600">Sun: Closed </p>
        </div>

        <div>
          <ul className="flex md:flex-row flex-col md:gap-3 gap-2 justify-center">
            {certified.map((title, index) => (
              <li
                key={index}
                className="flex justify-center items-center gap-1 text-sm"
              >
                <FaCheck className="text-green-600" />
                {title}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61556922004415"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-700 hover:text-blue-500 transition"
          >
            <FaFacebook size={22} className="text-blue-500" />
            <span className="font-medium">Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/_leksbakehouse"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-700 hover:text-pink-500 transition"
          >
            <FaInstagram size={22} className="text-pink-500" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Lek's Bakehouse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
