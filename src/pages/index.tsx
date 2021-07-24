import React from 'react'
import Head from 'next/head';
import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { Introduction } from '../components/Introduction'
import { Projects } from '../components/Projects';
import { GlobalStyles } from '../styles/GlobalStyles'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <Container>
        <GlobalStyles />
        <Header />
        <Introduction />
        <Projects />
      </Container>
    </>
  )
}
