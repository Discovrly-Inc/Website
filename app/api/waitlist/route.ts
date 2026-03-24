import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    // TODO: Replace with real email capture (e.g., save to DB, send to Loops/Mailchimp, etc.)
    console.log('[Waitlist] New signup:', email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Waitlist] Error:', error);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
