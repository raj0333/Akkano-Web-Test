# 📝 Component Library Cheat Sheet

Quick reference guide for all UI components.

## 🎯 Import Statements

```tsx
// Single line import (Recommended)
import { Button, Card, Input, Grid, Section } from './components/ui';

// With icons
import { Heart, Shield, Users, Mail, Phone } from 'lucide-react';
```

---

## 🔘 Buttons

```tsx
// Basic
<Button>Click Me</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// With Icon
<Button icon={<Mail />}>Email Us</Button>

// Full Width
<Button fullWidth>Full Width</Button>

// No Animation
<Button animate={false}>Static Button</Button>
```

---

## 📄 Cards

```tsx
// Basic
<Card>Content</Card>

// Variants
<Card variant="default">Default</Card>
<Card variant="bordered">Bordered</Card>
<Card variant="elevated">Elevated</Card>
<Card variant="gradient">Gradient</Card>

// Padding
<Card padding="none">No Padding</Card>
<Card padding="sm">Small</Card>
<Card padding="md">Medium</Card>
<Card padding="lg">Large</Card>

// Hoverable
<Card hoverable>Hover Effect</Card>
```

---

## 📝 Form Inputs

```tsx
// Input
<Input 
  label="Email" 
  type="email" 
  placeholder="john@example.com"
  fullWidth
/>

// With Icon
<Input 
  label="Email"
  icon={<Mail className="w-4 h-4" />}
  fullWidth
/>

// With Error
<Input 
  label="Password"
  error="Password is required"
  fullWidth
/>

// With Helper Text
<Input 
  label="Username"
  helperText="Choose a unique username"
  fullWidth
/>

// Textarea
<Textarea 
  label="Message"
  rows={4}
  fullWidth
/>
```

---

## 📦 Layout Components

```tsx
// Container
<Container size="xl">Content</Container>
// Sizes: 'sm' | 'md' | 'lg' | 'xl' | 'full'

// Section
<Section background="white" padding="lg">
  Content
</Section>
// Backgrounds: 'white' | 'gray' | 'dark' | 'gradient' | 'green'
// Padding: 'none' | 'sm' | 'md' | 'lg'

// Grid
<Grid cols={3} gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
// Cols: 1-6
// Gap: 'none' | 'sm' | 'md' | 'lg' | 'xl'
```

---

## 🏷️ Badges & Icons

```tsx
// Badge
<Badge variant="primary">New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Error</Badge>

// IconBox
<IconBox 
  icon={<Heart className="w-6 h-6" />}
  variant="primary"
  size="lg"
  shape="circle"
/>
// Variants: 'primary' | 'secondary' | 'outline'
// Sizes: 'sm' | 'md' | 'lg' | 'xl'
// Shapes: 'circle' | 'square'
```

---

## 🎴 Feature Cards

```tsx
// Vertical Layout
<FeatureCard
  icon={<Shield className="w-8 h-8" />}
  title="Secure"
  description="Your data is safe"
  layout="vertical"
  delay={0.1}
/>

// Horizontal Layout
<FeatureCard
  icon={<Users className="w-6 h-6" />}
  title="Team Work"
  description="Collaborate easily"
  layout="horizontal"
  iconVariant="primary"
/>
```

---

## 💰 Pricing Cards

```tsx
<PricingCard
  name="Pro Plan"
  price="$127"
  period="month"
  description="For professionals"
  features={[
    'Feature 1',
    'Feature 2',
    'Feature 3',
  ]}
  popular={true}
  buttonText="Get Started"
  onButtonClick={() => console.log('Clicked')}
  delay={0.2}
/>
```

---

## 💬 Testimonial Cards

```tsx
<TestimonialCard
  name="John Doe"
  role="CEO, Company"
  content="Great service!"
  rating={5}
  avatar="https://example.com/avatar.jpg"
  delay={0.1}
/>
```

---

## 📋 Step Cards

```tsx
<StepCard
  icon={<Calendar className="w-10 h-10" />}
  title="Book"
  description="Schedule appointment"
  stepNumber="01"
  showConnector={true}
  delay={0.1}
/>
```

---

## ❓ Accordion

```tsx
<Accordion
  items={[
    {
      title: 'Question 1?',
      content: 'Answer 1',
    },
    {
      title: 'Question 2?',
      content: 'Answer 2',
    },
  ]}
  allowMultiple={false}
/>
```

---

## ✅ Check Lists

```tsx
<CheckList
  items={[
    'Professional service',
    'Fast delivery',
    '24/7 support',
  ]}
  variant="circle"
  iconColor="primary"
  animate={true}
/>
// Variants: 'default' | 'circle'
// iconColor: 'primary' | 'success' | 'secondary'
```

---

## 📰 Section Title

```tsx
<SectionTitle
  title="Main Heading"
  subtitle="Subheading text"
  align="center"
/>
// Align: 'left' | 'center' | 'right'
```

---

## 🎯 Floating Button

```tsx
<FloatingButton
  icon={<MessageCircle className="w-7 h-7" />}
  onClick={() => alert('Clicked')}
  badge="3"
  position="bottom-right"
  variant="primary"
/>
// Position: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
```

---

## 🪟 Modal

```tsx
const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
  showCloseButton={true}
>
  <p>Modal content</p>
</Modal>
// Sizes: 'sm' | 'md' | 'lg' | 'xl'
```

---

## 🎨 Common Patterns

### Full Page Section
```tsx
<Section background="white" padding="lg">
  <SectionTitle title="Title" subtitle="Subtitle" />
  <Grid cols={3} gap="lg">
    {/* Content */}
  </Grid>
</Section>
```

### Feature Grid
```tsx
<Grid cols={3} gap="lg">
  <FeatureCard icon={icon1} title="Title 1" description="Desc 1" />
  <FeatureCard icon={icon2} title="Title 2" description="Desc 2" />
  <FeatureCard icon={icon3} title="Title 3" description="Desc 3" />
</Grid>
```

### Form Layout
```tsx
<div className="max-w-2xl mx-auto space-y-6">
  <Input label="Name" fullWidth />
  <Input label="Email" type="email" fullWidth />
  <Textarea label="Message" rows={4} fullWidth />
  <Button variant="primary" fullWidth>Submit</Button>
</div>
```

### Pricing Grid
```tsx
<Grid cols={2} gap="lg" className="max-w-5xl mx-auto">
  <PricingCard {...plan1} />
  <PricingCard {...plan2} popular={true} />
</Grid>
```

### Process Steps
```tsx
<Grid cols={4} gap="lg">
  <StepCard {...step1} stepNumber="01" showConnector={true} />
  <StepCard {...step2} stepNumber="02" showConnector={true} />
  <StepCard {...step3} stepNumber="03" showConnector={true} />
  <StepCard {...step4} stepNumber="04" />
</Grid>
```

---

## 🎭 Animation Delays

Create staggered animations:

```tsx
<Grid cols={3}>
  <FeatureCard {...props} delay={0} />
  <FeatureCard {...props} delay={0.1} />
  <FeatureCard {...props} delay={0.2} />
</Grid>
```

---

## 🎨 Color Theme

**Primary Colors:**
- `bg-emerald-800` - Dark green (primary)
- `bg-emerald-900` - Darker green (hover)
- `bg-emerald-100` - Light green (backgrounds)
- `text-emerald-800` - Dark green text

**Neutral Colors:**
- `bg-white` - White backgrounds
- `bg-gray-50` - Light gray
- `bg-gray-900` - Dark backgrounds
- `text-gray-600` - Body text
- `text-gray-900` - Headings

---

## 📱 Responsive Classes

Most components are responsive by default:

```tsx
// Grid automatically adjusts
<Grid cols={3} responsive={true}>
  {/* 1 col on mobile, 2 on tablet, 3 on desktop */}
</Grid>

// Manual responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Custom responsive */}
</div>
```

---

## ⚡ Quick Examples

### Hero Section
```tsx
<Section background="white">
  <Grid cols={2} gap="xl">
    <div>
      <h1 className="text-5xl font-bold mb-4">Heading</h1>
      <p className="text-xl mb-6">Description</p>
      <Button variant="primary" size="lg">Get Started</Button>
    </div>
    <img src="..." alt="Hero" className="rounded-lg" />
  </Grid>
</Section>
```

### CTA Section
```tsx
<Section background="green">
  <div className="text-center text-white">
    <h2 className="text-4xl font-bold mb-4">Ready to Start?</h2>
    <p className="text-xl mb-8">Join thousands of happy customers</p>
    <Button variant="primary" size="lg">Get Started Free</Button>
  </div>
</Section>
```

### Contact Section
```tsx
<Section background="white">
  <Grid cols={2} gap="xl">
    <div>
      <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
      <CheckList items={['Fast response', 'Expert team', 'Always available']} />
    </div>
    <div className="space-y-4">
      <Input label="Name" fullWidth />
      <Input label="Email" type="email" fullWidth />
      <Textarea label="Message" rows={4} fullWidth />
      <Button variant="primary" fullWidth>Send</Button>
    </div>
  </Grid>
</Section>
```

---

## 🔗 Useful Links

- Full Documentation: `/src/app/components/ui/README.md`
- Complete Examples: `/src/app/components/examples/ComponentExample.tsx`
- Landing Page: `/src/app/App.tsx`

---

## 💡 Pro Tips

1. ✅ Always use `fullWidth` for form inputs
2. ✅ Add `delay` for staggered animations
3. ✅ Use `Grid` for responsive layouts
4. ✅ Wrap sections in `Section` component for consistent spacing
5. ✅ Import icons from `lucide-react`
6. ✅ Use `SectionTitle` for consistent headings
7. ✅ Set `popular={true}` on one pricing card
8. ✅ Use `className` prop for custom styling

---

**Happy Building! 🚀**
