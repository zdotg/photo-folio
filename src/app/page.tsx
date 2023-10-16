import Image from "next/image"

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen max-w-screen-md pl-0 ml-40 ">
      <div className="container flex flex-wrap w-5/12 my-auto">
        <div className="flex flex-row columns-4 px-10 py-5 space-x-3">
          <Image src="/images/photo-book/01292018-28.jpg" className="hover:scale-125" width={300} height={300} alt=""/>
          <Image src="/images/photo-book/Brooke-108.jpg" className="hover:scale-125" width={300} height={300} alt=""/>
          <Image src="/images/photo-book/Brooke-128.jpg" className="hover:scale-125" width={300} height={300} alt=""/>
          <Image src="/images/photo-book/Brooke-146.jpg" className="hover:scale-125" width={300} height={300} alt="" />
          <button>2018</button>
        </div>
        
        <div className="flex flex-row columns-4 px-10 py-5 space-x-3">
          <Image src="/images/nyc-2019/NY-1.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/nyc-2019/NY-2.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/nyc-2019/Ny-3.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/nyc-2019/NY-4.jpg" className="hover:scale-125" width={300} height={300} alt="" />
          <button>2019</button>
        </div>
        <div className="flex flex-row columns-4 px-10 py-5 space-x-3">
          <Image src="/images/jan-2020/jan2020-1.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/jan-2020/jan2020-15.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/jan-2020/jan2020-12.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/jan-2020/jan2020-22.jpg" className="hover:scale-125" width={300} height={300} alt="" />
          <button>2020</button>
        </div>
      </div>
    </main>
  )
}
