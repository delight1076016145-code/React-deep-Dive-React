import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App() {

  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const isMount = useRef(false);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log('App Component Mounting!');
  }, []); // 빈 배열 넣으면 마운트 될 때만 실행됨

  // 2. 업데이트 : 변화 리렌더링
  useEffect(() => {
    if(!isMount.current){
      isMount.current = true;
    } else {
      console.log('App Component Updating!');
    }
  }); // 의존성 배열이 없으면 모든 상태 변화에 대해 실행됨

  // 3. 언마운트 : 제거

  useEffect(() => {
    console.log(`count: ${count}`);
    console.log(`input: ${input}`);
  }, [count, input]);

  const onclickButton = (value: number) => {
    setCount(count + value);
  }

  return (
    <div className='App'>
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e) => {
        setInput(e.target.value);
      }} />
    </section>
    <section>
      <Viewer count={count} />
      {count % 2 === 0 ? <Even /> : null}
    </section>
    <section>
      <Controller onClickButton={onclickButton} />
    </section>
    </div>
  )
}

export default App
