import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Header from './Header'
import Radio from "./Radio"
import "./App.css"

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Header />
        <Radio />
      </ChakraProvider>
    </div>
  )
}

export default App
