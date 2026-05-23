import { ImageResponse } from "next/og";

export const alt = "Become Chinese cultural onboarding guide";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "#111827",
          background:
            "linear-gradient(135deg, #fff7ed 0%, #ffffff 38%, #fee2e2 100%)",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#dc2626",
              color: "#fff7ed",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            BC
          </div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>Become Chinese</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 76,
              lineHeight: 1,
              letterSpacing: 0,
              fontWeight: 900,
              maxWidth: 880,
            }}
          >
            Practical cultural onboarding for life in China
          </div>
          <div style={{ fontSize: 30, color: "#4b5563", maxWidth: 760 }}>
            Food, housing, transport, language, money, work, social life, and
            everyday context in one concise guide.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            fontSize: 24,
            color: "#991b1b",
            fontWeight: 700,
          }}
        >
          <span>13 modules</span>
          <span>|</span>
          <span>No login required</span>
          <span>|</span>
          <span>Open source</span>
        </div>
      </div>
    ),
    size,
  );
}
