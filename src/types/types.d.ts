import { Podcast } from "@/data/podcastData";

//type for components/PostContactData.tsx
 export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
//type for components/PostContactModal.tsx
interface PostContactModalProps {
  open: boolean;
  onClose: () => void;
}

// Data til behandlingsformularen (bruges til opret/rediger)
export type PodcastFormData = Omit<Podcast, "_id">;

// Props til PodcastFormModal-komponenten
export type PodcastFormModalProps = {
  open: boolean; // Er modal'en åben?
  onClose: () => void; // Funktion til at lukke modal'en
  isEditMode: boolean; // Er vi i redigerings-tilstand?
  formData: PodcastFormData; // Formularens data
  fileName: string; // Navn på valgt billede
  showFeedback: boolean; // Skal feedback (fx "Gemt") vises?
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  // Håndterer inputændringer
  onSubmit: FormEventHandler<HTMLFormElement>;
  // Håndterer formular-submit
};

export type ModalConfirmDeleteBoxProps = {
  open: boolean;
  data: { _id: string; title: string } | null;
  onClose: () => void;
  onConfirm: (id: string) => void;
};