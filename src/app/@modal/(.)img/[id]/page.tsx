import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId, 10);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid photo ID");
  }

  const image = await getImage(idAsNumber);

  return (
    <div>
      <Image
        src={image.url}
        alt={`Image ${image.id}`}
        style={{ objectFit: "contain" }}
        height={192}
        width={192}
      />
    </div>
  );
}
