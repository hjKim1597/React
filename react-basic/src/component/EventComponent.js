import { useState } from "react";

function EventComponent () {

   
  //1. 인풋이 관리할 값은 state로 선언합니다
  //2. 인풋 태그에 value에 useState연결
  //3. 이벤트를 통해서 input값을 제어(onClick, onChange...)
  let [name, setName] = useState('');
  let [topic, setTopic] = useState('');
  let [food, setFood] = useState('피자');


  let handleName = (e) => { //이벤트 객체
    //console.log(e.target.value); //사용자가 키보드로 입력한 값이 출력됨 => 이걸 State로 올려주면 됨
    setName(e.target.value);
  }

  let handleTopic = (e) => {
    setTopic(e.target.value);
  }

  let handleClick = () => {
    alert(` ${name} 님의 입력값 ${topic} `);
    setName('');
    setTopic('');
  }

  let handleKeyUp = (e) => {
    // console.log('키업 동작함');
    //console.log(e); => ket값과 keycode값 확인
    if(e.key === 'Enter') { //엔터를 눌렀을 떄
      handleClick();
    } 
  }

  let handleFood = (e) => {
    console.log(e.target.value); //모르겠으면 찍어보기
    setFood(e.target.value);
  }
  console.log(food);
  

  return (
    <div>
    인풋이벤트 핸들링
    <br/>
    <input type="text" name="ab" value={name} onChange={handleName}/>
    <br/>
    name state값: {name}
    
    <br/>
    <input type="text" name="topic" value={topic} onChange={handleTopic} onKeyUp={handleKeyUp}/>
    <br/>
    topic state값 : {topic}

    <br/>
    <button type="button" onClick={handleClick}>클릭이벤트</button>


    <hr/>
            <h3>셀렉트 태그 핸들링(실습)</h3>
            <pre>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</pre>            

            <select onChange={handleFood}>
                <option>피자</option>
                <option>햄버거</option>
                <option>치킨</option>
            </select>

            <h3>선택한 결과</h3>
            <p>{food}</p>





    </div>
  )

}
export default EventComponent;