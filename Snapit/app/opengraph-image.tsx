import { ImageResponse } from "next/og";

export const alt = "Snapit. WhatsApp it. It’s in your books.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#f7f8f6",
        color: "#101828",
        padding: "80px",
      }}
    >
      <div style={{ fontSize: 72, fontWeight: 700 }}>Snapit</div>
      <div style={{ fontSize: 42, marginTop: 28, lineHeight: 1.3 }}>
        WhatsApp it. It’s in your books.
      </div>
    </div>,
    { ...size },
  );
}
