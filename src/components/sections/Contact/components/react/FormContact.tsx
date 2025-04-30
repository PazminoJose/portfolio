import { cn } from "@/lib/utils";
import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { useState, type ChangeEvent, type FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type Message = {
  text: string;
  type: "error" | "success";
};

const initialFormValues = {
  name: "",
  email: "",
  message: ""
};

interface FormContactProps {
  locale: string;
}

export default function FormContact({ locale = "es" }: FormContactProps) {
  const [formData, setFormData] = useState<FormData>(initialFormValues);
  const [loading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const texts = {
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send"
    },
    es: {
      name: "Nombre",
      email: "Correo electrónico",
      message: "Mensaje",
      send: "Enviar"
    }
  }[locale]!;

  const errorsMessages = {
    en: {
      emptyName: "Name cannot be empty",
      emptyEmail: "Email cannot be empty",
      emptyMessage: "Message cannot be empty",
      invalidName: "Name cannot contain numbers"
    },
    es: {
      emptyName: "El nombre no puede estar vacío",
      emptyEmail: "El correo electrónico no puede estar vacío",
      emptyMessage: "El mensaje no puede estar vacío",
      invalidName: "El nombre no puede contener números"
    }
  }[locale]!;

  const validateForm = (data: FormData): Message[] => {
    const errors: Message[] = [];

    if (data.name.trim() === "") {
      errors.push({ text: errorsMessages.emptyName, type: "error" });
    } else if (/\d/.test(data.name)) {
      errors.push({ text: errorsMessages.invalidName, type: "error" });
    }

    if (data.email.trim() === "") {
      errors.push({ text: errorsMessages.emptyEmail, type: "error" });
    }

    if (data.message.trim() === "") {
      errors.push({ text: errorsMessages.emptyMessage, type: "error" });
    }
    setMessages(errors);
    return errors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm(formData).length > 0) return;
    setLoading(true);
    const res = await fetch("/api/sendEmail.json", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    setMessages([{ text: data.message, type: res.status === 200 ? "success" : "error" }]);
    setLoading(false);
    setFormData(initialFormValues);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <form className="flex w-full flex-col gap-5 sm:w-[40rem]" onSubmit={handleSubmit}>
        <Input
          label={texts.name}
          className="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input label={texts.email} type="email" name="email" value={formData.email} onChange={handleChange} />
        <Textarea label={texts.message} name="message" value={formData.message} onChange={handleChange} />
        <Button
          isLoading={loading}
          variant="faded"
          className="bg-slate-950/50 text-lg font-semibold uppercase"
          type="submit"
        >
          {texts.send}
        </Button>
      </form>
      <div className="mt-2 flex flex-col items-center gap-3">
        {messages.length > 0 &&
          messages.map((message) => (
            <p
              className={cn(
                "w-full rounded-lg p-3 text-center text-white",
                message.type === "error" ? "bg-red-500/50" : "bg-green-500/50"
              )}
              key={message.text}
            >
              {message.text}
            </p>
          ))}
      </div>
    </div>
  );
}
