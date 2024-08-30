import { useState } from "react";

const IterationComponentQ2 = () => {
    //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
    const select = ['HTML', 'Javascript', 'CSS', 'Java', 'Oracle', 'Mysql'];

   
    
    //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
    const data = [
        {id: 1, type: 'Java', teacher: '이순신'},
        {id: 2, type: 'Java', teacher: '홍길자'},
        {id: 3, type: 'Javascript', teacher: '홍길동'},
        {id: 4, type: 'Oracle', teacher: '이순신'},
        {id: 5, type: 'Mysql', teacher: '이순신'},
        {id: 6, type: 'CSS', teacher: '박찬호'},
        {id: 7, type: 'HTML', teacher: 'coding404'},
    ];
    const [option, setOption] = useState(select);

    const [list, setList] = useState(data);
   
    const [selectedType, setSelectedType] = useState(option[0]);

    const [search, setSearch] = useState('');

    const newOption = option.map( (value,index) =>
        <option key={index}>{value}</option>
    )
    
    const newData = list.map( (value,id) => 
                    <li key={id}>{value.type}-{value.teacher}</li>
    )
    
    //console.log(newData);
    

    //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
    let handleSelect = (e) => {
       //console.log(e.target.value);
       let selectedType = e.target.value;   
       setSelectedType(selectedType);
      
       let filteredList = data.filter(value => 
        value.type === selectedType
       );
       setList(filteredList);
    };
	
	//4- input값은 state로 관리합니다.	
	//5 - 검색기능 - 원본 data에서 필터링으로 검색값을 찾아 state를 업데이트 합니다.
    const [input, setInput] = useState();

    const handleClick = () => {
        let searchList = data.filter( value=> {

            let str = value.type.concat(value.teacher).toLowerCase(); // 문자열 붙이기
            
            console.log(str);
            
            return str.includes(input); //포함돼있으면 true아니면 false
        });
        setList(searchList);
    }

    return (
        <div>
			<hr/>
            <h3>실습</h3>
            Search: <input type="text" value={input} onChange={ (e) => setInput(e.target.value) }/>
            <button onClick={handleClick}>검색</button>

            <br/>
            
			과목찾기:
            <select value={selectedType} onChange={handleSelect}>
                {newOption}{/* select.map( (item,index) => <option key={index}>{value}</option>) 밑에서 하는 방식 */}
            </select>
            <ul>
                {newData}
            </ul>
        </div>
    )
}

export default IterationComponentQ2;