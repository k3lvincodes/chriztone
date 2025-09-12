import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  message,
}) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={heading}>New Message from Contact Form</Heading>
          <Hr style={hr} />
          <Text style={paragraph}>
            You have received a new message from your portfolio contact form.
          </Text>
          <Text style={paragraph}>
            <strong>From:</strong> {name}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong> {email}
          </Text>
          <Hr style={hr} />
          <Heading as="h2" style={subheading}>Message:</Heading>
          <Text style={messageText}>{message}</Text>
          <Hr style={hr} />
          <Text style={footer}>
            This email was sent from the contact form on your portfolio website.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

const box = {
  padding: '0 48px',
};

const heading = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#4B0082',
    textAlign: 'center' as const,
};

const subheading = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const messageText = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '22px',
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: '#f6f9fc',
  padding: '12px',
  borderRadius: '4px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};
