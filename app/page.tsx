import Image from "next/image";
import Link from "next/link";
import clientPhoto from "@/assets/Images/clientPhoto.jpg";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FAQ from "@/components/Faq";
export default function Home() {
  return (
    <div className="relative w-full pt-32 pb-20 bg-amber-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Vidhi Kapoor <br />
            {/* <span className="text-gray-900">for startup employees</span> */}
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Get equity planning, stock option financing, and wealth management
            from advisors that know how stock options and equity can help grow
            your wealth.
          </p>
          <Link
            href="/get-started"
            className="inline-block px-6 py-3 text-white bg-gray-900 rounded-full font-semibold hover:bg-gray-800 transition"
          >
            Get started
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative mt-10 md:mt-0 md:ml-10 rounded-full">
          <div className="relative w-full h-[500px] flex items-center justify-center rounded-full">
            <Image
              src={clientPhoto} // Replace with your image in public/images
              alt="Hero"
              width={400}
              height={500}
              className="w-[450px] object-contain rounded-full"
            />
          </div>
        </div>
      </div>
      <Testimonials/>
      <Contact/>
      <FAQ/>
    </div>
  );
}
