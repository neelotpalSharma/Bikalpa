import React from 'react';
import { Mail, MapPin, Leaf, Heart } from 'lucide-react';

export const FounderStory: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-[#F9F7F2] border-t border-[#E3DEC3] overflow-hidden">
      {/* Top Banner with Wavy Header */}
      <div className="relative bg-[#2D5A27] text-white pt-12 pb-20 px-4 text-center">
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-wider uppercase text-[#E5E0C9]">
          ABOUT US
        </h1>
        <p className="text-xs sm:text-sm text-[#A3C997] mt-2 max-w-xl mx-auto">
          Empowering sustainable, low-waste living across North East India
        </p>

        {/* Decorative Wave at Bottom of Banner */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-10">
          <svg
            className="relative block w-full h-8 sm:h-12 text-[#F9F7F2]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* Section 1: Meet the FOUNDER */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DFDAA5] shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Founder Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#EFECE1] border border-[#C2BDAA] shadow-md transform -skew-x-1 lg:-skew-x-2 transition-transform hover:skew-x-0 duration-300">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Bipasha Sarma - Founder of Bikalpa"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#1C3818]/90 backdrop-blur-md p-3.5 rounded-xl text-white">
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#F9F7F2]">Bipasha Sarma</h4>
                  <p className="text-xs text-[#A3C997] font-medium">Founder & Sole Formulator, BIKALPA</p>
                  <p className="text-[10px] text-[#E5E0C9] mt-0.5">Optometrist & Ecopreneur • Guwahati, Assam</p>
                </div>
              </div>
            </div>

            {/* Founder Text Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#EFECE1] border border-[#DFDAA5] px-3.5 py-1 rounded-full text-xs font-bold text-[#2D5A27] uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5 text-[#2D5A27]" />
                <span>Our Leadership</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C3818] tracking-tight">
                Meet the FOUNDER
              </h2>

              <p className="text-xs sm:text-sm text-[#4A5240] leading-relaxed text-justify">
                Optometrist by degree, low waste practitioner, environmental enthusiast, ecopreneur and founder of BIKALPA, an organisation dedicated to work towards environmental sustainability and conservation. Bipasha has been conducting awareness sessions on Waste Management and Segregation, promoting Zerowaste and Sustainable lifestyle and working relentlessly to promote Bioenzymes through workshops in rural as well as urban areas all across the North Eastern Region. In 2023 she got recognition for her work on a skill development program where more than 600 hearing and speech impaired children were taught to batch natural cleaners from kitchen waste. Also she runs a small steel crockery and cutlery bank to promote Zerowaste Event. She has been doing extensive research on natural and eco friendly product formulations and she is the sole formulator of all our products(personal and home care products).
              </p>

              {/* Contact / Location Footer inside card */}
              <div className="pt-4 border-t border-[#E3DEC3] flex flex-wrap items-center gap-4 text-xs font-semibold text-[#2D5A27]">
                <a href="mailto:admin@bikalpa.co.in" className="flex items-center gap-1.5 hover:underline">
                  <Mail className="w-4 h-4 text-[#2D5A27]" />
                  <span>admin@bikalpa.co.in</span>
                </a>
                <span className="flex items-center gap-1.5 text-[#6B7262]">
                  <MapPin className="w-4 h-4 text-[#D97736]" />
                  <span>Guwahati, Assam, India</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Wavy Divider Line */}
        <div className="my-10 text-center flex justify-center items-center">
          <svg className="w-full max-w-md h-6 text-[#2D5A27]" viewBox="0 0 500 20" fill="none">
            <path
              d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10 T250 10 T300 10 T350 10 T400 10 T450 10 T500 10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        {/* Section 2: About Bikalpa */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-[#DFDAA5] shadow-sm max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#EFECE1] border border-[#DFDAA5] px-4 py-1.5 rounded-full text-xs font-bold text-[#2D5A27] uppercase tracking-wider mx-auto">
            <Heart className="w-3.5 h-3.5 text-[#2D5A27]" />
            <span>Our Mission & Vision</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C3818] tracking-tight">
            About Bikalpa
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-[#4A5240] leading-relaxed text-justify sm:text-center">
            <p>
              We are an eco-conscious brand dedicated to promoting a sustainable and low-waste lifestyle through our carefully curated range of high-quality natural personal and home care products. Additionally, we offer services focused on home composting and the creation of natural multipurpose cleaners. By blending traditional knowledge with modern techniques, we formulate our products to support a greener future. Our commitment to sustainability goes beyond our products; it’s a holistic approach to living that encourages mindful consumption and environmental stewardship. At BIKALPA, we believe that small, everyday choices can collectively lead to significant change. Our product line includes biodegradable packaging, refill options, and locally sourced ingredients to ensure minimal ecological impact.
            </p>

            <p>
              We also host workshops and community events to educate and inspire individuals to embrace sustainable practices in their daily lives. Whether you’re looking to transform your home into an eco-friendly haven or simply want to reduce your carbon footprint, BIKALPA is here to guide you every step of the way. Together, let’s create a brighter, more sustainable future for generations to come.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

