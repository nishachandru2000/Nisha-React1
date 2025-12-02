import "./index.css"
import Content from "./Components/Content/Index"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
// import Counter from "./Components/State/Index"
import Effect from "./Components/Effect/Index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Components/About/Index"
import Contact from "./Components/Contact/Index"
import Main from "./Components/Effect/Index"
import reducer from "./reducer"
import { store } from "./store"
import { Provider } from "react-redux"
function App() {
  return <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<div className="Grid">
            <div className="image">
              <Content name="Nisha" age={25} Gender="Female" />
            </div>
            <Main />
            {/* <Counter/> */}
            {/* <Effect/> */}
          </div>} path="/Home"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Contact />} path="/Contact"></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>

  </>
}
export default App