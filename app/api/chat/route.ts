import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages, model, temperature, max_tokens, top_p } = await req.json();

  try {
    const response = await openai.chat.completions.create({
      model: model || 'gpt-3.5-turbo',
      messages: messages.map((message: any) => ({
        content: message.content,
        role: message.role,
      })),
      temperature: temperature || 0.7,
      max_tokens: max_tokens || 800,
      top_p: top_p || 1,
    });

    return new Response(JSON.stringify(response.choices[0].message), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: 'An error occurred' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

