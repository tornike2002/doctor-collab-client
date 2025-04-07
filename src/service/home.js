import { supabase } from "./supabase";

export const apiGetBanner = async () => {
  let { data: title, error } = await supabase.from("banner").select("*");
  return { title, error };
};

export const apiGetDoctorBio = async () => {
  let { data: full_name, error } = await supabase
    .from("doctor_info")
    .select("*");
  return { full_name, error };
};

export async function apiGetHeroImage() {
  let { data, error } = await supabase.from("heroImage").select("*");
  if (error) throw new Error(error.message);
  return data;
}

export const apiGetServices = async () => {
  let { data, error } = await supabase
    .from("services")
    .select("*")
    .order("id", { ascending: true })
    .limit(6);
  if (error) throw new Error(error.message);
  return data;
};

export const apiGetFooter = async () => {
  let { data, error } = await supabase.from("footer").select("*");
  if (error) throw new Error(error.message);
  return data;
};
