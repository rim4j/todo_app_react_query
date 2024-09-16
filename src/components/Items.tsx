import { Spinner } from "@nextui-org/spinner";

import SingleItem from "./SingleItem";

import { useFetchTasks } from "@/hooks/reactQueryCustomHook";

const Items = () => {
  const { data, isError, isLoading, error } = useFetchTasks();

  if (isError)
    return (
      <div className="text-center">
        <p>{error!.message}</p>
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
