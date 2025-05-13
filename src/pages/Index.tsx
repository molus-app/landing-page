
import React from 'react';
import Section from '@/components/Section';
import HandwrittenHeading from '@/components/HandwrittenHeading';
import HandwrittenButton from '@/components/HandwrittenButton';
import EmailSignup from '@/components/EmailSignup';
import ProjectCard from '@/components/ProjectCard';
import Logo from '@/components/Logo';
import { Github } from 'lucide-react';

const Index = () => {
  return (
    <div className="font-indie bg-white overflow-y-auto h-screen">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 w-full px-6 py-4 z-10">
        <Logo />
      </header>

      <div className="snap-y snap-mandatory h-screen overflow-y-auto">
        {/* Welcome Section */}
        <Section id="welcome">
          <div className="text-center">
            <HandwrittenHeading>
              Hi Hi.
            </HandwrittenHeading>
            <p className="text-3xl mb-6">
              thanks for stopping by.
            </p>
            <p className="text-4xl">
              :)
            </p>
          </div>
        </Section>

        {/* Mission Statement Section */}
        <Section id="mission">
          <div className="text-center">
            <HandwrittenHeading>
              we're building compassionate tools
            </HandwrittenHeading>
            <p className="text-3xl mb-6">
              for self discovery
            </p>
            <p className="text-3xl">
              & mindful connection
            </p>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects">
          <div className="text-center mb-12">
            <HandwrittenHeading>
              Current projects
            </HandwrittenHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard title="journal.molus.app" link="https://journal.molus.app" />
              <ProjectCard title="draw.molus.app" link="https://draw.molus.app" />
            </div>
            <p className="text-2xl mt-8">More to come :)</p>
          </div>
        </Section>

        {/* Newsletter Signup Section */}
        <Section id="signup">
          <div className="text-center">
            <HandwrittenHeading>
              Sign up for updates
            </HandwrittenHeading>
            <EmailSignup />
          </div>
        </Section>

        {/* Contributing Section */}
        <Section id="contribute" className="pb-32">
          <div className="text-center">
            <HandwrittenHeading>
              Interested in contributing?
            </HandwrittenHeading>
            <div className="flex flex-wrap justify-center gap-6">
              <HandwrittenButton
                href="https://discord.gg/molus"
              >
                Join Discord
              </HandwrittenButton>
              
              <HandwrittenButton
                href="https://github.com/molus"
                icon={<Github />}
              >
                See github repo
              </HandwrittenButton>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-8 text-center">
          <p className="text-xl font-indie">molus.app</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
