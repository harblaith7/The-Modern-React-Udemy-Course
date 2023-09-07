export default function LoadingCards() {
  return (
    <div className="px-12 mt-4 space-y-8">
      <div>
        <div className="flex flex-wrap gap-2 justify-between">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
            <div
              className="group bg-gray-900 col-span relative h-[12vw] w-[24%] animate-pulse flex space-x-4"
              key={num}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
