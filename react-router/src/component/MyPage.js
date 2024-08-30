import { Navigate, useNavigate } from "react-router-dom";

function MyPage() {

  // 접근 권한 검사 - 랜더링 과정에는 사용이 불가능  
  let nav = useNavigate();
  let loginYN = false;  //false  //로그인 처리에 대한 내역을 관리하는 값이 추가되어야함
  if(!loginYN) {
    // nav('/');
    return <Navigate to='/' replace={true}/>; // replace true는 history를 남기지 않음 
  }

  return (
    <>
      <h3>권한이 있는 유저만 접근이 가능한 화면</h3>
    
    </>
  )

}
export default MyPage;