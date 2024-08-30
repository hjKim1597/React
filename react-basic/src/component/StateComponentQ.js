import { useState } from "react";

function StateComponentQ() {

  let [count, setCount] = useState(0);

  // let up = () => {
  //   setCount(count+=1);
  //   setCount(함수); //함수의 첫번째 매개변수에 이전 값을 넣어줌
  //   setCount(prev => prev + 1); //prev는 state 이전값을 받을 수 있음    
  // }
  // let down = () => {
  //   setCount(count-=1);
  // }
  let main = () => {
    setCount(0);
  }

  return (
    <div>
    실습 <br/>
    카운트: {count} <br/>
    
    <button onClick={() => {setCount(count+=1)} }>증가</button>
    <button onClick={() => {setCount(count-=1)} }>감소</button>
    <button onClick={() => { main() }}>초기화</button>

    </div>
  )
}
export default StateComponentQ