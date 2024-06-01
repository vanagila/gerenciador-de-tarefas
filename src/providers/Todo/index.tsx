import { ReactNode, createContext, useState } from "react";
import { ResponseAPI, api } from "../../services/api.service";
import { toast } from "react-toastify";

interface TodosProviderData {
  todos: Todos[];
  listTodos: (token: string) => Promise<ResponseAPI<Todos[]>>;
  createTodo: (
    token: string,
    todoData: NewTodoData
  ) => Promise<ResponseAPI<Todos[]>>;
  deleteTodo: (token: string, id: string) => Promise<ResponseAPI<Todos[]>>;
  updateTodoStatus: (
    token: string,
    id: string,
    done: boolean
  ) => Promise<ResponseAPI<Todos[]>>;
}

interface Todos {
  id: string;
  content: string;
  done?: boolean;
  createdAt: string;
}

interface NewTodoData {
  content: string;
  createdAt: string;
}

interface TodosProviderProps {
  children: ReactNode;
}

export const TodosContext = createContext<TodosProviderData>(
  {} as TodosProviderData
);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todos[]>([] as Todos[]);

  const listTodos = async (token: string): Promise<ResponseAPI<[]>> => {
    try {
      const response = await api.get("/todos", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const todosData = response.data.data;
      setTodos(todosData);

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

  const createTodo = async (
    token: string,
    todoData: NewTodoData
  ): Promise<ResponseAPI<Todos[]>> => {
    try {
      const response = await api.post("/todos", todoData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setTodos((prevTodos) => [...prevTodos, response.data.data]);
      toast.success(response.data.message);

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

  const deleteTodo = async (
    token: string,
    id: string
  ): Promise<ResponseAPI<[]>> => {
    try {
      const response = await api.delete(`/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

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

  const updateTodoStatus = async (
    token: string,
    todoId: string,
    done: boolean
  ): Promise<ResponseAPI<[]>> => {
    try {
      const response = await api.put(
        `/todos/${todoId}`,
        { done },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === todoId ? { ...todo, done: response.data.data.done } : todo
        )
      );

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

  return (
    <TodosContext.Provider
      value={{ todos, listTodos, createTodo, deleteTodo, updateTodoStatus }}
    >
      {children}
    </TodosContext.Provider>
  );
};
