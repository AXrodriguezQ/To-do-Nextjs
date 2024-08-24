import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Task } from "@/interfaces/task.interface";

export async function GET(): Promise<NextResponse> {
    try {
        const tasks: Task[] = await prisma.task.findMany()
        return NextResponse.json(tasks)
    } catch (err) {
        throw new Error(`Error: ${err}`);
    }
}

export async function POST( req: Request ): Promise<NextResponse> {
    try {
        const { title, description }: Task = await req.json()

        const newTask: Task = await prisma.task.create({
            data: {
                title,
                description
            }
        })
    
        return NextResponse.json(newTask)
    } catch (err) {
        throw new Error(`Error: ${err}`);
    }
}
