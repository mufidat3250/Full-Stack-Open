
const PersonForm = ({handleSubmit, handleChange, phoneRecord}) => {
  return (
    <div>
         <form onSubmit={handleSubmit}>
        <div>
          name:{""}
          <input
            placeholder="..Enter Name"
            onChange={handleChange}
            value={phoneRecord.name}
            name="name"
          />
          <br />
          number{" "}
          <input
            placeholder="...Enter Number"
            value={phoneRecord.number}
            onChange={handleChange}
            name="number"
            type='text'
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm