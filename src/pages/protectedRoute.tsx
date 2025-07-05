import { Outlet, Navigate } from "react-router-dom"

export const ProtectedRoute =() => {
    const token = localStorage.getItem("lokalKey")
    return token ? < Outlet /> : <Navigate to= "/login" replace />
}