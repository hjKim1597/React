import { useEffect, useState } from "react";

function HookEffect () {

  // useState 훅
  const [data, setData] = useState('');
  const [age, setAge] = useState('');

  // useEffect 훅 => 컴포넌트 라이프 사이클 관리 //실시간 검색어같은 경우
  // 1 useEffect( () => {
  //   console.log('마운트 이후에 동작됨(랜더링 이후에 동작)');
  // })


  // 2 useEffect( () => {
  //   console.log('마운드 이후에 한번만 실행됨 (네트워크 상으로 데이터를 가지고 올 떄 사용함)');
  // }, []);
  
  // 3 useEffect( () => {
  //   console.log('특정값이 변경돼서 랜더링 될 때 동작함(특정 state가 변경될 때만 실행됨 2번쨰 배열)');
    
  // }, [data, age ]); 


  // 4 useEffect(() => {
  //   console.log('effect 실행됨~');
    
  //   return () => {
  //     console.log('unmount(소멸) 되기전에 실행됨');
      
  //   }
  // }, [data]); //data가 변경될 때만


  // console.log('코드 실행됨...');
  
  // 무한루프에 빠질 수 있는 코드
  // 5 useEffect( () => {
  //   console.log('effect실행됨 2222222222');
    
  // })

  // 무한루프에 빠질 수 있는 코드
  // const [ex, setEx] = useState( {name: '홍길동'} );
  // useEffect( () => {
  //   let copy = {...ex};
  //   setEx(copy);
  // }, [ex]);


  return (
    <>
      <h3>useEffect</h3>
      <input type="text" value={data} onChange={ (e) => setData(e.target.value) }/>
      <input type="text" value={age} onChange={ (e) => setAge(e.target.value) }/>
      {data}
      {age}
    </>
  )
}
export default HookEffect;