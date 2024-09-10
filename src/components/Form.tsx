import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

const Form = () => {
  return (
    <div className="flex justify-center  h-15 mb-8">
      <Input
        className="max-w-[320px]"
        label="Add task"
        radius="full"
        type="text"
        variant="underlined"
      />
      <Button className="card_btn h-15 ml-5 px-10" color="primary">
        Add Task
      </Button>
    </div>
  );
};

export default Form;
