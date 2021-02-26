import '../styles/global.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <ChallengesProvider>
        <Component {...pageProps} />
      </ChallengesProvider>
    </ThemeProvider>
  )
}

export default MyApp
