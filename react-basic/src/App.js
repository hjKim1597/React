import './App.css'; //css파일 import
import styled from './App.module.css'; //module.css파일

function App() {
  
  // 1. css파일명은 컴포넌트와 동일한이름으로 생성
  return (
    <>
      <div className="app-title">
        css파일로 디자인하기
      </div>

      <div style={{color: 'blue', border: "3px solid red"}}>
        직접 디자인하기
      </div>
    
      <div className={styled.app_wrap}>
        <p className={styled.title}>모듈로 디자인하기</p>
        <p className='content'>global속성</p>
      </div>


    </>
  )
}
export default App;