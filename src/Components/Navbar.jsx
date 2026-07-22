import {
    FaHeart,
    FaShoppingCart,
    FaUser,
    FaSearch,
} from "react-icons/fa";
import { GrLinkTop } from "react-icons/gr";

function Navbar() {
    return (
        <nav className="bg-white shodow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link
                 to="/"
                 className="text-3xl font-bold text-blue-600"
                >
                    ShopMe
                </Link>

                <ul className ="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                    <li>
                        <Link
                         to="/"
                         className ="hover:text-blue-600 transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link
                          to="/products"
                          className="hover:text-blue-600 transition-colors duration-300">
                            Products
                          </Link>

                    </li>
                    <li>
                        <Link 
                        to="/categories"
                        className="hover:text-blue-600 transition-colors duration-300">
                            Categories
                        </Link>
                    </li>

                    <li>
                        <Link 
                        to="/orders"
                        className="hover:text-blue-600 transition-color duration-300">
                            Orders
                        </Link>
                    </li>
                </ul>

                <div className="hidden lg:flex items-center w-80 bg-gray-100 rounded-lg px-3 py-2">
                    <FaSearch className="text-gray-500" />

                </div>
            </div>
        </nav>
    )
}