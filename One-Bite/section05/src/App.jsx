import './App.css'
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/footer';
import Button from './components/Button';

function App() {

  const buttonProps = [
    { text: "메일", color: "red" },
    { text: "카페" },
    { text: "블로그" }
  ];

  return (
    <>
      <Button {...buttonProps[0]} />
      <Button {...buttonProps[1]} />
      <Button {...buttonProps[2]} >
        <Header />
      </Button>
    </>
  )
}

export default App;
