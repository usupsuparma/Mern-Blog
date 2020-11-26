import React from 'react'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import CreateBlog from '../CreateBlog'
import DetailBlog from '../DetailBlog'
import Home from '../Home'
import {Footer, Header} from "../../components/molecules";
import './mainApp.scss';

const MainApp = () => {
		return (
				<div className={'main-app-wrapper'}>
						<Header/>
						<div className={'contain-wrapper'}>
								<Router>
										<Switch>
												<Router path="/create-blog">
														<CreateBlog/>
												</Router>
												<Router path="/detail-blog">
														<DetailBlog/>
												</Router>
												<Router path="/">
														<Home/>
												</Router>
										</Switch>
								</Router>
						</div>
						<Footer/>

				</div>
		)
}

export default MainApp
