import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=918079707873"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 cursor-pointer pointer-events-auto group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-bg-secondary text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-border-subtle">
        Chat with us
      </span>
    </a>
  );
}
