import { useReducer } from "react";

const nameReducer = (state, action) => {
  
  console.log(action); //값을 받음

  //state는 유지하면서 전달되는 name에 따라서 key를 바꿈
  state = {...state, [action.name] : action.value};
  
  return state;
  console.log(state);
  
}






function HookReducer2() {

  // name과 age를 동시에 처리할 수 있는 nameReducer함수를 생성을 합니다
  // 초기값은 {name : '', age : 0}
  // 리듀서 함수 안에서는 객체 값을 state = {...state(기존값), [키] : value};
  // action함수는 매개변수를 값을 주면 됨 e.target.value
  
  const [state, action] = useReducer(nameReducer, {name: '', age: 0} ); 

  return ( 
    <>
    
    <input type="text" name="name" value={state.name} onChange={(e) => action(e.target) }/>
    <input type="number" name="age" value={state.age} onChange={(e) => action(e.target) }/>
    
    리듀서를 통해서 변경된 값 : {state.name}, {state.age}
    
    </>
  )
}
export default HookReducer2;