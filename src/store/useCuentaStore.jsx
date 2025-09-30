import { create } from "zustand";
import * as api from "../api";

export const useCuentaStore = create((set) => ({
  cuentas: [],
  loading: false,

  fetchCuentas: async () => {
    set({ loading: true });
    const data = await api.getCuentas();
    set({ cuentas: data, loading: false });
  },

  agregarCuenta: async (cuenta) => {
    set({ loading: true });
    const nueva = await api.agregarCuenta(cuenta);
    set((state) => ({ cuentas: [...state.cuentas, nueva], loading: false }));
  },

  cambiarEstado: async (id, nuevoEstado) => {
    set({ loading: true });
    const actualizado = await api.cambiarEstado(id, nuevoEstado);
    set((state) => ({
      cuentas: state.cuentas.map((c) => (c.id === id ? actualizado : c)),
      loading: false,
    }));
  },

  eliminarCuenta: async (id) => {
    set({ loading: true });
    await api.eliminarCuenta(id);
    set((state) => ({
      cuentas: state.cuentas.filter((c) => c.id !== id),
      loading: false,
    }));
  },
}));
