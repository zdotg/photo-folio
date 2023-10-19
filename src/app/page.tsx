import Image from "next/image"


export default function Home() {

  return (

    
    <main className="flex flex-col min-h-screen max-w-screen-md pl-0 ml-40 ">
      <div className="container flex flex-wrap w-5/12 my-auto">
        <div className="flex flex-row columns-4 px-10 py-5 space-x-3 ">
          <Image src="/images/2018/feb-2018/Feb21-6.jpg" className="hover:scale-125" width={300} height={300} alt=""/>
          <Image src="/images/2018/feb-2018/Feb21-38.jpg" className="hover:scale-125" width={300} height={300} alt=""/>
          <Image src="/images/2018/july-2018/july-18_4407.jpg" className="hover:scale-125" width={300} height={300} alt=""/>
          <Image src="/images/2018/nyc-2018/nyc-18_5637.jpg" className="hover:scale-125" width={300} height={300} alt="" />
          <button>2018</button>
        </div>
        
        <div className="flex flex-row columns-4 px-10 py-5 space-x-3">
          <Image src="/images/2019/nyc-2019/nyc-19-1.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/2019/nyc-2019/nyc-19-2.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/2019/photo-book/PB-00003.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/2019/photo-book/PB-00009.jpg" className="hover:scale-125" width={300} height={300} alt="" />
          <button>2019</button>
        </div>
        <div className="flex flex-row columns-4 px-10 py-5 space-x-3">
          <Image src="/images/2020/april-2020/BKApril3-1.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/2020/april-2020/BKApril3-12.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/2020/jan-2020/jan2020-1.jpg" className="hover:scale-125"  width={300} height={300} alt=""/>
          <Image src="/images/2020/jan-2020/jan2020-19.jpg" className="hover:scale-125" width={300} height={300} alt="" />
          <button>2020</button>
        </div>
      </div>
    </main>
  )
}
