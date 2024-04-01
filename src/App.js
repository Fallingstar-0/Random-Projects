import logo from "./logo.svg"
import "./App.css"
import Accordion from "./components/accordion"
import RandomColor from "./components/random-color"
import StarRating from "./components/star-rating"
import ImageSlider from "./components/image-slider"
import LoadMoreData from "./components/load-more-data"
import TreeView from "./components/tree-view"
import menus from "./components/tree-view/data"
import QrCodeGenerator from "./components/qr-code-generator"
import LightDarkMode from "./components/ligh-dark-mode"
import ScrollIndicator from "./components/scroll-indicator"
import TabTest from "./components/custom-tabs/tab-test"
import ModalTest from "./components/custom-moda-popup/modal-test"
import GithubProfileFinder from "./components/github-profile-finder"
import SearchAutoComplete from "./components/search-autocomplete-with-api"
import TreeViewTest from "./components/tree-view-test"

function App() {
  return (
    <div className="App">
      <TreeViewTest menus={menus} />
      {/* <SearchAutoComplete /> */}
      {/* <GithubProfileFinder /> */}
      {/* <ModalTest /> */}
      {/* <TabTest /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <LightDarkMode /> */}
      {/* <QrCodeGenerator /> */}
      {/* <TreeView menus={menus} /> */}
      {/* <LoadMoreData /> */}
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
    </div>
  )
}

export default App
