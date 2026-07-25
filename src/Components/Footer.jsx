import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-20">
            <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <h2 className="text-3xl font-bold text-blue-500">
                        ShopeMe
                    </h2>

                    <p className="text-gray-400 mt-4 leading-7">
                         Discover premium products with secure payments,
                         fast delivery, and the best shopping experience.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Quick Links
                    </h3>

                    <ul className="space-y-3 text-gray-400">
                        <li className="hover:text-white cursor-pointer">
                            Home
                        </li>

                        <li className="hover:text-white cursor-pointer">
                            Products
                        </li>

                        <li className="hover:text-white cursor-pointer">
                            Categories
                        </li>

                        <li className="hover:text-white cursor-pointer">
                            Contact
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Customer Support
                    </h3>

                    <ul className="space-y-3 text-gray-400">
                        <li>Help center</li>
                        <li>Shipping Policy</li>
                        <li>Returns & Refunds</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">
                        Contact
                    </h3>

                    <p className="text-gray-400">
                        Coimbatore, Tamil nadu
                    </p>

                    <p className="text-gray-400 mt-2">
                        support2026@shopme.com
                    </p>

                    <p className="text-gray-400 mt-2">
                        9876543210
                    </p>

                    <div className="flex gap-4 mt-6 text-xl">
                        <FaFacebookF className="cursor-point hover:text-blue-500 transition" />
                        <FaInstagram className="cursor-point hover:text-pink-500 transition "/>
                        <FaTwitter className="cursor-point hover:text-sky-500 transition" />
                        <FaLinkedinIn className="cursor-pointer hover:text-blue-400 transition"/>
                        <FaGithub className="cursor-pointer hover:text-gray-300 transition"/>

                    </div>
                </div>


            </div>
        </footer>
    )
}

export default Footer;

//footerpageui