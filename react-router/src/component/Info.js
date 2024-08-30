import { useParams } from "react-router-dom";

function Info () {

  //예시데이터
  const data = {
    "1" : {id:1 , name : "홍길동"},
    "2" :  {id:2 , name : "이순신"},
    "3" : {id:3 , name : "신사임당"}
  }


  //useParams훅 - URL파라미터
  let param = useParams();
  console.log(param);
  console.log(param.num); //찾아서 사용함
  
  const{id, name} = data[param.num];  


  return (
     //useParams
    <div>
      <h3>Info페이지 입니다</h3>
      <div>선택된 데이터는 {id} / {name}</div>
    </div>
  )
}
export default Info;