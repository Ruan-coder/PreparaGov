import React from "react";
import Image from "next/image";

export default function NavBar() {
    return (
        <section>
            <nav id='nav' className='nav md:px-16 px-10 py-3 flex justify-between items-center w-full z-50 fixed'>
                <Image src='/sublogo-pg.png' width={60} height={60} alt='Logo A&M' />
                <button className='gradient-button flex flex-row'>Login
                    <svg className="w-6 h-6 text-white dark:text-white ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                    </svg>
                </button>
            </nav>
        </section>
    )
}