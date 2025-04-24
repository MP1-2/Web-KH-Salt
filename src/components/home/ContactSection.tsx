import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after the first trigger
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.success'),
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`heading-lg mb-6 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
              <span className="text-brand-red">{t('home.contact.title')}</span>
            </h2>
            <p className={`text-body mb-8 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-200' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
              Have questions about our products or services? Reach out to our team and we'll get back to you as soon as possible.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className={`flex items-center mb-4 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-200' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
                <div className="bg-brand-red rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Email Us</p>
                  <a href="mailto:info@khanhhoasalt.com" className="text-brand-red hover:underline">
                    info@khanhhoasalt.com
                  </a>
                </div>
              </div>
              
              <div className={`flex items-center mb-4 transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-400' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
                <div className="bg-brand-red rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Call Us</p>
                  <a href="tel:+84XXXXXXXXX" className="text-brand-red hover:underline">
                    +84 XX XXXX XXX
                  </a>
                </div>
              </div>
              
              <div className={`flex items-center transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-600' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}>
                <div className="bg-brand-red rounded-full p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Visit Us</p>
                  <p>Khanh Hoa, Vietnam</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form 
              onSubmit={handleSubmit} 
              className={`bg-gray-50 p-6 rounded-lg shadow-lg transition-all duration-1000 ${isVisible ? 'animate-fly-in-left animation-delay-400' : 'translate-x-[-100%] translate-y-[20px] opacity-0'}`}
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">{t('home.contact.name')}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">{t('home.contact.email')}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">{t('home.contact.subject')}</Label>
                  <Select
                    value={formData.subject}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{t('contact.generalInquiry')}</SelectItem>
                      <SelectItem value="partnership">{t('contact.partnership')}</SelectItem>
                      <SelectItem value="job">{t('contact.jobApplication')}</SelectItem>
                      <SelectItem value="other">{t('contact.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">{t('home.contact.message')}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-white"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full bg-brand-red hover:bg-red-700 text-white"
                >
                  {isSubmitting ? 'Sending...' : t('home.contact.submit')}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
