// import { Inter } from "next/font/google";
import "../styles/main.scss";
import Providers from "@/context/Providers";

import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BDyana.com",
  description: "Shop in hand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
