import { useRef, useState } from "react";




const HookQ2 = () => {
    /*
    실습(할일목록 만들기 )
    1. state는 {todo: '', list: []} 로 관리합니다.
    2. 할일 목록을 작성하고 클릭시, list에 인풋이 입력한 값을 추가하고 map을 이용해서 반복처리해주세요
    3. 등록 이후에는 ref를 활용해서 input태그에 포커싱해주세요.
    */
   const todoRef = useRef(null);
   const [form, setForm] = useState({todo: '', list: []})
   
   //인풋데이터 핸들링
    const handleTodo = (e) => {
        // console.log(e.target.value);
        // setForm({todo: e.target.value, list: []}); 왜틀렸는지 확인
        setForm({...form, ["todo"] : e.target.value})
    }
    console.log(form);
    

    const handleClick = () => {
    //    setForm(form.list);
        let newList = form.list;
        newList.push( form.todo);
        setForm({todo : '', list : newList} );
        todoRef.current.focus(); //포커싱
    }
    console.log(form);
    

    form.list.map((form,index) => 
        <li key={index}>{form.todo}. {form.list}</li>)
    

    return (
        <div>
            <h3>HookQ2</h3>

            <input type="text" value={form.todo} onChange={handleTodo} ref={todoRef} placeholder="할일 목록을 작성하세요" />
            <button type="button" onClick={handleClick}>등록</button>
            <ul>
                
				{
                    form.list.map((item, index) => 
                        <li key={index}>{index + 1}. {item}</li>)
                }
            </ul>
        </div>
    )

}
export default HookQ2;