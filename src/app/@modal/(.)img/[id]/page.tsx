// Use of [] in [id] is to indicate to Next.js that the thing between the brackets is a variable that we have access to
// the (.) escapes the @modal container

import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = parseInt(photoId, 10);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid photo ID");
  }

  return (
    <Modal>
      <FullPageImageView id={idAsNumber} />
    </Modal>
  );
}
