import './App.css'
import { useState } from 'react'

function App() {

const [count, setCount] = useState(0);
const [light, setLight] = useState("off");

  return (
    <>
      <div>
        <h1>현재 라이트 상태: {light}</h1>
        <button onClick={() => setLight(light === "on" ? "off" : "on")}>
          {light === "on" ? "끄기" : "켜기"}
        </button>
      </div>
      <div>
        <h1>현재 카운트: {count}</h1>
        <button onClick={() => setCount(count + 1)}>카운트 증가</button>
      </div>
    </>
  )
}

export default App;
