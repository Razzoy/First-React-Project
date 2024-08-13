import style from './Nav.module.scss';

export function Nav() {


  return (
    <>
      <nav>
        <ul className={style.ulStyling}>
            <li className={style.liStyling}><p>Liste 1</p></li>
            <li className={style.liStyling}><p>Liste 2</p></li>
            <li className={style.liStyling}><p>Liste 3</p></li>
        </ul>
      </nav>
    </>
  )
}
