import { Params } from "@/interfaces/params.interface";
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { Task } from "@/interfaces/task.interface";
import { Prisma } from "@prisma/client";

export async function GET( req: Request, { params }: Params ): Promise<NextResponse> {
    try {
        const task: Task | null = await prisma.task.findFirst({
            where: {
                id: Number(params.id)
            }
        })

        if (!task) return NextResponse.json({ message: 'Task not found' }, { status: 404})

        return NextResponse.json(task)
    } catch (err) {
        throw new Error(`Error: ${err}`);
    }
}

export async function PUT( req: Request, { params }: Params ): Promise<NextResponse | undefined> {
    try {

        const { title, description, completed }: Task = await req.json()

        const updatedTask: Task | null = await prisma.task.update({
            where: {
                id: Number(params.id)
            },
            data: {
                title,
                description,
                completed,
                updatedAt: new Date()
            }
        })

        if (!updatedTask) return NextResponse.json({ message: 'Task not found' }, { status: 404})

        return NextResponse.json(updatedTask)
    } catch (err) {
        if ( err instanceof Prisma.PrismaClientKnownRequestError ) {

            if ( err.code === 'P2025' ) {
                return NextResponse.json(
                    { message: 'Task not found' }, 
                    { status: 404}
                )
            }

            return NextResponse.json(
                { message: 'Database error', data: err.message }, 
                { status: 500 }
            )
        }
    }
}

export async function DELETE( req: Request, { params }: Params ): Promise<NextResponse | undefined> {
    try {
        const deletedTask: Task | null = await prisma.task.delete({
            where: {
                id: Number(params.id)
            }
        })

        if (!deletedTask) return NextResponse.json({ message: 'Task not found' }, { status: 404})

        return NextResponse.json({ message: 'Task deleted', data: deletedTask })
    } catch (err) {
        if ( err instanceof Prisma.PrismaClientKnownRequestError ) {

            if ( err.code === 'P2025' ) {
                return NextResponse.json(
                    { message: 'Task not found' }, 
                    { status: 404}
                )
            }

            return NextResponse.json(
                { message: 'Database error', data: err.message }, 
                { status: 500 }
            )
        }
    }
}
