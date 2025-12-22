import { ImageResponse } from "@vercel/og";
import React from "react";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const step = searchParams.get("step");
  const result = searchParams.get("result");

  let text = "Tes Kokologi Warna";
  let bg = "#0f172a";

  if (step !== null) {
    text = `Soal ${Number(step) + 1}`;
  }

  if (result) {
    text = `HASIL: ${result.toUpperCase()}`;
    bg = resultColor(result);
  }

  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          background: bg,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 56,
          fontWeight: "bold",
        },
      },
      text
    ),
    { width: 1200, height: 630 }
  );
}

function resultColor(color: string) {
  const map: any = {
    merah: "#dc2626",
    biru: "#2563eb",
    kuning: "#facc15",
    hitam: "#020617",
    putih: "#e5e7eb",
    hijau: "#16a34a",
    ungu: "#7c3aed",
    oranye: "#ea580c",
    coklat: "#92400e",
    "abu-abu": "#64748b",
  };
  return map[color] || "#0f172a";
}
