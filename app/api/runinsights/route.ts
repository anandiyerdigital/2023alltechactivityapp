// import { NextResponse } from "next/server";
// import openai from 'openai'


// import getCurrentUser from '../../actions/getCurrentUser'


// import { createClient } from "@/utils/supabase-server";

// export async function POST(
//   request: Request, 
// ) {
//   const supabase = createClient();
//   const body = await request.json();
//   const { 
//     date,
//     miles,
//     totalTime,
//     notes
//    } = body;

//    const currentUser = await supabase.auth.getUser();
//    console.log("Inside rundata api", currentUser)

//    const rundata = await prisma.run.create({
//     data: {
//       date: new Date(date),
//       miles: parseInt(miles, 10),
//       notes: notes,
//       totalTime: parseInt(totalTime, 10),
//       userId: currentUser.id
//     }
//   });

//   console.log("Inside rundata api", rundata)

//   return NextResponse.json(rundata);
// }
