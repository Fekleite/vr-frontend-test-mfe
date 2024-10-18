export function Skeleton() {
  return (
    <div className="w-full max-w-[1440px] px-12 mx-auto my-8">
      <div className="w-full grid grid-cols-3 gap-10">
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8]).map((item) => (
          <div className="border rounded-lg p-8 bg-neutral-100 animate-pulse min-h-96" key={item} />
        ))}
      </div>
    </div>
  )
}
