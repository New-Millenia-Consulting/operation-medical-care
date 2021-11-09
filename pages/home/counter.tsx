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
    <div className="grid py-20 bg-secondGreen" ref={sectionRef}>
      <div className="m-auto max-w-screen-2xl">
        <div className="relative grid w-full grid-cols-2 gap-10 lg:divide-x lg:grid-cols-4 lg:divide-mainGreen lg:divide-opacity-90 lg:gap-0">
          <div className="flex flex-col items-center justify-center lg:px-8">
            <span className="ml-5 text-5xl font-bold md:ml-0 md:text-6xl text-green-500">
              ${countUpDonations}k+
            </span>
            <span className="text-green-900">In Donations</span>
          </div>
          <div className="flex flex-col items-center justify-center lg:px-8">
            <span className="text-5xl font-bold md:text-6xl text-green-500">
              {countUpVolunteers}+
            </span>
            <span className="text-green-900">Volunteers</span>
          </div>
          <div className="flex flex-col items-center justify-center lg:px-8">
            <span className="text-5xl font-bold md:text-6xl text-green-500">
              {countUpMissions}+
            </span>
            <span className="text-green-900">Missions</span>
          </div>
          <div className="flex flex-col items-center justify-center lg:px-8">
            <span className="text-5xl font-bold md:text-6xl text-green-500">
              {countUpPatients}k+
            </span>
            <span className="text-green-900">Patients Treated</span>
          </div>
          <div className="lg:hidden absolute w-full h-px bg-green-500 top-[50%] left-0"></div>
          <div className="lg:hidden absolute w-px h-full bg-green-500 left-[50%] top-0"></div>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
