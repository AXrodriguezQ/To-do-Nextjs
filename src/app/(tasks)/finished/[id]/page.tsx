"use client"

import { dataTask } from '@/interfaces/dataTask.interface'
import { Params } from '@/interfaces/params.interface'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = ( { params }: Params ) => {

    const [task, setTask] = useState<dataTask>();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/tasks/${params.id}`);
        
                if (!response.data) window.location.href = 'http://localhost:3000/'; 
                    
                setTask(response.data);
        
            } catch (error) {
                window.location.href = 'http://localhost:3000/';
            }
        };
        getData();
    },[]);

  return (
    <article className="p-8 flex justify-start items-start flex-col select-none">
        <section className="flex flex-col gap-4 border-b-2 border-blue-300">
            <h4 className="font-bold text-5xl">Aqui tienes la informacion de la tarea</h4>
            <p className="font-semibold text-xl mb-2">Como esta tarea ya la finalizaste entonces no la puedes eliminar o editar para llevar un seguimiento mas completo.</p>
        </section>
        {
            task ? 
            <section key={task.id} className="py-8 flex flex-col gap-4">
                <h4 className="text-4xl font-semibold">{task.title}</h4>
                <p className="text-2xl">{task.description}</p>
                <button className="w-60 flex justify-center items-center rounded-xl bg-green-500 duration-100 p-4 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="font-semibold text-2xl">Finalizada</p>
                </button>
            </section>
            : <h4 className="text-4xl font-semibold mt-12">Cargando informacion...</h4>
        }
    </article>
  )
}

export default page