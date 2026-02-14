import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>学習ロードマップ</h1>

      <ul>
        <li><Link href="/loadmap/assembly">アセンブリを学習したい</Link></li>
      </ul>
    </div>
  )
}
