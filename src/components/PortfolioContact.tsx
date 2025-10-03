import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Linkedin } from "lucide-react";

const PortfolioContact = () => {
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let e: { [k: string]: string } = {};
    if (!data.name || data.name.length < 2) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Valid email required.";
    if (!data.message || data.message.length < 10) e.message = "Message should be at least 10 chars.";
    return e;
  };

  const onChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length === 0) {
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="container mx-auto my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contact</h2>
      <div className="bg-white rounded shadow p-6 md:p-8 flex flex-col md:flex-row gap-8 md:items-start animate-fade-in">
        <form className="flex-1 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`w-full rounded px-4 py-2 border ${errors.name ? "border-red-400" : "border-gray-300"} focus:outline-accent transition`}
              value={data.name}
              onChange={onChange}
              autoComplete="off"
            />
            {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`w-full rounded px-4 py-2 border ${errors.email ? "border-red-400" : "border-gray-300"} focus:outline-accent transition`}
              value={data.email}
              onChange={onChange}
              autoComplete="off"
            />
            {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              className={`w-full rounded px-4 py-2 border ${errors.message ? "border-red-400" : "border-gray-300"} focus:outline-accent transition`}
              value={data.message}
              rows={5}
              onChange={onChange}
            />
            {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-accent text-white font-semibold rounded hover:bg-primary shadow transition disabled:opacity-70"
            disabled={submitted}
          >
            {submitted ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="flex-1 max-w-xs">
          <div className="font-semibold text-gray-700 mb-2">Or reach out directly:</div>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-gray-500"><strong>Email:</strong>
              <a href="mailto:ritikchuchra1@gmail.com" className="text-accent hover:underline">ritikchuchra1@gmail.com</a>
            </span>
            <span className="flex items-center gap-2 text-gray-500"><strong>Phone:</strong>
              <a href="tel:+918685026736" className="text-accent hover:underline">+91-8685026736</a>
            </span>
            <span className="flex items-center gap-2 text-gray-500"><strong>LinkedIn:</strong>
              <a href="https://www.linkedin.com/in/ritikarora25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-primary hover:text-accent transition">
                <Linkedin size={18} />/ritikarora25
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioContact;
