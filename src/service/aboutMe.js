import { supabase } from "./supabase";

export const apiAboutInfo = async () => {
  let { data, error } = await supabase.from("about_info").select("*");
  if (error) throw error;
  return data;
};

export const getAwards = async () => {
  const { data, error } = await supabase.from("awards").select("*");
  if (error) throw error;
  return data;
};

export const apiExperinece = async () => {
  let { data, error } = await supabase.from("experience").select("*");
  if (error) throw error;
  return data;
};

export const apiGetEducation = async () => {
  let { data, error } = await supabase.from("education").select("*");
  if (error) throw error;
  return data;
};

export const getSkills = async () => {
  const { data, error } = await supabase.from("skills").select("*");
  if (error) throw error;
  return data;
};
