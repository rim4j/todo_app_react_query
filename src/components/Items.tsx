import { useQuery } from "@tanstack/react-query";

import SingleItem from "./SingleItem";

import customFetch from "@/utils/utils";

const Items = ({ tasks }: any) => {
  const result = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });

  console.log(result.data);

  return (
    <div>
      {tasks.map((item: any) => (
        <SingleItem key={item.id} singleItem={item} />
      ))}
    </div>
  );
};

export default Items;
