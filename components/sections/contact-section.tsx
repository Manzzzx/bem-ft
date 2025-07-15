"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/layout/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { campusInfo } from "@/lib/constants/info";

interface ToastProps {
  message: string;
  type: "success" | "error";
  show: boolean;
  onClose: () => void;
}

function Toast({ message, type, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform ${
      show ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
    } ${
      type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`}>
      <div className="flex items-center space-x-2">
        {type === 'success' ? (
          <CheckCircle className="w-5 h-5" />
        ) : (
          <AlertCircle className="w-5 h-5" />
        )}
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success" as "success" | "error",
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    const section = document.getElementById("kontak");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ show: true, message, type });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const success = Math.random() > 0.2;
      if (success) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        showToast("Pesan berhasil dikirim! Kami akan segera menghubungi Anda.", "success");
      } else {
        showToast("Gagal mengirim pesan. Silakan coba lagi.", "error");
      }
    } catch (error) {
      showToast("Terjadi kesalahan. Silakan coba lagi.", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: campusInfo.contact.email,
      delay: "delay-100",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: campusInfo.contact.phone,
      delay: "delay-200",
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: campusInfo.contact.address,
      delay: "delay-300",
    },
  ];

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={() => setToast(prev => ({ ...prev, show: false }))}
      />
      
      <section 
        id="kontak" 
        className="py-16 pb-0 bg-background scroll-mt-20 overflow-hidden"
      >
        <Container>
          <div className={`transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                Hubungi Kami
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ada pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Contact Info */}
            <div className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}>
              <div className="space-y-4">
                <div className="transform transition-all duration-700">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {campusInfo.abbreviation}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    {campusInfo.faculty}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {campusInfo.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={index} 
                        className={`flex items-start space-x-4 transform transition-all duration-700 ${
                          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        } ${item.delay}`}
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center transition-colors duration-300 flex-shrink-0 mt-1">
                          <Icon className="w-5 h-5 text-primary transition-transform duration-300" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground transition-colors duration-300">
                            {item.label}
                          </p>
                          <p className="text-foreground transition-colors duration-300 leading-relaxed">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}>
              <Card className="transition-shadow duration-300">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                          placeholder="nama@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                        Subjek
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
                        placeholder="Tentang apa pesan Anda?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 transition-colors duration-300">
                        Pesan
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-all duration-300"
                        placeholder="Tulis pesan Anda di sini..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Mengirim...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2 transition-transform duration-300" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}