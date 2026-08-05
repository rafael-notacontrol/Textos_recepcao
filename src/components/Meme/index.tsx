import { CloseButton } from "@heroui/react";
import Swal from "sweetalert2";
import memeImage from "../../assets/aldia.png";

export default function Meme() {
  function alertaImagem() {
    Swal.fire({
      imageUrl: memeImage,
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: "A tall image",
      timer: 300,
    });
  }

  return <CloseButton className="m-8" onPress={() => alertaImagem()} />;
}
