import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    'User Interface/User Experience Design',
    'Wireframing',
    'Prototyping',
    'Branding and Identity',
    'Digital Designs',
    'Infographics',
    "Print Design and lot's more.",
  ];

  return (
    <section id="services" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black sm:text-5xl">My Services</h1>
              <p className="mt-4 text-lg text-gray-600">
                A comprehensive suite of design services to bring your ideas to life.
              </p>
            </div>

            <Card className="shadow-lg rounded-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-black">
                        What I Offer
                    </CardTitle>
                </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {services.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-base text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-lg text-gray-700 text-center">
                <p>
                    Whether you're starting a new project or refining an existing one, I provide the expertise to ensure your product is not only beautiful but also intuitive and effective.
                </p>
            </div>
          </div>
        </div>
    </section>
  );
}
