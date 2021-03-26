
const Items = ({items}) => {
    return(
        <div className= "items_container">
            <img className= "item_image" src = {items.image_url}/>
            <ul className= "items">
                <li className= "item_title">{`${items.title.substring(0,10)}...`}</li>
                <li className= "item_pub">{items.publisher}</li>
            </ul>
        </div>
    )
}
export default Items;