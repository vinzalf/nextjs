import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { useEffect } from 'react'

var animsStarted = false;

export default function Home() {


useEffect(() => {
	window.addEventListener("message", (event) => {
		if (event.data === 'loaded') {
			if (animsStarted == false) {
				animsStarted = true;
				console.log("anims started");

				document.getElementById("mainTitle").style.animationPlayState = 'running';
				document.getElementById("menuGrid").style.animationPlayState = 'running';
				document.getElementById("topbar").style.animationPlayState = 'running';
				document.getElementById("bottombar").style.animationPlayState = 'running';
				document.getElementById("threejsFrame").style.animationPlayState = 'running';

				document.getElementById("LoadingScreen").remove();
			}
		}
}, false);
}, [])

  return (

    <div className={styles.container}>
      <Head>
        <title>Anxurus</title>
        <meta name="Anxurus" content="Website for Anxurus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

			<div id="LoadingScreen" className={styles.loading}>loading...</div>

		<iframe id="threejsFrame" className={styles.bg_threejs} src="threejs/threejs.html">
		</iframe>



		<div id="topbar" className={styles.bg_cuneiform}></div>
		<div id="bottombar" className={styles.bg_cuneiform_bottom}></div>

      <main className={styles.main}>

		<div id="mainTitle" className={styles.anxurus}>anxurus</div>




        <div id="menuGrid" className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Overview</h2>
          </a>

          <a href="#" className={styles.card}>
            <h2>News</h2>
          </a>

          <a
            href="#"
            className={styles.card}>
            <h2>Connect</h2>
          </a>

          <a href="#" className={styles.card}>
            <h2>Devlog</h2>
          </a>
        </div>
      </main>


		<div className={styles.newpage}></div>
	 </div>


  )

}