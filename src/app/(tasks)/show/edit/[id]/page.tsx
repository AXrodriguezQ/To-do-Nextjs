"use client"

import { Params } from '@/interfaces/params.interface';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const page = ( { params }: Params ) => {

    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/tasks/${params.id}`);
        
                if (!response.data) window.location.href = 'http://localhost:3000/'; 
                    
                setTitle(response.data.title);
                setDescription(response.data.description);
        
            } catch (error) {
                window.location.href = 'http://localhost:3000/';
            }
        };
        getData();
    },[]);

    const editTask = async ( id: number, event: React.FormEvent ) => {
        event.preventDefault();
        try {
            const newTask = { title, description };

            const response = await axios.put(`http://localhost:3000/api/tasks/${id}`, newTask);

            if (response.data) window.location.href = 'http://localhost:3000/show';
                
        } catch (error) {
            console.error('Error creating task:', error);
        }
    }

  return (
    <article className="p-8 flex justify-start items-center flex-col select-none">
        <section className="flex flex-col gap-4 border-b-2 border-blue-300">
            <h4 className="font-bold text-5xl">Aqui puedes editar tus tareas!</h4>
        </section>
        <section className="w-2/4 flex justify-center items-center mt-8 bg-slate-100 rounded-2xl">
            <form onSubmit={(e) => editTask(params.id, e)} className="w-11/12 flex flex-col gap-4 p-4 my-2">
            <input
                name="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-gray-300 p-2 py-3 w-full rounded-md focus:outline-none focus:border-blue-300"
                placeholder="Nombre de la tarea"
            />
            <textarea
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-2 border-gray-300 p-2 py-3 w-full rounded-md focus:outline-none focus:border-blue-300"
                placeholder="Descripción de la tarea"
            />
            <button type="submit" className="mt-4 bg-blue-300 hover:bg-blue-500 duration-300 text-white text-xl font-semibold p-2 py-3 rounded-md w-full">
                Editar tarea
            </button>
            </form>
        </section>
    </article>
  )
}

export default page