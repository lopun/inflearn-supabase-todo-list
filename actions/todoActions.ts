"use server";

import { Database } from "types_db";
import { createServerSupabaseClient } from "utils/supabase/server";

export type TodoRow = Database["public"]["Tables"]["todo"]["Row"];
export type TodoRowInsert = Database["public"]["Tables"]["todo"]["Insert"];
export type TodoRowUpdate = Database["public"]["Tables"]["todo"]["Update"];

const handleError = (error) => {
  if (error) {
    console.error(error);
    throw Error(error);
  }
};

export const getTodos = async ({ search }): Promise<TodoRow[]> => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("todo")
    .select("*")
    .like("title", `%${search}%`)
    .order("created_at", { ascending: true });

  handleError(error);
  console.log(data);
  console.log("getTodos");

  return data;
};

export const createTodo = async (todo: TodoRowInsert): Promise<TodoRow> => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.from("todo").insert({
    ...todo,
    created_at: new Date().toISOString(),
  });

  handleError(error);

  return data;
};

export const updateTodo = async (todo: TodoRowUpdate): Promise<TodoRow> => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("todo")
    .update({
      ...todo,
      updated_at: new Date().toISOString(),
    })
    .eq("id", todo.id);

  handleError(error);

  return data;
};

export const deleteTodo = async (id: number) => {
  const supabase = await createServerSupabaseClient();

  const { error } = await supabase.from("todo").delete().eq("id", id);
  handleError(error);
};
