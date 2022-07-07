

function Item(props) {
    return (
        <li className="d-flex justify-content-between align-items-center p-2 mb-2">
            <div className="p-3">{props.item}</div>
            <button className="btn btn-danger p-2 h-50" onClick={()=> props.funDel(props.id)}>Supprimer</button>
        </li>
    )
}

export default Item;
