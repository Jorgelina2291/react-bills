import { useCuentaStore } from "../store/useCuentaStore";

export default function AccountItem({ cuenta }) {
  const { cambiarEstado, eliminarCuenta } = useCuentaStore();

  const handleToggle = async () => {
    // si tu api cambiarEstado espera (id, nuevoEstado) usa esa firma
    // aquí le pasamos el nuevo estado calculado
    const nuevo = cuenta.estado === "paid" ? "pending" : "paid";
    await cambiarEstado(cuenta.id, nuevo);
  };

  const handleDelete = async () => {
    if (!confirm(`Borrar cuenta de ${cuenta.nombre}?`)) return;
    await eliminarCuenta(cuenta.id);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        border: "1px solid #ddd",
        borderRadius: 6,
      }}
    >
      <div>
        <div style={{ fontWeight: 600 }}>{cuenta.nombre}</div>
        <div style={{ fontSize: 24, color: "#3db353ff" }}>
          ${cuenta.monto} · <small style={{ color: "#666" }}>{cuenta.estado}</small>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={handleToggle} style={{ padding: "6px 10px" }}>
          {cuenta.estado === "paid" ? "Mark as pending" : "Mark as paid"}
        </button>
        <button
          onClick={handleDelete}
          style={{ padding: "6px 10px", background: "rgba(130, 35, 35, 1)", border: "1px solid #f88" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
