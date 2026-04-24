# UI Components Library - Usage Guide

Complete reusable component library for the Landing Page design.

## Table of Contents
- [Button](#button)
- [Card](#card)
- [Input & Textarea](#input--textarea)
- [Container & Section](#container--section)
- [Badge](#badge)
- [IconBox](#iconbox)
- [FeatureCard](#featurecard)
- [PricingCard](#pricingcard)
- [TestimonialCard](#testimonialcard)
- [Accordion](#accordion)
- [SectionTitle](#sectiontitle)
- [StepCard](#stepcard)
- [FloatingButton](#floatingbutton)
- [Modal](#modal)
- [Grid](#grid)
- [CheckList](#checklist)

---

## Button

Versatile button component with multiple variants and sizes.

### Props
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `icon`: ReactNode (optional)
- `fullWidth`: boolean (default: false)
- `animate`: boolean (default: true)

### Usage
```tsx
import { Button } from './components/ui/Button';
import { Send } from 'lucide-react';

// Primary Button
<Button variant="primary">Click Me</Button>

// With Icon
<Button variant="primary" icon={<Send />}>
  Send Message
</Button>

// Full Width Outline
<Button variant="outline" fullWidth>
  Learn More
</Button>

// Small Ghost Button
<Button variant="ghost" size="sm">
  Cancel
</Button>
```

---

## Card

Flexible card component with different styles.

### Props
- `variant`: 'default' | 'bordered' | 'elevated' | 'gradient' (default: 'default')
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
- `hoverable`: boolean (default: false)
- `animate`: boolean (default: true)

### Usage
```tsx
import { Card } from './components/ui/Card';

// Basic Card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>

// Elevated Card with Hover
<Card variant="elevated" hoverable>
  Content
</Card>

// Gradient Card
<Card variant="gradient" padding="lg">
  Beautiful gradient background
</Card>
```

---

## Input & Textarea

Form input components with labels and error states.

### Props
- `label`: string (optional)
- `error`: string (optional)
- `helperText`: string (optional)
- `fullWidth`: boolean (default: false)
- `icon`: ReactNode (optional, Input only)

### Usage
```tsx
import { Input, Textarea } from './components/ui';
import { Mail } from 'lucide-react';

// Input with Icon
<Input
  label="Email Address"
  type="email"
  icon={<Mail />}
  placeholder="john@example.com"
  fullWidth
/>

// Input with Error
<Input
  label="Password"
  type="password"
  error="Password is required"
  fullWidth
/>

// Textarea
<Textarea
  label="Message"
  rows={4}
  helperText="Max 500 characters"
  fullWidth
/>
```

---

## Container & Section

Layout components for consistent spacing.

### Container Props
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full' (default: 'xl')

### Section Props
- `background`: 'white' | 'gray' | 'dark' | 'gradient' | 'green' (default: 'white')
- `padding`: 'none' | 'sm' | 'md' | 'lg' (default: 'lg')
- `containerSize`: 'sm' | 'md' | 'lg' | 'xl' | 'full' (default: 'xl')

### Usage
```tsx
import { Container, Section } from './components/ui';

// Container Only
<Container size="lg">
  <h1>Content</h1>
</Container>

// Section with Background
<Section background="gradient" padding="lg">
  <h2>Section Title</h2>
  <p>Section content</p>
</Section>

// Dark Section
<Section id="contact" background="dark" containerSize="md">
  Contact form
</Section>
```

---

## Badge

Small label component for status or tags.

### Props
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')

### Usage
```tsx
import { Badge } from './components/ui/Badge';

<Badge variant="success">Active</Badge>
<Badge variant="warning" size="sm">Pending</Badge>
<Badge variant="primary">New</Badge>
```

---

## IconBox

Icon container with various styles.

### Props
- `icon`: ReactNode (required)
- `variant`: 'primary' | 'secondary' | 'outline' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `shape`: 'square' | 'circle' (default: 'circle')

### Usage
```tsx
import { IconBox } from './components/ui/IconBox';
import { Heart } from 'lucide-react';

<IconBox 
  icon={<Heart className="w-6 h-6" />} 
  variant="secondary" 
  size="lg"
/>
```

---

## FeatureCard

Card component for displaying features.

### Props
- `icon`: ReactNode (required)
- `title`: string (required)
- `description`: string (required)
- `layout`: 'vertical' | 'horizontal' (default: 'vertical')
- `iconVariant`: 'primary' | 'secondary' | 'outline' (default: 'secondary')
- `animate`: boolean (default: true)
- `delay`: number (default: 0)

### Usage
```tsx
import { FeatureCard } from './components/ui/FeatureCard';
import { Shield } from 'lucide-react';

<FeatureCard
  icon={<Shield className="w-8 h-8" />}
  title="Secure & Safe"
  description="Your data is protected with enterprise-grade security"
  layout="vertical"
  delay={0.1}
/>
```

---

## PricingCard

Card for displaying pricing plans.

### Props
- `name`: string (required)
- `price`: string (required)
- `period`: string (required)
- `description`: string (required)
- `features`: string[] (required)
- `popular`: boolean (default: false)
- `buttonText`: string (default: 'Get Started')
- `onButtonClick`: function (optional)
- `animate`: boolean (default: true)
- `delay`: number (default: 0)

### Usage
```tsx
import { PricingCard } from './components/ui/PricingCard';

<PricingCard
  name="Pro Plan"
  price="$127"
  period="month"
  description="For professional use"
  features={[
    'Up to 4 sessions',
    'Priority support',
    '24/7 access',
  ]}
  popular={true}
  onButtonClick={() => console.log('Clicked')}
/>
```

---

## TestimonialCard

Card for customer testimonials.

### Props
- `name`: string (required)
- `role`: string (required)
- `content`: string (required)
- `rating`: number (required)
- `avatar`: string (optional)
- `animate`: boolean (default: true)
- `delay`: number (default: 0)

### Usage
```tsx
import { TestimonialCard } from './components/ui/TestimonialCard';

<TestimonialCard
  name="John Doe"
  role="Client"
  content="Amazing service! Highly recommended."
  rating={5}
  avatar="https://example.com/avatar.jpg"
  delay={0.2}
/>
```

---

## Accordion

Expandable FAQ-style component.

### Props
- `items`: Array<{ title: string, content: string | ReactNode }> (required)
- `allowMultiple`: boolean (default: false)

### Usage
```tsx
import { Accordion } from './components/ui/Accordion';

const faqItems = [
  {
    title: 'What is mediation?',
    content: 'Mediation is a process...',
  },
  {
    title: 'How long does it take?',
    content: 'Typically 2-3 sessions...',
  },
];

<Accordion items={faqItems} allowMultiple={false} />
```

---

## SectionTitle

Consistent section heading component.

### Props
- `title`: string (required)
- `subtitle`: string (optional)
- `align`: 'left' | 'center' | 'right' (default: 'center')
- `animate`: boolean (default: true)

### Usage
```tsx
import { SectionTitle } from './components/ui/SectionTitle';

<SectionTitle
  title="Our Services"
  subtitle="Everything you need to succeed"
  align="center"
/>
```

---

## StepCard

Card for step-by-step processes.

### Props
- `icon`: ReactNode (required)
- `title`: string (required)
- `description`: string (required)
- `stepNumber`: string (required)
- `showConnector`: boolean (default: false)
- `animate`: boolean (default: true)
- `delay`: number (default: 0)

### Usage
```tsx
import { StepCard } from './components/ui/StepCard';
import { Calendar } from 'lucide-react';

<StepCard
  icon={<Calendar className="w-10 h-10" />}
  title="Schedule"
  description="Book your consultation"
  stepNumber="01"
  showConnector={true}
  delay={0.1}
/>
```

---

## FloatingButton

Floating action button.

### Props
- `icon`: ReactNode (required)
- `onClick`: function (required)
- `badge`: string | number (optional)
- `position`: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' (default: 'bottom-right')
- `variant`: 'primary' | 'secondary' (default: 'primary')
- `visible`: boolean (default: true)

### Usage
```tsx
import { FloatingButton } from './components/ui/FloatingButton';
import { MessageCircle } from 'lucide-react';

<FloatingButton
  icon={<MessageCircle className="w-7 h-7" />}
  onClick={() => setIsOpen(true)}
  badge="1"
  position="bottom-right"
/>
```

---

## Modal

Modal/Dialog component.

### Props
- `isOpen`: boolean (required)
- `onClose`: function (required)
- `title`: string (optional)
- `size`: 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `showCloseButton`: boolean (default: true)

### Usage
```tsx
import { Modal } from './components/ui/Modal';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Contact Us"
  size="lg"
>
  <p>Modal content goes here</p>
</Modal>
```

---

## Grid

Responsive grid layout.

### Props
- `cols`: 1 | 2 | 3 | 4 | 5 | 6 (default: 3)
- `gap`: 'none' | 'sm' | 'md' | 'lg' | 'xl' (default: 'md')
- `responsive`: boolean (default: true)

### Usage
```tsx
import { Grid } from './components/ui/Grid';

<Grid cols={3} gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

---

## CheckList

Animated checklist component.

### Props
- `items`: string[] (required)
- `variant`: 'default' | 'circle' (default: 'circle')
- `iconColor`: 'primary' | 'success' | 'secondary' (default: 'primary')
- `animate`: boolean (default: true)

### Usage
```tsx
import { CheckList } from './components/ui/CheckList';

<CheckList
  items={[
    'Professional service',
    'Fast delivery',
    '24/7 support',
  ]}
  iconColor="primary"
/>
```

---

## Complete Example

Here's how to use multiple components together:

```tsx
import { Section, SectionTitle, Grid, FeatureCard } from './components/ui';
import { Shield, Users, Heart } from 'lucide-react';

function FeaturesSection() {
  return (
    <Section background="white" padding="lg">
      <SectionTitle
        title="Our Features"
        subtitle="Everything you need in one place"
      />
      
      <Grid cols={3} gap="lg">
        <FeatureCard
          icon={<Shield className="w-8 h-8" />}
          title="Secure"
          description="Your data is safe"
          delay={0}
        />
        <FeatureCard
          icon={<Users className="w-8 h-8" />}
          title="Collaborative"
          description="Work together"
          delay={0.1}
        />
        <FeatureCard
          icon={<Heart className="w-8 h-8" />}
          title="Supportive"
          description="We're here for you"
          delay={0.2}
        />
      </Grid>
    </Section>
  );
}
```

---

## Tips for Implementation

1. **Import what you need**: Only import components you're using
2. **Customize with className**: All components accept a className prop for additional styling
3. **Animation delays**: Use delay props to create staggered animations
4. **Responsive design**: Most components are mobile-first and responsive by default
5. **Combine components**: Mix and match components to create complex layouts

---

## Color Theme

The components use these color tokens:
- **Primary**: Emerald (emerald-800, emerald-900, emerald-100)
- **Secondary**: Gray (gray-50, gray-100, gray-600, gray-900)
- **Accent**: Green, Yellow, Red for status colors

You can customize these in your Tailwind config if needed.
