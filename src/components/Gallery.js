function Gallery(props) {

  let img1, img2, img3, img4;
  [img1, img2, img3, img4] = [...props.arr]

  return (
    <section className="container gallery flex">
      <img src={img1} alt=""/>
      <img src={img2} alt=""/>
      <img src={img3} alt=""/>
      <img src={img4} alt=""/>
    </section>
  )
}

export default Gallery;