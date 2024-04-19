import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-gerenciamento-de-tarefas.onrender.com/",
});

export interface ResponseAPI<T> {
  code: number;
  ok: boolean;
  message: string;
  data: T;
}
