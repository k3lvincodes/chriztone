import { Card, CardContent } from '@/components/ui/card';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "Professional, timely, and incredibly talented. Paul delivers designs that are modern, impactful, and perfectly aligned with what we need. Truly a pleasure to work with!",
      author: "thecybersecuritytutor"
    },
    {
      quote: "The graphics and visuals designed for our campaigns were simply outstanding. They not only looked amazing but also helped us attract more clients and boost sales.",
      author: "Royalty Extension"
    },
    {
      quote: "Creative, reliable, and professional, his designs elevated our brand instantly.",
      author: "Q"
    },
    {
      quote: "Working with Paul was the best decision for our brand. His UI/UX designs completely transformed our app, making it more user-friendly and visually stunning.",
      author: "AxyBit"
    }
  ];

  return (
    <section id="testimonial" className="py-16 lg:py-24">
        <div className="container mx-auto max-w-[1000px] px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black sm:text-5xl">Testim<span className="text-primary">onials</span></h1>
              <p className="mt-4 text-lg text-gray-600">
                What my clients are saying
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.author} className="shadow-lg rounded-xl">
                  <CardContent className="pt-6">
                    <blockquote className="space-y-4">
                      <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                      <footer className="text-right font-bold text-gray-800">- {testimonial.author}</footer>
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
