import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Quotes from './component/Quotes'
 import './App.css'

function App() {
  const [quote, setQuote] = useState("")

  const quoteArray = [
    {
      quoteData:"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding.",
      name: "Adam Scott"
    },

    {
      quoteData:"Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
      name:"Adelle Davis"
    },
    {
    quoteData:"We are indeed much more than what we eat, but what we eat can nevertheless help us to be much more than what we are.",
    name: "Adelle Davis"
    },

    {
      quoteData: "Nothing will benefit human health and increase the chances for survival of life on Earth as much as the evolution to a vegetarian diet.",
      name:"Albert Einstein"
    },
    {
      quoteData: "Eating is always a decision, nobody forces your hand to pick up food and put it into your mouth.",
      name:"Alice May Brock"
    },
    {
    quoteData:"Fat is a barrier, a bellicose statement to others that, to some, justifies hostility in kind. The world says to the fat person, 'Your fatness is an affront to me, so we have the right to treat you as offensively as you appear.' Fat is not merely viewed as another type of tissue, but as a diagnostic sign, a personal statement, and a measure of personality. Too little fat and we see you as being antisocial, fearful and sexless. Too much fat and we see you as slothful, stupid, and sexually hung up.",
   name:"Anthelme Brillat-Savarin"
    },

    {
      quoteData: "Fat people, it is commonly held, should be punished because they offend our aesthetic sensibilities. They take up too much space on subways, buses, airplanes, and elevators. They consume more than they contribute to society. They become ill and need to be taken care of, or they die early and their families are left unsupported. The only way fat people can gain some acceptance and forgiveness for their crime of overeating is to at least try, or look like they are trying, to lose weight. They must never eat an ice cream cone in public, never be seen eating a normal sized portion of non-diet food!",
      name: "Calvin Trillin"
    },

    {
      quoteData: "Tomatoes and oregano make it Italian; wine and tarragon make it French. Sour cream makes it Russian; lemon and cinnamon make it Greek. Soy sauce makes it Chinese; garlic makes it good.",
     name: "Calvin Trillin"
    },
    {
      quoteData: "Tell me what you eat, and I will tell you what you are.",
      name: "Cyra McFadden"
    },
    {
      quoteData: "Health food makes me sick.",
      name: "Eike von Repkow"
    }
  ]

  return (
    <>
      {/* <h3>my quote is here</h3> */}
      {/* quoteArray.map(data.) */}

      {quoteArray.map((data) => (
        <Quotes 
          // key={data.quoteData} 
          quoteData={data.quoteData} 
          name={data.name} 
        />
      ))}
      {/* <Quotes quoteData={"It's amazing how pervasive food is. Every second commercial is for food. Every second TV episode takes place around a meal. In the city, you can't go ten feet without seeing or smelling a restaurant. There are 20 foot high hamburgers up on billboards. I am acutely aware of food, and its omnipresence is astounding."} name={ "Adam Scott"} /> */}
       
    </>
  )
}

export default App
