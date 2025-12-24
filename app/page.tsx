import type { Metadata } from "next";
import FarcasterReady from "./components/FarcasterReady";

export const metadata: Metadata = {
  title: "Tes Kokologi Warna",
  description: "Mini App Farcaster: Tes kepribadian berdasarkan warna",
  openGraph: {
    title: "Tes Kokologi Warna",
    description: "Jawab 15 pertanyaan & temukan warna kepribadianmu",
    images: [
      {
        url: "https://www.kokologi.com/images/logo-kokologi.png",
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
    <main style={{ padding: 24 }}>
      {/* ⬇️ INI WAJIB */}
      <FarcasterReady />

      <h1>Tes Kokologi</h1>
      <p>Tes ini dijalankan melalui Farcaster Frame.</p>
    </main>
  );
}
