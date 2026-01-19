import connectDB from "@/lib/mongodb";
import Survey from "@/models/survey";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

//Creating the route between the DB and the form models as well as the code for adding the data in to the DB
export async function POST(req) {
  try {
    const { fullname, age, email, education, department, jobtitle, jobtype } =
      await req.json();
    console.log("1Incoming data", { fullname, email, phone });

    await connectDB();

    const result = await Survey.create({ fullname, email, phone });
    console.log("✅ Survey created:", result);

    return NextResponse.json(
      {
        msg: ["Successfully Sent!"],
        success: true,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("Server error:", error);

    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList }, { status: 400 });
    } else {
      return NextResponse.json(
        { msg: [error.message || "Unknown error occured."] },
        { status: 500 }
      );
    } // To verify is there's an error from the Mongoose validation
  }
}

export async function GET() {
  try {
    await connectDB();
    const Users = await Survey.find(); // Fetch all surveys, sorted by creation date (newest first)

    return NextResponse.json({ success: true, data: Users }, { status: 200 });
  } catch (error) {
    console.log("Server error:", error);
    return NextResponse.json(
      { success: false, msg: [error.message || "Unknown error occured."] },
      { status: 500 }
    );
  }
}
