import "server-only";
import "./globals.css";

export const metadata = {
  title: "Alltech Activity App",
  description: "Add your activity data, track progress and achieve your goals together!",
};

import SupabaseAuthProvider from "@/components/providers/supabase-auth-provider";
import SupabaseProvider from "@/components/providers/supabase-provider";
import { createClient } from "@/utils/supabase-server";
import { Inter } from "next/font/google";
import ToasterProvider from "@/components/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
 
  return (
    <html lang="en">
      <body className={inter.className}>
        <SupabaseProvider>
          <SupabaseAuthProvider serverSession={session}>
            <ToasterProvider />
            {children}
          </SupabaseAuthProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}