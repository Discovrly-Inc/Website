'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.enum(['general', 'partnership', 'early-access', 'other'], {
    errorMap: () => ({ message: 'Please select a subject' }),
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus('loading');
    try {
      // TODO (static hosting): Replace this fetch with a third-party email service
      // (e.g. Formspree, EmailJS, Resend) before deploying to Namecheap.
      // The /api/contact route is not included in the static export.
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-[#e2e8f0] bg-white text-[#0f172a] text-[16px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition';
  const errorClass = 'mt-1.5 text-[13px] text-red-500';
  const labelClass = 'block text-[14px] font-medium text-[#0f172a] mb-1.5';

  if (status === 'success') {
    return (
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-8 py-10 text-center">
        <div className="text-4xl mb-4">✓</div>
        <p className="text-[20px] font-semibold text-indigo-800">Message sent!</p>
        <p className="text-[16px] text-indigo-600 mt-2">
          Thanks for reaching out. We&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input
            id="name"
            {...register('name')}
            placeholder="Your name"
            className={inputClass}
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input
            id="email"
            {...register('email')}
            type="email"
            placeholder="you@company.com"
            className={inputClass}
          />
          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <select id="subject" {...register('subject')} className={inputClass}>
          <option value="">Select a subject…</option>
          <option value="general">General Inquiry</option>
          <option value="partnership">Partnership</option>
          <option value="early-access">Early Access</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          placeholder="Tell us what's on your mind…"
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className={errorClass}>{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-indigo-600 text-white font-semibold rounded-lg px-6 py-3.5 text-[16px] hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="text-[14px] text-red-500 text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
