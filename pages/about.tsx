import Head from "next/head";
import Header from "./home/header";

const Images = new Array(15).fill(0);

const AboutPage = () => {
  return (<>
        <Head>
        <title>Operation Medical Care</title>
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
      </Head>
      <Header />
      <div className="relative grid w-full pt-80 pb-80 place-items-center " style={{ backgroundSize: 'cover', backgroundImage: 'url("/images/Picture7-2.png")'}}>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-[60%]" style={{ zIndex: 1 }}/>
        <h1 className="text-5xl font-normal tracking-normal text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-8xl" style={{ zIndex: 2 }}>About us</h1>
      </div> 
         
      <main className="p-4 m-auto max-w-7xl">
        <div className="grid w-full grid-cols-4 gap-4">
          {Images.map((e, i) => (<div key={i} className="bg-red-500 h-72"></div>))}
        </div>
      </main>
    </>)
}

export default AboutPage;