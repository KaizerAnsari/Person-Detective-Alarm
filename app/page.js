import Image from "next/image";
import  ObjectDetection  from "@/components/object-detection";


export default function Home() {
  return (
  <main className= " flex min-h-screen flex-col items-center p-8 "> 
  <h1 className="gradient-title font-extrabold text-3xl md:text-5xl lg:text-7xl tracking-tighter md:px-6 text-center">Person Detection Alarm</h1>
  
<ObjectDetection/>
  </main>
  );
}
