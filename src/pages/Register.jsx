export default function Register() {
    return (
        <>
            <h1 className="text-4xl font-bold mb-6 font-oswald">Cadastre-se</h1>

            <form className="flex flex-col gap-4">
                <input type="email" placeholder="E-mail" className="border rounded-2xl px-4 py-6" />

                <input type="password" placeholder="Senha" className="border rounded-2xl px-4 py-6" />

                <input type="password" placeholder="Confimar Senha" className="border rounded-2xl px-4 py-6" />

                <button type="submit" className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500">Cadastra-se</button>
            </form>
        </>
    )
}