import PropTypes from 'prop-types'; // 프롭스 타입 임포트

function MyComponent( /* props */ {name ="이름없음", age = 0, addr = "주소없음"}) { //App.js파일에 속성값으로 설정한 props 값을 받음

  // console.log(props);
  
  // return (
  //   <div>
  //     이름: {props.name}<br/>
  //     나이: {props.age}<br/>
  //     주소: {props.addr}<br/>
  //   </div>
  // ) 

  return (
    <div>
      이름: {name}<br/>
      나이: {age}<br/>
      주소: {addr}<br/>
    </div>
  )

}
//프롭스의 기본값 지정
// MyComponent.defaultProps = {
//   name : "이름없음",
//   age : 0,
//   addr : "주소없음"
// }

//프롭스의 타입 검증 - > 실제 에러가 나는 것은 아니지만 , 타입에 대한 힌트를 줍니다
MyComponent.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
  addr : PropTypes.string
}
export default MyComponent;