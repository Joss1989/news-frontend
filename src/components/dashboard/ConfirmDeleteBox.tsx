"use client"; 

import { ModalConfirmDeleteBoxProps } from "@/types/types"; 
import { useEffect, useState } from "react"; 
import { createPortal } from "react-dom"; 

// Funktionel komponent, som tager props: open, data, onClose og onConfirm
const ModalConfirmDeleteBox: React.FC<ModalConfirmDeleteBoxProps> = ({
  open,       // Boolean: om modalen skal vises
  data,       // Objekt: data for den behandling der skal slettes
  onClose,    // Funktion: lukker modalen
  onConfirm,  // Funktion: bekræfter sletningen
}) => {
  // Lokalt state til at vise feedbackbesked efter sletning
  const [showFeedback, setShowFeedback] = useState(false);

  // Lokalt state til at sikre at komponenten kun vises efter at være mountet (for at undgå fejl i SSR)
  const [isMounted, setIsMounted] = useState(false);

  // Bruges til at sætte isMounted til true efter at komponenten er mountet
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Hvis modalen ikke skal vises, eller data ikke er klar, eller ikke mountet endnu — så vises ingenting
  if (!open || !data || !isMounted) return null;

  // Funktion der håndterer sletning
  const handleDelete = async () => {
    setShowFeedback(true); // Viser feedbackbesked

    setTimeout(() => {
      onConfirm(data._id); // Kalder den bekræftende funktion med ID
      setShowFeedback(false); // Skjuler feedback igen
      onClose(); // Lukker modalen
    }, 1000); // Forsinker handlingen lidt (fx for UX eller animation)
  };

  // createPortal bruges til at "teleportere" modalen til <body> i DOM'en, så den ikke bliver påvirket af fx overflow/skjul i andre containere
  return createPortal(
    <>
      {/* Selve modal-boksen */}
      <div className="fixed z-40 w-96 max-w-full p-6 bg-white rounded shadow-lg top-1/4 left-1/2 transform -translate-x-1/2">
        <h2 className="text-lg font-semibold text-center mb-4">
          Vil du slette:{" "}
          <span className="font-bold">{data.title}</span>?
        </h2>

        {/* Viser en grøn feedback-besked hvis showFeedback er true */}
        {showFeedback && (
          <div className="text-green-700 font-medium text-sm text-center mb-4">
            Behandling blev slettet
          </div>
        )}

        {/* Knapperne: Slet og Annuller */}
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Slet
          </button>
          <button
            onClick={onClose}
            className="btn-anullere" // Ekstra klasse (kan være defineret globalt)
          >
            Annuller
          </button>
        </div>
      </div>
    </>,
    document.body // Hvor modalen indsættes i DOM’en
  );
};

export default ModalConfirmDeleteBox;
