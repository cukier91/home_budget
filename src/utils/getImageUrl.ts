import { supabase } from "src/config/supabaseClient";

export const getImageUrl = async (imagePath: string) => {
  const { data } = await supabase.storage
    .from("avatar")
    .getPublicUrl(imagePath);
  return data?.publicURL;
};