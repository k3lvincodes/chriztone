import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

const DefaultView: React.FC = () => {
  const services = [
    "Branding & Identity",
    "Digital Design",
    "Infographics",
    "Print Design and lots more",
  ];

  return (
    <section id="home" className="container mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 items-start">
        <div className="space-y-10 md:pt-12 text-center md:text-left">
            <div className="space-y-5">
                <p className="text-3xl font-bold text-black mb-[50px]">Hi! I'm Paul</p>
                <h1 className="text-[50px] font-semibold !leading-tight">
                    <span className="text-[#9966FF]">UI</span><span className="text-[#00CC99]">/UX</span> <span className="text-black">Designer &amp;</span>
                    <br />
                    <span className="text-black">Graphics Designer</span>
                </h1>
                <p className="text-lg text-gray-700 max-w-lg mx-auto md:mx-0">
                    Whether you're a startup or enterprise. Get <span className="text-[#9966FF]">premium app and website</span> designs that inspire action, and drive success.
                </p>
            </div>

            <Card className="max-w-md shadow-lg rounded-xl mx-auto md:mx-0">
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

            <div className="space-y-4 max-w-md mx-auto md:mx-0 text-center">
                <p className="text-base italic font-bold">
                    <span className="text-black">Let's Bring Your Idea to </span>
                    <span className="text-primary">Reality</span>
                </p>
            </div>
        </div>

        <div className="relative h-[600px] md:h-auto flex justify-center md:justify-end">
            <div className="relative w-full h-[600px] md:w-[48rem] md:h-[900px] flex justify-center ml-[80px] md:ml-0 md:-mb-32">
                <Image id="phone-one" src="https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafybeigxtetzktxivcogpz3ixdrrglolgzqkrhwexre7piytayg45n7cti" alt="Phone 1" width={1200} height={3200} className="absolute top-10 z-10 w-80 md:w-[48rem] h-auto left-1/2 -translate-x-[calc(50%+20px)] md:left-auto md:right-0 md:translate-x-0" />
                <Image id="phone-two" src="https://azure-wrong-tortoise-997.mypinata.cloud/ipfs/bafkreihwenfmhguuodhr66qojytmdmd4bc3jw7gcf2xynneitvygkpyah4" alt="Phone 2" width={1200} height={3200} className="absolute top-0 z-0 w-80 md:w-[48rem] h-auto right-1/2 translate-x-1/2 md:right-[-50%] md:translate-x-0 -rotate-45 md:rotate-0" />
            </div>
        </div>
        </div>
    </section>
  );
};

export default DefaultView;
