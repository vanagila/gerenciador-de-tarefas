import { ResponseAPI, api } from "./api.service";

export const listTodos = async (token: string): Promise<ResponseAPI<[]>> => {
  try {
    const response = await api.get("/todos", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return {
      code: response.data.code,
      ok: response.data.ok,
      message: response.data.message,
      data: response.data.data,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      code: error.response.data.code,
      ok: error.response.data.ok,
      message: error.response.data.message,
      data: error.response.data,
    };
  }
};
