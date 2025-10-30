
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Beklager siden findes ikke.</p>
      <a
        href="/"
        className="px-6 py-3 bg-[#e89700] text-white rounded-md"
      >
        Tilbage til hjem
      </a>
    </div>
  )
}

export default NotFoundPage