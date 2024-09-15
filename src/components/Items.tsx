import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@nextui-org/spinner";

import SingleItem from "./SingleItem";

import customFetch from "@/utils/utils";

const Items = ({ tasks }: any) => {
  const { isLoading, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");

      return data.taskList;
    },
  });

  if (isLoading)
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );

  return (
    <div>
      {data.map((item: any) => (
        <SingleItem key={item.id} singleItem={item} />
      ))}
    </div>
  );
};

export default Items;
