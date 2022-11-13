import Link from "next/link";
import Styles from '../styles/Navbar.module.css';
const Navbar = () => {
    return (
        <div className={Styles.navbar}>
            <div className={Styles.links}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/profile"}>Profile</Link>
            </div>
        </div>
    )
}

export default Navbar;