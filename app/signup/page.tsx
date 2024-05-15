"use client";
import { supabase } from "@/lib/supabase/products";

import { AuthError, Provider } from "@supabase/supabase-js";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error }: { error: AuthError | null } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      setError(error.message);
    } else {
      setError(null);
      router.push("/signin");
    }
  };

  const handleOAuthSignup = async (provider: Provider) => {
    const { error }: { error: AuthError | null } =
      await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      setError(error.message);
    } else {
      setError(null);
    }
  };

  return (
    <div>
      <div className="w-screen h-[85vh] flex justify-center items-center bg-[#1E1E1E]">
        <div className="w-[500px] h-[600px] bg-[#FFFFFF] rounded-xl flex flex-col gap-5 items-center">
          <h1 className="pt-5 text-2xl font-bold">Sign Up</h1>
          <form onSubmit={handleSignup} className="flex flex-col gap-5">
            <input
              className="bg-white h-[45px] border-2 border-gray-500 rounded-md w-[350px]"
              type="text"
              placeholder="Enter the email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="bg-white h-[45px] border-2 border-gray-500 rounded-md"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p>{error}</p>}
            <button
              type="submit"
              className="h-[45px] w-[250px] mx-[50px] rounded-xl bg-[#1791E6]"
            >
              Sign Up
            </button>
          </form>
          <div className="flex items-center gap-3 ">
            <div className="">
              <hr className="border-2 border-gray-500 w-[160px]" />
            </div>
            <div>or</div>
            <div>
              <hr className="border-2 border-gray-500 w-[160px]" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <button
              onClick={() => handleOAuthSignup("github")}
              className="h-[45px] w-[250px] mx-[50px] rounded-xl bg-black text-white"
            >
              Sign Up with GitHub
            </button>
            <button className="h-[45px] w-[250px] mx-[50px]  bg-white border-2 border-gray-500 rounded-md">
              Sign Up with Google
            </button>
            <div className="flex gap-2">
              <p>Already have an account?</p>
              <Link className="text-red" href={"/signin"}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
