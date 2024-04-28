// import './App.css'
import Accordion from "./components/Accordion"
import data from "./data"
import FormImage from "./components/FormImage"
function App() {
  
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-soft-violet to-soft-blue flex justify-center items-center text-dark-blue">
      <div className="main bg-white mx-6 rounded-3xl w-full flex flex-col md:flex-row md:w-3/4 md:items-center">
        <FormImage />
        <div className="md:max-w-2xl mr-6">
        <h1 className="text-center md:text-start my-8 text-4xl font-extrabold">FAQ</h1>
        <div className="content mb-8">
          {
            data.map((item, index)=>(
              <div key={index} className={`mx-5 md:ms-0 border-b-2 border-gray-blue  ${index !== 0 && "mt-5" }`}>
                <Accordion question={item.question} answer={item.answer}/>
              </div>
            ))
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
