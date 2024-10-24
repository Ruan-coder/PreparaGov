import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <section className="relative w-full h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="overlay"></div>
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src="/bg-preparagov.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="z-40 grid md:grid-cols-2 grid-cols-1 items-center justify-between w-full">
                <div className="grid grid-cols-1 gap-5 text-white px-16">
                    <h1 className="md:text-5xl text-4xl">
                        Automatize o seu planejamento de licitações com o <b className="text-orange-500">PreparaGov</b>
                    </h1>
                    <div >
                        <p >Conheça nossas estrátegias inovadoras para criação de documentos automaticamente. Solicite uma demonstração hoje
                            e eleve o nível da sua licitação
                        </p>
                        <div>
                            <button className="gradient-button my-8">Demonstração</button>
                            <button className="px-4 py-3 ml-3 border rounded-lg hover:bg-white hover:text-black transition duration-300 ">Já sou cliente</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <iframe src="https://www.youtube.com/embed/watch?v=iWD9-5olemw&t=1s" frameborder="0" className="video"></iframe>
                </div>
            </div>


        </section>
    )
}