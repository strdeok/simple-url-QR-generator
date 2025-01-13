import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Url Qr generator",
  description: "Simple Url QR code Generator",
};

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function RootLayout({ children, modal }: Props) {
  return (
    <html lang="ko">
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
