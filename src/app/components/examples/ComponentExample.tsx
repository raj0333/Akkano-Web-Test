/**
 * This file demonstrates how to use the UI components library
 * You can copy any of these examples and modify them for your needs
 */

import {
  Button,
  Card,
  Input,
  Textarea,
  Section,
  SectionTitle,
  Grid,
  FeatureCard,
  PricingCard,
  TestimonialCard,
  Accordion,
  CheckList,
  Badge,
  IconBox,
  StepCard,
  Modal,
  FloatingButton,
} from '../ui';

import {
  Heart,
  Shield,
  Users,
  Mail,
  Phone,
  MessageCircle,
  Calendar,
  FileCheck,
  CheckCircle,
} from 'lucide-react';
import { useState } from 'react';

export function ComponentExample() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Buttons Example */}
      <Section background="white" padding="lg">
        <SectionTitle title="Button Examples" subtitle="Different button variants and sizes" />

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" icon={<Mail className="w-4 h-4" />}>
            With Icon
          </Button>
        </div>
      </Section>

      {/* Cards Example */}
      <Section background="gray" padding="lg">
        <SectionTitle title="Card Examples" subtitle="Different card variants" />

        <Grid cols={3} gap="lg">
          <Card variant="default" padding="lg">
            <h3 className="text-xl font-bold mb-2">Default Card</h3>
            <p className="text-gray-600">Simple white background</p>
          </Card>

          <Card variant="bordered" padding="lg" hoverable>
            <h3 className="text-xl font-bold mb-2">Bordered Card</h3>
            <p className="text-gray-600">With border and hover effect</p>
          </Card>

          <Card variant="elevated" padding="lg">
            <h3 className="text-xl font-bold mb-2">Elevated Card</h3>
            <p className="text-gray-600">With shadow</p>
          </Card>
        </Grid>
      </Section>

      {/* Form Inputs Example */}
      <Section background="white" padding="lg">
        <SectionTitle title="Form Components" subtitle="Input fields with various states" />

        <div className="max-w-2xl mx-auto space-y-6">
          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            icon={<Mail className="w-4 h-4" />}
            fullWidth
          />

          <Input
            label="Password"
            type="password"
            error="Password must be at least 8 characters"
            fullWidth
          />

          <Input
            label="Phone Number"
            type="tel"
            helperText="Format: (123) 456-7890"
            icon={<Phone className="w-4 h-4" />}
            fullWidth
          />

          <Textarea
            label="Message"
            rows={4}
            placeholder="Tell us about yourself..."
            helperText="Maximum 500 characters"
            fullWidth
          />

          <Button variant="primary" fullWidth>Submit Form</Button>
        </div>
      </Section>

      {/* Feature Cards Example */}
      <Section background="gray" padding="lg">
        <SectionTitle title="Feature Cards" subtitle="Showcase your product features" />

        <Grid cols={3} gap="lg">
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Secure & Safe"
            description="Your data is protected with enterprise-grade security"
            layout="vertical"
            delay={0}
          />

          <FeatureCard
            icon={<Users className="w-8 h-8" />}
            title="Collaborative"
            description="Work together with your team seamlessly"
            layout="vertical"
            delay={0.1}
          />

          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="Customer First"
            description="We prioritize your satisfaction above all"
            layout="vertical"
            delay={0.2}
          />
        </Grid>

        <div className="mt-12 space-y-4">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Professional Service"
            description="Get expert guidance from certified professionals"
            layout="horizontal"
            iconVariant="primary"
          />

          <FeatureCard
            icon={<Users className="w-6 h-6" />}
            title="Team Collaboration"
            description="Built for teams of all sizes"
            layout="horizontal"
            iconVariant="primary"
          />
        </div>
      </Section>

      {/* Pricing Cards Example */}
      <Section background="white" padding="lg">
        <SectionTitle title="Pricing Plans" subtitle="Choose the plan that works for you" />

        <Grid cols={2} gap="lg" className="max-w-5xl mx-auto">
          <PricingCard
            name="Basic Plan"
            price="$25"
            period="month"
            description="Perfect for individuals"
            features={[
              '1-hour consultation',
              'Email support',
              'Basic features',
              'Single user',
            ]}
            buttonText="Get Started"
            onButtonClick={() => alert('Basic plan selected')}
          />

          <PricingCard
            name="Pro Plan"
            price="$127"
            period="month"
            description="For professionals"
            features={[
              'Up to 4 sessions',
              'Priority support',
              'All features',
              'Team access',
              'Advanced analytics',
              'Custom integrations',
            ]}
            popular={true}
            buttonText="Start Free Trial"
            onButtonClick={() => alert('Pro plan selected')}
            delay={0.2}
          />
        </Grid>
      </Section>

      {/* Testimonials Example */}
      <Section background="gradient" padding="lg">
        <SectionTitle title="Customer Testimonials" subtitle="See what our clients say" />

        <Grid cols={3} gap="lg">
          <TestimonialCard
            name="Sarah Johnson"
            role="CEO, TechCorp"
            content="This service transformed our workflow. Highly recommended!"
            rating={5}
            delay={0}
          />

          <TestimonialCard
            name="Michael Chen"
            role="Entrepreneur"
            content="Professional, efficient, and reliable. Couldn't ask for more."
            rating={5}
            delay={0.1}
          />

          <TestimonialCard
            name="Emily Davis"
            role="Marketing Director"
            content="The best decision we made for our business this year."
            rating={5}
            delay={0.2}
          />
        </Grid>
      </Section>

      {/* Steps/Process Example */}
      <Section background="white" padding="lg">
        <SectionTitle title="How It Works" subtitle="Our simple 4-step process" />

        <Grid cols={4} gap="lg">
          <StepCard
            icon={<Calendar className="w-10 h-10" />}
            title="Book Appointment"
            description="Schedule your consultation"
            stepNumber="01"
            showConnector={true}
            delay={0}
          />

          <StepCard
            icon={<Users className="w-10 h-10" />}
            title="Meet Expert"
            description="Talk with our professionals"
            stepNumber="02"
            showConnector={true}
            delay={0.1}
          />

          <StepCard
            icon={<FileCheck className="w-10 h-10" />}
            title="Get Plan"
            description="Receive customized solution"
            stepNumber="03"
            showConnector={true}
            delay={0.2}
          />

          <StepCard
            icon={<CheckCircle className="w-10 h-10" />}
            title="Achieve Goals"
            description="Reach your objectives"
            stepNumber="04"
            showConnector={false}
            delay={0.3}
          />
        </Grid>
      </Section>

      {/* Accordion Example */}
      <Section background="gray" padding="lg">
        <SectionTitle title="Frequently Asked Questions" subtitle="Find answers to common questions" />

        <div className="max-w-4xl mx-auto">
          <Accordion
            items={[
              {
                title: 'What is your service about?',
                content: 'We provide professional mediation and conflict resolution services to help couples and families build stronger relationships.',
              },
              {
                title: 'How long does it take?',
                content: 'The duration varies based on your specific situation. Most clients see results within 2-3 sessions.',
              },
              {
                title: 'Is it confidential?',
                content: 'Yes, absolutely. All sessions and communications are strictly confidential.',
              },
              {
                title: 'What are your pricing options?',
                content: 'We offer flexible pricing starting at $25 for an initial consultation, with monthly plans available.',
              },
            ]}
            allowMultiple={false}
          />
        </div>
      </Section>

      {/* Other Components */}
      <Section background="white" padding="lg">
        <SectionTitle title="Other Components" subtitle="Badges, Icons, and Lists" />

        <div className="space-y-8">
          {/* Badges */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="secondary" size="lg">Large Badge</Badge>
            </div>
          </div>

          {/* Icon Boxes */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Icon Boxes</h3>
            <div className="flex flex-wrap gap-4">
              <IconBox icon={<Heart className="w-6 h-6" />} variant="primary" />
              <IconBox icon={<Shield className="w-6 h-6" />} variant="secondary" />
              <IconBox icon={<Users className="w-6 h-6" />} variant="outline" />
              <IconBox icon={<Mail className="w-8 h-8" />} variant="primary" size="lg" shape="square" />
            </div>
          </div>

          {/* Check Lists */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Check Lists</h3>
            <CheckList
              items={[
                'Professional service guaranteed',
                'Fast and reliable delivery',
                '24/7 customer support',
                'Money-back guarantee',
              ]}
              iconColor="primary"
            />
          </div>
        </div>
      </Section>

      {/* Modal Example */}
      <Section background="gray" padding="lg">
        <SectionTitle title="Modal Example" subtitle="Click the button to open modal" />

        <div className="text-center">
          <Button variant="primary" onClick={() => setIsModalOpen(true)}>
            Open Modal
          </Button>
        </div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Example Modal"
          size="md"
        >
          <div className="space-y-4">
            <p className="text-gray-700">
              This is an example modal dialog. You can put any content here.
            </p>
            <Input
              label="Your Name"
              placeholder="Enter your name"
              fullWidth
            />
            <Textarea
              label="Message"
              placeholder="Type your message..."
              rows={4}
              fullWidth
            />
            <div className="flex gap-3 justify-end">
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                Submit
              </Button>
            </div>
          </div>
        </Modal>
      </Section>

      {/* Floating Button */}
      <FloatingButton
        icon={<MessageCircle className="w-7 h-7" />}
        onClick={() => alert('Chat opened!')}
        badge="3"
        position="bottom-right"
      />
    </div>
  );
}
