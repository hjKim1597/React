  import { useState } from "react";
import ColorComponent from "./component2/ColorComponent";
import ColorContext from "./context/ContextAPI";

function App() {

  //contextAPI의 변화를 알릴 떄는 Context의 Provider를 사용함
  //Provider는 value props를 필수로 전달해야 합니다
  //ContextAPI를 관통해서 value 값 변경 

  const [color, setColor] = useState('red');

  const handleChange = (e) => {
    console.log(e.target.value);
    
    setColor(e.target.value);
  }

  return (

    <>
      <h3>컨텍스트 API</h3>

      <select onChange={handleChange}>
        <option >red</option>
        <option >blue</option>
        <option >green</option>
      </select>

      <ColorContext.Provider value={{color: color}}>
        <ColorComponent/>
      </ColorContext.Provider>


    </>
  )
}
export default App;