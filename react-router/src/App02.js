import { useEffect, useState } from "react";

function App () {

  // ajax -> https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json 
  // 위 주소로 부터 버튼을 클릭했을 때 데이터 가져옴

  const [data, setData] = useState();

  const getData = () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json ') 
    .then( response => response.json() )
    .then( data => {
      // console.log(data); //위 주소에서 data 가져옴
      //state로 데이터를 관리
      setData(data);
      
    })
  }

  // 화면로드시에 데이터를 가지고 올때는 useEffect 훅을 사용
  const [raw, setRaw] =  useState();
  useEffect( () => {
    fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    .then( response => response.json())
    .then(data => {
      // console.log(data);
      setRaw(data);
      
    })
  }, []);
  // console.log(raw); // useEffect로 할경우 무한루프이기 떄문에 두번째 매개변수에 빈 [] 배열 추가해 한번만 실행하게함
  
  if(true) {
    console.log(true);
  }


  return (
    <>
      <h3>ajax로 데이터 처리하기</h3>
      <button onClick={getData}>클릭할 때 네트워크 통신</button>
      
      {
        data !== undefined ?
        <div>      
          {data.userId}<br/>
          {data.userPw}<br/>
          {data.userName}<br/>
        </div> 
        :
        null
      }
      
      <h3>useEffect 로드 시에 데이터 가져오기</h3>
      {
        raw && <div>
          {raw.userId}<br/>
          {raw.userPw}<br/>
          {raw.userName}<br/>
        </div>
      }
    </>
  )
}
export default App;

