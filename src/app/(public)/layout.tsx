import Technology from "./_components/Technology";
import styles from "./layout.module.css";
import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      {children}

      <Technology />
    </div>
  );
}
