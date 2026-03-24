import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = schema.parse(body);

    const baseId = 'appGQHLN08Z3uECdv';
    const tableId = 'tblyh492n72veMeDx';
    const token = process.env.AIRTABLE_TOKEN;

    if (!token) {
      console.error('[Waitlist] Missing AIRTABLE_TOKEN');
      return NextResponse.json({ success: false, error: 'Server misconfiguration' }, { status: 500 });
    }


    const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Email: email,
        },
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error('[Waitlist] Airtable error:', err);
      return NextResponse.json({ success: false, error: 'Failed to save' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[Waitlist] Error:', error);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}
