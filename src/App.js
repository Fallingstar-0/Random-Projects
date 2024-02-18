import logo from "./logo.svg"
import "./App.css"
import Accordion from "./components/accordion"
import RandomColor from "./components/random-color"
import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider"
// API key for pexels.com sCYE656aez48apGkQNUPojvq3qM1qMdYf75SEJ3BP3qp5ErsR3iitXz1

function App() {
  return (
    <div className="App">
      {/* <Accordion />
      <RandomColor /> */}
      {/* <StarRating /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  )
}

export default App
