import { useEffect, useState } from "react";

import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterSection = () => {
  const [firstTimeInView, setFirstTimeInView] = useState(false);
  const { ref: sectionRef, inView: isSectionInView } = useInView();

  const { countUp: countUpDonations, start: startCountUpDonations } =
    useCountUp({ start: 20, end: 40, startOnMount: false, duration: 4 });
  const { countUp: countUpVolunteers, start: startCountUpVolunteers } =
    useCountUp({ start: 150, end: 245, startOnMount: false, duration: 4 });
  const { countUp: countUpMissions, start: startCountUpMissions } = useCountUp({
    start: 0,
    end: 12,
    startOnMount: false,
    duration: 4,
  });
  const { countUp: countUpPatients, start: startCountUpPatients } = useCountUp({
    start: 0,
    end: 11,
    startOnMount: false,
    duration: 4,
  });

  useEffect(() => {
    if (isSectionInView && !firstTimeInView) {
      setFirstTimeInView(true);
    }
  }, [isSectionInView, firstTimeInView]);

  useEffect(() => {
    if (firstTimeInView) {
      startCountUpDonations();
      startCountUpVolunteers();
      startCountUpMissions();
      startCountUpPatients();
    }
    // Setting startCountUp as deps causes a loop of re-renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstTimeInView]);

  return (
    <div className="grid py-20 bg-primary-800" ref={sectionRef}>
      <div className="m-auto max-w-screen-2xl">
        <div className="relative grid w-full grid-cols-2 gap-12 lg:divide-x lg:grid-cols-4 lg:divide-gray-50 lg:divide-opacity-50 lg:gap-0">
          <div className="flex flex-col items-center justify-center lg:px-8">
            <span className="text-4xl font-bold md:text-6xl text-gray-50">
              ${countUpDonations}k+
            </span>
            <span className="text-primary-200">In Donations</span>
          </div>
          <div className="flex flex-col items-center justify-center lg:px-8">
            <span className="text-4xl font-bold md:text-6xl text-gray-50">
              {countUpVolunteers}+
            </span>
            <span className="text-primary-200">Volunteers</span>
          </div>
          <div className="flex flex-col items-center justify-center lg:px-8">
            <span className="text-4xl font-bold md:text-6xl text-gray-50">
              {countUpMissions}+
            </span>
            <span className="text-primary-200">Missions</span>
          </div>
          <div className="flex flex-col items-center justify-center lg:px-8">
            <span className="text-4xl font-bold md:text-6xl text-gray-50">
              {countUpPatients}k+
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
