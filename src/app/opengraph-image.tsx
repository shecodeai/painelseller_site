import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Painel Seller — Piloto gratuito para vendedores Amazon Brasil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(135deg, #130a27 0%, #1c1039 45%, #170f2e 100%)",
          padding: "80px 90px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 48 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 12,
              background: "#8008DC",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 9,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 3, width: 28, height: 28 }}>
              <div style={{ display: "flex", gap: 3, flex: 1 }}>
                <div style={{ flex: 1, background: "#ffffff", borderRadius: 3 }} />
                <div style={{ flex: 1, background: "rgba(255,255,255,0.55)", borderRadius: 3 }} />
              </div>
              <div style={{ display: "flex", gap: 3, flex: 1 }}>
                <div style={{ flex: 1, background: "rgba(255,255,255,0.55)", borderRadius: 3 }} />
                <div style={{ flex: 1, background: "#0CA9A6", borderRadius: 3 }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
            <span style={{ color: "#ffffff" }}>Painel</span>
            <span style={{ color: "#0CA9A6" }}>Seller</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "8px 18px",
            color: "#ffffff",
            fontSize: 20,
            marginBottom: 32,
          }}
        >
          Feito para vendedores Amazon Brasil · Vagas limitadas no piloto
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 58,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          Você sabe quanto está lucrando em tempo real?
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#D8CDE9", marginTop: 28, maxWidth: 800 }}>
          Comissão, tarifa FBA, Ads e imposto, cruzados com seu custo, produto por produto, num painel só.
        </div>
      </div>
    ),
    { ...size }
  );
}
