// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { message, guru } = await req.json();

//   try {
//     const pythonRes = await fetch("http://localhost:8000/ask", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         question: message,
//         language: "en",
//       }),
//     });

//     const data = await pythonRes.json();

//     return NextResponse.json({
//       reply: data.answer || "I could not find guidance for this right now.",
//       source: data.source || "",
//     });

//   } catch (err) {
//     return NextResponse.json(
//       { reply: "Backend error. Please try again later." },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";

const BACKEND_URL = process.env.GURU_API_URL || "http://localhost:8000";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { reply: "Please ask a question." },
        { status: 400 }
      );
    }

    const pythonRes = await fetch(`${BACKEND_URL}/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: message,
      }),
    });

    if (!pythonRes.ok) {
      throw new Error("FastAPI backend error");
    }

    const data = await pythonRes.json();

    return NextResponse.json({
      reply: data.answer ?? "I could not find guidance for this right now.",
      sources: data.sources ?? [],
      disclaimer: data.disclaimer ?? "",
      is_safe: data.is_safe ?? true,
    });

  } catch (err) {
    console.error("Guru API error:", err);

    return NextResponse.json(
      { reply: "The Guru is silent right now. Please try again later." },
      { status: 500 }
    );
  }
}
