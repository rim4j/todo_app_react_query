import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@nextui-org/spinner";

import SingleItem from "./SingleItem";

import customFetch from "@/utils/utils";

const Items = () => {
  const { isLoading, data, error, isError } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");

      return data.taskList;
    },
  });

  if (isError)
    return (
      <div className="text-center">
        <p>{error.message}</p>
      </div>
    );

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
