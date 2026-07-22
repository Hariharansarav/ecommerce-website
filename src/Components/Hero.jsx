import shopcart from "../assets/shopcart.png";
function Hero(){
    return (
        <section className="bg-gradient-to-r from-blue-50 to-indigo-100">
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                <div className="flex-1 text-center md:text-left">
                    <p className="text-blue-600 font-semibold uppercase tracking-wider">
                        New Collection 2026
                    </p>
                    
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-4 leading-tight">
                        Discover Your Next
                        <span className="text-blue-600"> Favorite product</span>
                    </h1>
                    <p className="text-gray-600 mt-6 text-lg">
                        Shop premium electronics, fashion, and accessories with
                        secure payments, fast delivery, and exciting offers.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition duration-300">
                            Shop Now
                        </button>

                        <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                            Explore Products
                        </button>

                    </div>
                    {/* <div classname="mt-10 flex flex-wrap gap-6 justify-center md:justify-start text-gray-700">
                        <div>🚚Free Shipping</div>

                        <div>🔒Secure Payment</div>

                        <div>↩️Easy return</div>
                    </div> */}
                     <div className="flex-1 flex justify-end">
                <img src={shopcart}
                alt="My Photo"
                className="w-80 md:w-90 object-contain"
                />
            </div>

                </div>

            </div>
{/* 
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

            <div className="flex-1 flex justify-end">
                <img src={shopcart}
                alt="My Photo"
                className="w-80 max-w-96 rounded-2xl shadow-xl"
                />
            </div>
            </div> */}
        </section>


    );
}

export default Hero;