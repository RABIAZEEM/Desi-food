import React from 'react'


function Formulario() {
  return (
    // <div>fomulario</div>
    <form>
        <lable classNme= 'login'>
            name:
            <input type="name" nombre="name"/>
        </lable>
        email:
        <input type="email" adress="email"/>
        password:
        <input type="password" access="password"/>
    </form>
  )
}

export default Formulario;