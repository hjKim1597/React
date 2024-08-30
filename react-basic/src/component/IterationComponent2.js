import { useState } from "react";


function InterationComponent2() {

  //기존의 가짜 데이터
  
  const data = [
    {id: 1, topic: 'hellow world'},
    {id: 2, topic: 'bye bye~'}
  ];
  let[list, setlist] = useState(data);


  //3. input태그 state로 관리
  let [topic, setTopic] = useState('');


  //4. 버튼 클릭시에 input state값을 배열에다가 추가 
  let handleClick = () => {
    //console.log(list[list.length - 1].id + 1);
    
    let obj = {id: list[list.length - 1].id + 1 
              , topic : topic} //id는 list의 마지막 값 + 1 //키 : value
      // console.log(obj);

      let newList = list.concat(obj); //배열.concat(배열) , 배열.concat(오브젝트)
      console.log(newList);

      //state업데이트 => 새 리스트가 추가되는 이유는 새로 처음부터 랜더링 되기때문

      setlist(newList);
      setTopic(''); //=> 추가된 후 인풋값 초기화
      
      
  }

  //5. 삭제기능 더블클릭시
  
  let handleRemove = (id) => { //클릭한 대상의 id값  // `id`는 삭제할 항목의 고유 식별자입니다.
    //console.log(111); 클릭시 작동 확인
    
    //filter
    let newList = list.filter( (value) => {
      //console.log(value); //list 요소들을 한번 씩 돌음
       // `list` 배열에서 `id`가 일치하지 않는 항목들만 필터링하여 새로운 배열을 만듭니다.
      
      return value.id !== id; //리턴에 실린 값이 true인 데이터만 필터링  // 현재 항목의 `id`와 삭제할 `id`가 일치하지 않는 경우만 필터링합니다.
    })
    //필터링 시킨 데이터를 state로 변경 -> 랜더링
    setlist(newList);
    //console.log(newList);
    
  }
 
  

  
  // 2. 리스트를 이용해서 반복처리 -> 이벤트가 태그보다 위쪽에 위치
  // 이벤트에 함수 매개변수를 주고 싶으면 () => {실행시킬 함수(매개값)} 이런식으로 줍니다
  //더블 클릭 시 handleRemove 함수가 호출됩니다.
  // 이 함수는 value.id를 인수로 받아 해당 항목을 삭제하는 역할을 합니다.
  const newList = list.map(value => <li key={value.id} 
                           onDoubleClick={ () => handleRemove(value.id) } >{value.topic}</li> )


  return(
    <>
      <h3>간단한 할일 목록 만들기</h3>
      <ul>
        {newList}
      </ul>

      <input type="text" value={topic} onChange={ (e) => setTopic(e.target.value) }/>
      <button type="button" onClick={handleClick }>추가하기</button>


    </>
  )
}
export default InterationComponent2;