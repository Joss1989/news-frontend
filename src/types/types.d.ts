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