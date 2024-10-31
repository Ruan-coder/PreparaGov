import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <section className="p-16 border">
                <div className="flex md:flex-row flex-col justify-between">
                    <div className="">
                        <Image src={'/aem logo full.png'} width={150} height={100} alt="logo" />
                        <div className="my-10">
                            <h6 className="font-bold py-3">Endereço</h6>
                            <p>Rua Francisco Neiva, 107 - Apto 01, Centro, Medina-MG</p>
                        </div>
                        <div>
                            <h6 className="font-bold py-3">Contato</h6>
                            <p>(33) 3753-2822</p>
                        </div>
                        <div className="flex flex-row gap-3 my-10">
                            <a href="https://www.youtube.com/@TVAMSolucoesPublicas"><Image src={'/youtube.png'} width={50} height={30} alt="youtube" /></a>
                            <a href="https://www.instagram.com/aemsolucoespublicas/" className="flex items-center"><Image src={'/instagram.png'} width={30} height={30} alt="instagram" /></a>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[1px] bg-zinc-600 my-10"></div>
                <div className="text-sm flex flex-row justify-between ">
                    <div >&copy; <a href="https://www.linkedin.com/in/ruancostaarag%C3%A3obb60581a1/" target="blank">2024 Ruan Costa Aragão</a></div>
                    <div className="md:block hidden">
                        <a href="">Politica de privacidade</a>
                        <a href="" className="mx-5">Termos de serviços</a>
                    </div>
                </div>
            </section>
        </>
    );
}
