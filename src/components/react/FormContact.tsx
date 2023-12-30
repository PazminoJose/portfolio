import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";

export default function FormContact() {
  return (
    <form className="flex w-full flex-col gap-5  sm:w-[40rem]">
      <Input label="Name" className="" />
      <Input label="Email" type="email" className="" />
      <Textarea label="Message" className="" />
      <Button variant="faded" className="bg-slate-950/50 text-lg font-semibold uppercase">
        Send
      </Button>
    </form>
  );
}
