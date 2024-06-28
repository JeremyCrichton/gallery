"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/">
        <h1 className="text-2xl font-bold">Gallery</h1>
      </Link>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <div className="flex flex-row items-center gap-4 ">
          <SignedIn>
            <UserButton />
            <SimpleUploadButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
