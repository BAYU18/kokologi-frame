import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tes Kokologi Warna",
  description: "Tes kepribadian berbasis warna",
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://kokologi-frame1.vercel.app/api/og",
    "fc:frame:post_url": "https://kokologi-frame1.vercel.app/api/frame",
    "fc:frame:button:1": "Mulai Tes 🎨",
  },
};

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "sans-serif",
        textAlign: "center",
      }}
    >
      <div>
        <h1>🎨 Tes Kokologi Warna</h1>
        <p>Buka via Farcaster / Warpcast</p>
      </div>
    </main>
  );
}
