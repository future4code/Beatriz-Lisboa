import React from 'react'
import {Button} from "@material-ui/core"
import { ScreenContainer } from './styled'

const LoginPage = () => {
    return (
        <ScreenContainer>
            <h1>LoginPage</h1>
            <Button variant="contained" color="primary">
              Entrar
            </Button>
            <h1>Cadastro</h1>
            <Button variant="contained" color="primary">
            Cadastrar</Button>
        </ScreenContainer>
    )
}

export default LoginPage