import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"; // update the page on every request

const mockUrls = [
  "https://utfs.io/f/9860a148-1164-4318-a821-c4935d37ef1a-1xedu7.png",
  "https://utfs.io/f/03be6068-f4c9-4eb1-b924-7ae70a2f6646-1xedu6.png",
  "https://utfs.io/f/ca56e327-d180-469b-a1ac-d271399e945c-1xedqz.png",
  "https://utfs.io/f/ee0db300-6ad4-4359-87af-282e7222e9c2-1xedtf.png",
];

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Link href={`/img/${image.id}`}>
            <Image
              src={image.url}
              alt={`Image ${image.id}`}
              style={{ objectFit: "contain" }}
              height={192}
              width={192}
            />
          </Link>
          <div className="text-sm">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above to see images 👀
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
