"use client";
import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Logo.png";
import { HelpCircle, ShoppingCart, User } from "lucide-react";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";
import HelpModal from "./HelpModal";
import CartCount from "./CartCount";
import { useSession } from "next-auth/react";
import UserAvatar from "../backoffice/UserAvatar";
export default function Navbar() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white dark:bg-slate-700">
      <div className="container flex items-center justify-between pt-5 lg:px-0 px-5 max-w-6xl gap-8 mx-auto">
        {/* Logo */}
        <Link className="" href="/">
          <Image src={logo} alt="BDyana logo" className="w-40" />
        </Link>
          {/* SEARCH */}
          <div className="flex-grow hidden md:flex">
            <div className="w-full">
            <SearchForm />
            </div>
          </div>
          <div className="flex gap-4">
            {status === "unauthenticated" ? (
              <Link
                href="/login"
                className="flex items-center space-x-1 text-green-950 dark:text-slate-100"
              >
                <User />
                <span>Login</span>
              </Link>
            ) : (
              <UserAvatar user={session?.user} />
            )}
            <HelpModal />
            <CartCount />
        <ThemeSwitcherBtn />
          </div>
        </div>
        <div className="container w-full mx-auto mt-4">
          <div className="flex w-full md:hidden mx-auto">
              <div className="flex overflow-hidden rounded-md">
                <SearchForm />
              </div>
          </div>
        </div>
    </div>
  );
}
