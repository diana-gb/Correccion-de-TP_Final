import React from "react"
import PantallaDeMensajes from "./Pantallas/PantallaDeMensajes/PantallaDeMensajes"
import { Route, Routes } from "react-router"
import PantallaPrincipal from "./Pantallas/PantallaPrincipal/PantallaPrincipal"
import ProveedorDeContextoLista from "./Contexto/ContextoListaDeContactos"
import ProveedorContextoDeContacto from './Contexto/ContextoDeContacto'
function App() {



  return (
        <div>
          <ProveedorDeContextoLista>
          <Routes>
            <Route 
            path="/" 
            element={<PantallaPrincipal/>}
            />
            <Route
            element={<ProveedorContextoDeContacto/>}
            >
              <Route 
              path="/contacto/:id_contacto" 
              element={<PantallaDeMensajes/>}
              />
            </Route>
          </Routes>
          </ProveedorDeContextoLista>
          
        </div>
  )
}

export default App
