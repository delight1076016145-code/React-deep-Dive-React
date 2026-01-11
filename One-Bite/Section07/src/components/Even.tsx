import { useEffect } from "react"


const Even = () => {
  useEffect(() => {
    return () => {
      console.log('Even Component Unmounting!');
    };
  }, []);


  return <div>
    <div>짝수입니다.</div>
  </div>
  }

export default Even