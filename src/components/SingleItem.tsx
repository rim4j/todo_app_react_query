import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";

import { useDeleteTasks, useEditTasks } from "@/hooks/reactQueryCustomHook";

const SingleItem = ({ singleItem }: any) => {
  const { editTask } = useEditTasks();
  const { deleteTask } = useDeleteTasks();

  return (
    <div className="flex justify-between mx-3 my-5">
      <div className="flex items-center ">
        <Checkbox
          lineThrough
          isSelected={singleItem.isDone}
          onValueChange={() =>
            editTask({ taskId: singleItem.id, isDone: !singleItem.isDone })
          }
        >
          <p>{singleItem.title}</p>
        </Checkbox>
      </div>
      <Button
        color="danger"
        onClick={() => deleteTask({ taskId: singleItem.id })}
      >
        Delete
      </Button>
    </div>
  );
};

export default SingleItem;
