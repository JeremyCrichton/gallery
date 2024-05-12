"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <h1 className="text-2xl font-bold">Gallery</h1>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <div className="flex gap-4 ">
          <SignedIn>
            <UserButton />
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={() => {
                router.refresh(); // re-run the current route, on the server, which updates page's content
              }}
            />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}
