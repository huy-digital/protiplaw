import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="About Us"
    description="PROTIPLAW is a multidisciplinary legal boutique that deals with complex legal issues with the high technical knowledge that our customers require."
  >
    <VerticalFeatureRow
      title="Your Trusted Legal Partner"
      description="We seamlessly integrate into eCommerce's legal landscape, offering specialized services in copyright dispute resolution within the Ecommerce sector. Our dedicated team at Protiplaw is committed to efficiently handling cases related to copyright conflicts, ensuring a swift and effective resolution process."
      image="/assets/images/feature.svg"
      imageAlt="Your Trusted Legal Partner"
    />
    <VerticalFeatureRow
      title="Completed On-time and Within Budget"
      description="Drawing upon years of experience, Protiplaw takes pride in providing you with reliable, cost-effective, and streamlined litigation services. Our seasoned professionals are well-equipped to navigate the complexities of legal disputes, offering you the confidence that your case will be handled with the utmost competence, simplicity, and speed."
      image="/assets/images/feature2.svg"
      imageAlt="Completed On-time and Within Budget"
      reverse
    />
    <VerticalFeatureRow
      title="Secure the Lowest Possible Settlements"
      description="Our team of skilled attorneys at Protiplaw collaborates closely with the plaintiff's legal representatives to negotiate and settle cases. We strive to secure the lowest possible settlements within the realm of feasibility and the unique circumstances of each case. Trust Protiplaw to be your ally in legal matters, offering comprehensive solutions tailored to your specific needs."
      image="/assets/images/feature3.svg"
      imageAlt="Secure the Lowest Possible Settlements"
    />
  </Section>
);

export { VerticalFeatures };
