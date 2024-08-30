import axios from "axios";
import { useEffect, useState } from "react";

function App () {

  const [a, SetA] = useState(); 
  const [b, SetB] = useState();
  const [c, SetC] = useState();

  // state에 저장시키고 사용가능함 

  // const handleClick = () => {

  //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //   .then(response => {
  //     //console.log(response.data );
  //     console.log(1);
  //   });
  //   console.log(2); //비동기는 데이터를 순서대로 가져오지 않음 // 리턴에 대한 순서를 보장 X
  //   // 순서를 보장받으려면 콜백 지옥 형태로 

  //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
  //   .then(response => {
  //     //console.log(response.data );
  //     console.log(3);
  //   });
  //   console.log(4);

  //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
  //   .then(response => {
  //     //console.log(response.data );
  //     console.log(5);
  //   });
  //   console.log(6);
  // }


  // 콜백 지옥형태 (비동기 방식에서 데이터의 순서를 보장 받기 위해 아래처럼 작성)
  const handleClick = async () => {
    
    // axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
    // .then(response => {
    //   // console.log(response.data );
    //   console.log(1);

    //   axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
    //   .then(response => {
    //     // console.log(response.data );
    //     console.log(3);

    //     axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
    //     .then(response => {
    //       // console.log(response.data );
    //       console.log(5);

    //     });
    //   });
    // });


    // async(이거 비동기 의미)- 상위 함수에, await(그러니까 기다려)- promise에 적용
    // 1. async 함수 안에서만 await키워드를 쓸 수 있음
    // 2. function의 = 뒤에 async를 붙이면 언제나 Promise 객체를 반환함
    // 3. 함수의 리턴이 Promise라면 await 키워드를 붙이고 아래 함께하는 .then을 생략할 수 있음

    // 사용시 장점
    /* 
      1. 코드가 간결해짐
      2. 수행방식을 동기 방식으로 바꾸면서, 순서 보장이 들어감
    */

      const data1 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
      //console.log(promise); //=> promise 반환되기에 3번 적용 가능 
      // console.log(data1);
      console.log(data1.data);
      console.log(1);
      
      const data2 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json')
      console.log(data2.data);
      console.log(2);
      
      const data3 = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/by.json')
      console.log(data3.data);
      console.log(3);


      const result = await fetch('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json ') 
                            .then(response => response.json() )    
                            
      console.log(result);
      console.log(result.userId);
      SetA(result.userId);
      SetB(result.userPw);
      SetC(result.userName);
      
  }

  //실습 -힌트는 강의자료에 있음
  //데이터가 로드시에 hi.json 데이터를 async, await으로 가져오는 프로그램 코드를 작성해보세요
  // useEffect( async () => {

  //   ( async () => {
  //     const result = await axios.get('https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json')
  //     console.log(result);
  //     //  여기서 state에 저장해서 불러오기 방식
  //   })();
    
  // })
 
  

  return (
    <>
      <h3>엑시오스로 데이터 받기</h3>

      <button onClick={handleClick}>클릭시 네트워크 통신으로 데이터 가져오기</button>
      
      <h3>
        {a}<br/>
        {b}<br/>
        {c}<br/>

      </h3>
    </>
  )
}
export default App;