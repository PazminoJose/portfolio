import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function FormContact() {
  return (
    <form className="flex w-full flex-col gap-5  sm:w-[40rem]">
      <Input label="Nombre" className="" />
      <Input label="Correo" type="email" className="" />
      <Textarea label="Mensaje" className="" />
      <Button variant="faded" className="bg-slate-950/50 text-lg font-semibold uppercase">
        Send
      </Button>
    </form>
  );
}
