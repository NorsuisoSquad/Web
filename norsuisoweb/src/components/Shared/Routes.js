import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'
import Contacto from '../Screens/Contacto'
import Inicio from '../Screens/Inicio'
import Miembros from '../Screens/Miembros'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/contacto" component={Contacto} />
                <Route exact path="/miembros" component={Miembros} />
            </Switch>
        </div>
    )
}

export default Routes
