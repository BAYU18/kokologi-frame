import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tes Kokologi Warna",
  description: "Tes kepribadian berbasis warna (Farcaster Frame)",

  openGraph: {
    title: "Tes Kokologi Warna",
    description: "Jawab 15 pertanyaan & temukan warna kepribadianmu",
    images: [
      {
        url: "https://kokologi-frame1.vercel.app/api/og",
        width: 1200,
        height: 630,
      },
    ],
  },

  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://kokologi-frame1.vercel.app/api/og",
    "fc:frame:button:1": "Mulai Tes",
    "fc:frame:post_url": "https://kokologi-frame1.vercel.app/api/frame",
  },
};

export default function Page() {
  return (
    <html>
      <head />
      <body>
        <h1>Tes Kokologi Warna</h1>
        <p>Buka lewat Warpcast untuk mulai tes.</p>
      </body>
    </html>
  );
}
