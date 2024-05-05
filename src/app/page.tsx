import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/9860a148-1164-4318-a821-c4935d37ef1a-1xedu7.png",
  "https://utfs.io/f/03be6068-f4c9-4eb1-b924-7ae70a2f6646-1xedu6.png",
  "https://utfs.io/f/ca56e327-d180-469b-a1ac-d271399e945c-1xedqz.png",
  "https://utfs.io/f/ee0db300-6ad4-4359-87af-282e7222e9c2-1xedtf.png",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log("posts", posts); // running only on the server

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
