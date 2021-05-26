import React from 'react'
import { Switch, Route, BrowserRouter,Link } from 'react-router-dom'
import About from '../../containers/about'
import Contact from '../../containers/contact'
import Home from '../../containers/home'

const routes = [
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/',
      component: Home,
      exact: true,
    },
  ]

function AppRouter() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
            {routes.map((routeItem, index) => {
                const {
                component: Component,
                path,
                exact,
                ...rest
                } = routeItem
                // TODO Add Private routeRouteCustom = isAuthRoute ? PrivateRoute : Route
                const RouteCustom = Route
                return (
                <RouteCustom key={index} path={path} exact={exact}>
                  <Component {...rest} />
                </RouteCustom>
                )
            })}
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
