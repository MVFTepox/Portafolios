import { useState } from "react";
import { formSchema, FormSchema } from "@/model/formModel"; // tu archivo con zod
import { Input, BtnDecorationWithoutFuntion, Textarea } from "@/Components";

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormSchema>({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<FormSchema>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<FormSchema> = {};
      result.error.issues.forEach((err) => {
        const field = err.path[0] as keyof FormSchema;
        fieldErrors[field] = err.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    console.log("✅ Datos validados:", result.data);
    // Aquí puedes enviar los datos por email, API, etc.
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-10"
    >
      <Input
        type="text"
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        className="w-full"
      />
      <Input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        className="w-full"
      />
      <Textarea
        name="message"
        placeholder="Mensaje"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        className="w-full min-h-[120px]"
      />

      <BtnDecorationWithoutFuntion
        text="Enviar"
        type="submit"
        className="w-full px-4 py-3 border-b-2 border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded"
      />
    </form>
  );
};
