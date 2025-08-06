import Image from "next/image";

export default function ScreenshotsSection() {
  return (
    <section id="screenshots" className="py-16 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <div>
            <Image
              src="/images/screenshort_1.webp"
              alt="Screenshot 1"
              width={300}
              height={600}
              className="w-full h-auto rounded-xl shadow hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
          <div>
            <Image
              src="/images/screenshort_2.webp"
              alt="Screenshot 2"
              width={300}
              height={600}
              className="w-full h-auto rounded-xl shadow hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <Image
              src="/images/screenshort_3.webp"
              alt="Screenshot 3"
              width={300}
              height={600}
              className="w-full h-auto rounded-xl shadow hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <Image
              src="/images/screenshort_4.webp"
              alt="Screenshot 4"
              width={300}
              height={600}
              className="w-full h-auto rounded-xl shadow hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <Image
              src="/images/screenshort_5.webp"
              alt="Screenshot 5"
              width={300}
              height={600}
              className="w-full h-auto rounded-xl shadow hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <Image
              src="/images/screenshort_6.webp"
              alt="Screenshot 6"
              width={300}
              height={600}
              className="w-full h-auto rounded-xl shadow hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
