import style from './Header.module.scss'
import { Nav } from './Nav/Nav'

export function Header(props) {
    return (
        <>
            <header className={style.headerStyling}>
                <h1 className={style.headerTextStyling}>{props.headerText}</h1>
                <Nav/>
            </header>
        </>
    )
}

Header.defaultProps = {
    headerText: 'Hov! Du mangler sku en header text',
}
