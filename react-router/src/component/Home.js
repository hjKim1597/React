import { Link } from "react-router-dom";

function Home () {
  return (
    <div>
      <h3>홈페이지 입니다</h3>
      <Link to='/user?name=홍길동&age=20'>유저페이지</Link> {/* '라우터의 주소' */}<br/>
      <Link to='/info/1'>Info1페이지</Link> <br/>
      <Link to='/info/2'>Info2페이지</Link><br/>
      <Link to='/info/3'>Info3페이지</Link> <br/>
    </div>
  )
}
export default Home;