"use client"

import Image from "next/image"


const homePage = () => {
 
  return (
    <>
<div className="flex justify-between">
<Image width={300} height={250}  src={"https://pixelpoint.io/static/be2f22a82ed8486578b6b3ed772e21dd/779e3/cover.webp"} alt="image"/>
<Image width={300} height={250} src={"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230202143636/NEXT-js-tutorial-1.png"} alt="image"/>
</div>
      <h3 className='text-center my-3 text-5xl bg-orange-300 py-2 '>What is Next js </h3>
      <p>
        Next.js is a React-based framework that simplifies building fast, SEO-friendly web apps with features like server-side rendering and static site generation.


      </p>
    </>
  )
}

export default homePage