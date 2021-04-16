import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <video playsInline autoPlay muted loop className={styles.video}>
        <source src="fire.mp4" type="video/mp4" />
      </video>
      <div className={styles.container}>
        <Head>
          <title>Cool Man, Luke Boshers</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            My name is Lucas...
          </h1>
            <h3>But you can call me Luke</h3>
            <Image
              src="/zombies.jpeg"
              alt="Picture of the author"
              width={600}
              height={600}
            />
            <p>... or Cool Man</p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>First Off, Pizza is life.</h3>
              <video playsInline autoPlay muted loop className={styles.image}>
                <source src="pizza.mp4" type="video/mp4" />
              </video>
            </div>

            <div className={styles.card}>
              <h3>I've been on the news.</h3>
              <Image
                  src="/court.jpeg"
                  alt="Talkin to the news"
                  width={400}
                  height={400}
              />
            </div>

            <div className={styles.card}>
              <h3>I'm never scared.</h3>
              <Image
                  src="/scared.jpeg"
                  alt="Not scared"
                  width={640}
                  height={640}
              />
              <p>Met a bat demon dude, didn't even trip, dawg.</p>
            </div>

            <div className={styles.card}>
              <h3>Your face...</h3>
              <Image
                  src="/cryin.jpeg"
                  alt="How you look when I steal your girl"
                  width={640}
                  height={640}
              />
              <p>When I slide up to steal ya girl. She mine now.</p>
            </div>

            <div className={styles.card}>
              <h3>Heck yeah I play wit fire</h3>
              <Image
                  src="/sparkler.jpg"
                  alt="Comin to steal your girl"
                  width={640}
                  height={853}
              />
              <p>Shoot, I even walked across hot lava. You know magma.</p>
            </div>

            <div className={styles.card}>
              <h3>Dug up a mummy once</h3>
              <Image
                  src="/vibin.jpeg"
                  alt="Digging for gold"
                  width={640}
                  height={853}
              />
              <p>He got mad. Hit 'em with the ol 1-2. Now he's dust.</p>
            </div>

            <div className={styles.card}>
              <h3>For real tho</h3>
              <Image
                  src="/chillin.jpeg"
                  alt="Resting easy"
                  width={640}
                  height={640}
              />
              <p>Most of the time, I'm chillin' at the house.</p>
            </div>

            <p>Thank you for stopping by my little slice of internet paradise. Hope you have a nice evening.</p>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://boshe.rs"
            target="_blank"
            rel="noopener noreferrer"
          >
            My dad made this. He's a bit of a dick.{' '}
            <img src="/logo.svg" alt="Dad Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </>
  )
}
