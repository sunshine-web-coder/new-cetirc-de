'use client';
import React, { useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { validateForm } from '../FormValidation/formValidation';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function ContactUs() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const formRef = useRef();
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    tel: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      setMessage('');
      setError('');

      emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY).then(
        () => {
          setMessage('Nachricht erfolgreich gesendet!');
          setLoading(false);
        },
        error => {
          setError('Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut.');
          setLoading(false);
        }
      );
    } else {
      setMessage('');
      setError('Bitte beheben Sie die Fehler im Formular.');
    }
  };

  return (
    <>
      <section ref={ref} className="bg-[#CAF7CE] py-[50px] md:py-[100px] mt-[80px]">
        <div className="container">
          <motion.div className="grid md:grid-cols-2 xl:gap-[180px] lg:gap-[100px] gap-[50px]" variants={stagger} initial="hidden" animate={controls}>
            <motion.div className="md:text-left text-center" variants={fadeInUp}>
              <div className="subtitle">
                <span></span>
                <p>Kontaktieren Sie uns</p>
              </div>
              <h2 className="section-title !leading-[1.3] mb-[20px]">
                <span className="font-normal">Beschleunigen Sie Ihr Geschäft mit</span> <br /> Alice 1 & Alice 2
              </h2>
              <p>
                Wir haben die Palm-ID-Dienste Alice 1 und 2 entwickelt, um Ihr Geschäft zu optimieren, indem wir Transaktionen, Zahlungen und Zugangskontrolle reibungslos und sicher gestalten. Um unsere Hardware- oder Softwareprodukte für Unternehmen zu erhalten, senden Sie uns bitte eine direkte
                Nachricht, und wir führen Sie durch den gesamten Prozess.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <form ref={formRef} onSubmit={handleSubmit} className="contact_form grid gap-[20px]">
                {message && <div className="text-green-500 text-base border border-[#C5F1C9] p-2 px-4 rounded-md text-center bg-[#C5F1C9]">{message}</div>}
                {error && <div className="text-red-500 text-base border border-[#FFE2E5] p-2 px-4 rounded-md text-center bg-[#FFE2E5]">{error}</div>}
                <div className="grid grid-cols-2 md:gap-[20px] gap-[10px]">
                  <div className="form-group">
                    <input
                      className={`border border-[#8E8E8E] bg-transparent md:rounded-[11px] rounded-[6px] md:leading-[50px] leading-[40px] px-[20px] w-full text-[16px] font-normal ${errors.f_name ? 'error' : ''}`}
                      type="text"
                      name="f_name"
                      id="f_name"
                      placeholder="Vorname"
                      value={formData.f_name}
                      onChange={handleChange}
                      required
                    />
                    {errors.f_name && <p className="text-base mt-1 text-red-500">{errors.f_name}</p>}
                  </div>
                  <div className="form-group">
                    <input
                      className={`border border-[#8E8E8E] bg-transparent md:rounded-[11px] rounded-[6px] md:leading-[50px] leading-[40px] px-[20px] w-full text-[16px] font-normal ${errors.l_name ? 'error' : ''}`}
                      type="text"
                      name="l_name"
                      id="l_name"
                      placeholder="Nachname"
                      value={formData.l_name}
                      onChange={handleChange}
                      required
                    />
                    {errors.l_name && <p className="text-base mt-1 text-red-500">{errors.l_name}</p>}
                  </div>
                </div>
                <div className="grid">
                  <div className="form-group">
                    <input
                      className={`border border-[#8E8E8E] bg-transparent md:rounded-[11px] rounded-[6px] md:leading-[50px] leading-[40px] px-[20px] w-full text-[16px] font-normal ${errors.email ? 'error' : ''}`}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="E-Mail eingeben"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <p className="text-base mt-1 text-red-500">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid">
                  <div className="form-group">
                    <input
                      className="border border-[#8E8E8E] bg-transparent md:rounded-[11px] rounded-[6px] md:leading-[50px] leading-[40px] px-[20px] w-full text-[16px] font-normal"
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Telefonnummer (optional)"
                      value={formData.tel}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid">
                  <div className="form-group">
                    <textarea
                      className={`border border-[#8E8E8E] bg-transparent rounded-[11px] p-[20px] w-full text-[16px] font-normal h-[180px] ${errors.message ? 'error' : ''}`}
                      name="message"
                      id="message"
                      placeholder="Schreiben Sie hier Ihre Nachricht"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {errors.message && <p className="text-base mt-1 text-red-500">{errors.message}</p>}
                  </div>
                </div>
                <div className="grid justify-end">
                  <div className="form-group">
                    <button className={`primary-btn ${loading ? 'cursor-not-allowed !bg-[#575757] !border-[#575757] hover:text-white' : ' '}`} type="submit" disabled={loading}>
                      {loading ? 'Einreichen...' : 'Einreichen'}
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
