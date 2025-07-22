import { useState } from "react";
import { formSchema, FormSchema } from "@/model/formModel";
import { Input, BtnDecorationWithoutFuntion, Textarea } from "@/Components";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_fly6je7";
const TEMPLATE_ID = "template_bct1odf";
const PUBLIC_KEY = "6DFHno_-AKuELhjKS";

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormSchema>({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<Partial<FormSchema>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    setStatus("sending");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Limpia el formulario
    } catch (err) {
      console.error("❌ Error al enviar:", err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full px-4 sm:px-6 md:px-8 lg:px-10"
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
        text={status === "sending" ? "Enviando..." : "Enviar"}
        type="submit"
        className="w-full px-4 py-3 border-b-2 border-black hover:bg-black hover:text-white transition duration-300 ease-in-out rounded"
      />

      {status === "success" && (
        <p className="text-green-600 text-sm">✅ Mensaje enviado con éxito.</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm">❌ Ocurrió un error al enviar el mensaje.</p>
      )}
    </form>
  );
};
