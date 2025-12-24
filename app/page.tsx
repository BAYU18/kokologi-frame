import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tes Kokologi Warna",
  description: "Tes kepribadian berbasis warna",

  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://kokologi-frame1.vercel.app/api/og",
    "fc:frame:post_url": "https://kokologi-frame1.vercel.app/api/frame",
  },
};

export default function Page() {
  // ❌ JANGAN ADA SDK / CLIENT COMPONENT
  return null;
}
