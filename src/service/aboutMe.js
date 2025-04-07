import { supabase } from "./supabase";

export const apiAboutInfo = async () => {
  let { data, error } = await supabase.from("about_info").select("*");
  if (error) throw error;
  return data;
};
