import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const data : {email: string; password: string} = await request.json();

    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(
        { message: "Successfully signed in" },
        { status: 200}
    )
}