export default function Head() {
  return (
    <>
      <title>Tes Kokologi Warna</title>
      <meta name="description" content="Tes kepribadian berbasis warna (Farcaster Frame)" />

      {/* OpenGraph */}
      <meta property="og:title" content="Tes Kokologi Warna" />
      <meta property="og:description" content="Jawab 15 pertanyaan & temukan warna kepribadianmu" />
      <meta property="og:image" content="https://kokologi-frame1.vercel.app/api/og" />

      {/* FARCASTER FRAME — INI YANG DICARI WARPCAST */}
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="https://kokologi-frame1.vercel.app/api/og" />
      <meta property="fc:frame:button:1" content="Mulai Tes" />
      <meta property="fc:frame:post_url" content="https://kokologi-frame1.vercel.app/api/frame" />
    </>
  );
}
