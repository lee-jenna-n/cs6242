import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import Landing from "./Landing"
import Radio from "./Radio"
import "./App.css"

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
          </Switch>
          <Switch>
            <Route path="/radio">
              <Radio />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </div>
  )
}

export default App
