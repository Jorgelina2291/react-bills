const API_URL = "http://localhost:3001/cuentas";

// Listar todas las cuentas
export const getCuentas = async () => {
  const res = await fetch(API_URL);
  return res.json(); // directamente devuelve JSON
};

// Agregar una cuenta
export const agregarCuenta = async (cuenta) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cuenta),
  });
  return res.json();
};

// Cambiar estado de una cuenta
export const cambiarEstado = async (id, nuevoEstado) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ estado: nuevoEstado }),
  });
  return res.json();
};

// Eliminar cuenta
export const eliminarCuenta = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  return true; // simplificado
};
