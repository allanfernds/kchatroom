import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Função para login com Discord
export const loginWithDiscord = async () => {
  const { error } = await supabaseClient.auth.signInWithOAuth({
    provider: "discord",
    options: {
      redirectTo: "https://kchatroom.vercel.app/api/auth/v1/callback", // URL de redirecionamento
    },
  });

  if (error) {
    console.error("Erro ao autenticar com Discord:", error.message);
  }
};
