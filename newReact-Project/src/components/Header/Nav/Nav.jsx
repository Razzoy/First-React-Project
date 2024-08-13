import style from './Nav.module.scss';

export function Nav() {


  return (
    <>
      <nav>
        <ul className={style.ulStyling}>
            <li className={style.liStyling}>Liste 1</li>
            <li className={style.liStyling}>Liste 2</li>
            <li className={style.liStyling}>Liste 3</li>
        </ul>
      </nav>
    </>
  )
}
