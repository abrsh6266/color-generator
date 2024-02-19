const Form = ({ color, setColor, handleColor }) => {
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form
        className="color-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleColor();
        }}
      >
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
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Form;
