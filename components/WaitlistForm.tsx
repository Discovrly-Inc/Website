'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const personalDomains = [
  'gmail.com','yahoo.com','hotmail.com','outlook.com','icloud.com',
  'aol.com','msn.com','live.com','me.com','mac.com','googlemail.com',
  'ymail.com','protonmail.com','pm.me','zoho.com','mail.com',
];

const schema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address')
    .refine((val) => {
      const domain = val.split('@')[1]?.toLowerCase();
      return !personalDomains.includes(domain);
    }, 'Please use your work email address'),
});

type FormData = z.infer<typeof schema>;

export default function WaitlistForm() {
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
      // TODO (static hosting): Replace this fetch with a third-party form service
      // (e.g. Formspree, Loops, EmailJS) before deploying to Namecheap.
      // The /api/waitlist route is not included in the static export.
      const res = await fetch('/api/waitlist', {
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

  if (status === 'success') {
    return (
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-8 py-6 text-center max-w-md mx-auto">
        <div className="text-3xl mb-3">🎉</div>
        <p className="text-[18px] font-semibold text-indigo-800">
          You&apos;re on the list!
        </p>
        <p className="text-[15px] text-indigo-600 mt-1">We&apos;ll be in touch.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <input
            {...register('email')}
            type="email"
            placeholder="Enter your work email"
            className="w-full px-5 py-3.5 rounded-lg border border-[#e2e8f0] bg-white text-[#0f172a] text-[16px] placeholder:text-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
          {errors.email && (
            <p className="mt-1.5 text-[13px] text-red-500">{errors.email.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-indigo-600 text-white font-semibold rounded-lg px-6 py-3.5 text-[16px] hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
        >
          {status === 'loading' ? 'Joining…' : 'Get Early Access'}
        </button>
      </div>
      {status === 'error' && (
        <p className="mt-3 text-[14px] text-red-500 text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
