import Link from 'next/link';
import classes from './main-navigation.module.css';
import Logo from './logo';

export default function MainNavigation() {
    
    return (
        <header className={classes.header}>
            <Link href="/"> 
                
                <Logo /> 
                
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

{/* <Link href={props.link} className = {classes.btn}>
         {props.children}
    </Link> */}