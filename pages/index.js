
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
        <h1 className={styles.title}>hello</h1>
        <p className={styles.text}>
            Bacon ipsum dolor amet tri-tip frankfurter chicken pancetta ball tip tail sirloin cow hamburger drumstick shank bacon pork belly buffalo strip steak. Jerky buffalo leberkas kevin, sirloin pig pork belly burgdoggen meatloaf bresaola fatback. Prosciutto tri-tip frankfurter, alcatra brisket salami ham pig. Sausage shank jowl andouille boudin. Hamburger tail capicola frankfurter chicken ham. Drumstick chicken boudin bacon fatback, pastrami chislic porchetta. Spare ribs kielbasa leberkas turducken bacon short loin brisket picanha ribeye meatball shankle pig.
        </p>
        <p className={styles.text}>
            Frankfurter spare ribs landjaeger fatback. Ribeye shank shankle ham pig kevin ground round pork chop hamburger spare ribs tenderloin venison andouille pork loin alcatra. Beef ribs fatback turducken, landjaeger meatball sirloin jerky cupim ground round capicola ham hock pancetta tenderloin. Tail bacon meatloaf capicola burgdoggen, shank boudin.
        </p>

        <Link href="/ninjas">
            <a className={styles.btn}>Go to Ninjas</a>
        </Link>

    </div>
  )
}
