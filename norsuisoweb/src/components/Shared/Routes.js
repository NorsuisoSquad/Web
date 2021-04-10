import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import Contacto from '../Screens/Contacto'
import Inicio from '../Screens/Inicio'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/contacto" component={Contacto} />
            </Switch>
        </div>
    )
}

export default Routes
