import React from "react";
import Image from "next/image";

export default function NavBar() {
    return (
        <section>
            <nav id='nav' className='nav md:px-16 px-10 py-3 flex justify-between items-center w-full z-50 absolute'>
                <Image src='/sublogo-pg.png' width={60} height={60} alt='Logo A&M' />
                <div className="hidden md:flex flex-row items-center">
                    <div className="flex md:flex-row flex-col">
                        <div >
                            <label htmlFor="user" className="text-white mr-3">Usuário</label>
                            <input type="text" name="user" id="user-input" placeholder="digite seu email" className="w-48 h-12 bg-transparent border rounded-md px-3 text-white" />
                        </div>
                        <div >
                            <label htmlFor="user" className="text-white mx-3">Senha</label>
                            <input type="password" name="password" id="password-input" placeholder="digite sua senha" className="w-48 h-12 mr-5 bg-transparent border rounded-md px-3 text-white" />
                        </div>
                    </div>
                    <button className='gradient-button flex flex-row'>Login
                        <svg className="w-6 h-6 text-white dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                        </svg>
                    </button>
                </div>
            </nav>
        </section>
    )
}