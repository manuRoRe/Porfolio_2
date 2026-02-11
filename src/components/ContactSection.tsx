import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "manuelromeroreyes.mrr@gmail.com",
    href: "mailto:manuelromeroreyes.mrr@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 635 52 08 51",
    href: "tel:+34635520851",
  },
  { icon: MapPin, label: "Ubicación", value: "Córdoba, España", href: null },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/manuRoRe", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/manuelromerodev/",
    label: "LinkedIn",
  },
];

const ContactSection = () => {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = "26464962-71e8-4d7d-b2cb-37a5d4a4a6bf";

    const payload = {
      ...formData,
      access_key: accessKey,
      subject: `Nuevo mensaje de porfolio: ${formData.name}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("¡Mensaje enviado!", {
          description: "Gracias Manuel, te responderé lo antes posible.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Error en el envío");
      }
    } catch (error) {
      toast.error("Vaya, algo ha fallado", {
        description: "Por favor, inténtalo de nuevo más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contacto"
      className="bg-secondary/20 overflow-hidden py-12 sm:py-24"
    >
      <div className="section-container px-4">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="font-display mb-4 text-3xl font-bold sm:text-5xl">
            Contacta <span className="gradient-text">Conmigo</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm sm:text-base">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estaré
            encantado de escucharte.
          </p>
        </motion.div>

        <div ref={formRef} className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Formulario: Cambiado de x: -30 a y: 20 */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card space-y-6 bg-gray-100 p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                disabled={isSubmitting}
                className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none disabled:opacity-50"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                disabled={isSubmitting}
                className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none disabled:opacity-50"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={5}
                disabled={isSubmitting}
                className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 w-full resize-none rounded-xl border px-4 py-3 text-sm transition-all focus:ring-2 focus:outline-none disabled:opacity-50"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 py-3 font-bold text-white transition-colors hover:bg-cyan-700 disabled:bg-gray-400"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 sm:space-y-10"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isFormInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card bg-gray-100 p-5 sm:p-6"
              >
                {item.href ? (
                  <a href={item.href} className="group flex items-center gap-4">
                    <div className="bg-primary/10 group-hover:bg-primary/20 rounded-xl p-3 transition-colors">
                      <item.icon className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm">
                        {item.label}
                      </div>
                      <div className="group-hover:text-primary font-medium break-all transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-xl p-3">
                      <item.icon className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-card bg-gray-100 p-6"
            >
              <h4 className="font-display mb-4 font-bold">Sígueme</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary/50 hover:bg-primary/10 hover:text-primary border-border hover:border-primary/30 rounded-xl border p-3 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
