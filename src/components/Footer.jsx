const Footer = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100 snap-start">
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link className="flex items-center space-x-2" href="#">
              <img
                alt="Logo"
                className="text-gray-900 dark:text-gray-50"
                height={24}
                src="./src/assets/logo.svg"
                style={{
                  aspectRatio: "24/24",
                  objectFit: "cover",
                }}
                width={24}
              />
              <span className="text-lg font-bold text-pmpurple">
                Pure Mentorship
              </span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 lg:pl-20 lg:pr-20">
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Services
            </Link>
            <Link
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <a
              href="https://www.linkedin.com/company/pure-mentorship/mycompany/"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/purementorship/"
              target="_blank"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <InstagramIcon className="h-6 w-6" />
            </a>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 lg:pl-10">
              © 2024 Pure Mentorship. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default Footer;
