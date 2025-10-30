import { PodcastFormModalProps } from "@/types/types";
import { createPortal } from "react-dom";

// PodcastFormModal komponenten
const PodcastFormModal: React.FC<PodcastFormModalProps> = ({
  open,
  onClose,
  isEditMode,
  formData,
  fileName,
  showFeedback,
  onChange,
  onSubmit,
}) => {
  // Hvis modal ikke skal vises, returner ingenting
  if (!open) return null;

  // Overskrift og knaptekst afhænger af om vi redigerer eller opretter
  const heading = isEditMode ? "Rediger podcast" : "Opret podcast";
  const buttonLabel = isEditMode ? "Gem" : "Opret";

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-8 relative">
        {/* Overskrift ændrer sig afhængigt af om vi redigerer eller opretter */}
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">
          {heading}
        </h2>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Titel input */}
          <div>
            <label htmlFor="headline" className="block font-semibold mb-1">
              Titel
            </label>
            <input
              id="headline"
              name="headline"
              type="text"
              placeholder="Indtast titel"
              value={formData.headline}
              onChange={onChange}
              required
              className="w-full px-4 py-3 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Info textarea */}
          <div>
            <label htmlFor="info" className="block font-semibold mb-1">
              Info
            </label>
            <textarea
              id="info"
              name="info"
              placeholder="Indtast info"
              rows={5}
              value={formData.info}
              onChange={onChange}
              required
              className="w-full px-4 py-3 border rounded-md text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Længde input */}
          <div>
            <label htmlFor="length" className="block font-semibold mb-1">
              Længde (min)
            </label>
            <input
              id="length"
              name="length"
              type="number"
              placeholder="Indtast længde"
              value={formData.length}
              onChange={onChange}
              required
              className="appearance-none w-full px-4 py-3 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Podcast URL input */}
          <div>
            <label htmlFor="podcast" className="block font-semibold mb-1">
              Podcast URL
            </label>
            <input
              id="podcast"
              name="podcast"
              type="url"
              placeholder="Indtast podcast link"
              value={formData.podcast}
              onChange={onChange}
              required
              className="w-full px-4 py-3 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Thumbnail upload */}
          <div>
            <label htmlFor="thumbnail" className="block font-semibold mb-1">
              Thumbnail
            </label>
            <label
              htmlFor="thumbnail"
              className="flex cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 p-4 text-gray-500 hover:border-blue-500 hover:text-blue-600 transition"
            >
              Vælg billede
              <input
                id="thumbnail"
                name="thumbnail"
                type="file"
                accept="image/*"
                onChange={onChange}
                className="hidden"
              />
            </label>
            {fileName && (
              <p className="mt-2 italic text-gray-600">
                Valgt fil: <span className="font-medium">{fileName}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="releaseDate" className="block font-semibold mb-1">
              Releasedate 
            </label>
            <input
              id="releaseDate"
              name="releaseDate"
              type="date"
              placeholder="Indtast længde"
              value={formData.releaseDate}
              onChange={onChange}
              required
              className="appearance-none w-full px-4 py-3 border rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Feedback besked */}
          {showFeedback && (
            <p className="text-center font-semibold text-green-600">
              Podcast {isEditMode ? "opdateret" : "oprettet"}!
            </p>
          )}

          {/* Knapper */}
          <div className="items-start mt-8 flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="btn-anullere"
            >
              Annuller
            </button>
            <button
              type="submit"
              className="btn-opret-gem"
            >
              {buttonLabel}
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default PodcastFormModal;
