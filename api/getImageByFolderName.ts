import { supabase } from "@/lib/supabaseClient";

export async function getImageByFolderName(folderName: string) {
  const { data } = await supabase.storage
    .from("images-bucket")
    .list(folderName, {
      limit: 10,
      offset: 0,
    });
  return data;
}
