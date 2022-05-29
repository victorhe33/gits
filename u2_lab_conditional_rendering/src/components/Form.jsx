const Form = (props) => {

  return (
    <div>
      <h1>Information Form</h1>
      <h4>Please enter your info below...</h4>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Your
           Name"
          value={props.name}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="email"
          placeholder="Your Email"
          value={props.email}
          onChange={props.handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="age"
          placeholder="Your Age"
          value={props.age}
          onChange={props.handleChange}
        />
      </form>
      <br></br>
      <div>
        <button>Back</button>
        // If you want your button to go back, you better hook up a method to it's onClick property here!
        <button onClick={props.incrementPage}>Next</button>
        // This button has already been hooked up for you, just gotta pass the prop to this component!
      </div>
    </div>
  )
}

export default Form
