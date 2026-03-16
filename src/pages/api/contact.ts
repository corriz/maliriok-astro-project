import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const honeypot = String(formData.get('company') || '').trim();

  if (honeypot) {
    return new Response('Spam detected.', { status: 400 });
  }

  const payload = {
    name: String(formData.get('name') || '').trim(),
    contact: String(formData.get('contact') || '').trim(),
    location: String(formData.get('location') || '').trim(),
    message: String(formData.get('message') || '').trim()
  };

  if (!payload.name || !payload.contact || !payload.message) {
    return new Response('Missing required fields.', { status: 400 });
  }

  /**
   * TODO:
   * - napojit Resend / SMTP / Mailchannels / vlastní backend
   * - přidat rate limiting podle IP
   * - přidat logování odeslání
   */
  console.log('Contact form submitted:', payload);

  return redirect('/kontakt?sent=1', 303);
};
