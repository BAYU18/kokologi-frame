import { NextRequest, NextResponse } from "next/server";

/* =========================
   TYPES
========================= */
type Color = "merah" | "biru" | "kuning" | "hitam" | "putih";

type FrameState = {
  step: number;
  score: Record<Color, number>;
};

/* =========================
   QUESTIONS (15)
========================= */
const QUESTIONS: {
  text: string;
  options: { label: string; color: Color }[];
}[] = [
  {
    text: "Saat menghadapi tekanan mendadak, kamu biasanya?",
    options: [
      { label: "Menghadapinya langsung", color: "merah" },
      { label: "Menganalisis dengan tenang", color: "biru" },
      { label: "Menunggu momen tepat", color: "kuning" },
      { label: "Menarik diri sementara", color: "hitam" },
    ],
  },
  {
    text: "Dalam kelompok, kamu paling nyaman sebagai?",
    options: [
      { label: "Pemimpin", color: "merah" },
      { label: "Pemberi ide", color: "kuning" },
      { label: "Pendengar", color: "biru" },
      { label: "Pengamat", color: "putih" },
    ],
  },
  {
    text: "Jika rencana gagal, kamu akan?",
    options: [
      { label: "Langsung mencoba lagi", color: "merah" },
      { label: "Mengevaluasi kesalahan", color: "biru" },
      { label: "Mencari sisi positif", color: "kuning" },
      { label: "Diam dan merenung", color: "hitam" },
    ],
  },
  {
    text: "Hal yang paling kamu hargai?",
    options: [
      { label: "Kendali", color: "merah" },
      { label: "Pengetahuan", color: "biru" },
      { label: "Kebebasan", color: "kuning" },
      { label: "Ketenangan", color: "putih" },
    ],
  },
  {
    text: "Saat konflik muncul, kamu cenderung?",
    options: [
      { label: "Menghadapi langsung", color: "merah" },
      { label: "Berdiskusi logis", color: "biru" },
      { label: "Mencairkan suasana", color: "kuning" },
      { label: "Menghindari konflik", color: "hitam" },
    ],
  },
  {
    text: "Orang lain melihatmu sebagai?",
    options: [
      { label: "Tegas", color: "merah" },
      { label: "Bijaksana", color: "biru" },
      { label: "Menyenangkan", color: "kuning" },
      { label: "Misterius", color: "hitam" },
    ],
  },
  {
    text: "Dalam mengambil keputusan kamu lebih?",
    options: [
      { label: "Cepat", color: "merah" },
      { label: "Penuh pertimbangan", color: "biru" },
      { label: "Mengikuti intuisi", color: "kuning" },
      { label: "Menunggu keadaan", color: "putih" },
    ],
  },
  {
    text: "Lingkungan ideal bagimu?",
    options: [
      { label: "Kompetitif", color: "merah" },
      { label: "Terstruktur", color: "biru" },
      { label: "Fleksibel", color: "kuning" },
      { label: "Tenang", color: "putih" },
    ],
  },
  {
    text: "Saat gagal kamu biasanya?",
    options: [
      { label: "Bangkit lebih kuat", color: "merah" },
      { label: "Belajar dari kesalahan", color: "biru" },
      { label: "Menghibur diri", color: "kuning" },
      { label: "Menyendiri", color: "hitam" },
    ],
  },
  {
    text: "Hal yang paling mengganggumu?",
    options: [
      { label: "Keragu-raguan", color: "merah" },
      { label: "Ketidaklogisan", color: "biru" },
      { label: "Kebosanan", color: "kuning" },
      { label: "Keramaian", color: "hitam" },
    ],
  },
  {
    text: "Kamu lebih suka?",
    options: [
      { label: "Memimpin", color: "merah" },
      { label: "Mendukung", color: "biru" },
      { label: "Berkolaborasi", color: "kuning" },
      { label: "Mandiri", color: "putih" },
    ],
  },
  {
    text: "Saat waktu luang kamu memilih?",
    options: [
      { label: "Tantangan baru", color: "merah" },
      { label: "Belajar", color: "biru" },
      { label: "Bersosialisasi", color: "kuning" },
      { label: "Menyendiri", color: "hitam" },
    ],
  },
  {
    text: "Saat perubahan besar datang?",
    options: [
      { label: "Menyambut", color: "merah" },
      { label: "Menganalisis", color: "biru" },
      { label: "Menyesuaikan diri", color: "kuning" },
      { label: "Menjaga jarak", color: "putih" },
    ],
  },
  {
    text: "Kekuatan terbesarmu?",
    options: [
      { label: "Keberanian", color: "merah" },
      { label: "Kecerdasan", color: "biru" },
      { label: "Optimisme", color: "kuning" },
      { label: "Ketahanan", color: "hitam" },
    ],
  },
  {
    text: "Kamu merasa paling hidup saat?",
    options: [
      { label: "Mengendalikan situasi", color: "merah" },
      { label: "Memahami sesuatu", color: "biru" },
      { label: "Menikmati proses", color: "kuning" },
      { label: "Merasa aman", color: "putih" },
    ],
  },
];

/* =========================
   RESULT LOGIC
========================= */
function finalColor(score: Record<Color, number>): Color {
  return (Object.entries(score) as [Color, number][])
    .sort((a, b) => b[1] - a[1])[0][0];
}

function resultText(color: Color): string {
  switch (color) {
    case "merah":
      return "🔥 MERAH — Dominan, berani, pengambil kendali.";
    case "biru":
      return "🌊 BIRU — Logis, bijaksana, stabil.";
    case "kuning":
      return "🌞 KUNING — Kreatif, optimis, fleksibel.";
    case "hitam":
      return "🖤 HITAM — Mandiri, kuat, reflektif.";
    case "putih":
      return "🤍 PUTIH — Damai, seimbang, penenang.";
  }
}

/* =========================
   FRAME HELPER
========================= */
function frame(
  buttons: string[],
  state: FrameState,
  imageUrl: string
) {
  return NextResponse.json({
    version: "vNext",
    image: imageUrl,
    buttons: buttons.map((b) => ({ label: b, value: b })),
    state,
    actions: { ready: true }, // FIX SDK warning
  });
}

/* =========================
   POST
========================= */
export async function POST(req: NextRequest) {
  const body = await req.json();

  const state: FrameState = body.state ?? {
    step: 0,
    score: { merah: 0, biru: 0, kuning: 0, hitam: 0, putih: 0 },
  };

  const btnIndex = Number(body.untrustedData?.buttonIndex ?? 0);

  if (btnIndex > 0 && state.step < QUESTIONS.length) {
    const selected = QUESTIONS[state.step].options[btnIndex - 1];
    if (selected) state.score[selected.color]++;
    state.step++;
  }

  if (state.step >= QUESTIONS.length) {
    const color = finalColor(state.score);

    return frame(
      ["Ulangi"],
      {
        step: 0,
        score: { merah: 0, biru: 0, kuning: 0, hitam: 0, putih: 0 },
      },
      `/api/og?result=${color}`
    );
  }

  const q = QUESTIONS[state.step];

  return frame(
    q.options.map((o) => o.label),
    state,
    `/api/og?step=${state.step}`
  );
}
