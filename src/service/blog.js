import { supabase } from "./supabase";

export async function apiGetBlogHero() {
  const { data, error } = await supabase.from("about_hero").select("*");
  if (error) throw error;
  return data;
}

export async function apiGetBlogAdd() {
  const { data, error } = await supabase.from("blogs").select("*");
  if (error) throw error;
  return data;
}

export const getBlogId = async (id) => {
  let { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();

  return { blog: data, error };
};
