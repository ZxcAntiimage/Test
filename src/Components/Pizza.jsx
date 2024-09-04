import pizza from "../assets/pizza.jpg"
import { Link } from "react-router-dom"

export default function PizzaInfo() {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <div className="bg-gray-300 px-20 py-20">
        <img className="w-64 h-64 mx-auto" src={pizza}/>
        <h1 className="max-w-[500px] flex-wrap mt-20">
          Lorem Ipsum is simply dummy text<br/> of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever<br/> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen<br/> book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining<br/> essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing<br/> Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including <br/>versions of Lorem Ipsum.
          </h1>
        <Link to="/product">
          <span className="text-blue-500 mt-24">Вернуться обратно</span>
        </Link>
      </div>
    </div>
  )
}
