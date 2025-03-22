import { motion } from "motion/react"
function App() {

  return (
    <div className="bg-gray-800 w-full min-h-screen" >
      <motion.div
      className="w-36 h-36 bg-teal-500 rounded-xl "
      initial={{
        x:-100,
        opacity:0
      }}
      
      animate={
       { 
        x:800,
        opacity:1
      }
      }
      transition={
        {
          duration:2,
          delay:1,
          ease:'anticipate'
        }
      }
      
      ></motion.div>
    </div>
  )
}

export default App
