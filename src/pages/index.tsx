import { Button } from "@nextui-org/button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "@/components/Form";
import Items from "@/components/Items";
import { MoonFilledIcon, NextUILogo, SunFilledIcon } from "@/components/icons";
import { useTheme } from "@/hooks/use-theme";
import "./index.css";

const IndexPage = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className={theme}>
      <ToastContainer />
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
        {/* form */}
        <Form />

        {/* items */}
        <div className="task">
          <Items />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
