import React from "react"
import { Route, BrowserRouter, Switch } from "react-router-dom"

import { default as App } from "../App"
import { default as Table } from "../Table"
import { default as DashboardPage } from "../DashboardPage"

export class RootRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <App>
            <Route exact path="/" component={DashboardPage} />
            <Route path="/table" component={Table} />
          </App>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default RootRouter
