const Button = ({children, text, color="black"}) => {
  //이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(`${text} 버튼이 클릭되었습니다.`);
  }

  return (
    <button 
      //이벤트 핸들러
      onClick={onClickButton}
      onMouseEnter={onClickButton}
      style={{ color: color }}>
      {text} - {color}
      {children}
    </button>
  );
};

export default Button;
