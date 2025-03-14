
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from "sonner";

interface CallbackFormProps {
  type: 'callback' | 'whatsapp';
}

const CallbackForm: React.FC<CallbackFormProps> = ({ type }) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      if (type === 'callback') {
        // In a real implementation, this would send data to a server
        console.log(`Callback request: Name: ${name}, Phone: ${phone}`);
        // Email would go to info@cgsmotors.com
      } else {
        // For WhatsApp, we would redirect to WhatsApp with a message
        const whatsappNumber = "+48881222856";
        const message = `Здравствуйте! Меня зовут ${name}. Прошу связаться со мной по номеру ${phone}.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
      }
      
      toast.success(t('form.success'));
      setName('');
      setPhone('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="text"
          placeholder={t('form.name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <div>
        <Input
          type="tel"
          placeholder={t('form.phone')}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full"
        />
      </div>
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cgs-red hover:bg-red-700 text-white"
      >
        {isSubmitting ? '...' : t('form.submit')}
      </Button>
    </form>
  );
};

export default CallbackForm;
