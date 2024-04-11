import { ResponseAPI, api } from "./api.service";

export interface SignUpData {
  name: string;
  email: string;
  password: string;
}

export const signUp = async (
  data: SignUpData
): Promise<ResponseAPI<SignUpData>> => {
  try {
    const response = await api.post("/users", data);

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
      data,
    };
  }
};
