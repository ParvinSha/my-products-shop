import Image from 'next/image'



export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ id: number }>
}) {
  const id = (await params).id
//   const recipe = await fetchRecipeById(id)

  return (
    <main>
      {/* Page wrapper */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2">
        <p>id</p>
      </div>
    </main>
  )
}
