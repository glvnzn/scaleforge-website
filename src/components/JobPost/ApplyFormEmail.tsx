import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface IContactFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  organization?: string;
  coverLetter?: string;
  resume?: Buffer
  fileName?: string
  jobTitle?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ApplyFormEmail = (props: { emailData?: IContactFormData }) => {
  const { firstName, lastName, email, phoneNumber, organization, coverLetter, jobTitle } =
    props.emailData || {};
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>
          Empower Your Business With Our Expert Scalability Solutions
        </Preview>
        <Body className="bg-gray-100 p-4">
          <Container className="max-w-md mx-auto bg-white shadow-md rounded">
            <Section className="bg-black p-8 rounded-t">
              <Img
                src={`${baseUrl}/sf-logo-white.svg`}
                width="32"
                height="32"
                alt="ScaleForge"
                className="w-auto mx-auto"
              />
            </Section>
            <Section className="px-8">
              <Text className="text-2xl font-bold mb-4">
                ScaleForge - Job Application for {jobTitle}
              </Text>
              <Text className="mb-4">
                <strong>Name:</strong> {firstName} {lastName}
              </Text>
              <Text className="mb-4">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="mb-4">
                <strong>Phone Number:</strong> {phoneNumber}
              </Text>
              <Text className="mb-4">
                <strong>Organization:</strong> {organization}
              </Text>
              <Text className="mb-4">
                <strong>Cover Letter:</strong> {coverLetter}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default ApplyFormEmail;
