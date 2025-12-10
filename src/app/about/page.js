import Hero from '@/app/components/hero'
import Image from 'next/image'
import Link from 'next/link'

const about = () => {
  return (
    <>
    
    {/*================ Hero section =================*/}
    <Hero title="About" image="hero1.jpg" />

     {/*=============== About section ===============*/}
       <section className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-10 text-gray-800 leading-relaxed">
      <p className="font-lato text-gray-700 text-base md:text-lg">
        Nathula mountain pass is India’s shared border with China. Nathula connects the Indian state of Sikkim with the Autonomous region of China. Gangtok the capital of Sikkim is 54 km from Nathula pass Sikkim.
      </p>

      <p className="mt-4 font-lato text-gray-700 text-base md:text-lg">
        The Himalayas are the mountain range that separates the plains of the Indian subcontinent from the{" "}
        <Link href="https://en.wikipedia.org/wiki/Tibetan_Plateau" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">Tibetan plateau</Link>. They possess the highest peak on earth the Everest. Mountain pass of the Himalayas is routed through the mountain range.
      </p>

      <h2 className="font-yeseva-one font-semibold text-xl mt-6">Why are Passes significant?</h2>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        Mountain passes have been important since time immemorial. They have played important roles in the formation of the various countries and their borders. Trades and travel see the important impacts of the passes. These are gaps or saddle in the mountains that human use for various purposes.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li className="font-lato text-gray-700 text-base md:text-lg">Nathula pass is beauty and brilliance mixed in one.</li>
      </ul>

      <h2 className="font-yeseva-one font-semibold text-xl mt-6 italic">The Himalayas</h2>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        Spread across India, Bhutan, Nepal, Pakistan and the People Republic of China the Himalayas need no introduction. World’s largest mountain ranges with the highest peaks are well known.
      </p>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        The world’s most prominent rivers originate from the mighty Himalayas. To name a few are Ganges, Brahmaputra & the Indus. These rivers are the lifeline of the adjoining countries. Their role is altogether with a huge chapter interesting enough to be known.
      </p>

    <div className="w-full flex justify-center my-10">
          <Image
            src="/assets/himalayas.jpg"
            alt="Nathula Pass Sikkim"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover h-[300px] w-full md:w-3/5"
          />
        </div>

      <h2 className="font-yeseva-one font-semibold text-xl mt-8 italic">The trade at Nathula</h2>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        The Nathula mountain pass has trade routes between India and China. A remarkable date for the trades between the two neighbors is 6/7/2006. The products which are locally made in both countries are traded as per the customary practices.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li className="font-lato text-gray-700 text-base md:text-lg">There is a list of products that can be dealt with between the traders. The import and export of the products for both Indian and China have been clearly defined.</li>
        <li className="font-lato text-gray-700 text-base md:text-lg">In the year 1962, the trade was sealed between the two countries.</li>
        <li className="font-lato text-gray-700 text-base md:text-lg">Animals were used to transport goods between Gangtok and Lhasa.</li>
      </ul>

      <h2 className="font-yeseva-one font-semibold text-xl mt-8 italic">Height and weather</h2>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        The height of the Nathula pass is 4310 above the sea level. The Nathula pass Sikkim is a hot tourist spot and the height from the sea level makes it all the more interesting. The weather here is generally chilled and windy. Snow is a must and sometimes the fast blowing wind makes it hard to bear.
      </p>
      <ul className="list-disc ml-6 mt-2">
        <li className="font-lato text-gray-700 text-base md:text-lg">The pressure at the height is low.</li>
        <li className="font-lato text-gray-700 text-base md:text-lg">The Indian army deployed at the Nathula pass Sikkim fills the heart with pride and respect.</li>
      </ul>

      <div className="w-full flex justify-center my-10">
          <Image
            src="/assets/nathula.jpg"
            alt="Nathula Pass Sikkim"
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover h-[300px] w-full md:w-3/5"
          />
        </div>

      <h2 className="font-yeseva-one font-semibold text-xl mt-8 italic">Flora and Fauna</h2>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        The flora & fauna is varied at all level of the pass. Depending on the climate and weather situations vegetation is found. Animals that are{" "}
        <Link href="https://en.wikipedia.org/wiki/Herbivore" target="_blank" rel="noopener noreferrer" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">herbivores</Link> depend on this vegetation. However there are no permanent settlements of human apart from the army personnel.
      </p>

      <h2 className="font-yeseva-one font-semibold text-xl mt-8 italic">Beauty of the place</h2>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        The beauty of Nathula pass can be well seen in our <Link href="/nathula-pass-images" className="text-blue-600 cursor-pointer font-semibold transition-all duration-300 hover:text-blue-700">Images section</Link>. Feel the cold in your spine and the pride of owning such and amazing mountain pass in your country. India is blessed to have a good share of the Himalayas and we must always cherish it.
      </p>
      <p className="mt-2 font-lato text-gray-700 text-base md:text-lg">
        Every year good numbers of tourist are seen heading towards the Indo-china mountain pass. The government of India has taken due care to promote the tourism and maintain the site.
      </p>
    </section>
    </>
  )
}

export default about