import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";

const SingleItem = ({ singleItem }: any) => {
  return (
    <div className="flex justify-between mx-3 my-5">
      <div className="flex items-center ">
        <Checkbox
          lineThrough
          onValueChange={(value) => console.log(value)}
          // isSelected={singleItem.isDone}
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
