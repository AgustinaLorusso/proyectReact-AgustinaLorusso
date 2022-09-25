import './itemList.css' 
function ItemListContainer(props) {
  return (
    <main className="main">
        <section className="saludo">
            <div><h5>{props.greeting}</h5></div>
        </section>
    </main>
  )
}

export default ItemListContainer