import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { nanoid } from "nanoid";

import { useTheme } from "@/hooks/use-theme";
import "./index.css";
import Items from "@/components/Items";
import { MoonFilledIcon, NextUILogo, SunFilledIcon } from "@/components/icons";

const IndexPage = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  const defaultItems = [
    { id: nanoid(), title: "walk the dog", isDone: false },
    { id: nanoid(), title: "wash dishes", isDone: false },
    { id: nanoid(), title: "drink coffee", isDone: true },
    { id: nanoid(), title: "take a nap", isDone: false },
  ];

  return (
    <div className={theme}>
      <div className="m-5 ">
        <nav className="flex ">
          <NextUILogo className="mr-5" />
          <Button onClick={toggleTheme}>
            {isDark ? <MoonFilledIcon /> : <SunFilledIcon />}
          </Button>
        </nav>
      </div>
      <div className="card-container  m-auto mt-10 ">
        <header>
          <h1 className="text-xl mb-5">Task Bud</h1>
        </header>
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
        <div className="task">
          <Items tasks={defaultItems} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
