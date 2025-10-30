"use client";

import { useEffect, useState } from "react"; // React hooks til state og livscyklus
import {
  Podcast,
  getPodcast,
  deletePodcast,
  createPodcast,
  updatePodcast,
} from "@/data/podcastData"; // Importer datatyper og API-funktioner til podcasts
import { PodcastFormData } from "@/types/types"; // Importer type til formular data
import PodcastFormModal from "@/components/dashboard/PodcastFormModal"; // Modal komponent til podcast formular
import ModalConfirmDeleteBox from "@/components/dashboard/ConfirmDeleteBox"; // Modal til bekræftelse af sletning

const PodcastsPage = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]); // State: liste over podcasts (henter fra backend)
  const [isModalOpen, setIsModalOpen] = useState(false); // State: om modal med formular er åben (true/false)
  const [editPodcast, setEditPodcast] = useState<Podcast | null>(null); // State: podcast der skal redigeres, eller null hvis ingen redigering
  const [deleteTarget, setDeleteTarget] = useState<Podcast | null>(null); // State: podcast der er markeret til sletning, eller null hvis ingen
  const [fileName, setFileName] = useState(""); // State: navnet på filen valgt i formularen (til visning)
  const [showFeedback, setShowFeedback] = useState(false); // State: om feedback (fx "gemt") skal vises til bruger

  // State: form data, som indeholder headline, info og evt. billede
  // Omit<_id> fordi _id håndteres automatisk i backend
  const [formData, setFormData] = useState<PodcastFormData>({
    headline: "", // tom headline til at starte med
    info: "", // tomt info til at starte med
    length: 0,
    podcast: "", // tomt podcast URL til at starte med
    thumbnail: null, // tom thumbnail til at starte med
    releaseDate: "", // tom release date
  });

  // useEffect kører når komponenten loader første gang
  // Henter podcasts fra backend og gemmer i state
  useEffect(() => {
    getPodcast().then(setPodcasts); // Hent podcasts og opdater state
  }, []); // Tom dependencies-array betyder kun kør én gang

  // useEffect kører når 'editPodcast' ændres
  // Når man åbner modal i redigerings-mode, skal formular fyldes med data fra podcasten
  useEffect(() => {
    if (editPodcast) {
      // Hvis der er en podcast valgt til redigering
      setFormData({
        headline: editPodcast.headline, // sæt headline i formular
        info: editPodcast.info, // sæt info i formular
        length: editPodcast.length,
        podcast: editPodcast.podcast, // sæt podcast URL i formular
        thumbnail: editPodcast.thumbnail, // sæt thumbnail URL
        releaseDate: editPodcast.releaseDate, // sæt release date
      });
      // Sæt filnavn, hvis billedet er en string (filnavn)
      setFileName(editPodcast.thumbnail?.name || "");
    } else {
      // Hvis vi ikke redigerer noget, reset formData til tomme værdier
      setFormData({
        headline: "",
        info: "",
        length: 0,
        podcast: "",
        thumbnail: null,
        releaseDate: "",
      });
      setFileName(""); // og nulstil filnavn
    }
  }, [editPodcast]); // Kører hver gang editPodcast ændres

  // Funktion til at opdatere formular når bruger skriver eller vælger fil
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target; // Hent navn, værdi og type fra input feltet

    if (type === "file") {
      // Hvis input feltet er en fil-picker
      const file = (e.target as HTMLInputElement).files?.[0]; // Hent første fil valgt
      if (file) {
        setFormData((prev) => ({ ...prev, thumbnail: file })); // Opdater formData med fil
        setFileName(file.name); // Vis filens navn til brugeren
      }
    } else {
      // Hvis input feltet er tekst (headline, info, podcast, releaseDate)
      setFormData((prev) => ({ ...prev, [name]: value })); // Opdater formData med ny tekstværdi
    }
  };

  // Funktion der kører når formularen bliver sendt (tryk på Gem knap)
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Forhindrer siden i at reloade ved form submit

    // Opret FormData objekt, som kan sende både tekst og filer til backend
    const formDataToSend = new FormData();
    formDataToSend.append("headline", formData.headline); // Tilføj headline
    formDataToSend.append("info", formData.info); // Tilføj info
    formDataToSend.append("length", formData.length.toString());
    formDataToSend.append("podcast", formData.podcast); // Tilføj podcast URL
    if (formData.thumbnail) {
      formDataToSend.append("thumbnail", formData.thumbnail); // Tilføj thumbnail hvis valgt
    }
    formDataToSend.append("releaseDate", formData.releaseDate); // Tilføj release date

    if (editPodcast?._id) {
      // Hvis vi redigerer en eksisterende podcast
      await updatePodcast(editPodcast._id, formDataToSend); // Opdater via API
    } else {
      // Hvis vi opretter en ny podcast
      await createPodcast(formDataToSend); // Opret via API
    }

    // Hent opdateret liste af podcasts efter ændring
    const updatedPodcasts = await getPodcast();
    setPodcasts(updatedPodcasts); // Opdater state med nye data

    setShowFeedback(true); // Vis feedback til brugeren (fx "Podcast gemt")

    // Reset formularens state til tomme værdier
    setFormData({
      headline: "",
      info: "",
      podcast: "",
      length: 0,
      thumbnail: null,
      releaseDate: "",
    });
    setFileName("");

    // Efter 1.5 sekunder skjul modal, feedback og nulstil edit tilstand
    setTimeout(() => {
      setShowFeedback(false); // Skjul feedback
      setIsModalOpen(false); // Luk modal
      setEditPodcast(null); // Nulstil edit podcast
    }, 1500);
  };

  // Funktion til at slette en podcast
  const handleDelete = async (id: string) => {
    await deletePodcast(id); // Kald API for at slette podcast med id
    setPodcasts((prev) => prev.filter((p) => p._id !== id)); // Fjern slettet podcast fra state
  };

  return (
    <>
      {/* Side titel */}
      <h2 className="text-4xl font-extrabold mb-8 text-gray-900">Podcasts</h2>

      {/* Knap til at oprette ny podcast - åbner modal */}
      <button
        className="btn-opret-gem"
        aria-label="Opret ny podcast"
        onClick={() => {
          setEditPodcast(null); // Sørg for vi ikke redigerer, men opretter ny
          setIsModalOpen(true); // Åbn modal
        }}
      >
        Opret ny Podcast
      </button>

      {/* Grid med kort for hver podcast */}
      <div className="grid grid-cols-3 gap-6 pb-5">
        {podcasts.map((p) => (
          <div
            key={p._id} // Unikt key til React liste
            className="bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden hover:shadow-lg transition"
          >
            {/* Podcastens billede */}
            <img
              src={`http://localhost:3001/assets/podcast/${p.thumbnail}`} // URL til billedet
              alt={p.headline} // Alternativ tekst for billedet
              className="w-full h-40 object-cover" // Styling af billede
            />
            <div className="p-4">
              {/* Podcastens headline */}
              <h3 className="text-lg font-semibold mb-2 truncate">
                {p.headline}
              </h3>
              {/* Podcastens info - med max 3 linjer (line-clamp) */}
              <p className="text-gray-700 mb-4 line-clamp-3">{p.info}</p>
              <audio controls className="mt-auto w-full pt-5">
                <source
                  src={`http://localhost:3001/assets/podcast/${p.podcast}`}
                  type="audio/mp3"
                />
              </audio>

              {/* Knapper til rediger og slet podcast */}
              <div className="mt-8 flex justify-end space-x-4">
                <button
                  className="btn-redigere"
                  aria-label={`Rediger podcast: ${p.headline}`}
                  onClick={() => {
                    setEditPodcast(p); // Vælg podcast til redigering
                    setIsModalOpen(true); // Åbn modal med formular
                  }}
                >
                  Rediger
                </button>
                <button
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  aria-label={`Slet podcast: ${p.headline}`}
                  onClick={() => setDeleteTarget(p)} // Vælg podcast til sletning og åbn bekræft modal
                >
                  Slet
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal med formular til oprettelse eller redigering */}
      <PodcastFormModal
        open={isModalOpen} // Åben/luk modal styret af state
        onClose={() => {
          setIsModalOpen(false); // Luk modal
          setEditPodcast(null); // Nulstil edit podcast ved luk
        }}
        isEditMode={!!editPodcast} // Send true hvis vi redigerer, false hvis ny podcast
        formData={formData} // Send formular data til modal
        fileName={fileName} // Send filnavn (hvis valgt) til modal
        showFeedback={showFeedback} // Send om feedback skal vises
        onChange={handleChange} // Send funktion til håndtering af ændringer i formular
        onSubmit={onSubmit} // Send funktion til at håndtere formular submit (gem)
      />

      {/* Modal til at bekræfte sletning */}
      <ModalConfirmDeleteBox
        open={!!deleteTarget} // Åbner modal hvis deleteTarget ikke er null
        data={
          deleteTarget
            ? { _id: deleteTarget._id, title: deleteTarget.headline }
            : null
        } // Sender podcast der skal slettes videre til modal
        onClose={() => setDeleteTarget(null)} // Luk modal uden sletning
        onConfirm={(id) => {
          handleDelete(id); // Slet podcast når bruger bekræfter
          setDeleteTarget(null); // Luk modal bagefter
        }}
      />
    </>
  );
};

export default PodcastsPage;
