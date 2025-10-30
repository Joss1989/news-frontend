import { useState } from "react";
import type { FormData } from "@/types/types"; // TypeScript typer for formular og genre
import { useYupForm } from "@/schema/Schema";
import { createContact } from "@/data/contactData";

const PostContactData = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  // useYupForm er en custom hook der returnerer værktøjer til formularstyring og validering
  const { register, handleSubmit, reset, errors } = useYupForm();

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);

    await createContact(data);

    setShowFeedback(true);
    reset();

    setTimeout(() => setShowFeedback(false), 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 text-center">Kontakt os</h2>

      <section>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Navn
        </label>
        <input
          {...register("name")}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#F05523] focus:outline-none"
          placeholder="Dit navn"
        />
        <p className="text-[#F05523] text-sm mt-1">{errors.name?.message}</p>
      </section>

      <section>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Email
        </label>
        <input
          {...register("email")}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#F05523] focus:outline-none"
          placeholder="Din email"
        />
        <p className="text-[#F05523] text-sm mt-1">{errors.email?.message}</p>
      </section>

      <section>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Emne
        </label>
        <input
          {...register("subject")}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#e89700] focus:outline-none"
          placeholder="Emne for beskeden"
        />
        <p className="text-[#e89700] text-sm mt-1">{errors.subject?.message}</p>
      </section>

      <section>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Besked
        </label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#e89700] focus:outline-none resize-none"
          placeholder="Skriv din besked her..."
        ></textarea>
        <p className="text-[#e89700] text-sm mt-1">{errors.message?.message}</p>
      </section>

      {showFeedback && (
        <section className="bg-green-100 text-green-700 text-center py-2 rounded-md font-semibold">
          Din besked er sendt!
        </section>
      )}

      <section className="text-center">
        <button
          type="submit"
          className="bg-[#e89700] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#e897009d] transition-colors"
        >
          Send besked
        </button>
      </section>
    </form>
  );
};

export default PostContactData;
