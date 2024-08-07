import Header from "../components/Header"
import Home from "./Home"

function BaseLayout() {
  return (
    <>
        <Header />
        <section><Home /></section>
    </>
  )
}

export default BaseLayout