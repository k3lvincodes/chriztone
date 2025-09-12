import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function AboutPage() {
  const coreExpertise = [
    'UI/UX Design & Prototyping',
    'Graphic & Brand Identity Design',
    'User Research & Data-Driven Insights',
    'Visual Communication & Storytelling',
    'Creative Problem-Solving',
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-foreground">
      <Header />
      <main className="flex-grow overflow-hidden">
        <div className="container mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black sm:text-5xl">About Me</h1>
              <p className="mt-4 text-lg text-gray-600">
                UI/UX and Graphics Designer
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                I am an experienced UI/UX and Graphics Designer with 6+ years of
                expertise in creating user-centered digital products, intuitive
                interfaces, and compelling visual designs. My work focuses on
                improving usability, strengthening brand identity, and
                delivering designs that drive measurable business results.
              </p>
              <p>
                With a background in Microbiology, I bring strong research and
                analytical skills into the creative process—allowing me to
                approach design challenges with precision, problem-solving
                ability, and a unique perspective that blends science with
                creativity.
              </p>
            </div>

            <Card className="shadow-lg rounded-xl">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-center mb-6 text-black">
                  Core Expertise
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {coreExpertise.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span className="text-base text-black">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="text-lg text-gray-700">
                <p>
                    I am passionate about combining design and strategy to create
                    impactful user experiences, and I thrive in environments where
                    innovation, collaboration, and growth are valued. Open to
                    opportunities to contribute my skills and creativity to
                    forward-thinking teams.
                </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}