import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Julius Manowski";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
    const fontData = await fetch(
        "https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@900&display=swap"
    ).then((res) => res.text()).then((css) => {
        const url = css.match(/src: url\((.+?)\)/)?.[1];
        return fetch(url!).then((res) => res.arrayBuffer());
    });

    return new ImageResponse(
        (
            <div
                style={{
                    background: "#B5451B",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "80px",
                }}
            >
                <p
                    style={{
                        fontFamily: "Darker Grotesque",
                        fontSize: "96px",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "-2px",
                        color: "white",
                        margin: "0 0 32px 0",
                        lineHeight: 1,
                    }}
                >
                    Julius Manowski
                </p>
                <div
                    style={{
                        background: "black",
                        height: "24px",
                        width: "100%",
                        marginBottom: "32px",
                    }}
                />
                <p
                    style={{
                        fontFamily: "Darker Grotesque",
                        fontSize: "24px",
                        fontWeight: 900,
                        textTransform: "uppercase",
                        letterSpacing: "4px",
                        color: "black",
                        margin: 0,
                    }}
                >
                    jules946.dev
                </p>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Darker Grotesque",
                    data: fontData,
                    weight: 900,
                },
            ],
        }
    );
}
