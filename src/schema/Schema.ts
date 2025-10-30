import * as yup from "yup"; // Importerer yup biblioteket til validering af formularer.
import { useForm } from "react-hook-form"; // Importerer useForm hook fra react-hook-form til at håndtere formularens tilstand og handlinger.
import { yupResolver } from "@hookform/resolvers/yup"; // Importerer yupResolver som en bro mellem yup-validering og react-hook-form.

const schema = yup.object().shape({
  // Definerer en valideringsskema (schema) ved hjælp af yup.
  name: yup.string().required("name er påkrævet"), // Navnet er påkrævet (skal være en streng).
  email: yup.string().required("email er påkrævet"), // Email er påkrævet.
  subject: yup.string().required(""), // Emne er påkrævet. (Der er ingen specifik fejlbesked, så denne vil blive tomt).
  message: yup.string().required("message er påkrævet"), // Beskeden er påkrævet.
});

export const useYupForm = () => {
  // Bruger useForm hook til at oprette formularhåndtering og validering.
  const {
    register, // register bruges til at registrere inputfelter i formularen.
    handleSubmit, // handleSubmit håndterer formularens indsendelse og validering.
    reset, // reset bruges til at nulstille formularen (for eksempel efter en succesfuld indsendelse).
    formState: { errors }, // Henter eventuelle fejl, som måtte opstå under validering.
  } = useForm({
    resolver: yupResolver(schema), // Tilføjer yupResolver som valideringslogik til useForm.
  });

  // Returnerer de nødvendige funktioner og data til brug i formularen.
  return { register, handleSubmit, reset, errors };
};
