import { createClient } from "@/utils/supabase-server";





export default async function getCurrentUser() {

  const supabase = createClient();
  const { data: session, error } = await supabase.auth.getSession();

  try {
  

    if (!session?.user?.email) {
      return null;
    }

    // const currentUser = await prisma.user.findUnique({
    //   where: {
    //     email: session.user.email as string,
    //   }
    // });

    const { data: currentUser } = await supabase.auth.getUser()

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: 
        currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    return null;
  }
}

