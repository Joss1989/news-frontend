import { PostContactModalProps } from "@/types/types";
import { createPortal } from "react-dom";
import PostContactData from "./PostContactData";

const ContactFormModal: React.FC<PostContactModalProps> = ({ open, onClose }) => {
  // Hvis open-prop er false, renderes ingenting (modalen vises ikke)
  if (!open) return null;
  
  return createPortal(
    <section className="fixed inset-0 z-30 flex items-center justify-center bg-black/50 ">
      <div className="relative bg-white shadow-lg w-full max-w-lg rounded-sm p-6">
        {/* Luk-knap */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-[#F05523] text-xl font-bold"
          aria-label="Luk modal"
        >
          ✕
        </button>
        <PostContactData />
      </div>
    </section>,
    document.body
  );
};

export default ContactFormModal;
