const Footer = ({ companyInfo }: any) => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-gray-800 pt-10 sm:mt-10 pt-10">
      {companyInfo && (
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 sm:flex justify-around">
          {companyInfo.address ? (
            <div>
              <h4 className="text-lg leading-6 font-medium text-white">
                Address
              </h4>
              <p className="mt-2 text-base leading-6 text-gray-400">
                {companyInfo.address.address1}
                <br />
                {companyInfo.address.city}, {companyInfo.address.postal_code}
                <br />
                {companyInfo.address.state}
              </p>
            </div>
          ) : null}

          {companyInfo.homepage_url ? (
            <div className="mt-12 sm:mt-0">
              <h4 className="text-lg leading-6 font-medium text-white">
                Website
              </h4>
              <p className="mt-2 text-base leading-6 text-gray-400">
                <a
                  href={`${companyInfo.homepage_url}`}
                  className="text-blue-400 hover:text-blue-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  {companyInfo.homepage_url}
                </a>
              </p>
            </div>
          ) : null}

          <div className="sm:mt-0 mt-8">
            <h4 className="text-lg leading-6 font-medium text-white">
              List Date
            </h4>
            <p className="mt-2 text-base leading-6 text-gray-400">
              {companyInfo.list_date}
            </p>
          </div>
          {companyInfo.phone_number ? (
            <div className="mt-12 md:mt-0">
              <h4 className="text-lg leading-6 font-medium text-white">
                Phone Number
              </h4>
              <p className="mt-2 text-base leading-6 text-gray-400">
                {companyInfo.phone_number}
              </p>
            </div>
          ) : null}

          <div className="mt-8 sm:mt-0">
            <h4 className="text-lg leading-6 font-medium text-white">
              Market Information
            </h4>
            <p className="mt-2 text-base leading-6 text-gray-400">
              Primary Exchange: {companyInfo.primary_exchange}
              <br />
              Total Employees:{" "}
              {companyInfo.total_employees
                ? companyInfo.total_employees
                : "Unknown"}
            </p>
          </div>
        </div>
      )}

      <div className="mt-12 border-t border-gray-700 pt-8">
        <p className="text-base leading-6 text-gray-400 text-center">
          &copy; 2023 Ortan Andrei. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
