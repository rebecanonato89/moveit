import Head from 'next/head';
import GitHubCorner from '../components/GitHubCorner'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { ModeSwitch } from "../components/ModeSwitch";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from '../styles/pages/Home.module.css';
import React from 'react';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ModeSwitch />
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div className={styles.leftContainer}>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
      <GitHubCorner projectUrl="https://github.com/rebecanonato89" />

    </div>
  )
}