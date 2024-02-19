import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";

const App = () => {
  const [color,setColor]= useState('')
  console.log(color)
  return <section className="container">
    <Form color={color} setColor={setColor}/>
    <ColorList />
  </section>;
};
export default App;
