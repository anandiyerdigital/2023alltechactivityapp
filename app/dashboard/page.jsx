import RunStats from "./RunStats";
import AddStats from "./AddStats";
import { createClient } from "@/utils/supabase-server";
import getUserStats from "../actions/getUserStats";


const Home = async ({ searchParams }) => {
  const supabase = createClient();
  const { data: currentUser } = await supabase.auth.getUser();

  const userStats = await getUserStats();
  //console.log(userStats);

  return (
  
      <RunStats currentUser={currentUser} userStats={userStats} />

     

  );
};

export default Home;
