import { searchKnowledge } from "@/lib/search";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body.message) {
      return Response.json(
        {
          answer: "Please enter a question."
        },
        {
          status: 400
        }
      );
    }

    const answer = searchKnowledge(body.message);

    return Response.json({
      answer:
        answer ||
        "I couldn't find information about that. Try asking about skills, projects, education, Kafka, or PySpark."
    });

  } catch (error) {
    console.error("Chat API Error:", error);

    return Response.json(
      {
        answer:
          "Something went wrong. Please try again later."
      },
      {
        status: 500
      }
    );
  }
}