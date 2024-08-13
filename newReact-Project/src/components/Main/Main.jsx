import { Greetings } from '../Greetings/Greetings'
import style from './Main.module.scss'

export function Main() {


  return (
    <>
      <main>
        <section className = {style.sectionStyling}>
          <Greetings name = 'Mathias'/>
          <Greetings name = 'Børge'/>
          <Greetings name = 'Hilda'/>
            <article className = {style.articleStyling}>
                <h2>Fest</h2>
                <p>Der er fest inde i denne artikel</p>
            </article>
        </section>
      </main>
    </>
  )
}
