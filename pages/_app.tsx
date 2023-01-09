import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {Press_Start_2P} from '@next/font/google'
import {Bebas_Neue} from '@next/font/google'

const PressStart = Press_Start_2P({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-PressStart',
});

const BebasNeue = Bebas_Neue({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-BebasNeue',
})

export default function App({ Component, pageProps }: AppProps) {
  return ( <main className={`${PressStart.variable} ${BebasNeue.variable}`}>
  <Component {...pageProps} />
</main>
)
}
