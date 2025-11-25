import { ReactNode } from "react"

type Props = {
  children: ReactNode;
};

export default function PublicLayout({ children }: Props) {
  return (
    <>
      <p>更新日 : <time dateTime="2024-03-23">2024年3月23日</time></p>

      {children}
    </>
  )
}