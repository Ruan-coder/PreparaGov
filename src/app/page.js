import DFD from "./components/DFD"
import Differences from "./components/Differences"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Lei from "./components/Lei"
import NavBar from "./components/NavBar"
import PCA from "./components/PCA"

export default function preparagov() {
  return (
    <>
      <NavBar />
      <Home />
      <Lei />
      <Differences />
      <DFD />
      <PCA />
      <Footer />
    </>
  )
}
