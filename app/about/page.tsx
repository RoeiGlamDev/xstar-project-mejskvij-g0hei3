import React from 'react';
import styles from './AboutPage.module.css'; // Importing CSS module for styling

const AboutPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Welcome to HouseIL</h1>
                <p className={styles.subtitle}>Your luxurious escape in the heart of elegance</p>
            </header>
            <section className={styles.content}>
                <h2 className={styles.sectionTitle}>About Us</h2>
                <p className={styles.description}>
                    At HouseIL, we provide an exquisite selection of high-end accommodations 
                    designed for discerning travelers. Our properties are curated to offer 
                    unparalleled comfort and style, ensuring a memorable stay.
                </p>
                <h2 className={styles.sectionTitle}>Our Mission</h2>
                <p className={styles.description}>
                    We aim to redefine luxury travel by offering unique experiences 
                    that blend sophistication with the warmth of home.
                </p>
            </section>
            <footer className={styles.footer}>
                <p className={styles.footerText}>© 2023 HouseIL. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AboutPage;