import style from './Header.module.scss'
import { Nav } from './Nav/Nav'

export function Header() {


    return (
        <>
            <header className={style.headerStyling}>
                <h1 className={style.headerText}>Dette er en Header</h1>
                <Nav/>
            </header>
        </>
    )
}
