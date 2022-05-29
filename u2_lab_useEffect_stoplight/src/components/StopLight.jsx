const StopLight = (props) => {

  return (
    <div className="action-area">
      <h1>Stoplight useEffect</h1>
      <div className="stoplight-container">
        <div className="stoplight">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <button
            className="countdown"
            // onCLick here
          >
          Countdown
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopLight
