"use client";

import { useAuth } from "@/components/providers/supabase-auth-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/seperator";
import { Github, Chrome, Mail, ArrowBigRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSupabase } from "@/components/providers/supabase-provider";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
 
  const router = useRouter();

  const { supabase } = useSupabase();

 
  const { user, signInWithAzure } = useAuth();
  




 
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center w-full h-full px-8">
      {/* Main Container */}
      <div className="w-full max-w-lg">
        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold">Login to the Alltech Actitvity App</h1>
          <p className="mt-2 text-neutral-600">
            Add your run/walk activity to the Alltech Activity App, track progress, and
            compete with your colleagues.
            Lets achieve our goals together!
          </p>
        </div>
        {/* Google Button */}
        <Button
          onClick={signInWithAzure}
          className="flex items-center w-full gap-2 mt-6"
        >
          Login with your Alltech Account <ArrowBigRight size="16" />
        </Button>
        {/* Seperator */}
        {/* <div className="flex items-center my-8">
          <Separator /> <span className="mx-6">OR</span> <Separator />
        </div> */}
        {/* Form Container */}

      </div>
    </div>
  );
};

export default LoginForm;
