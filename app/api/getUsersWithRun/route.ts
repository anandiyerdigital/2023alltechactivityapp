import { NextResponse } from "next/server";


import getCurrentUser from '../../actions/getCurrentUser'
import { createClient } from "@/utils/supabase-server";

export async function GET(
  request: Request, 
) {

  const supabase = createClient();
   const currentUser = await supabase.auth.getUser();
 //  console.log("Inside rundata api", currentUser)

  //  const users = await prisma.user.findMany({
  //   select: {
  //     id: true,
  //     name: true,
  //     email: true,
  //     runs: {
  //       select: {
  //         id: true,
  //         miles: true,
  //       },
  //     },
  //   },
  // });



let { data: users, error } = await supabase
.from('profiles')
.select(`*, Run(id, date, miles, totalTime, notes)`)

  

  


 // console.log("Inside get all users with run", users)
  {users?.map((user) => {
   // console.log("Inside get all users with run", user)

  })}

  return NextResponse.json({users});
}
