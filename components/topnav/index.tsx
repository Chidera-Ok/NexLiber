import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Topnav.module.css";

const Topnav: NextPage = () => {
    return (
        <header className={styles.nav}>
            <Link href="/">
                <a>
                    <Image
                        src="/logo/light-bg.svg"
                        alt="NexLiber Logo"
                        width={80}
                        height={80}
                    />
                </a>
            </Link>
            <div className={styles.navlinks}>
                <Link href="https://github.com/xyntechx/NexLiber">
                    <a target="_blank" className={styles.imglink}>
                        <Image
                            src="/github.png"
                            width={40}
                            height={40}
                            alt="NexLiber GitHub Repo"
                        />
                    </a>
                </Link>
                <Link href="/community">
                    <a target="_blank" className={styles.imglink}>
                        <Image
                            src="/discord.png"
                            width={40}
                            height={40}
                            alt="NexLiber Discord Community"
                        />
                    </a>
                </Link>
                <Link href="https://www.buymeacoffee.com/xyntechx">
                    <a target="_blank" className={styles.link}>
                        Sponsor
                    </a>
                </Link>
                <Link href="/library">
                    <a className={styles.speciallink}>Browse</a>
                </Link>
            </div>
        </header>
    );
};

export default Topnav;
