import MyComponent from "./component/MyComponent";

//예제 app
function App() {

  return (
    <div>
      <MyComponent name={"홍길동"} age={20} addr={"서울시"}/>
      <MyComponent /> {/* 재사용가능 */}
    </div>
  )
}
export default App;