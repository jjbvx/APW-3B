import "./login.css"


export default function Home() {
    return (
      <div>
        Soy Login
        <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" placeholder="Ingrese su correo electrónico" />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" placeholder="Ingrese su contraseña" />
      </div>
      <button type="submit">Iniciar sesión</button>
      </div>
    )
  }