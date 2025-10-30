import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

const schema = yup.object().shape({
    name: yup.string().required("name er påkrævet"),
    email: yup.string().required("email er påkrævet"),
    subject: yup.string().required(""),
    message: yup.string().required("message er påkrævet"),
});

export const useYupForm = () => {
   const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
  return { register, handleSubmit, reset, errors  }
}
