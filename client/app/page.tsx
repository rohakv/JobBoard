export default function Home() {
  return (
    <>
      <main className="w-full h-screen flex bg-[#F5F5F5]">
        <div className="w-1/2 h-full flex flex-col justify-center items-center">
          <div className='text-center w-1/3 h-1/6 py-10 border-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
              <h1 className="font-bold text-2xl text-[#091540]">Barista</h1>
              <p className="font-normal">Costa - Avenue</p>
          </div>
          <div className='text-center w-1/3 h-1/6 py-8 border-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100'>
              <h1 className="font-bold text-2xl text-[#091540] py-3">Barista</h1>
              <p className="font-normal">Costa - Avenue</p>
          </div>
        </div>
        <div className="w-1/2 h-screen flex flex-col justify-center items-center">
          <h1>Hello</h1>
          <h1>Hello</h1>
        </div>
      </main>
    </>
  )
}
