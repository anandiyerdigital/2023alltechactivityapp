import getCurrentUser from "./getCurrentUser";
import { createClient } from "@/utils/supabase-server";

export default async function getUserStats() {
  const supabase = createClient();

  const currentUser = await supabase.auth.getUser();
  console.log("currentUser", currentUser)

  try {
    // const runs = await prisma.run.findMany({
    //   where: {
    //     userId: currentUser?.id,
    //   },
    // });

  
let { data: Run, error } = await supabase
.from('Run')
.select('*')
.eq('userId', currentUser?.data?.user.id)

    

     // console.log("runs", Run)

    return Run;
  } catch (error) {
    console.error("Error fetching user runs:", error);
    return [];
  }
}
