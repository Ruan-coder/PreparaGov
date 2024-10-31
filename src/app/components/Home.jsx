import React from "react";

export default function Home() {
    return (
        <section className="relative w-full h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="overlay"></div>
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src="/bg-preparagov.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="z-40 lg:w-1/2 md:w-2/3 w-full grid grid-cols-1 items-center justify-between">

                <div className="md:hidden flex flex-col px-5">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <label htmlFor="user" className="text-white">Usuário</label>
                            <input type="text" name="user" id="user-input" placeholder="digite seu email" className=" h-12 bg-transparent border rounded-md px-3 text-white" />
                        </div>
                        <div className="flex flex-col py-5">
                            <label htmlFor="user" className="text-white">Senha</label>
                            <input type="password" name="password" id="password-input" placeholder="digite sua senha" className="h-12 bg-transparent border rounded-md px-3 text-white" />
                        </div>
                    </div>
                    <button className='gradient-button flex flex-row'>Login
                        <svg className="w-6 h-6 text-white dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-5 text-white md:px-16 px-5 mt-10">
                    <h1 className="md:text-5xl text-4xl">
                        Automatize o seu planejamento de licitações com o <b className="text-orange-500">PreparaGov</b>
                    </h1>
                    <div >
                        <p >Conheça nossas estrátegias inovadoras para criação de documentos automaticamente. Solicite uma demonstração hoje
                            e eleve o nível da sua licitação.
                        </p>
                        <div>
                            <button className="gradient-button my-8">Demonstração</button>
                        </div>
                    </div>
                </div>

            </div>


        </section>
    )
}