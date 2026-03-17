import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-indigo-900 via-purple-800 to-fuchsia-600">


            <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_60px_rgba(168,85,247,0.25)] w-full max-w-md border border-white/10">



                <Outlet />

            </div>

        </div>
    )
}