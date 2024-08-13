import { Greetings } from '../Greetings/Greetings'
import style from './Main.module.scss'
import { ItemList } from '../ItemList/ItemList'

const livretter = ['Pizza', 'Lasagne', 'Salater', 'Brød', 'Is']

export function Main() {


  return (
    <>
      <main>
        <section className = {style.sectionStyling}>
          <Greetings name = 'Mathias'/>
          <Greetings name = 'Børge'/>
          <Greetings name = 'Hilda'/>
          <ItemList listItem = {livretter} />
            <article className = {style.articleStyling}>
                <h2>Fest</h2>
                <p>Der er fest inde i denne artikel</p>
            </article>
        </section>
      </main>
    </>
  )
}
