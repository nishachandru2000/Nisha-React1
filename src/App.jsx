import "./index.css"
import Header from "./Components/Header/index"
import Footer from "./Components/Footer/index"
import Content from "./Components/Content/index"
// import Counter from "./Components/State/Index"
import Effect from "./Components/Effect/Index"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Components/About/index"

import Main from "./Components/Effect/Index"
import reducer from "./reducer"
import { store } from "./store"
import { Provider } from "react-redux"
import Contact from "./Components/Contact/Index"
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