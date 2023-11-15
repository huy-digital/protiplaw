import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <Link href="mailto:attorney@protiplaw.com">Contact</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Fastest & dedicated legal services\n'}
            <span className="text-primary-500">
              at the most reasonable prices
            </span>
          </>
        }
        description="The easiest way to protect your business."
        button={
          <Link href="mailto:attorney@protiplaw.com">
            <Button xl>Get Quotation</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
