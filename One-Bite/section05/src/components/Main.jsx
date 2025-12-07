import './Main.css';

const Main = () => {

  // jsx 주의 사항
  // 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
  // (조건문, 반복문X) -> 삼항연산자, && 연산자로 대체 가능
  // 2. 숫자, 문자열, 배열 값만 렌더링됨
  // (객체X) -> JSON.stringify()로 변환하거나 map으로 배열화 필요
  // 3. 모든 태그는 닫혀있어야 한다.
  // (빈 태그도 닫아줘야 함) -> <img />, <input /> 등
  // 4. 최상위 태그는 하나여야 한다.
  // (여러 개의 태그를 반환 불가) -> <></> Fragment로 감싸기 가능
  const user = { name: '이준범', isLogin: true };

  if(user.isLogin){
    return (<div className='logout'>{user.name}님 환영합니다!
    </div>);
  }else{
    return (<>
      <h1>로그인 해주세요!</h1>
    </>);
  }
  // return (
  //   <>
  //     {user.isLogin ? <h1>{user.name}님 환영합니다!</h1> : <h1>로그인 해주세요!</h1>}
  //   </>
  // );
};

export default Main;
