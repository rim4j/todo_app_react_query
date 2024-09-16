import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

import customFetch from "@/utils/utils";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");
  const queryClient = useQueryClient();
  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (taskTitle: string) =>
      customFetch.post("/", { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("task added successfully");
      setNewItemName("");
    },
    onError: (e: any) => {
      toast.error(e.response.data.msg);
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTask(newItemName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center  h-15 mb-8">
        <Input
          className="max-w-[320px]"
          label="Add task"
          radius="full"
          type="text"
          value={newItemName}
          variant="underlined"
          onChange={(e) => setNewItemName(e.target.value)}
        />
        <Button
          className="card_btn h-15 ml-5 px-10"
          color="primary"
          disabled={isPending}
          type="submit"
        >
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default Form;
