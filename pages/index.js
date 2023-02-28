import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Events App Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img />
          <a href='/'>Home</a>
          <a href='/events'>Events</a>
          <a href='/about-us'>About Us</a>
        </nav>
      </header>

      <main className={styles.main}>
        <a href='/events/london'>
          <img />
          <h2>Events in London</h2>
          <p>
            
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </a>

        <a href='/events/sanfran'>
          <img />
          <h2>Events in San Francisco</h2>
          <p>
            
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </a>

        <a href='/events/barce'>
          <img />
          <h2>Events in Barcelona</h2>
          <p>
            
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </a>
      </main>

      <footer className={styles.footer}>
        &copy; 2023 Lennox Charles - An Event App Manager Project
      </footer>
    </>
  )
}

// it will only work like this, if you put it in the function above it won't work
// this function runs before the main page that is rendered and it is rendered on the server
export function getServerSideProps () {
  return {
    props: {
      title: 'Atomic habits'
    }
  }
}