import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, Check, Ticket, X } from 'lucide-react';
import { WORKSHOPS_DATA } from '../data/bikalpaData';
import { Workshop } from '../types';

export const WorkshopsSection: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);
  const [attendeeName, setAttendeeName] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  const [attendeePhone, setAttendeePhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
    setTimeout(() => {
      setIsBooked(false);
      setSelectedWorkshop(null);
      setAttendeeName('');
      setAttendeeEmail('');
      setAttendeePhone('');
    }, 3000);
  };

  return (
    <section id="workshops" className="py-12 md:py-20 bg-gradient-to-b from-[#F9F7F2] via-[#EFECE1]/50 to-[#F9F7F2] border-t border-[#E3DEC3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2D5A27] text-[#F9F7F2] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#A3C997]" />
            <span>Community Education</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C3818] tracking-tight">
            Upcoming Eco Workshops & Training
          </h2>
          <p className="text-sm text-[#4A5240] mt-2">
            Join Bipasha Sarma and hands-on environmental mentors in Guwahati or online to master zero-waste living skills.
          </p>
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WORKSHOPS_DATA.map((ws) => (
            <div
              key={ws.id}
              className="bg-white rounded-3xl border border-[#DFDAA5] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-[#EFECE1]">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#2D5A27] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {ws.mode}
                  </div>
                  <div className="absolute top-3 right-3 bg-[#D97736] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {ws.spotsLeft} Spots Left
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#6B7262] font-semibold mb-2">
                    <span className="flex items-center gap-1 text-[#2D5A27]">
                      <Calendar className="w-3.5 h-3.5" />
                      {ws.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {ws.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1C3818] leading-snug mb-2">
                    {ws.title}
                  </h3>

                  <p className="text-xs text-[#4A5240] mb-4 leading-relaxed line-clamp-2">
                    {ws.description}
                  </p>

                  <div className="bg-[#F9F7F2] p-3 rounded-2xl border border-[#E3DEC3] space-y-1.5 mb-4">
                    <div className="text-[11px] font-bold text-[#1C3818] uppercase tracking-wider">Key Learnings:</div>
                    {ws.learnings.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-[#4A5240]">
                        <Check className="w-3.5 h-3.5 text-[#2D5A27] shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 border-t border-[#E3DEC3]/60 flex items-center justify-between gap-3 mt-2">
                <div>
                  <div className="text-xs text-[#7A8270]">Registration Fee</div>
                  <div className="text-xl font-bold font-serif text-[#2D5A27]">₹{ws.fee}</div>
                </div>

                <button
                  onClick={() => setSelectedWorkshop(ws)}
                  className="px-5 py-2.5 rounded-full bg-[#2D5A27] hover:bg-[#23481F] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-all"
                >
                  <Ticket className="w-4 h-4 text-[#A3C997]" />
                  <span>Register Spot</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Workshop Registration Ticket Modal */}
      {selectedWorkshop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C3818]/60 backdrop-blur-sm overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-md bg-[#F9F7F2] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E3DEC3]">
            <button
              onClick={() => setSelectedWorkshop(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#EFECE1] hover:bg-[#E3DEC3] text-[#2D5A27]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-[#D97736] mb-1 uppercase tracking-wider">
              <Ticket className="w-4 h-4" />
              <span>Workshop Pass</span>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#1C3818] mb-1">
              {selectedWorkshop.title}
            </h3>
            <p className="text-xs text-[#6B7262] mb-4">
              {selectedWorkshop.date} • {selectedWorkshop.time}
            </p>

            {isBooked ? (
              <div className="bg-[#2D5A27] text-white p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#A3C997] text-[#1C3818] flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h4 className="font-serif text-lg font-bold">Registration Confirmed!</h4>
                <p className="text-xs text-[#A3C997]">
                  Thank you {attendeeName}! Pass details sent to {attendeeEmail}. See you at the workshop in Guwahati!
                </p>
              </div>
            ) : (
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1C3818] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={attendeeName}
                    onChange={(e) => setAttendeeName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C3818] mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={attendeeEmail}
                    onChange={(e) => setAttendeeEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1C3818] mb-1">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={attendeePhone}
                    onChange={(e) => setAttendeePhone(e.target.value)}
                    placeholder="+91 9876543210"
                    className="w-full bg-white border border-[#C2BDAA] rounded-xl px-3 py-2 text-xs text-[#1C3818] focus:outline-none focus:ring-1 focus:ring-[#2D5A27]"
                  />
                </div>

                <div className="bg-[#EFECE1] p-3 rounded-xl border border-[#DFDAA5] flex justify-between items-center text-xs">
                  <span className="font-bold text-[#1C3818]">Total Fee:</span>
                  <span className="text-lg font-bold font-serif text-[#2D5A27]">₹{selectedWorkshop.fee}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#2D5A27] text-white font-bold text-xs hover:bg-[#23481F] shadow-md transition-all"
                >
                  Confirm & Reserve Spot
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
