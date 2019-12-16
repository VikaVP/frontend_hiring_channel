import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Engineers from '../pages/Engineers'
import DetailEngineers from '../pages/DetailEngineers'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import MyProfile from '../pages/MyProfile'
function Main() {
    return (
        <Switch>
            <Route exact path='/engineers' component={Engineers} />
            <Route path='/engineers/:id' component={DetailEngineers} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/myprofile' component={MyProfile} />
        </Switch>
    )
}
export default Main