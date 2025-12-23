import FarcasterReady from "./components/FarcasterReady";

export default function Page() {
  const frameCastUrl = "https://farcaster.xyz/mamansuryaman/0xd38f9ef8";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      <FarcasterReady />

      <div>
        <h1>🎨 Tes Kokologi Warna</h1>
        <p>Klik tombol di bawah untuk langsung memulai tes</p>

        <a
          href={frameCastUrl}
          style={{
            display: "inline-block",
            marginTop: 24,
            padding: "14px 22px",
            background: "#7c3aed",
            color: "white",
            borderRadius: 12,
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          ▶️ Mulai Tes
        </a>
      </div>
    </main>
  );
}
