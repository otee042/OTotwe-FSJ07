import Image from 'next/image'
import classes from './hero.module.css'

export default function Hero() {
 return (
     <section className={classes.hero}>

        <div className={classes.image}>
            <Image src="/images/site/onthaT.jpg" 
                alt="image showing Onthatile" 
                width={300} 
                height={300} 
            />
        </div>
        <h1>Hi, I'm Onthatile</h1>
        <p>I blog about web dev - especially frontend frameworks like NextJS or React</p>

     </section>
 )
}