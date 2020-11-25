import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'

const MainApp = () => {
    return (
        <div>
            <p>Header</p>
            <Router>
                <Switch>
                    <Router path="/create-blog">
                        <CreateBlog />
                    </Router>
                    <Router path="/detail-blog">
                        <DetailBlog />
                    </Router>
                    <Router path="/">
                        <Home />
                    </Router>
                </Switch>
            </Router>
            <p>Footer</p>
        </div>
    )
}

export default MainApp
