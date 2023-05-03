import RunStatInsights from "./RunStatInsights";

import getCurrentUser from "../actions/getCurrentUser";

import getUserStats from "../actions/getUserStats";

const Home = async ({ searchParams }) => {
  const currentUser = await getCurrentUser();

  const userStats = await getUserStats();
  console.log(userStats);

  return <RunStatInsights currentUser={currentUser} userStats={userStats} />;
};

export default Home;
