import Image from "next/image";

export default function Banner() {
  return (
    <section className="flex justify-center py-2">
      <Image
        src="/FarmTestingBanner.png"
        alt="Farm Testing Services"
        width={1861}
        height={199}
        priority
        className="h-auto w-full"
      />
    </section>
  );
}