import { supabase } from "./supabase";

export const getDaysOfWeek = async (week_day) => {
  const { data, error } = await supabase
    .from("days_of_week")
    .select("*")
    .eq("week_day", week_day);
  if (error) throw error;
  return data;
};

export const addPatient = async (patient) => {
  const { data, error } = await supabase.from("booking").insert([patient]);
  if (error) throw new Error(error.message);
  return { data, error };
};

export const getPatientsByDate = async (formateDate) => {
  const { data, error } = await supabase
    .from("booking")
    .select("*")
    .eq("date", formateDate);
  if (error) throw new Error(error.message);
  return { data, error };
};
