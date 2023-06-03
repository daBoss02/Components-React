import Button from "./Button";

function Banner(props) {
  return (
    <section className="banner">
      <div className="container flex">
        <div className="flex">

        <div className="flex text">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </div>

        <div className="buttons flex">
          <Button 
            class="secondary"
            name="Secondary"
          />
          <Button 
            class="primary"
            name="Primary"
          />
        </div>
        </div>
      </div>
    </section>
  )
}

export default Banner;