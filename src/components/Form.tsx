import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useState } from "react";

import { useCreateTasks } from "@/hooks/reactQueryCustomHook";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { createTask } = useCreateTasks();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName("");
      },
    });
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
          // disabled={isPending}
          type="submit"
        >
          Add Task
        </Button>
      </div>
    </form>
  );
};

export default Form;
