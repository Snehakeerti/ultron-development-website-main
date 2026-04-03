import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GoogleReviewCard from "@/components/home/GoogleReviewCard";

const testimonials = [
  {
    name: "Dhanabal Ayyasamy",
    content: "I upgraded the SSD on my 9-year-old laptop, and it’s working perfectly now. They also provided a 3-year warranty on the SSD at a reasonable price. I really appreciate that they kept me updated with their suggestions and upgrades, and completed the service within 24 hours. Thank you!",
    rating: 5,
  },
  {
    name: "Kamesh Udayakumar",
    content: "Highly recommended laptop service center! Excellent quality of service and precise issue resolution. The team fixed my motherboard-level problem. They kept updated on the status regularly. As the part was not available it got delayed on the delivery but they kept the promise. I’m extremely happy with their service and customer support.",
    rating: 5,
  },
  {
    name: "Sathish Vadivelu",
    content: "Highly recommended laptop service center! Excellent quality of service and precise issue resolution. The team fixed my motherboard-level problem within just one day. I’m extremely happy with their service and customer support. My device HP elite book x360 g2 1030",
    rating: 5,
  },
  {
    name: "Mathu Suthanan",
    content: "I have serviced my 7years laptop here and it's works fine now like new laptop. Before visited 2,3 service centers they said laptop life was end not able to use. But Ultron made it possible with some changes in hdd and all. Thanks for supporting.",
    rating: 5,
  },
  {
    name: "Madan P",
    content: "Highly recommended! Got my MacBook Air fixed quickly with professional support. Ashok was super helpful, friendly, and made sure everything was sorted out perfectly. Really appreciate the fast and reliable service!",
    rating: 5,
  },
  {
    name: "Jowin Winson A",
    content: "One of the service centre which said this much time will take to diagnose the issues and they share quote and wait for approval, not like other places, they explain the maximum possibility for the issues and the solution would recommend this service centre for all laptop and Desktop computer services.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-secondary/50">

      <div className="container-custom">

        {/* heading */}
        <AnimatedSection className="text-center mb-14">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            What Our Clients Say
          </h2>
        </AnimatedSection>


        {/* grid layout */}
        <div className="grid lg:grid-cols-4 gap-8 items-start">

          {/* LEFT SIDE GOOGLE CARD */}
          <div className="lg:col-span-1">
            <GoogleReviewCard />
          </div>



          {/* RIGHT SIDE SLIDER */}
          <div className="lg:col-span-3">

            <div className="relative">

              <div className="grid md:grid-cols-3 gap-6">

                {testimonials.slice(current, current + 3).map((item, i) => (

                  <div
                    key={i}
                    className="glass-card p-6 rounded-xl"
                  >

                    {/* name */}
                    <div className="flex items-center justify-between mb-2">

                      <p className="font-semibold text-primary">
                        {item.name}
                      </p>
                    </div>


                    {/* stars */}
                    <div className="flex gap-1 mb-3">

                      {Array.from({ length: item.rating }).map((_, i) => (

                        <Star
                          key={i}
                          size={16}
                          className="fill-orange-400 text-orange-400"
                        />
                      ))}
                    </div>

                    {/* review text */}
                    <p className="text-m min-h-[305px] text-muted-foreground line-clamp-4">
                      {item.content}
                    </p>

                  </div>
                ))}
              </div>



              {/* navigation */}
              <div className="flex justify-center gap-3 mt-8">

                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                >

                  <ChevronLeft size={18} />

                </button>


                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                >

                  <ChevronRight size={18} />

                </button>

              </div>

            </div>

          </div>

        </div>


      </div>

    </section>
  );
};

export default Testimonials;
