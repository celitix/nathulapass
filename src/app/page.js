import Hero from "./components/hero";
import Link from "next/link";
import NathulaSectionRight from "./components/rightside";  
import NathulaSectionLeft from "./components/leftside";  
import Image from "next/image";

export default function Home() {
  return (
<>
{/*============= Hero section =============*/}
<Hero title="To travel is to live." image="hero3.jpg" />

{/*============= About section =============*/}
 <section className="w-full bg-white py-12 px-4 md:px-8 lg:px-16 text-center overflow-hidden">
      <h2 className="font-yeseva-one text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
       Nathula Pass – A Pass Of Listening Ears
      </h2>
      <div className="border-t border-gray-300 my-4"></div>

      <p className="font-lato text-gray-700 text-sm md:text-base leading-relaxed max-w-5xl mx-auto">
        Of the various mountain passes in India, Nathula pass is one of the international borders passes in <Link href="https://en.wikipedia.org/wiki/Himalayas" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer hover:text-blue-700 font-semibold transition-all duration-300">Himalayas</Link>. This divine mountain pass is on the India-China border, in the Indian state of Sikkim. The literal meaning of its name is “listening ears”(Nathu) Pass (La) in Tibetan language. 54 kilometers from Gangtok (capital of Sikkim) one needs permit to visit this pass and essentially should be a citizen of India. Passes in Himalayas are mesmerizing and breathe taking. Mountain passes in India attract thousands of tourists every year all around the year. The specialty of Nathula pass is that it is an open trading border posts between the two countries. This is also a gateway for various Buddhist and Hindu pilgrimage site. The pass is one of the agreed Border Personnel meeting points for India and China armies.
      </p>

<Link href="/about"><button className="bg-cyan-600 mt-4 cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:bg-cyan-500/80 transition-all duration-300">Read More</button></Link>

    </section>

{/*============= Right side section =============*/}
    <NathulaSectionRight />


 {/*============= Highway section =============*/}
    <section className="py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-yeseva-one text-3xl md:text-4xl font-bold text-gray-900">
          Nathula Highlights
        </h2>

        {/* Divider line */}
        <div className="border-t border-gray-300 my-6 w-full"></div>

        {/* Description */}
        <p className="font-lato text-gray-700 text-base md:text-lg leading-relaxed">
          563 km on the Old Silk route Nathula Pass is an important{" "}
          <Link href="/visiting-places" className="font-lato text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">
            destination
          </Link>{" "}
          both from tourist and trade point of view. The trades between the two
          nations are restricted to specific products and specific days. Nathula
          has a historic role in the various invasions. The liberation of India
          too had a prominent role to play in{" "}
          <Link href="/about" className="font-lato text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">
            history
          </Link>
          .
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Weather Card */}
          <div className="bg-[#e5e5e5] shadow-md border-b-4 border-gray-600  p-6 hover:shadow-lg transition">
            <h3 className="font-yeseva-one text-2xl font-medium text-gray-800 mb-4 border-b border-gray-300 pb-2">
              Weather
            </h3>
            <p className="font-lato text-gray-600 text-base leading-relaxed">
              The weather is expected to be chilling and cool all year around.
              The height from the sea level further contributes to low pressure.
              Snow covered White Mountains with fast blowing wind is a common
              feature of weather.
            </p>
          </div>

          {/* Permit Cost Card */}
          <div className="bg-[#e5e5e5] shadow-md border-b-4 border-gray-600 p-6 hover:shadow-lg transition">
            <h3 className="font-yeseva-one text-2xl font-medium text-gray-800 mb-4 border-b border-gray-300 pb-2">
              Permit Cost
            </h3>
            <p className="font-lato text-gray-600 text-base leading-relaxed">
              Yes, you need permit to visit the pass. The cost of the permit
              varies from season to season. The various permits inclusive of
              fare of travel can range widely between 700–7000 INR subject to
              change.
            </p>
          </div>

          {/* Visiting Days Card */}
          <div className="bg-[#e5e5e5] shadow-md border-b-4 border-gray-600 p-6 hover:shadow-lg transition">
            <h3 className="font-yeseva-one text-2xl font-medium text-gray-800 mb-4 border-b border-gray-300 pb-2">
              Visiting Days
            </h3>
            <p className="font-lato text-gray-600 text-base leading-relaxed">
              5 days a week — Wednesday, Thursday, Friday, Saturday and Sunday —
              are the days allotted to visit the amazing Nathula Pass. Only
              Indian nationals can visit here with due verification and permit
              grant.
            </p>
          </div>
        </div>
      </div>
    </section> 

{/*=============== Left Side Section ===============*/}
    <NathulaSectionLeft />


{/*================= Overlay section =================*/}
      <section className="relative w-full h-[40vh] md:h-[30vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/hero1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Glass Box */}
        <div className=" relative z-10 max-w-5xl bg-white/20 backdrop-blur-md text-white p-6 mx-4 md:p-10 rounded-[50px] border border-white/20 shadow-lg text-center">
{/* <div className="absolute left-0 inset-0  my-4 font-semibold text-red-800 text-[100px]">"</div> */}

          <p className="font-lato text-base md:text-xl font-semibold mb-3">
           In every walk with nature one receives far more than he seeks. Keep close to Nature’s heart and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.
          </p>
        
        </div>

        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40"></div>
      </section>      
</>
  );
}
