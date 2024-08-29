import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Task } from "@/interfaces/task.interface";

export async function GET(): Promise<NextResponse> {
    try {
        const tasks: Task[] = await prisma.task.findMany({ where: { completed: false } })

        if ( tasks.length == 0 ) return NextResponse.json({ message: "Ups.. No hay tareas disponibles" }) 
            
        return NextResponse.json(tasks)
    } catch (err) {
        throw new Error(`Error: ${err}`);
    }
}
