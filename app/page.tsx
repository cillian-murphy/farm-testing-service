import Banner from "./Components/Banner";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <section className="-mt-8 sm:-mt-10 mb-8 sm:mb-10 -mx-4 sm:-mx-6">
        <Banner />
      </section>
      
<section className="py-16 ">

    <h2 className="mb-10 text-center text-4xl font-bold">
        Your Livestock, Our Responsibility
    </h2>

    <div className="flex flex-col gap-8 md:flex-row">

        <div className="flex-1 rounded-lg border border-zinc-800 p-8 shadow">
            <h3 className="mb-4 text-2xl font-semibold">
                Quick & Accurate Testing
            </h3>

            <p>
                Our farm testing services provide quick and reliable
                fecal egg counts, helping farmers and veterinarians
                diagnose parasites with confidence.
            </p>
        </div>

        <div className="flex-1 rounded-lg border border-zinc-800 p-8 shadow">
            <h3 className="mb-4 text-2xl font-semibold">
                Mobile Testing
            </h3>

            <p>
                We provide convenient on-site testing so farmers and
                veterinarians don&apos;t have to wait for results.
            </p>
        </div>

        <div className="flex-1 rounded-lg border border-zinc-800 p-8 shadow">
            <h3 className="mb-4 text-2xl font-semibold">
                Cost Effective
            </h3>

            <p>
                Affordable testing solutions designed to meet the
                needs of farmers and veterinary professionals.
            </p>
        </div>
    </div>
</section>

<section>
  <div className="flex flex-col gap-8 md:flex-row">
    <div className=" rounded-lg border border-zinc-800 p-8 shadow md:basis-1/2">
        <h3 className="mb-4 text-2xl font-semibold">
            Our services
        </h3>

        <p>
            We offer Fecal Egg Counts (FEC) for a range of parasites including:
        </p>
        <ul className="space-y-1 text-1.5xl">
          <li className="flex items-center gap-3">
            <span className="text-green-600">✓</span>
            <span>Worms</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-green-600">✓</span>
            <span>Coccidiosis</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-green-600">✓</span>
            <span>Liver Fluke</span>
          </li>

          <li className="flex items-center gap-3">
            <span className="text-green-600">✓</span>
            <span>Rumen/Stomach Fluke</span>
          </li>
        </ul>
    </div>

    <div className="relative h-64 w-full overflow-hidden rounded-xl lg:h-auto lg:min-h-100  md:basis-1/2">
      <Image
      src="/Cow2.jpg"
      alt="Cow being tested"
      fill
      className="object-cover"/>
    </div>
  </div>
</section>
      

    </>
  );
}
