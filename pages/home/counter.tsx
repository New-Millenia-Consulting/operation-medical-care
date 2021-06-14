const CounterSection = () => {
  return (
    <div className="grid py-20 bg-primary-800">
      <div className="m-auto max-w-screen-2xl">
        <div className="relative grid w-full grid-cols-2 gap-12 lg:divide-x lg:grid-cols-4 lg:divide-gray-50 lg:divide-opacity-50">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold md:text-6xl text-gray-50">
              $40k+
            </span>
            <span className="text-primary-200">In Donations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold md:text-6xl text-gray-50">
              245+
            </span>
            <span className="text-primary-200">Volunteers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold md:text-6xl text-gray-50">
              12+
            </span>
            <span className="text-primary-200">Missions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold md:text-6xl text-gray-50">
              11k+
            </span>
            <span className="text-primary-200">Patients Treated</span>
          </div>
          <div className="lg:hidden absolute w-full h-px bg-primary-300 top-[50%] left-0"></div>
          <div className="lg:hidden absolute w-px h-full bg-primary-300 left-[50%] top-0"></div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
