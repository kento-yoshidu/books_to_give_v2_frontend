import Image from "next/image";
import styles from "./book.module.css";

export default function DisplayImage({
  imageUrl,
}: {
  imageUrl: string;
}) {
  return (
    <div className={styles.imageContainer}>
      <Image
        src={imageUrl}
        alt=""
        layout="fill"
        objectFit="contain"
        className={styles.image}
      />
    </div>
  )
}
