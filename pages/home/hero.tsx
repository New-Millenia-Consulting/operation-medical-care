export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="w-full pt-16 pb-20 mx-auto text-center max-w-7xl lg:py-48 lg:text-left">
          <div
            className="px-4 lg:w-1/2 sm:px-8 xl:pr-16"
            style={{ padding: "5rem" }}
          >
            <h1 className="text-4xl font-normal tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Providing Care</span>{" "}
              <span className="block xl:inline">Changing Lives</span>
            </h1>
            <p
              className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
              style={{ lineHeight: "1.768" }}
            >
              We are a non-profit made up of Medical Doctors, Nurses,
              Pharmacists, Dietitians, Business Owners, Software Engineers and
              everyday people all committed to bringing healthcare to the remote
              villages of Belize.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-blue-500 bg-white border border-transparent rounded-md text-blue-7 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Donate!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative grid w-full h-64 sm:flex sm:justify-center sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full place-items-center">
          <img
            className="inset-0 object-cover h-auto"
            style={{ width: "80%" }}
            src="/images/home/hero/Operation-Medical-Care-Belize-1.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
