
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import BackButton from "@/components/common/BackButton";
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactPage = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    <Layout>
      <div className="pt-20 pb-20 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-12">
          <BackButton to="/" label={t('nav.backHome')} />
            <h1 className="heading-lg mb-4">
              <span className="text-brand-red">{t('nav.contact')}</span>
            </h1>
            <p className="text-body max-w-2xl mx-auto">
              Have questions about our products or services? Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white shadow-md rounded-lg p-6 h-full">
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <MapPin className="h-6 w-6 text-brand-red mr-4 shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Office Address</p>
                      <p>Khanh Hoa Province,</p>
                      <p>Vietnam</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Mail className="h-6 w-6 text-brand-red mr-4 shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Email Us</p>
                      <a href="mailto:info@khanhhoasalt.com" className="text-brand-red hover:underline">
                        info@khanhhoasalt.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <Phone className="h-6 w-6 text-brand-red mr-4 shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Call Us</p>
                      <a href="tel:+84XXXXXXXXX" className="text-brand-red hover:underline">
                        +84 XX XXXX XXX
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-semibold mb-4">Business Hours</h4>
                  <p className="mb-1">Monday - Friday: 8:00 AM - 5:00 PM</p>
                  <p className="mb-1">Saturday: 9:00 AM - 12:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6 border-b pb-2">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t('home.contact.name')}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
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
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">{t('home.contact.subject')}</Label>
                    <Select
                      value={formData.subject}
                      onValueChange={handleSelectChange}
                    >
                      <SelectTrigger>
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
                      rows={8}
                      required
                    />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="bg-brand-red hover:bg-red-700 text-white w-full md:w-auto">
                    {isSubmitting ? 'Sending...' : t('home.contact.submit')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
