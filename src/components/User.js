function User(props) {
  return (
    <section>
      <p>Name: {props.name}</p>
      <p>Proffession: {props.profession}</p>
      <p>City: {props.city}</p>
    </section>
  )
}

export default User;