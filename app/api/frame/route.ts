// =======================
// DATA SOAL (15 SOAL)
// =======================
const QUESTIONS = [
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

// =======================
// POST HANDLER
// =======================
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  const state = body.state || {
    step: 0,
    score: {
      merah: 0,
      biru: 0,
      kuning: 0,
      hitam: 0,
      putih: 0,
    },
  };

  const btn = body.untrustedData?.buttonIndex;
  const current = QUESTIONS[state.step];

  if (btn && current) {
    const selected = current.options[btn - 1];
    state.score[selected.color]++;
    state.step++;
  }

  if (state.step >= QUESTIONS.length) {
    return resultFrame(state);
  }

  return questionFrame(state);
}

// =======================
// FRAME SOAL
// =======================
function questionFrame(state: any) {
  const q = QUESTIONS[state.step];
  const BASE_URL = "https://kokologi-frame1.vercel.app";

  return htmlFrame(`
   <meta property="fc:frame:image" content="${BASE_URL}/api/og?step=${state.step}" />
    ${q.options
      .map(
        (o: any, i: number) =>
          `<meta property="fc:frame:button:${i + 1}" content="${o.label}" />`
      )
      .join("")}
    <meta property="fc:frame:post_url" content="${BASE_URL}/api/frame" />
  `);
}

// =======================
// FRAME HASIL
// =======================
function resultFrame(state: any) {
  const result = getFinalColor(state.score);
  const BASE_URL = "https://kokologi-frame1.vercel.app";
  return htmlFrame(`
    <meta property="fc:frame:image" content="${BASE_URL}/api/og?result=${result.color}" />

  `);
}

// =======================
// UTIL
// =======================
function htmlFrame(inner: string) {
  return new Response(
    `<!DOCTYPE html><html><head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:post_url" content="http://kokologi-frame1.vercel.app/api/frame" />
      ${inner}
    </head></html>`,
    { headers: { "Content-Type": "text/html" } }
  );
}

function getFinalColor(score: Record<string, number>) {
  const sorted = Object.entries(score).sort(
    (a, b) => (b[1] as number) - (a[1] as number)
  );

  const [c1, s1] = sorted[0] as [string, number];
  const [c2, s2] = sorted[1] as [string, number];

  // Dominan jelas
  if (s1 - s2 >= 2) {
    return { color: c1 };
  }

  const mix: Record<string, string> = {
    "kuning-biru": "hijau",
    "biru-kuning": "hijau",
    "merah-biru": "ungu",
    "biru-merah": "ungu",
    "merah-kuning": "oranye",
    "kuning-merah": "oranye",
    "merah-hitam": "coklat",
    "hitam-merah": "coklat",
    "hitam-putih": "abu-abu",
    "putih-hitam": "abu-abu",
  };

  return {
    color: mix[`${c1}-${c2}`] || c1,
  };
}

