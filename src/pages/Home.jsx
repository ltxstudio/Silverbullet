import React from 'react';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import FAQCollapse from '../components/FAQCollapse';
import PricingCard from '../components/PricingCard';

const Home = () => (
  <div className="container mx-auto px-6 py-12 space-y-12">
    {/* Hero Section */}
    <section className="text-center">
      <h1 className="text-4xl font-bold">Silverbullet GitHub Desktop</h1>
      <p className="text-secondary my-4">
        Revolutionizing the way you manage repositories.
      </p>
    </section>

    {/* Features Section */}
    <section>
      <h2 className="text-3xl font-bold text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
        <FeatureCard title="Fast Sync" description="Sync your work effortlessly." />
        <FeatureCard title="Secure Environment" description="Work securely." />
      </div>
    </section>

    {/* Testimonials */}
    <section>
      <h2 className="text-3xl font-bold text-center">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <TestimonialCard text="Great experience!" author="Jane Doe" />
        <TestimonialCard text="Perfect tool for GitHub!" author="John Smith" />
      </div>
    </section>

    {/* FAQ Section */}
    <section>
      <h2 className="text-3xl font-bold text-center">FAQ</h2>
      <FAQCollapse
        question="What is Silverbullet?"
        answer="Silverbullet is a GitHub desktop tool."
      />
      <FAQCollapse
        question="Is it free?"
        answer="Yes, we offer a free plan."
      />
    </section>
  </div>
);

export default Home;
