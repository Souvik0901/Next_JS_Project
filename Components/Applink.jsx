import styles from "../styles/Applink.module.css"
import Image from "next/image"
import Link from "next/link"

const Applink = () => {
    return (
        <div className={styles.applink_container}>

            <div className={styles.top_container}>

                <div className={styles.mockup_img}>
                    <Image src="/img/mockup.png" width="420" height="420" ></Image>
               </div>

               <div className={styles.top_descrp}>
                    <h1 className={styles.top_title}> 
                       Spreading modernisation in medical world!
                    </h1>
                    <p className={styles.top_text}>
                        Dedicating ourselves for the benefit of the medical clinics 
                        and patients, in order to make life easier and organised.
                    </p>
               </div>

            </div>

            <div className={styles.bottom_container}>

                <div className={styles.whiteclass}>
                <Link href="#" className={styles.white}>
                    <Image src="/img/Gplay.png" width="200" height="30" ></Image>
                </Link>

                <Link href="#" className={styles.white}>
                     <Image src="/img/AppStore.png" width="200" height="30"  ></Image>
                </Link>
                </div>
                
            </div>
            
        </div>
    );
}

export default Applink;
