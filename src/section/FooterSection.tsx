const FooterSection = () => {
  return (
    <section className="w-full bg-dark py-[30px] mt-[170px]">
      <div className="container mx-auto text-white flex flex-col sm:flex-row items-center justify-between">
        <div className="flex gap-[40px] mb-[20px]">
          <div>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-gray-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light hover:text-gray-700 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p>Yelyzaveta</p>
          <p>January 2025 All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
