// FeaturesSection.jsx

import React from 'react';

const features = [
  {
    title: 'Real-time Chatbot Support',
    description: 'Engage in anonymous, judgment-free conversations with a trained AI-powered chatbot, available 24/7 for emotional support.',
    icon: '🤖',
  },
  {
    title: 'Personalized Mental Health Guidance',
    description: 'Receive customized mental health tips, coping strategies, and advice based on your emotional state, powered by AI.',
    icon: '🧠',
  },
  {
    title: 'Cognitive Behavioral Therapy (CBT) Tools',
    description: 'Access CBT-based exercises and techniques directly from the chatbot to help change negative thinking patterns and improve mental well-being.',
    icon: '🧘‍♀️',
  },
  {
    title: 'Self-Care Reminders',
    description: 'Get daily reminders and gentle nudges to practice self-care and mental wellness habits, like mindfulness, journaling, and relaxation.',
    icon: '💆‍♂️',
  },
  {
    title: 'Anxiety & Stress Relief Techniques',
    description: 'Receive instant coping strategies and techniques from the chatbot for managing anxiety, stress, and overwhelming emotions.',
    icon: '😌',
  },
  {
    title: 'Confidential & Secure Conversations',
    description: 'All interactions with the chatbot are completely anonymous and secure, providing a safe space for users to express their feelings.',
    icon: '🔒',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Mind Med Chatbot Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-4xl text-blue-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
