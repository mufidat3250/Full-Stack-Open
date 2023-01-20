import Total from "../Total";
const Content = ({ parts }) => {
  console.log(parts);
  const sum =parts.reduce((acc, cur)=>  acc+cur.exercises, 0)
  return (
    <div>
      {parts.map((part, index) => (
        <div key={index}>
          <span>{part.name}</span> {part.exercises}
        </div>
      ))}
      <Total total={sum}/>
    </div>
  );
};

export default Content;
