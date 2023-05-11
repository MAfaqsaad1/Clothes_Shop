import logo from "./img/logo.png";
function Footer({ goToFooter }) {
  return (
    <footer ref={goToFooter} className="px-3 py-8 bg-[#383838]">
      <div className="flex flex-col  justify-around items-center">
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row lg:space-x-10 mx-auto">
          <nav className=" flex flex-col items-center justify-center md:pr-5 text-center">
            <a
              href="/"
              className="hover:text-gray-700 dark:hover:text-white text-gray-400"
            >
              <span className="text-white"> e-mail: </span>{" "}
              clothes_shop@triablo.com
            </a>
            <a
              href="/"
              className="hover:text-gray-700 dark:hover:text-white  text-gray-400"
            >
              <span className="text-white"> address: </span> New York, Saint
              Nicholas Avenue 13/1
            </a>
            <a
              href="/"
              className="hover:text-gray-700 dark:hover:text-white  text-gray-400"
            >
              <span className="text-white">fax:</span> +92 308 488 6911
            </a>
          </nav>

          <div className="mt-4 md:mt-0  flex items-center justify-center ">
            <img src={logo} alt="" srcset="" />
          </div>

          <div className="mt-7 md:mt-0 flex flex-col items-center justify-center md:items-start md:pl-5">
            <span className="text-white">
              © Design by M.Afaq-All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
