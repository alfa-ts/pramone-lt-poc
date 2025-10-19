"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    alert("Form submit placeholder");
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Parašykite mums</h2>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="space-y-4 bg-white rounded-xl shadow-md p-6 border-t-4 border-yellow-500"
      >
        <div>
          <input type="text" name="name" placeholder="Vardas ir pavardė *" required className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div>
          <input type="email" name="email" placeholder="El. paštas *" required className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div>
          <input type="tel" name="phone" placeholder="Telefonas *" required className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div>
          <input type="text" name="company" placeholder="Įmonė *" required className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div>
          <textarea name="message" placeholder="Žinutė *" required rows={8} className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div>
          <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md">Siųsti žinutę</button>
        </div>
      </form>
    </div>
  );
}


