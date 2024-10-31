import React from "react";

export default function DFD() {
    return (
        <section className="bg-zinc-50">
            <h1 className="text-5xl py-20 text-center text-orange-500 font-bold">Usando o PreparaGov</h1>
            <div id="dfd" className="px-16 ">
                <h2 className="font-bold text-4xl">Passo 1: Criando um DFD</h2>
                <div className="lg:py-16 flex lg:flex-row flex-col items-center">
                    <iframe src="https://www.youtube.com/embed/M8IbeZ5n0u0" frameborder="0" className="lg:w-1/2 lg:h-[30vw] w-full h-96 my-10"></iframe>
                    <div className="lg:w-1/2 px-10">
                        <p>A <b className="font-bold text-orange-500">Nova Lei de Licitações e Contratos</b> reformulou o processo de requisição de produtos e serviços pelos
                            servidores públicos. Agora, para fazer uma requisição, o servidor deve elaborar um documento chamado
                            DFD, que deve incluir as seguintes informações essenciais:
                        </p>
                        <ul className="list-disc list-inside my-5">
                            <li className="font-bold">Descrição da demanda</li>
                            <li className="font-bold">Justificativa da contratação</li>
                            <li className="font-bold">Descrição sucinta do objeto</li>
                            <li className="font-bold">Data da provavel contratação</li>
                            <li className="font-bold">Grau de prioridade</li>
                        </ul>
                        <p className="py-3">Além disso o <b className="text-orange">art 19</b> da <b className="text-orange-500">Lei 14.133/21</b> diz:</p>
                        <p><b className="font-bold">Art. 19.</b> Os órgãos da Administração com competências regulamentares relativas às atividades de administração de
                            materiais, de obras e serviços e de licitações e contratos deverão:[...]</p>
                        <p className="p-5"><b>II -</b> criar catálogo eletrônico de padronização de compras, serviços e obras, admitida a adoção do catálogo do Poder Executivo federal por
                            todos os entes federativos; [...]</p>
                    </div>
                </div>
                <div className="lg:py-16 flex lg:flex-row flex-col items-center">
                    <iframe src="https://www.youtube.com/embed/idegDcVQ0No" frameborder="0" className="lg:w-1/2 lg:h-[30vw] w-full h-96 my-10"></iframe>
                    <div className="lg:w-1/2 px-10">
                        <p>Se o seu município possui um catálogo padronizado de itens, nós o inserimos no sistema gratuitamente para facilitar o processo. 
                            Além disso, oferecemos a possibilidade de acessar catálogos padronizados do governo federal, como o CATMAT e o CATSER, entre outros. 
                            Com isso, seu município pode padronizar suas demandas, melhorando a organização e agilizando a elaboração de documentos e relatórios. 
                            O uso desses catálogos centralizados garante maior uniformidade nas compras e contratações, simplificando o processo de aquisição de 
                            bens e serviços.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}