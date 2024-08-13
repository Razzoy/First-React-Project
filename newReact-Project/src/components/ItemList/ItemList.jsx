import style from './ItemList.module.scss'

export function ItemList(props) {

    return (
        <ul>
            {props.listItem.map((item) => {
                return <li>{item}</li>
            })}
        </ul>
    )
}