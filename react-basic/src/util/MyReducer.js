export const myReducer = (state, action) => { //stater값, 액션값(어떤 상태인지)
    console.log(state);
    console.log(action);
    
    // action에 따라서 state를 변경하는 작업을 
    if(action === "increase") {
      state = {value : state.value + 1}; //state에 다이렉트하게 접근해 변경할 수없기때문에 state에 새로운 객체 대입
    } else if (action === "decrease") {
      state = {value : state.value - 1};
    } else if (action === "reset") {
      state = {value : 0}; //초기화
    }
  
    return state; //여기서 반환되는 state는 reducer 의 상태값으로 반환
  }