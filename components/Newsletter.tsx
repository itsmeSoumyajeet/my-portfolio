import Image from "next/image";

export default function Newsletter() {
  return (
    <section className="flex flex-col sm:flex-row gap-5 border rounded-lg px-5 py-5 sm:py-10 border-neutral-800 bg-neutral-900/20">
      <div className="flex-1 relative min-h-[200px] sm:min-h-auto">
        <Image
          src="https://framerusercontent.com/images/ov8RtiB4RSLvQjvdO37b38eRBo.jpg?width=640&height=427"
          alt="Hiker in nature"
          fill
          className="rounded object-cover"
        />
      </div>
      <div className="flex-[2] flex flex-col gap-4 justify-center">
        <h3 className="text-[24px] sm:text-3xl font-bold">
          Subscribe to my Newsletter
        </h3>
        <form className="text-lg w-full">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="name@email.com"
              className="border rounded-lg px-3 py-2 border-neutral-800 bg-transparent outline-none focus:border-orange-500 transition-colors w-full"
            />
            <button className="bg-gray-300 hover:bg-white text-black font-medium px-5 py-2 rounded-lg transition-colors w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </form>
        <p className="text-[12px] sm:text-[14px] text-neutral-400">
          Sign up to stay updated. <em>No Spam, No BS. Promise!</em>
        </p>
      </div>
    </section>
  );
}
