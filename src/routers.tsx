import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IllegalElectromechanicalWell from './container/IllegalElectromechanicalWell'
import App from './container/App'
const Index = () => (
  <Router basename="/">
    {/* <div style={{ height: "100%" }}> */}
    {/* 预留菜单栏 */}
    <Switch>
      <Route exact path="/" component={IllegalElectromechanicalWellComp} />
      <Route path="/app" component={App} />
      <Route component={NoMatch} />
    </Switch>
    {/* </div> */}
  </Router>
)


const IllegalElectromechanicalWellComp = ({ match }) => {
  return (
    <IllegalElectromechanicalWell />
  )
}
const NoMatch = ({ match }) => {
  return (
    <h2 style={{textAlign: 'center'}}>4000000000000000000000.............4...........<br />请选择正确的路由。。。</h2>
  )
}

export default Index