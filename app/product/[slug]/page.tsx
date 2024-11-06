import AgentInfo from '@/app/components/AgentInfo';
import Carousel from '@/app/components/Carousel';
import { fullProduct } from '@/app/interface';
import { client } from '@/app/lib/sanity';

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
    _id,
    "images":image,
    price,
    name,
    description,
    "slug": slug.current,
    "categoryName": category->name,
    }`;

  const data = await client.fetch(query);

  return data;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Wait for the params Promise to resolve and get the slug value
  const { slug } = await params;

  // Fetch data based on the resolved slug
  const data: fullProduct = await getData(slug);
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* First Column: Carousel */}
          <div className='lg:w-5/12 w-full m-auto'>
            <Carousel images={data.images} />
          </div>

          {/* Second Column: Product Details */}
          <div className='lg:w-4/12 w-full md:py-8'>
            <div className='mb-2 md:mb-3'>
              <span className='text-sm text-gray-500'>{data.categoryName}</span>
              <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                {data.name}
              </h2>
            </div>

            <div className='mb-4'>
              <span className='text-2xl font-bold text-gray-800 md:text-2xl'>
                RM {Number(data.price).toLocaleString()}
              </span>
            </div>

            <div className='mt-12 text-lg text-gray-500 tracking-wide'>
              {data.description}
            </div>
            <div className='pt-10 pb-8'>
              <AgentInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//          <div className='grid gap-8 md:grid-cols-2'>
//           {/* <ImageGallery images={data.images} /> */}
//           <div className='w-[80%] m-auto'>
//             <Carousel images={data.images} />
//           </div>
//           <div className='md:py-8'>
//             <div className='mb-2 md:mb-3'>
//               <span>{data.categoryName}</span>
//               <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
//                 {data.name}
//               </h2>
//             </div>

//             <div className='mb-4'>
//               <span className='text-2xl font-bold text-gray-800 md:text-2xl'>
//                 RM {Number(data.price).toLocaleString()}
//               </span>
//             </div>

//             <div className='mt-12 text-lg text-gray-500 tracking-wide'>
//               {data.description}
//             </div>
//           </div>
//         </div>
