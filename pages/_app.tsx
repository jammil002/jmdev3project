import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  Montserrat,
  Press_Start_2P,
  Bebas_Neue,
  Oswald,
} from "@next/font/google";

const PressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-PressStart",
});

const BebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-BebasNeue",
});

const fMontserrat = Montserrat({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-Montserrat",
});

const fOswald = Oswald({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-Oswald",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${PressStart.variable} ${BebasNeue.variable} ${fMontserrat.variable} ${fOswald.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
