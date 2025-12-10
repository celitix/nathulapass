import Hero from '@/app/components/hero'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <>
    <Hero title="Visiting Places" image="hero1.jpg" />

    {/*================ Mid Section =================*/}
     <section className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-10 text-gray-800 leading-relaxed">
      <h2 className="font-yeseva-one text-2xl font-semibold mb-4">Top places to visit in Gangtok.</h2>

      <p className="font-lato text-gray-700 text-base md:text-lg">
        Gangtok Tourism is incomplete without other places to visit in Gangtok. This is an amazing part of the country. Sikkim tourism undoubtedly is a pleasure filled experience. Nathula is at a distance of 52 km from Gangtok which is the capital of Sikkim.
      </p>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        You can see the troops of Indian and Chinese soldiers guarding the international borders at a distance.
      </p>
      <ul className="list-disc ml-6 mt-2 font-lato text-gray-700 text-base md:text-lg">
        <li>An interesting stairway leads to the border.</li>
      </ul>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        Stay prepared for snow all around you and experiencing a chilled white ambience.
      </p>

      <h3 className="font-yeseva-one text-xl font-semibold mt-6">Places to visit in Gangtok</h3>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        Sightseeing and tourist attractions are many in Sikkim tourism and Gangtok tourism.
      </p>

      <ul className="list-disc ml-6 mt-3 space-y-2">
        <li className="font-lato text-gray-700 text-base md:text-lg">
          <span className="font-semibold">Tsomgo lake</span>– 2 hours from the town of Gangtok, Tsomgo is about a kilometer long lake. Lush greenery and flora & fauna suitable for this part of the region can be seen here.
        </li>
        <li className="font-lato text-gray-700 text-base md:text-lg">
          <span className="font-semibold">Do Drul Chorten</span>– Sikkim’s biggest{" "}
          <Link href="https://en.wikipedia.org/wiki/Monastery" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">monastery</Link> this is the most popular stupa here. There are 108 prayer wheels in this monastery. It is an important religious site.
        </li>
        <li className="font-lato text-gray-700 text-base md:text-lg">
          <span className="font-semibold">Hanuman Tok</span>– A temple managed by the Indian army this is situated at a distant height.
        </li>
        <li className="font-lato text-gray-700 text-base md:text-lg">
          <span className="font-semibold">Banjhakri Falls</span>– water falls surrounded by lush gardens and greenery. This is wonderful picnic spots for the people of Gangtok.
        </li>
        <li className="font-lato text-gray-700 text-base md:text-lg">
          <span className="font-semibold">Tashi viewpoint</span>– to take a picturesque view of the snow caped peaks of{" "}
          <Link href="https://en.wikipedia.org/wiki/Kanchenjunga" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">Kanchenjunga</Link> the Tashi viewpoint is an ideal spot.
        </li>
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        <div className="relative h-56 sm:h-64 md:h-48 rounded-lg overflow-hidden shadow-md">
          <Image src="/assets/TSOMGOLAKE.jpg" alt="Tsomgo Lake" fill className="object-cover" />
        </div>
        <div className="relative h-56 sm:h-64 md:h-48 rounded-lg overflow-hidden shadow-md">
          <Image src="/assets/DoDrul.jpg" alt="Do Drul Chorten" fill className="object-cover" />
        </div>
         <div className="relative h-56 sm:h-64 md:h-48 rounded-lg overflow-hidden shadow-md">
          <Image src="/assets/HanumanTok.jpg" alt="Hanuman Tok" fill className="object-cover" />
        </div>
        <div className="relative h-56 sm:h-64 md:h-48 rounded-lg overflow-hidden shadow-md">
          <Image src="/assets/JhakriWaterFalls.jpg" alt="Banjhakri Falls" fill className="object-cover" />
        </div>
        <div className="relative h-56 sm:h-64 md:h-48 rounded-lg overflow-hidden shadow-md">
          <Image src="/assets/TashiViewPoint.jpg" alt="Tashi Viewpoint" fill className="object-cover" />
        </div>
      </div>

      <p className="font-lato text-gray-700 text-base md:text-lg mt-6">
        Many such monasteries, temples, hill tops, waterfalls, gardens, exhibitions etc are a part and parcel of the Gangtok tourism.
      </p>

      <p className="font-lato text-gray-700 text-base md:text-lg italic mt-4">
        Darjeeling is another wonderful tourist attraction near Gangtok. You can definitely plan to visit this small and historic hill station in a one day or two days visit from Gangtok.
      </p>

      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        Darjeeling is a hill station in the state of west Bengal (India). World’s third largest mountain the Kanchenjunga is situated here. Toy train which is a declared world heritage is the heart throbbing attraction of this hill station.
      </p>

      <ul className="list-disc ml-6 mt-2 font-lato text-gray-700 text-base md:text-lg">
        <li>
          <Link href="https://en.wikipedia.org/wiki/Jalpaiguri" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">New Jalpaiguri</Link> remains to be the nearest railway station connected to all major cities through the Indian Railways.
        </li>
        <li>Tea gardens are world famous and Darjeeling tea is a world class tea served in major hotels and households.</li>
        <li>Black tea is a specialty.</li>
      </ul>

      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        History is quite rich for the Darjeeling Township. British rule saw golden days at Darjeeling.
      </p>

      <h3 className="font-yeseva-one text-xl font-semibold mt-6 italic">The seven sisters’ water fall–</h3>
      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        while going towards north Sikkim you will come across the most beautiful water fall of the region the Seven sister’s water fall. 32 km away from the town of Gangtok this place is a must see. The national highway connects it absolutely well.
      </p>

      <p className="font-lato text-gray-700 text-base md:text-lg mt-2">
        The above mentioned places to visit in Gangtok are one better than the other. You can never rank them; each has its own charm and uniqueness. It takes a tourists’ keen interest to enjoy the various faces of this beautiful state of Sikkim and the Sikkim tourism.
      </p>

      <ul className="list-disc ml-6 mt-2 font-lato text-gray-700 text-base md:text-lg">
        <li>Gangtok tourism has been a favorite honeymoon site. Newly wed couples can be often seen enjoying the beauty of north east.</li>
        <li>
          <Link href="/"  className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">Nathula pass</Link> is definitely people’s first choice to be visited while at Gangtok or Sikkim.
        </li>
        <li>The department of trade and tourism has made it a point to make the visitor’s experience a smooth one.</li>
      </ul>

      <div className="relative w-full h-64 sm:h-80 md:h-96 mt-6 rounded-lg overflow-hidden shadow-md">
        <Image src="/assets/placetovisit.jpg" alt="Seven Sisters Waterfall" fill className="object-cover" />
      </div>
    </section>


    </>
  )
}

export default page