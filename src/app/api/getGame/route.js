import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import Game from "../../../../models/game";

export async function POST(req) {
    try {
        // Connect to MongoDB
        await connectMongoDB();

        
        const games = await Game.find();
        

        return NextResponse.json(games, { status: 200 });

    } catch (error) {
        console.error("Error occurred while fetching data from MongoDB:", error);
        return NextResponse.json({ message: "An error occurred while fetching data from MongoDB." }, { status: 500 });
    }
}
