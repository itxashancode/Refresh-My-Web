import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'Welcome to RefreshMyWeb API',
    status: 'Backend operational',
    tech: ['Node.js', 'Next.js', 'Supabase']
  });
}
