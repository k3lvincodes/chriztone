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
            <h1 className="text-[50px] font-semibold !leading-tight">
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

      <div className="relative h-[900px] flex items-center justify-end -mb-32">
        <Image src="https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeigxtetzktxivcogpz3ixdrrglolgzqkrhwexre7piytayg45n7cti" alt="Phone 1" width={300} height={800} className="absolute top-10 left-0" />
        <PhoneMockup id="phone-two" className="w-[300px] h-[800px] absolute top-0 right-12">
          <div className="w-full h-full p-4 text-white" style={{background: 'linear-gradient(to bottom, #FF80B4, #A020F0)'}}>
              <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white"><path d="m15 18-6-6 6-6"/></svg>
                  <h2 className="font-bold text-xl">Classify transaction</h2>
              </div>
            <p className="text-sm opacity-80 mt-1">is a transaction into a</p>
          </div>
        </PhoneMockup>
      </div>
    </div>
  );
};

export default DefaultView;
