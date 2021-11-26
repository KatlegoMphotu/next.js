import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'

//export default function Home() {
// return (
 //   <div className={styles.container}>

 //     <footer className={styles.footer}>
 //       <a
 //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
 //         target="_blank"
//          rel="noopener noreferrer"
  //      >
 //         Powered by{' '}
//          <span className={styles.logo}>
//            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//          </span>
//        </a>
 //     </footer>
//    </div>
//  )
//}

export default () => {
return(
  
  <div className={styles.container}>
    
    <Head>
       <title>Katlego Mphotu</title>
        <meta name="description" content="Katlego Mphotu Portfolio Website" />
       <link rel="icon" href="/favicon.jpg" />
    </Head>
    <div className={styles.navigation}>
    <div className={styles.Head}>Welcome to my Portfolio-SovTech</div>
    </div>
    <br></br>
    <div id="about" className={styles.identity}>
      <div className={styles.logoImage}>
        <Image src="/KN.jpg" alt="Vercel Logo" width={100} height={100} />
      </div>
      <div className={styles.text}>
        <div className={styles.name}>Katlego Mphotu</div>
        <div className={styles.description}>-Junior Systems Developer</div>
    </div>
  </div>
  <div id="about" className={styles.about}>
  <div className={styles.title}>About</div>
  <div className={styles.row}>
  I am Katlego Mphotu from Kempton Park. I am a junior Systems Developer specialising in both Frontend and Backend development. I am currently a freelance web developer and a self-taught digital designer. I pride myself in learning more programming languages such as this given task as it is my first time working with React and its frameworks.

The opportunity to be a developer at SovTech will allow me to utilise the experience and knowledge I gained during my years of studying to become a developer in a forward-thinking company such as SovTech as I am seeking to leverage my experience in the workplace.
. I have high levels of enthusiasm, passion, the drive, the ability to multi-task, accepting and embracing challenging tasks and projects to be done on time. Therefore I believe the comapny's values and specifications seem like a great fit for my personality and my own values.

  </div>
  </div>
  <div id="skills" className={styles.skills}>
    <div className={styles.title}>Skills</div>
    <div className={styles.row}>
      <div className={styles.left}>Computer Literacy</div>
      <div className={styles.right}><li>Windows OS</li><li>Word Processing</li> <li>Spreadsheets</li><li>Presentation software</li> <li>Office Suites</li></div>
    </div>
  <div className={styles.row}>
      <div className={styles.left}>Programming Languages</div>
      <div className={styles.right}><li>Java</li><li>JavaScript</li> <li>PHP</li> <li>SQL</li></div>
  </div>
  <div className={styles.row}>
      <div className={styles.left}>Backend</div>
      <div className={styles.right}><li>Java</li><li>PHP</li> <li>MySQL</li></div>
  </div>
  <div className={styles.row}>
      <div className={styles.left}>Frontend</div>
      <div className={styles.right}><li>HTML</li><li>JavaScript</li> <li>CSS</li> <li>Bootstrap</li> <li>Next.js</li></div>
  </div>
  <div className={styles.row}>
      <div className={styles.left}>Programming Infrastructure</div>
      <div className={styles.right}><li>Netbeans</li> <li>Android Studio</li></div>
  </div>
  
</div>
</div>
)
}
