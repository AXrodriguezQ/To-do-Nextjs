"use client"

import { completeTask } from '@/helpers/completeTask';
import { deleteTask } from '@/helpers/deletedTask';
import { dataTask } from '@/interfaces/dataTask.interface'
import { Params } from '@/interfaces/params.interface'
import axios from 'axios';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = ( { params }: Params ) => {

    const [task, setTask] = useState<dataTask>();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/tasks/${params.id}`);
        
                if (!response.data) redirect('/')
                    
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
            <p className="font-semibold text-xl mb-2">Aqui tambien puedes eliminar, editar o completar tu tarea.</p>
        </section>
        {
            task ? 
            <section key={task.id} className="py-8 flex flex-col gap-4">
                <h4 className="text-4xl font-semibold">{task.title}</h4>
                <p className="text-2xl">{task.description}</p>
                <div className="flex justify-center items-center gap-4">
                    <button onClick={() => completeTask(task.id)} className="w-60 flex justify-center items-center rounded-xl bg-green-500 hover:bg-green-600 duration-200 p-4 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="font-semibold text-2xl">Finalizar</p>
                    </button>
                    <button onClick={() => window.location.href = `http://localhost:3000/show/edit/${task.id}`} className="w-60 flex justify-center items-center rounded-xl bg-yellow-500 hover:bg-yellow-600 duration-200 p-4 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                        <p className="font-semibold text-2xl">Editar</p>
                    </button>
                    <button onClick={() => deleteTask(task.id)} className="w-60 flex justify-center items-center rounded-xl bg-red-500 hover:bg-red-600 duration-200 p-4 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                        <p className="font-semibold text-2xl">Elimimar</p>
                    </button>
                </div>
            </section>
            : <h4 className="text-4xl font-semibold mt-12">Cargando informacion...</h4>
        }
    </article>
  )
}

export default page