import { useState } from 'react'
import Card from './Card'

function App() {  
  const iconArr=["https://cdn-icons-png.flaticon.com/512/3595/3595458.png","https://cdn-icons-png.flaticon.com/512/5787/5787180.png","https://cdn-icons-png.flaticon.com/512/189/189146.png"]
  const [cards,setCards] = useState(genCardIds())
  const [selected,setSelected] = useState(null)

  function genCardIds(){
    let startArray=[1,1,2,2,3,3]
    let res=[]
    for(let i=0;i<6;i++){
      let ranItemInArray=startArray[Math.floor(Math.random()*6)]
      res.push({
          id:i,
          iconNum:ranItemInArray,
          there:false
      })
      startArray=removeFirst(startArray,ranItemInArray)
    }
    return res;
  }
  function removeFirst(src, element) {
    const index = src.indexOf(element);
    if (index === -1) return src;
    return [...src.slice(0, index), ...src.slice(index + 1)];
  }

  function handleTwoSelect(card1,card2){
    if(card1.iconNum===card2.iconNum){
      // setTimeout(()=>{
      //   card1.shown=false
      //   card2.shown=false
      // },200)
    }else{
      setSelected(null)
    }
  }

  const cardElements=cards.map((card)=>{
    console.log(iconArr[card.iconNum - 1])
    return (<Card 
      key={card.id}
      iconNum={card} 
      iconShown={card.id==selected} 
      iconUrl={iconArr[card.iconNum - 1]} 
      selected={selected}
      select={()=>setSelected(card.id)}
      isThere={card.there}
      handleTwoSelect={(card2)=>handleTwoSelect(card.iconNum,card2)}
    />)
  })

  return (
   <>
    {cardElements}
   </>
  )
}

export default App
