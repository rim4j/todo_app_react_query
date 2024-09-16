import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import customFetch from "@/utils/utils";

export const useFetchTasks = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");

      return data.taskList;
    },
  });

  return { isLoading, isError, data, error };
};
export const useCreateTasks = () => {
  const queryClient = useQueryClient();

  const { mutate: createTask } = useMutation({
    mutationFn: (taskTitle: string) =>
      customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task added successfully");
    },
    onError: (e: any) => {
      toast.error(e.response.data.msg);
    },
  });

  return { createTask };
};

export const useEditTasks = () => {
  const queryClient = useQueryClient();

  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }: any) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { editTask };
};

export const useDeleteTasks = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask } = useMutation({
    mutationFn: ({ taskId }: any) => {
      return customFetch.delete(`/${taskId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  return { deleteTask };
};
