const CounterSection = () => {
  return (
    <div className="grid py-20 bg-primary-800">
      <div className="m-auto max-w-screen-2xl">
        <div className="grid w-full grid-cols-4 gap-12 divide-x divide-gray-50 divide-opacity-50">
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-gray-50">$8000+</span>
            <span className="text-primary-200">In Donations</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-gray-50">245+</span>
            <span className="text-primary-200">Volunteers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-gray-50">12+</span>
            <span className="text-primary-200">Missions</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-gray-50">11k+</span>
            <span className="text-primary-200">Patients Treated</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
