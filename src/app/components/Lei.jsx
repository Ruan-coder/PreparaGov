import React from "react";
import Image from "next/image";

export default function Lei() {
    return (
        <section className="grid md:grid-cols-2 grid-cols-1 items-center justify-center md:px-16 md:py-20 px-5 py-10 bg-zinc-50">
            <Image src={'/diagrama.png'} width={500} height={500} alt="diagrama" unoptimized />
            <div className="shadow-lg p-10 bg-white rounded-md">
                <h2 className="text-5xl font-bold">Sobre o PreparaGov</h2>
                <p className="pt-10 pb-5">
                    O <b className="text-orange-500">PreparaGov</b> é um sistema inovador desenvolvido para simplificar
                    e otimizar o procedimento interno de um processo de licitações.
                    Com foco na integração de setores, geração automatizada de documentos
                    e conformidade com a <b className="text-orange-500">NLLC 14.133/2021</b>, o PreparaGov oferece maior eficiência,
                    agilidade e transparência para a gestão pública. Seja para órgãos municipais,
                    estaduais ou federais o PreparaGov é a escolha certa para aprimorar os
                    procedimentos licitatórios e garantir uma administração pública ainda mais
                    eficiente e confiável.

                </p>
                <h3 className="text-xl">Documentos que o <b className="text-orange-500">PreparaGov</b> automatiza:</h3>
                <ul className="list-disc list-inside text-xl">
                    <li>DFD</li>
                    <li>PCA</li>
                    <li>ETP</li>
                    <li>Termo de referência</li>
                </ul>
                <a href=""><button className="gradient-button mt-5">Demonstração</button></a>
            </div>
        </section>
    )
}