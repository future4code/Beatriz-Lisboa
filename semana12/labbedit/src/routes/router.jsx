import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import FeedPage from '../pages/FeedPage/FeedPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import PostPage from '../pages/PostPage/PostPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route>
                    <FeedPage></FeedPage>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router