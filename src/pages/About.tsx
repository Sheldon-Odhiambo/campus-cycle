export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
        {/* Left Column: Image */}
        <div className="overflow-hidden shadow-2xl">
          <img 
            src="/assets/keyboard.jpg" 
            alt="Africa Nazarene University Campus" 
            className="w-full h-full object-cover aspect-[4/3]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Column: Text */}
        <div className="space-y-8">
          <h1 className="text-6xl font-serif italic text-stone-900 tracking-tight">
            Our Mission
          </h1>
          <div className="text-stone-600 leading-relaxed space-y-6 text-lg">
            <p>
              CampusCycle, a student-led initiative based in Nairobi, was created in 2025 to foster a sustainable campus environment. 
              We aim to bridge the gap between affordability and accessibility for students.
            </p>
            <p>
              By collaborating with local student organizations, we ensure that every item finds a new home, 
              promoting reuse and reducing waste across Africa Nazarene University.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center bg-stone-100 p-12">
        <div className="text-4xl font-serif italic leading-snug text-stone-800">
          <span className="text-6xl text-stone-400">“</span>
          Our work does make sense only if it is a faithful witness of its time.
          <p className="text-lg font-sans not-italic mt-6 text-stone-500">— Brandon Boiisy, Director</p>
        </div>
        <div className="overflow-hidden shadow-xl">
          <img 
            src="https://picsum.photos/seed/student-workspace/600/400" 
            alt="Work" 
            className="w-full h-auto aspect-[3/2] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
