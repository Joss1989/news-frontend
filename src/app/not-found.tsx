const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1> {/* Render 404 fejlmeddelelse i stor størrelse */}
      <p className="text-lg mb-6">Beklager siden findes ikke.</p> {/* Render en kort besked om, at siden ikke findes */}
      {/* link der fører brugeren tilbage til forsiden */}
      <a
        href="/"
        className="px-6 py-3 bg-[#e89700] text-white rounded-md"
      >
        Tilbage til hjem
      </a>
    </div>
  );
};

export default NotFoundPage; 
