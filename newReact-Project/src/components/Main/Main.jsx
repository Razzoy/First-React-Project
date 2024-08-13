import style from './Main.module.scss'

function Main() {


  return (
    <>
      <main>
        <section className = {style.sectionStyling}>
            <article className = {style.articleStyling}>
                <h2>Fest</h2>
                <p>Der er fest inde i denne artikel</p>
            </article>
        </section>
      </main>
    </>
  )
}

export default Main
