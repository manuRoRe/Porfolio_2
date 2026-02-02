import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hola@developer.com",
    href: "mailto:hola@developer.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 600 000 000",
    href: "tel:+34600000000",
  },
  { icon: MapPin, label: "Ubicación", value: "Madrid, España", href: null },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const ContactSection = () => {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("¡Mensaje enviado!", {
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="bg-secondary/20 py-24">
      <div className="section-container">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display mb-4 text-4xl font-bold sm:text-5xl">
            Contacta <span className="gradient-text">Conmigo</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            ¿Tienes un proyecto en mente o simplemente quieres saludar? Estaré
            encantado de escucharte.
          </p>
        </motion.div>

        <div ref={formRef} className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card space-y-6 bg-gray-100 p-8"
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
                className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
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
                className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 w-full rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
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
                className="bg-secondary/50 border-border focus:border-primary focus:ring-primary/20 w-full resize-none rounded-xl border px-4 py-3 transition-all focus:ring-2 focus:outline-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>
            <button type="submit" className="btn-primary w-full gap-2">
              <Send className="h-5 w-5" />
              Enviar mensaje
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card bg-gray-100 p-6"
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
                      <div className="group-hover:text-primary font-medium transition-colors">
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
