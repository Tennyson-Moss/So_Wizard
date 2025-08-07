import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { sendWelcomeEmail } from "@/lib/sendWelcomeEmail";

export async function POST(req: NextRequest) {
  try {
    const { email, username, genreIds } = await req.json();

    // 1. Create the user
    const { data: user, error: userError } = await supabase
      .from("users")
      .insert([{ email, username }])
      .select("id")
      .single();

    if (userError) {
      return NextResponse.json({ error: userError.message }, { status: 400 });
    }

    const userId = user.id;

    // 2. Insert user_genres
    if (Array.isArray(genreIds) && genreIds.length > 0) {
      const genreInserts = genreIds.map((genreId: number) => ({
        user_id: userId,
        genre_id: genreId,
      }));

      const { error: genresError } = await supabase
        .from("user_genres")
        .insert(genreInserts);

      if (genresError) {
        return NextResponse.json({ error: genresError.message }, { status: 400 });
      }
    }

    // 3. Send Welcome Email (after everything else succeeded)
    await sendWelcomeEmail(email, username);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
