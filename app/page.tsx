import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tes Kokologi Warna",
  description: "Tes kepribadian berbasis warna (Farcaster Frame)",
  openGraph: {
    title: "Tes Kokologi Warna",
    description: "Cari warna kepribadianmu",
    images: ["/api/og"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "/api/og",
    "fc:frame:post_url": "/api/frame",
    "fc:frame:button:1": "Mulai Tes 🎨",
  },
};

export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#111",
      color: "white",
      fontFamily: "sans-serif",
      textAlign: "center"
    }}>
      <div>
        <h1>🎨 Tes Kokologi Warna</h1>
        <p>Buka via Farcaster / Warpcast</p>
      </div>
    </main>
  );
}
