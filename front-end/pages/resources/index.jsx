import React from "react";
import Link from "next/link";

import styles from "../../styles/resource.module.css";

import Metatags from "../../components/layout/Metatags";

function Resources() {
  return (
    <>
      <Metatags
        title="Resources"
        url="https://traffickingresults.com/resources"
      />
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.title}>Resources</h2>
          <div className={styles.icons__container}>
            <div className={styles.card}>
              <img src="/images/icons/cards.svg" class={styles.icon} />
              <Link href="/prepare">
                <a className={styles.cta__button}>PREPARE</a>
              </Link>
            </div>
            <div className={styles.card}>
              <img src="/images/icons/palm.svg" class={styles.icon} />
              <Link href="/assess">
                <a className={styles.cta__button}>ASSESS</a>
              </Link>
            </div>
            <div className={styles.card}>
              <img src="/images/icons/info.svg" class={styles.icon} />
              <Link href="/resources">
                <a className={styles.cta__button}>RESOURCES</a>
              </Link>
            </div>
          </div>
          <div className={styles.bottom__container}>
            <div className={styles.banner}>
              <span>
                <img src="/images/icons/phone.svg" />
                Call <a href="tel:1-888-373-7888">1-888-373-7888</a>
              </span>
              <span>
                <img src="/images/icons/mobile.svg" />
                <a href="sms:233733&body=BEFREE">Text "BEFREE" to: 233733</a>
              </span>
            </div>
            <a href="#resources">
              <img
                src="/images/icons/caret.svg"
                alt="scroll down"
                className={styles.caret}
              />
            </a>
          </div>
        </section>
        <section className={styles.section} id="resources">
          <div className={styles.banner}>
            <h3>GET RESOURCES YOU NEED</h3>
          </div>
          <p>
            For resources available in your geographic area to assist labor
            trafficking victims, please contact the National Human Trafficking
            Resource Center (NHTRC) Hotline. NHTRC connects victims and
            survivors of human trafficking with support and services.
          </p>
        </section>
        <section className={styles.section}></section>
      </div>
    </>
  );
}

export default Resources;
