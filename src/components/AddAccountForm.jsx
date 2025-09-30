import { useState } from "react";
import { useCuentaStore } from "../store/useCuentaStore";

export default function AddAccountForm() {
  const { agregarCuenta } = useCuentaStore();
  const [nombre, setNombre] = useState("");
  const [monto, setMonto] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre.trim() || !monto) return; // validación simple , significa si

    const cuenta = {
      nombre: nombre.trim(),
      monto: Number(monto),
      estado: "pending",
      createdAt: new Date().toISOString(), // toISOString() para guardar fecha en formato ISO
    };

    await agregarCuenta(cuenta);
    setNombre("");
    setMonto("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <input
        placeholder="Name"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ padding: 8, flex: 1 }}
      />
      <input
        placeholder="Amount"
        value={monto}
        onChange={(e) => setMonto(e.target.value)}
        type="number"
        style={{ padding: 8, width: 120 }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Add
      </button>
    </form>
  );
}
