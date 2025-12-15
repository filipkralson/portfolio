'use client';

import React, { useState } from 'react';
import { SendEmail } from '@/lib/contactFormAction';
import { Motion } from '@/components/ui/motion';
import { useTranslation } from 'react-i18next';

type FormData = {
  email: string;
  name: string;
  description: string;
};

const ContactFormBase = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    description: '',
  });

  const [currentInput, setCurrentInput] = useState('');
  const [step, setStep] = useState(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [inputErrorMessage, setInputErrorMessage] = useState('');

  const handleSubmit = async () => {
    const { name, email, description } = formData;
    setFormStatus('loading');

    try {
      const response = await SendEmail({ name, email, description });

      if (response.success) {
        setFormStatus('success');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setInputErrorMessage(error.message || t('contact.terminal.unknownError'));
      } else {
        setInputErrorMessage(t('contact.terminal.unknownError'));
      }
      setFormStatus('error');
    }
  };

  const handleEnter = async () => {
    if (!currentInput.trim()) {
      setInputErrorMessage(t('contact.terminal.emptyError'));
      return;
    }

    if (step === 0) {
      if (!currentInput.includes('@')) {
        setInputErrorMessage(t('contact.terminal.emailError'));
        return;
      }
      setFormData((prev) => ({ ...prev, email: currentInput }));
    } else if (step === 1) {
      setFormData((prev) => ({ ...prev, name: currentInput }));
    } else if (step === 2) {
      setFormData((prev) => ({ ...prev, description: currentInput }));
    }

    if (step === 3) {
      await handleSubmit();
    } else {
      setStep((prev) => prev + 1);
    }

    setInputErrorMessage('');
    setCurrentInput('');
  };

  const handleRestart = () => {
    setFormData({ email: '', name: '', description: '' });
    setCurrentInput('');
    setStep(0);
    setInputErrorMessage('');
    setFormStatus('idle');
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center md:text-2xl text-md font-mono"
      id="contact-form">
      <div className="relative flex flex-row items-center justify-center bg-gray-800 w-full p-2">
        <div className="absolute left-4 flex gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <p className="md:text-md text-sm text-white">{t('contact.terminal.header')}</p>
      </div>

      <div className="bg-gray-400/25 backdrop-blur-sm p-6 w-full shadow-lg">
        <p className="font-bold text-green-700 mb-5">
          client@portfolio:~$ <span className="text-gray-700">./send.sh &#8629;</span>
        </p>
        <p className="font-bold mb-5">{t('contact.terminal.intro')}</p>
        <div className="space-y-4">
          <div>
            <p className={`${formData.email ? 'text-viridian' : 'text-black'}`}>
              {formData.email ? '' : '1.'} {t('contact.terminal.step1')}
            </p>
            {formData.email && <p className="ml-2 text-viridian">✔ {formData.email}</p>}
          </div>
          <div>
            <p className={`${formData.name ? 'text-viridian' : 'text-black'}`}>
              {formData.name ? '' : '2.'} {t('contact.terminal.step2')}
            </p>
            {formData.name && <p className="ml-2 text-viridian">✔ {formData.name}</p>}
          </div>
          <div>
            <p className={`${formData.description ? 'text-viridian' : 'text-black'}`}>
              {formData.description ? '' : '3.'} {t('contact.terminal.step3')}
            </p>
            {formData.description && <p className="ml-2 text-viridian">✔ {formData.description}</p>}
          </div>

          {formStatus != 'success' && step < 3 && (
            <div className="flex md:flex-row flex-col mt-4 justify-start md:items-end">
              <div>
                <span>→</span>
                <span className="ml-2 opacity-50">
                  {step === 0
                    ? '~ Email:'
                    : step === 1
                      ? '~ Jméno a příjmení:'
                      : step === 2
                        ? '~ Popis:'
                        : ''}
                </span>
              </div>
              <input
                type="text"
                name="input"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)} // Update current input
                onKeyDown={(e) => e.key === 'Enter' && handleEnter()} // Handle Enter key
                className="ml-2 bg-azure focus:outline-none text-gray-700 px-1 md:w-1/2"
              />
              <p className="ml-2 opacity-50 text-sm">{t('contact.terminal.enterHint')}</p>
            </div>
          )}

          {inputErrorMessage && <p className="text-red-500 text-sm">{inputErrorMessage}</p>}

          {formStatus === 'loading' && <div>{t('contact.terminal.sending')}</div>}

          {formStatus === 'success' && (
            <div className="text-viridian">
              <p className="font-bold">{t('contact.terminal.success')}</p>
            </div>
          )}

          {formStatus === 'error' && (
            <div className="text-red-500">
              <p className="font-bold">{t('contact.terminal.error')}</p>
            </div>
          )}

          {step === 3 && formStatus === 'idle' && (
            <div className="flex gap-2 mt-4">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-cambridgeBlue hover:bg-mintGreen hover:text-gray-700 transition border-viridian border-2 text-white rounded">
                {t('contact.terminal.buttons.submit')}
              </button>
              <button
                onClick={handleRestart}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white border-viridian border-2 rounded">
                {t('contact.terminal.buttons.reset')}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default function ContactForm() {
  return (
    <Motion direction="up" delay={0.1} duration={0.3} className="w-full md:max-w-7xl">
      <ContactFormBase />
    </Motion>
  );
}
