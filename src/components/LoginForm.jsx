import React, { useState } from "react";

const LoginForm = ({ modalLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setShowError(true);
    } else {
      modalLogin();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 text-white rounded shadow-md">
      <h1 className="text-2xl text-center pb-10">Login</h1>
      {showError && (
        <p className="text-red-500 mb-4">
          Por favor, ingresa el correo electrónico y la contraseña.
        </p>
      )}
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1 font-medium ">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => setShowError(false)} // Ocultar el mensaje de error al hacer clic fuera del campo
          className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1 font-medium">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => setShowError(false)} // Ocultar el mensaje de error al hacer clic fuera del campo
          className="w-full px-3 py-2 border border-gray-300 rounded bg-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white font-bold bg-blue-500 rounded hover:bg-blue-600"
      >
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
