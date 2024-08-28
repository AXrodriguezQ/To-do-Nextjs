"use client"

import { dataTask } from '@/interfaces/dataTask.interface';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {

    const truncateText = (text: string, maxLength: number): string => {
        if (text.length > maxLength) return text.slice(0, maxLength) + "...";
        return text;
    };

    const [data, setData] = useState<dataTask[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('http://localhost:3000/api/tasks/pending');
            setData(response.data);
        };
        getData();
    },[])

    const deleteTask = async ( id: number ): Promise<void> => {
        try {

            const userResponse = confirm("¿Estás seguro de que deseas continuar?");

            if (userResponse) {
                await axios.delete(`http://localhost:3000/api/tasks/${id}`)
                setData(data.filter(task => task.id!== id));
            };

            return

        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }

  return (
    <article className='w-full flex justify-center items-start flex-col p-8 gap-4'>
        <h3 className="font-bold text-5xl">Tus tareas</h3>
        <p className='font-semibold text-xl'>En esta sección puedes encontrar todas tus tareas.</p>
        <section className="flex justify-start items-center flex-wrap gap-4">
                {
                    data.length ? 
                    data.map((task) => (
                        <div key={task.id} className="w-60 h-60 flex justify-evenly items-start p-4 flex-col bg-slate-100 rounded-xl hover:bg-slate-50 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1 select-none hover:cursor-pointer duration-300">
                            <h4 className="text-xl font-semibold">{task.title}</h4>
                            <p className="text-base">{truncateText(task.description, 93)}</p>
                            <div className="w-4/5 mt-6 flex justify-start items-center gap-4">
                                <button className="flex justify-center items-center rounded-xl bg-green-300 hover:bg-green-500 duration-100 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </button>
                                <button className="flex justify-center items-center rounded-xl bg-yellow-300 hover:bg-yellow-500 duration-100 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>
                                </button>
                                <button onClick={() => deleteTask(task.id)} className="flex justify-center items-center rounded-xl bg-red-300 hover:bg-red-500 duration-100 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ) )
                    : <h4 className="text-4xl font-semibold mt-12">Cargando informacion...</h4>
                }
        </section>
    </article>
  )
}

export default page