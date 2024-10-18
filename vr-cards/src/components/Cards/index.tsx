export default function Cards() {
  return (
    <div className="w-full max-w-[1440px] px-12 mx-auto my-8">
      <div className="w-full grid grid-cols-3 gap-10">
        {Array.from([1, 2, 3, 4, 5, 6, 7]).map((product) => (
          <div className="border border-neutral-200 rounded-lg p-8" key={`product-${product}`}>
            <div className="w-full h-48 mx-auto">
              {/* Image */}
            </div>

            <h3 className="text-center text-lg text-neutral-900 font-bold">Nome produto</h3>
            <p className="text-center text-sm text-neutral-900 mt-3">Descrição do produto</p>

            <div className="flex items-center justify-between mt-8">
              <span className="text-xl text-neutral-900 font-bold">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(99.90)}
              </span>

              <button
                type="button"
                className="h-12 px-4 rounded-full bg-brand hover:opacity-80 duration-200 text-neutral-50 text-sm font-semibold"
              >
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
