import { useEffect, useRef, useState } from "react"; //named export 방식
import SockJS from 'sockjs-client'; //socket - default방식

function App () {

  //http로 서버통신하기
  // useEffect(() => {
  //   const result = (async () => {
  //     await axios.post("http:/localhost:8181/getEntitiy", {name: "이순신"})
  //     console.log(result);
      
  //   })();
  // }, []);


  // http-> 커넥션 리스 프로토콜 (데이터 송수신하면 연결 끊음 => 채팅에는 적합 X)
  // websocket => 서버는 대기하고 있다가, 클라이언트 요청이 들어가면 연결을 수립하고,
  //              지속적인 통신채널을 만들게 됩니다

  // useEffect( () => {
  //   //socket라이브러리 npm install sockjs-client

  //   const socket = new SockJS("http://localhost:8181/api/chat");

  //   // 꼭 필요한 함수 메서드
  //   // 연결 성립 호출됨
  //   socket.onopen = () => {
  //     console.log("연결 수립");
  //   }

  //   socket.onclose = () => {
  //     console.log("연결 해제");      
  //   }

  //   socket.onmessage = (e) => {
  //     console.log("수신데이터: " + e);      
  //   }

  //   //만약 연결이 해제 됐을 때 socket.closed(); 로 반드시 닫아주어야 함
  // }, [])

  const [sock, setSock] = useState(null); //연결된 소켓을 state로 관리
  const inputRef = useRef(null); // userId 인풋 값에 바로 접근해서 사용
  const [msg, setMsg] = useState(''); //메시지 인풋
  const [message, setMessage] = useState( [] ); // 빈 배열 생성해 수신 메시지를 state로 관리

  const enterSocket = () => {

    const userId = inputRef.current.value; //userId의 value값
    if(userId === '') {
      alert("아이디를 적어주세요!");
      return;
    }

    if(sock == null) {
    const socket = new SockJS(`http://localhost:8181/api/chat?userId=${userId}&room=1`);
                              /* localhost를 상대로 바꾸면 상대 ip로 들어감 */
    // 연결 성립 호출됨
    socket.onopen = () => {
      console.log("연결 수립");
    }

    socket.onclose = () => {
      console.log("연결 해제");      
    }

    socket.onmessage = (e) => {
      console.log("수신데이터: " + e);   
      const newMessage = e.data;   

      setMessage( (prev) => {

        if(prev.length >= 30) {
          prev.shift(); // 메세지 크기 30이 넘으면 앞에서 하나씩 제거
        } 
        console.log(prev);
        return [...prev, newMessage] ; // 배열합치기
      } ); // setter 메서드의 매개변수에 함수를 넣으면 기존 값을 얻을 수 있음
    }
    setSock(socket);// state에 socket 객체 저장
  }
}

  const exitSocket = () => {
    if(sock !== null) {
      sock.close();
      setSock(null);
      alert("서버와 연결이 종료되었습니다");
    }
  }

  const sendMsg = (e) => {
    // 엔터를 쳤을 때왜 값이 비어있지 않을 때, socket이 비어있지 않을 때
    if (sock && msg && e.key === 'Enter') {
      sock.send(msg) // state로 관리되는 msg
      setMsg('');
    }
  }

  return (
    <>
      <h3>리액트로 채팅구현하기</h3>

      아이디: <input type="text" ref={inputRef}/>
      <button type="button" onClick={enterSocket}>입장</button>
      <button type="button" onClick={exitSocket}>퇴장</button>

      <br/>
      메시지: <input type="text" value={msg} onChange={ e => setMsg(e.target.value) } onKeyUp={sendMsg}/>
      <div style={{border: "1px solid #777", width: '100%', height: "200px", overflow: "auto"} } >
        {message.map( (item, index) => 
        <div key={index}>
          {item}
        </div>
         )}
      </div>
    </>

  )

}
export default App;