import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Law is complicate matter. A big problem if you ignore it."
      subtitle="Let us help you!"
      button={
        <Link href="mailto:attorney@protiplaw.com">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
