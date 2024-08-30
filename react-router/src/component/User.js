import { useLocation, useParams, useSearchParams } from "react-router-dom";

function User () {

// 1.useParam훅을 사용
// const location = useLocation();
// console.log(location);

// const{search, pathname} = location;
// console.log(search);
// console.log(pathname);

// 2. useSearchParams() 훅을 사용
// const searchParams = useSearchParams();
const [obj, setObj] = useSearchParams();
// console.log(searchParams);
// console.log(obj); //값을 얻을 수 있음
// console.log(setObj); // uri값을 강제로 변경이 가능함

let name = obj.get("name"); // name 키를 얻음
let age = obj.get("age"); // age 키를 얻음

console.log("전달된 파라미터:" , name, age);

const handleClick = () => {
  setObj( {name: '이순신', age: '30'} ); //기존의 uri 값을 변경 시킴
}



  return (
    <div>
      <h3>유저페이지 입니다</h3>
      <button onClick={handleClick}> URI값 변경</button>
    </div>
  )
}
export default User;