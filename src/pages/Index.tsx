
import React from 'react';
import Section from '@/components/Section';
import HandwrittenHeading from '@/components/HandwrittenHeading';
import HandwrittenButton from '@/components/HandwrittenButton';
import EmailSignup from '@/components/EmailSignup';
import ProjectCard from '@/components/ProjectCard';
import Logo from '@/components/Logo';
import DarkModeToggle from '@/components/DarkModeToggle';

const Index = () => {
  return (
    <div className="min-h-screen overflow-y-auto">
      <DarkModeToggle />
      
      <Section id="welcome">
        <div className="flex flex-col items-center">
          <Logo />
          <HandwrittenHeading>hi hi, welcome</HandwrittenHeading>
          <p className="text-xl mb-8">
            this page is still in progress, but we thought we'd share what we're up to.
          </p>
          <HandwrittenButton href="#about">
            tell me more
          </HandwrittenButton>
        </div>
      </Section>

      <Section id="about">
        <HandwrittenHeading>we're building...</HandwrittenHeading>
        <p className="text-xl mb-6">
          we're a small team working on tools for creators, designers, and developers.
        </p>
        <p className="text-xl mb-8">
          our mission is to make the web more beautiful, accessible, and fun.
        </p>
        <HandwrittenButton href="#projects">
          see our projects
        </HandwrittenButton>
      </Section>

      <Section id="projects">
        <HandwrittenHeading>current projects</HandwrittenHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ProjectCard 
            title="design system"
            link="https://example.com/design"
          />
          <ProjectCard 
            title="prototyping tool" 
            link="https://example.com/prototype"
          />
          <ProjectCard 
            title="code editor" 
            link="https://example.com/editor"
          />
          <ProjectCard 
            title="collaboration platform" 
            link="https://example.com/collaborate"
          />
        </div>
        <HandwrittenButton href="#newsletter">
          stay updated
        </HandwrittenButton>
      </Section>

      <Section id="newsletter">
        <HandwrittenHeading>sign up for updates</HandwrittenHeading>
        <p className="text-xl mb-8">
          we'll send you occasional updates about our progress and new releases.
        </p>
        <EmailSignup />
      </Section>

      <Section id="contribute">
        <HandwrittenHeading>interested in contributing?</HandwrittenHeading>
        <p className="text-xl mb-8">
          we're always looking for passionate people to join us in making the web better.
        </p>
        <HandwrittenButton href="mailto:hello@example.com">
          get in touch
        </HandwrittenButton>
      </Section>
    </div>
  );
};

export default Index;
