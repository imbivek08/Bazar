"use client";
import Signin from "@/components/Signin";
import { Auth } from "@supabase/auth-ui-react";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <Signin />
    </div>
  );
};

export default LoginPage;
