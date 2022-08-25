import styles from "../styles/Stats.module.css"
import Image from "next/image"
import Link from "next/link"


const Stats = () => {
    return (
        <div className={styles.stats_container} >
            <h1 className={styles.stats_title}>Download & Stats</h1>
            <div className={styles.top_stats}>
              <Image src="/img/Stat.png" width="900" height="600"></Image>

            </div>

            <div className={styles.bottom_container}>
                <div className={styles.first_box}>
                    <h1>100K+  Downloads</h1>
                    
                    <p>Across all platforms</p>
                </div>

                <div className={styles.second_box}>
                    <h1>50+ Happy Clinics</h1>
                    
                    <p>over our services</p>
                </div>

                <div className={styles.third_box}>
                    <h1>10K+ Customers</h1>
                    
                    <p>Satisfied with patient features </p>
                </div>
            </div>
    
            
        </div>
    );
}

export default Stats;
