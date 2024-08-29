import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
    try {
        return NextResponse.json("Hello world!")
    } catch (err) {
        throw new Error(`Error: ${err}`);
    }
}
