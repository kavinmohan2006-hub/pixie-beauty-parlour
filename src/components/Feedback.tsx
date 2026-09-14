import React, { useState } from 'react';
import { Star, Send, MessageSquareHeart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getWhatsAppUrl } from '../data/contact';

import { supabase } from '../lib/supabase';

export const Feedback: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Automatically add to website (Supabase) if it's a good review
      if (rating >= 4) {
        await supabase.from('reviews').insert([
          { name, service, rating, review }
        ]);
        // Trigger instant update in Testimonials component
        window.dispatchEvent(new Event('reviewAdded'));
      }
    } catch (err) {
      console.error('Error saving review', err);
    }

    const text = `🌟 *New Customer Feedback* 🌟\n\n*Name:* ${name}\n*Service:* ${service}\n*Rating:* ${rating} Stars\n*Review:* ${review}`;
    window.open(getWhatsAppUrl(text), '_blank');
    
    // Reset form after submission
    setName('');
    setService('');
    setReview('');
    setRating(5);
    alert('Thank you! Your feedback has been sent and added to our website.');
  };

  return (
    <section id="feedback" className="py-20 bg-pink-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div ref={ref} className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="eyebrow-pink mb-4 inline-flex items-center gap-2">
            <MessageSquareHeart size={16} /> Share Your Experience
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold" style={{ color: '#0f0f2d', fontFamily: 'var(--font-display)' }}>
            Leave a <span className="pink-text">Review</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">We'd love to hear about your experience at Pixie Beauty Parlour!</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(233,30,140,0.06)] border border-pink-100 max-w-2xl mx-auto">
          <div className="flex flex-col gap-6">
            
            {/* Rating */}
            <div className="flex flex-col items-center mb-2">
              <label className="text-sm font-semibold text-gray-700 mb-3">How was your experience?</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="focus:outline-none transform transition-transform hover:scale-110"
                  >
                    <Star 
                      size={32} 
                      fill={(hoverRating || rating) >= star ? '#d4af37' : 'none'} 
                      stroke={(hoverRating || rating) >= star ? '#d4af37' : '#d1d5db'}
                      strokeWidth={1.5}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="fb-name" className="block text-sm font-medium text-gray-700 mb-1.5">Your Name</label>
              <input
                id="fb-name"
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Service */}
            <div>
              <label htmlFor="fb-service" className="block text-sm font-medium text-gray-700 mb-1.5">Service Taken (Optional)</label>
              <input
                id="fb-service"
                type="text"
                value={service}
                onChange={e => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                placeholder="e.g. Bridal Makeup, Facial, Haircut"
              />
            </div>

            {/* Review */}
            <div>
              <label htmlFor="fb-review" className="block text-sm font-medium text-gray-700 mb-1.5">Your Review</label>
              <textarea
                id="fb-review"
                required
                rows={4}
                value={review}
                onChange={e => setReview(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                placeholder="Tell us what you loved..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 w-full py-3.5 px-6 rounded-xl text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/30"
              style={{ background: 'linear-gradient(135deg,#e91e8c,#c2185b)' }}
            >
              <Send size={18} />
              Submit Feedback
            </button>
            <p className="text-center text-xs text-gray-400 mt-2">
              Your feedback will be sent directly to our official WhatsApp.
            </p>
          </div>
        </form>

      </div>
    </section>
  );
};
