function Gallery(props) {


  return (
    <section className="container gallery flex">

      {props.arr.map((img, index) => (
        <img key={index} src={img} alt="" />
      ))}
    </section>
  )
}

export default Gallery;