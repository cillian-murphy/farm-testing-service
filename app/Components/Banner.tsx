import Image from "next/image";
import Link from "next/link";
export default function Banner() {
    return(
<section className="relative h-[500px] min-h-[520px] top-0 left-0 right-0 overflow-hidden">
  <Image
    src="/BANNER1.jpg"
    alt="Cattle grazing on an Irish farm"
    fill
    priority
    className="object-cover"
  />

  <div className="absolute inset-0 bg-black/45" />

  <div className="relative mx-auto flex min-h-[520px] max-w-6xl items-center px-6">
    <div className="max-w-2xl text-white">
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-300">
        Livestock parasite testing
      </p>

      <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
        Your Livestock, Our Responsibility
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-100">
        Fast, reliable fecal egg counts for farmers and veterinary
        professionals.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/testing"
          className="rounded-md bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
        >
          View Testing Services
        </Link>

        <Link
          href="/contact"
          className="rounded-md border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-zinc-950"
        >
          Contact Us
        </Link>
      </div>
    </div>
  </div>
</section>

    );
}