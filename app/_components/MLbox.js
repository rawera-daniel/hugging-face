export default function MLbox({ colStart, colEnd, children }) {
  return (
    <div
      className={`border rounded-xl h-[30rem] border-gray-300 col-[${colStart}_/${colEnd}] flex flex-col shadow-sm`}
    >
      {children}
    </div>
  );
}
