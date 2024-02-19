import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
toast.success("awesome");
toast.error("error message");

const App = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState(new Values("#b00c0c").all(10));
  const handleColor = () => {
    setColors(new Values(color).all(10));
  };
  return (
    <main>
      <Form color={color} setColor={setColor} handleColor={handleColor} />
      <ColorList colors={colors} />
      {/* <ToastContainer position="top-center" /> */}
    </main>
  );
};
export default App;
