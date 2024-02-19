const Form = ({ color, setColor }) => {
  return (
    <>
      <form className="color-form">
        <label htmlFor="color">Color Generator</label>
        <input
          type="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
          id="color"
        />
        <input
          type="text"
          value={color}
          id="color"
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button></button>
      </form>
    </>
  );
};

export default Form;
