const Navbar = () => {
  return (
    <header className="bg-blue-500 py-4">
      <nav className="container mx-auto">
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="#about-us" className="text-white hover:text-gray-200">
              About us
            </a>
          </li>
          <li>
            <a href="#careers" className="text-white hover:text-gray-200">
              Careers
            </a>
          </li>
          <li>
            <a href="#contact-us" className="text-white hover:text-gray-200">
              Contact us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
