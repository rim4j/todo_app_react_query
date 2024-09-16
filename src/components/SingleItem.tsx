import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import customFetch from "@/utils/utils";

const SingleItem = ({ singleItem }: any) => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }: any) => {
      return customFetch.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

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
      <Button color="danger" onClick={() => console.log("delete")}>
        Delete
      </Button>
    </div>
  );
};

export default SingleItem;
