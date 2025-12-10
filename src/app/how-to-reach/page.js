import Hero from '@/app/components/hero'
import Image from 'next/image'
import Link from 'next/link'

const HowToReach = () => {
  return (
   <>
<Hero title="How to Reach" image="hero1.jpg" />   

{/*=============== how to reach =============*/}
   <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 text-gray-800 leading-relaxed">
      <h2 className="font-yeseva-one text-2xl font-semibold mb-4">Reaching Nathula</h2>

      <p className="font-lato text-gray-700 text-base md:text-lg">
        Gangtok tourist places are many. The capital of Sikkim, Gangtok is an important tourist place of the north east. Located in the east Himalayan range it consists of some of the important passes in India (mountain). The Nathula Pass Gangtok is one such beautiful and mesmerizing destination.
      </p>

      <h3 className="font-yeseva-one text-xl font-semibold mt-6">Traveling to the mountains</h3>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        Travelling is such a passion. When you decide to travel you open your heart to the world & welcome beautiful things. It is said that-
      </p>
      <blockquote className="font-lato text-gray-700 text-base md:text-lg italic border-l-4 border-gray-400 pl-4 my-3">
        “The world is a book and those who do not travel read only one page”. So true is that.
      </blockquote>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        Mountains are huge and so is their aura. You just cannot seep the entire beauty, you just cannot feel the entire feel of the mountain. And you cannot capture the entire beauty in your camera. Such is the terrific nature of them.
      </p>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        Nathula pass is an important Gangtok tourist places. You can see the glimpse of the{" "}
        <Link href="https://en.wikipedia.org/wiki/Great_Wall_of_China" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">Great Wall of China</Link>.
      </p>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        This is one of the important passes in India from the trade point of view.
      </p>

      <h3 className="font-yeseva-one text-xl font-semibold mt-6">Important to carry documents</h3>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        While you are heading towards the Nathula pass Gangtok, do carry all your relevant identity proofs and passport size photographs. They are needed to prepare your permit of visiting the Nathula Pass.
      </p>

      <h3 className="font-yeseva-one text-xl font-semibold mt-6 italic">By Rail</h3>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        The nearest railway station to Nathula pass is the{" "}
        <Link href="https://en.wikipedia.org/wiki/New_Jalpaiguri_Junction_railway_station" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">New Jalpaiguri station (NJP)</Link>. This is the major railway station nearest to Nathula pass. There are certain other small rails routes too.
      </p>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        From NJP Gangtok is 148 km and from Gangtok you can head towards Nathu la.
      </p>

     <div className="w-full flex justify-center my-10">
            <Image
              src="/assets/railway.jpg"
              alt="New Jalpaiguri Station"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover h-[300px] w-full md:w-2/5"
            />
          </div>

      <h3 className="font-yeseva-one text-xl font-semibold mt-8 italic">By flight</h3>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        Nearest airport or air route to the Gangtok tourist places is Bagdogra. 190 km approx. from Nathula and is 124 km from Gangtok, Sikkim.
      </p>

         <div className="w-full flex justify-center my-10">
                <Image
                  src="/assets/aeroplane.jpg"
                  alt="Flight to Gangtok"
                  width={500}
                  height={500}
                  className="rounded-xl shadow-lg object-cover h-[300px] w-full md:w-2/5"
                />
              </div>

      <h3 className="font-yeseva-one text-xl font-semibold mt-8 italic">By Road</h3>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        Ample of options are available by road to Nathula pass. It is an important passes in India and hence the routes are clearly defined. Private buses and state buses ply from Siliguri, New Jalpaiguri and{" "}
        <Link href="https://en.wikipedia.org/wiki/Bagdogra" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">Bagdogra</Link>.
      </p>

       <div className="w-full flex justify-center my-10">
              <Image
                src="/assets/road.jpg"
                alt="Mountain Road to Nathula"
                width={500}
                height={500}
                className="rounded-xl shadow-lg object-cover h-[300px] w-full md:w-2/5"
              />
            </div>

      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        One can hire a private vehicle too. Other states too are well connected to these routes. The national highway makes your way easy and pleasant.
      </p>
      <ul className="list-disc ml-6 mt-2 font-lato text-gray-700 text-base md:text-lg">
        <li>
          While heading towards various Gangtok tourist places you can opt for a combination of these transport facilities and make the maximum out of it.
        </li>
      </ul>

      <h3 className="font-yeseva-one text-xl font-semibold mt-8 italic">Let’s talk about the route</h3>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        Needless to say the route to the Nathula pass Gangtok is fun filled and heartwarming. No matter which part of the country you live in you will sure lose your heart to the state of Sikkim. While traveling you also come across the majestic{" "}
        <Link href="https://en.wikipedia.org/wiki/West_Bengal" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">West Bengal</Link>.
      </p>
      <ul className="list-disc ml-6 mt-3 font-lato text-gray-700 text-base md:text-lg">
        <li>Tea-estates or tea gardens (as they are commonly called) are common sight on the way.</li>
        <li>Flora and fauna is different in this part of the nation.</li>
        <li>Elevated roads with steep slopes and narrow curves will be seen throughout.</li>
        <li>Since the roads are elevated it takes more time than normal to cover the set distance.</li>
        <li>Pressure keeps decreasing as you move upward from the sea level.</li>
        <li>It is important to keep yourself warm and covered.</li>
        <li>We wish you a pleasant journey.</li>
      </ul>
    </section>
   </>
  )
}

export default HowToReach