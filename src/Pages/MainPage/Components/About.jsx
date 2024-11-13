import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Mind Med</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              At Mind Med, our mission is to empower individuals with the tools and support they need to manage their mental health and well-being. We use AI-driven solutions to offer personalized guidance for overcoming anxiety, depression, and stress.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              We envision a world where mental health care is accessible, supportive, and proactive. Through innovative technologies and compassionate care, we aim to create a brighter, healthier future for all.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
            <p className="text-gray-600">
              At Mind Med, we value Empathy, Innovation, and Wellness. Our approach is grounded in understanding, leveraging cutting-edge AI to provide personalized support, and fostering a culture of mental health awareness and improvement.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Join Us</h3>
            <p className="text-gray-600">
              Join the Mind Med community and help us shape the future of mental health care. Together, we can break down barriers, provide real support, and create a safe, healing space for all individuals seeking better mental well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
