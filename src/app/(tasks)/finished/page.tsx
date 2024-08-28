"use client"

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = () => {

    interface dataTask {
        id: number;
        title: string;
        description: string;
    }

    const [data, setData] = useState<dataTask[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get('http://localhost:3000/api/tasks/finished');
            setData(response.data);
        };
        getData();
    },[])

  return (
    <article className='w-full flex justify-center items-start flex-col p-8 gap-4'>
        <h3 className="font-bold text-5xl">Tus tareas ya terminadas</h3>
        <p className='font-semibold text-xl'>En esta sección puedes encontrar todas tus tareas que ya diste por terminadas.</p>
        <section className="flex justify-start items-center flex-wrap gap-4">
                {
                    data.length ? 
                    data.map((task) => (
                        <div key={task.id} className="w-60 h-60 flex justify-evenly items-start p-4 flex-col bg-slate-100 rounded-xl hover:bg-slate-50 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1 select-none hover:cursor-pointer duration-300">
                            <h4 className="text-xl font-semibold">{task.title}</h4>
                            <p className="text-base">{task.description}</p>
                            <div className="w-4/5 mt-6 flex justify-start items-center gap-4">
                                <button className="flex justify-center items-center rounded-xl bg-green-500 duration-100 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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