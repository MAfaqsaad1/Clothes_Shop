import testBgImg from "./img/carouselItem4.jpg";
import authImg from "./img/auth2.png";
export default function Testimonials() {
    return (

        <div className="flex items-center justify-center mt-16 my-10 px-5 py-5 h-[60vh] bg-fixed" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${testBgImg})` }}>
            <div className="w-full mx-auto  text-gray-800 dark:text-gray-50 flex ">
                <div className="w-full  mx-auto ">
                    <a href="/" className="">
                        <img alt="profil" src={authImg} className="mx-auto object-cover rounded-full h-20 w-20 " />
                    </a>
                    <div className="w-full mb-10 mx-auto">

                        <p className="text-xl text-gray-500 my-4 dark:text-gray-300 text-center">
                            John McKenzey,  Californi
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-100 px-5 pt-4 lg:w-1/3 text-center mx-auto">
                            Thank you so much. I really didn’t expect such a quick and positive response! Often when something goes wrong with a product it seems the consumer is the one that gets the “raw end of the deal.

                        </p>

                    </div>
                </div>

            </div>
        </div>


    );
}