import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <section>
          <div className={styles.title__container}>
            <img
              src="/images/logo-black.svg"
              alt="Vercel Logo"
              className={styles.title}
            />
            <h5>Recognize and Evaluate Signs to Uncover Labor Trafficking</h5>
            <p>
              A tool to help investigators identify potential
              <br />
              labor trafficking under Massachusetts law.
            </p>
          </div>
          {/* <div className={styles.container}> */}
          <div className={styles.card__container}>
            <div className={styles.card}>
              <h3 className={styles.h3}>Prepare</h3>
              <div className={styles.underline}></div>
              <p>Find tips for interviewing victims</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.h3}>Assess</h3>
              <div className={styles.underline}></div>
              <p>Determine if your case is labor trafficking</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.h3}>Resources</h3>
              <div className={styles.underline}></div>
              <p>
                Learn how to refer to law enforcement or find victim services
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.h3}>Massachusetts Law</h3>
              <div className={styles.underline}></div>
              <p>View the Massachusetts labor trafficking statute</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
