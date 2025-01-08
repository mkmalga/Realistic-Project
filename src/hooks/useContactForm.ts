import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real application, you would send this data to your backend
      // For demonstration, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Send WhatsApp notification
      const whatsappNumber = "91123456789"; // Replace with your actual WhatsApp number
      const whatsappMessage = `New Contact Form Submission:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      // Reset form and show success message
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,
    isSubmitting,
    isSuccess,
    handleSubmit
  };
};