const Landing = (props) => {
  // props have already been passed into this component for us here ^^, but have we passed any properties to this component yet?
  
  return (
    <div>
      <h1>Welcome to Our Page!</h1>
      <h4>Please sign up below...</h4>
      <button onClick={props.incrementPage}>Sign Up</button>
      // Our button here ^^ has already been hooked up to use our method from HomePage, but have we passed that prop yet?
    </div>
  )
}

export default Landing
