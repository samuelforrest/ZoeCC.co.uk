import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export function WhatsAppButton({ 
  phoneNumber, 
  message = '', 
  className = '', 
  variant = 'primary' 
}: WhatsAppButtonProps) {
  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/\s/g, '').replace('+44', '44');
  };

  const whatsAppUrl = `https://wa.me/${formatPhoneNumber(phoneNumber)}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  const baseClasses = "inline-flex items-center justify-center gap-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-elegant",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border shadow-soft hover:shadow-elegant"
  };

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      <MessageCircle size={20} />
      <span>WhatsApp Zoe</span>
    </a>
  );
}

export function WhatsAppLink({ phoneNumber, className = '' }: { phoneNumber: string; className?: string }) {
  const formatPhoneNumber = (phone: string) => {
    return phone.replace(/\s/g, '').replace('+44', '44');
  };

  const whatsAppUrl = `https://wa.me/${formatPhoneNumber(phoneNumber)}`;

  return (
    <a
      href={whatsAppUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`font-medium text-primary hover:text-primary/80 transition-colors ${className}`}
    >
      {phoneNumber}
    </a>
  );
}