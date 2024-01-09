import type { APIContext, APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }: APIContext) => {
  const { email, message, name } = await request.json();
  const emailTo = import.meta.env.EMAIL as string;
  console.log({ email, message, name });

  if (!email || !message || !name)
    return new Response(null, {
      status: 404,
      statusText: "Not found"
    });

  const send = await resend.emails.send({
    from: "Contact <onboarding@resend.dev>",
    to: emailTo,
    subject: `Contact Email from ${name}`,
    html: `
    <p>${message}</p
    <p>Email: ${email}
    `
  });

  if (send.data !== null) {
    return new Response(
      JSON.stringify({
        message: "Email send successfully"
      }),
      {
        status: 200,
        statusText: "OK"
      }
    );
  }

  return new Response(
    JSON.stringify({
      message: "An error has ocurred, please try again"
    }),
    {
      status: 500,
      statusText: "Server Error"
    }
  );
};
