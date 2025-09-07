import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';
import PhoneMockup from './phone-mockup';

interface DefaultViewProps {
    onUpload: () => void;
}

const DefaultView: React.FC<DefaultViewProps> = ({ onUpload }) => {
  const services = [
    "Branding & Identity",
    "Digital Design",
    "Infographics",
    "Print Design and lots more",
  ];

  return (
    <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 items-start">
      <div className="space-y-10 md:pt-12">
        <div className="space-y-5">
            <p className="text-3xl font-bold text-black">Hi! I'm Paul</p>
            <h1 className="text-5xl lg:text-7xl font-black !leading-tight">
                <span className="text-[#9966FF]">UI</span><span className="text-[#00CC99]">/UX</span> <span className="text-black">Designer &amp;</span>
                <br />
                <span className="text-black">Graphics Designer</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
                Whether you're a startup or enterprise. Get <span className="text-[#9966FF]">premium app and website</span> designs that inspire action, and drive success.
            </p>
        </div>

        <Card className="max-w-md shadow-lg rounded-xl">
            <div className="bg-[#9966FF] text-white rounded-t-xl py-3 px-6 font-bold text-lg">
                Graphics Design Services
            </div>
            <CardContent className="pt-6">
                <ul className="space-y-3">
                    {services.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                        <Play className="h-4 w-4 text-[#9966FF] fill-[#9966FF]" />
                        <span className="text-base text-black">{service}</span>
                    </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

        <div className="space-y-4">
            <p className="text-2xl font-bold text-primary">Let's Bring Your Idea to Reality</p>
            <Button size="lg" onClick={onUpload}>
                Analyze a Design
            </Button>
        </div>
      </div>

      <div className="relative h-[700px] flex items-center justify-center">
        <div className="absolute top-0 transform -translate-x-1/4 -rotate-12">
          <PhoneMockup className="w-[300px] h-[550px] bg-pink-200">
            <div className="w-full h-full p-4 text-white" style={{background: 'linear-gradient(to bottom, #FF80B4, #A020F0)'}}>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="m15 18-6-6 6-6"/></svg>
                    <h2 className="font-bold text-xl">Classify transaction</h2>
                </div>
              <p className="text-sm opacity-80 mt-1">is a transaction into a</p>
            </div>
          </PhoneMockup>
        </div>
        <div className="absolute bottom-0 transform translate-x-1/4 rotate-3">
          <PhoneMockup className="w-[350px] h-[600px] shadow-2xl">
            <div className="w-full h-full bg-white p-4 space-y-4 overflow-y-auto">
              <div className="text-center">
                <p className="text-xl font-bold">Subscribe</p>
                <p className="text-sm text-gray-500">Taste their own attention</p>
              </div>
              <div className="flex justify-around">
                <div className="text-center">
                  <Image src="https://picsum.photos/80/80" data-ai-hint="portrait person" alt="Johny Vine" width={80} height={80} className="rounded-full mx-auto border-4 border-orange-400" />
                  <p className="font-bold mt-2">Johny Vine</p>
                  <p className="text-sm text-gray-500">643 Followers</p>
                </div>
                <div className="text-center">
                   <Image src="https://picsum.photos/80/81" data-ai-hint="portrait person" alt="Nimasha" width={80} height={80} className="rounded-full mx-auto border-4 border-orange-400" />
                  <p className="font-bold mt-2">Nimasha</p>
                  <p className="text-sm text-gray-500">15453 Followers</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="font-semibold text-sm">Jack <span className="font-normal text-gray-400">1 Day Ago</span></div>
                <div className="flex gap-2">
                    <Image src="https://picsum.photos/150/150" data-ai-hint="abstract portrait" alt="Post 1" width={150} height={150} className="rounded-lg w-1/2 object-cover" />
                    <Image src="https://picsum.photos/150/151" data-ai-hint="musician neon" alt="Post 2" width={150} height={150} className="rounded-lg w-1/2 object-cover" />
                </div>
                <p className="text-xs text-gray-500">Music and reading make me happy, so I walked out of adversity, let me feel the vitality of life...</p>
              </div>
               <div className="space-y-4">
                <div className="font-semibold text-sm">Bobbo <span className="font-normal text-gray-400">2 Day Ago</span></div>
                <div className="flex gap-2">
                    <Image src="https://picsum.photos/100/100" data-ai-hint="woman portrait" alt="Post 3" width={100} height={100} className="rounded-lg w-1/3 object-cover" />
                    <Image src="https://picsum.photos/100/101" data-ai-hint="hand holding jar" alt="Post 4" width={100} height={100} className="rounded-lg w-1/3 object-cover" />
                    <Image src="https://picsum.photos/100/102" data-ai-hint="statue neon" alt="Post 5" width={100} height={100} className="rounded-lg w-1/3 object-cover" />
                </div>
              </div>
            </div>
          </PhoneMockup>
        </div>
      </div>
    </div>
  );
};

export default DefaultView;
