import './App.css'
import Counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 is clicked')
  }

  const AddToFive =(num)=>{
    alert(num+5); 
  }

  return (
    <>
      <h3>React core concepts 2</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>


      {/* onclick er c ta choto hater hoito javascript e R function call korar jonno parameter er sathe call ow korte hoito */}
      {/* <button onclick="handleClick()">Click Me</button>  */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click</button>
      <button onClick={()=>{alert('third is clicked')}}>Third</button>

      {/* vejailla ta pore dekhbo */}
      <button onClick={() => AddToFive(3)}>Four</button>
    </>
  )
}

export default App
