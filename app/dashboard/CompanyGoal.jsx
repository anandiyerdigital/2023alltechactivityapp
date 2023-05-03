import React, { useState, useEffect } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const companyGoal = 3707;

const CompanyGoal = () => {
  const [totalMiles, setTotalMiles] = useState(0);
  const [remainingMiles, setRemainingMiles] = useState(companyGoal);

  useEffect(() => {
    async function fetchData() {
      const users = await fetchUsersWithRuns();
    //  console.log(users);
      const fetchedTotalMiles = getTotalMiles(users);
      setTotalMiles(fetchedTotalMiles);
      setRemainingMiles(companyGoal - fetchedTotalMiles);
    }

    fetchData();
  }, []);

  async function fetchUsersWithRuns() {
    const response = await fetch("/api/getUsersWithRun", {
      next: { revalidate: 5 },
    });
    const data = await response.json();
    return data.users;
  }

  function getTotalMiles(users) {
    let totalMiles = 0;
    users.forEach((user) => {
      user.Run.forEach((run) => {
        totalMiles += run.miles;
      });
    });
   // console.log(totalMiles);
    return totalMiles;
  }

  const progressPercentage = (totalMiles / companyGoal) * 100;

  return (
    <div>
      <div className="space-y-4 p-5 m-5">
        <div className="flex flex-row  ">
        <div className="flex text-lg font-semibold">
          Total miles covered by all participants: 
        </div>
        <div className="text-lg mx-1 text-amber-700 font-semibold ">
        {totalMiles}
        </div>
        </div>
        <div className="flex flex-row">
        <div className="text-lg font-semibold">
          Remaining miles to achieve company goal: 
        </div>
        <div className="text-lg mx-1 text-amber-700 font-semibold">
        {remainingMiles}
        </div>
       </div>
     
        <div className="relative h-4 bg-gray-300 rounded">
          <div
            className="absolute top-0 left-0 h-full bg-green-500 rounded"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
     
    </div>
    
  );
};

export default CompanyGoal;
