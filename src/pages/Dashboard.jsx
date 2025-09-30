import { useEffect } from "react";
import AccountItem from "../components/AccountItem";
import AddAccountForm from "../components/AddAccountForm";
import { useCuentaStore } from "../store/useCuentaStore";

export default function Dashboard() {
  const { cuentas, fetchCuentas, loading, error } = useCuentaStore(); // extraigo lo que necesito del store

  useEffect(() => {
    let isMounted = true; // bandera para evitar actualizar si el componente se desmonta

    const cargarCuentas = async () => {
      try {
        if (typeof fetchCuentas === "function") {
          await fetchCuentas();
        }
      } catch (e) {
        console.error("Error loading bills:", e);
      }
    };

    if (isMounted) {
      cargarCuentas();
    }

    return () => {
      isMounted = false; // cleanup: evita memory leaks
    };
  }, [fetchCuentas]);

  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 16 }}>
      <h1>Bill tracker</h1>

      <section style={{ margin: "20px 0" }}>
        <AddAccountForm />
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>List of bills</h2>

        {loading && <div>Loading...</div>}
        {error && <div style={{ color: "red" }}>Error: {error}</div>}

        {!loading && cuentas.length === 0 && <div>No bills found.</div>}

        <ul style={{ listStyle: "none", padding: 0 }}>
          {cuentas.map((c) => (
            <li key={c.id} style={{ marginBottom: 8 }}>
              <AccountItem cuenta={c} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
