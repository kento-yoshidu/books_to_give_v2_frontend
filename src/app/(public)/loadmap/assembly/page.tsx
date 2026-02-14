import styles from "../loadmap.module.css";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <section>
        <h1>アセンブリを学習したい</h1>

        <p>記事更新日 : 2026/02/14</p>

        <section>
          <h2>機械語がわかる図鑑 を読む</h2>

          <p><a target="_blink" href="https://gihyo.jp/book/2025/978-4-297-14740-2">出版社リンク</a></p>
          <p>恐らく最も易しいアセンブリの入門書。<a target="_blink" href="https://learn.microsoft.com/ja-jp/cpp/assembler/masm/masm-for-x64-ml64-exe?view=msvc-170">MASM(Microsoft Macro Assembler)</a>を使用する。本当に何も知らなくても最初から勉強できる。</p>
        </section>

        <section>
          <h2>アセンブリ言語スタートブック を読む</h2>

          <p><a target="_blink" href="https://gihyo.jp/book/2009/978-4-7741-3842-8">出版社リンク</a></p>

          <p>まだ読んでいないがこれも良さそう。<a target="_blink" href="https://ja.wikipedia.org/wiki/CASL">CASL Ⅱ</a>という教育用の仮想CPU向けアセンブリ言語を使用。</p>
          <p>ただ、かなり前に絶版になっており紙の本は入手しにくい（古本でもかなり高い）。電子書籍で読もう。</p>
        </section>

        <section>
          <h2>AtCoderの簡単な問題を解く</h2>

          <p>簡単な四則演算の練習から始める。問題数も多いので数をこなすのにちょうどいい。</p>
          <p>ただ、AtCoderは<a target="_blink" href="https://www.nasm.us/">Assembly x64(NASM)</a>しか対応していない。MASMやCASL ⅡがわかっていればNASMを書くのも難しくないはず。</p>

          <h3>四則演算</h3>

          <h3>条件分岐</h3>
        </section>
      </section>
    </div>
  )
}
