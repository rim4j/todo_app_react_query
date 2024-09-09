import SingleItem from "./SingleItem";

const Items = ({ tasks }: any) => {
  return (
    <div>
      {tasks.map((item: any) => (
        <SingleItem key={item.id} singleItem={item} />
      ))}
    </div>
  );
};

export default Items;
