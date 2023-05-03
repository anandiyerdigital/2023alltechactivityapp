import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

const newContact = {
  id: uuidv4(),
  first_name: 'John',
  last_name: 'Doe'
};

// Insert the new contact into the database


import { createClient } from "@/utils/supabase-server";

export async function POST(request: Request) {
  const body = await request.json();
  const { date, miles, totalTime, notes } = body;

  const supabase = createClient();

  const currentUser = await supabase.auth.getUser();
  console.log("Inside Add Run Data api", currentUser.data.user?.id);

  //  const rundata = await prisma.run.create({
  // data: {
  //   date: new Date(date),
  //   miles: parseInt(miles, 10),
  //   notes: notes,
  //   totalTime: parseInt(totalTime, 10),
  //   userId: currentUser.id
  // }
  // });

  // const { data, error } = await supabase
  //   .from("Run")
  //   .insert([{
  //     date: date,
  //     miles: miles,
  //     totalTime: totalTime,
  //     notes: notes,
  //     userId: currentUser.id
  //   }]);

  const { data, error } = await supabase
    .from("Run")
    .insert([
      {
        id: uuidv4(),
        date: date,
        miles: miles,
        totalTime: totalTime,
        notes: notes,
        userId: currentUser.data.user?.id,
      },
    ]);

  console.log("Inside rundata api", data);
  console.log("error adding value", error);

  return NextResponse.json(data);
}
