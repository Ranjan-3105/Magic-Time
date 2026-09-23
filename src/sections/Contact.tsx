import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading, Button } from "../components/ui";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // TODO: connect to real form backend
      const subject = encodeURIComponent(`New Event Inquiry from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nPhone: ${formData.phone}\nEvent Type: ${formData.eventType}\nDate: ${formData.date}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:info@magictimeevents.com?subject=${subject}&body=${body}`;
      
      setTimeout(() => setIsSuccess(false), 3000);
      setFormData({ name: "", phone: "", eventType: "", date: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-bg-primary relative overflow-hidden border-t border-border-subtle">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <SectionHeading eyebrow="CONTACT" title="Let's Create Your Dream Event" className="mb-10" />
            
            <p className="text-text-muted font-body mb-12 text-lg">
              Ready to turn your vision into reality? Reach out to us today to discuss your next big event.
            </p>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-accent-orange group-hover:border-accent-orange transition-colors">
                  <Phone className="w-5 h-5 text-accent-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg text-white mb-1">Call Us</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+918079707873" className="text-text-muted hover:text-accent-orange transition-colors">+91 8079707873</a>
                    <a href="tel:+917978172784" className="text-text-muted hover:text-accent-orange transition-colors">+91 7978172784</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366] group-hover:border-[#25D366] transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg text-white mb-1">WhatsApp</h4>
                  <a href="https://api.whatsapp.com/send?phone=918079707873" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[#25D366] transition-colors">+91 8079707873</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-[#E1306C] group-hover:border-[#E1306C] transition-colors">
                  <InstagramIcon className="w-5 h-5 text-[#E1306C] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg text-white mb-1">Instagram</h4>
                  <a href="https://instagram.com/magictimeevents" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-[#E1306C] transition-colors">@magictimeevents</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-accent-orange group-hover:border-accent-orange transition-colors">
                  <MapPin className="w-5 h-5 text-accent-orange group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg text-white mb-1">Location</h4>
                  <p className="text-text-muted">Bhubaneswar, Odisha, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-bg-secondary rounded-2xl p-8 md:p-10 border border-border-subtle"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-body text-sm text-text-muted">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-body text-sm text-text-muted">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="eventType" className="font-body text-sm text-text-muted">Event Type</label>
                    <select 
                      id="eventType" 
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleChange}
                      className="bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-colors appearance-none"
                    >
                      <option value="" disabled>Select an event type</option>
                      <option value="Corporate">Corporate</option>
                      <option value="College">College Fest</option>
                      <option value="Wedding & Private">Wedding & Private</option>
                      <option value="Concert & Festival">Concert & Festival</option>
                      <option value="Government">Government</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="font-body text-sm text-text-muted">Event Date (Approximate)</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-body text-sm text-text-muted">Additional Details</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-bg-primary border border-border-subtle rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-orange transition-colors resize-none"
                    placeholder="Tell us about your event vision, guest count, or any specific requirements..."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting || isSuccess}
                  className="mt-2 relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span 
                        key="submitting" 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </motion.span>
                    ) : isSuccess ? (
                      <motion.span 
                        key="success" 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-5 h-5" />
                        Sent Successfully!
                      </motion.span>
                    ) : (
                      <motion.span 
                        key="default" 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        Send Inquiry
                        <Send className="w-4 h-4 ml-1" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
