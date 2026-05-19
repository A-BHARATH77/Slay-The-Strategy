import { NextResponse } from 'next/server';

const RESEND_API_KEY = 're_USLHEcm5_6g4vpzLzqFxxisKCFmqLs8QW';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['dipani@slaywithstrategy.com'],
        subject: `New message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`,
      }),
    });

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json(data);
    } else {
      const errorData = await res.json();
      return NextResponse.json({ error: errorData }, { status: res.status });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
