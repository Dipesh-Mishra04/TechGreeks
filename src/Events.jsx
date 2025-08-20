import React from "react";
import { motion } from "framer-motion";

const Events = () => {
  const eventList = [
    { img: "/event1.png" },
    { img: "/event2.png" },
    { img: "/event3.png" },
    { img: "/event4.png" },
  ];

  return (
    <section       id="events"
      className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white py-20 px-6">
      {/* Top Image - Centered, Limited Width */}
      {/* Top Banner Image */}
<div className="flex justify-center mb-10 px-4">
  <div className="w-full max-w-6xl rounded-xl overflow-hidden shadow-lg border border-white/10">
    <img
      src="/nirvana.png"
      alt="Nirvana"
      className="w-full h-auto object-contain bg-black"
    />
  </div>
</div>


      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 max-w-6xl mx-auto">
        {eventList.map((event, index) => (
          <motion.div
            key={index}
            className="relative bg-white/5 rounded-xl overflow-hidden shadow-lg border border-white/10"
            whileHover={{ scale: 1.03 }}
          >
            {/* Fix Aspect Ratio */}
            <div className="aspect-[4/3] w-full">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-contain bg-black"
              />
            </div>

            {/* Caption Overlay */}
            <div className="absolute bottom-0 w-full bg-black/60 text-center py-2 text-lg font-medium">
              {event.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;
