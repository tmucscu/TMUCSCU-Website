import { Kulim_Park } from "next/font/google";
import type { Metadata } from "next";
import { QueryProvider } from "./context/EventContext.tsx";
import { Roboto } from "next/font/google";
import { WidthProvider } from "./context/WidthContext.tsx";

export const metadata: Metadata = {
  title: "TMU CSCU",
};

const kulim_park = Kulim_Park({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kulim",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${kulim_park.variable} ${roboto.variable}`}>
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body>
        <QueryProvider>
          <WidthProvider>
            <div id="root">{children}</div>
          </WidthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
