'use client';

// Definerer typen for de props, som Error-komponenten modtager
type ErrorProps = {
  error: Error;          // Et Error-objekt, der indeholder fejlbeskeden
  reset: () => void;     // En funktion, der nulstiller fejlen og forsøger at genindlæse komponenten
};

// Eksporterer Error-komponenten som default eksport
// Komponenten bruges automatisk af Next.js, når en fejl opstår i en route
export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-800 text-center font-sans">
      <h2 className="text-3xl font-semibold mb-4">Something went wrong!</h2>
      
      {/* Viser selve fejlbeskeden fra Error-objektet */}
      <p className="mb-6 text-lg">{error.message}</p>
      
      {/* Knap, som kalder reset() når man klikker – 
          Next.js forsøger så at genindlæse eller re-render komponenten */}
      <button
        onClick={() => reset()} // kalder reset-funktionen, når brugeren klikker
        className="px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition"
      >
        Try again
      </button>
    </div>
  );
}
