import type { ReactNode } from "react";
import styles from "./layout.module.css";
import "./globals.css";
import Header from "./_components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className={styles.wrapper}>
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
