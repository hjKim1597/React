import { useRef } from "react";


function HookRef() {

  //화면에서 다이렉트로 접근을 해서 사용할 태그 있다면 ref로접근
  let input = useRef(null);

  let handleClick = () => {
    // console.log(input);
    // console.log(input.current); //ref로 연결된 태그
    console.log(input.current.type); //타입
    console.log(input.current.value); //밸류값
    
    alert(input.current.value);
    input.current.focus();
    // 대신 value 값 자체를 강제로 변경하는 것들은 선호되지 X,
    // state를 통해서 상태값으로 관리되는게 좋음
  }

  return (
    <>
      <h3>useRef</h3>
      <input type="text" ref={input}/> 
      <button type="button" onClick={handleClick}>등록</button>   
    </>
  )
}
export default HookRef;