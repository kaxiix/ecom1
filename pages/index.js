// import HeroBanner from "@/components/HeroBanner";
// import ProductCard from "@/components/ProductCard";
// import Wrapper from "@/components/Wrapper";

// export default function Home() {

//   return (
//     <main>
//       <HeroBanner />
//       <Wrapper>
//         <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
//           <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
//             Cushioning for Your Miles
//           </h1>
//           <p className="text-md md:text-xl">
//             A lightweight Nike ZoomX midsole is combined with
//             increased stack heights to help provide cushioning
//             during extended stretches of running.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//         </div>
//       </Wrapper>
//     </main>
//   )
// }

import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Link href="/products">
        <span className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          View Products
        </span>
      </Link>
    </div>
  );
}

