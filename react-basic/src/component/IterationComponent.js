function IterationComponent() {

  const arr = [1,2,3,4,5];

  // const newArr = arr.map( (value, index) => {
  //   return value * 10;
  // })
  // const newArr = arr.map( (value, index) => value * 10);

  //li 태그는 리액트 element -> 이것은 반드시 고유한 key props를 전달하도록 권고함
  const newArr = arr.map( (value, index) => {
    return <li key={index}>값: {value}</li> //key={고유한 값} 넣어줘야함
  })

  console.log(newArr);
  

  return (

    <div>
      컴포넌트 반복

      <ul>
        {newArr}
      </ul>
    </div>


  )

}
export default IterationComponent;