import React from 'react'
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import carti from "../public/cartii.jpg"
import Link from 'next/link';

function Nav() {
  return (
    <nav className="fixed flex w-full border-b border-border text-white">
        <Link href={'#'} className="hover:shadow-test rounded-sm hover:bg-main hover:cursor-pointer nav-section border-r border-border flex py-8 px-12 basis-1/4"><span className="text-xl hover:underline">Firat.run</span></Link>
        <Link href={'#'} className="hover:shadow-test rounded-sm hover:bg-main hover:cursor-pointer border-r border-border flex py-8 px-12 basis-1/4 justify-center"><span className="text-lg hover:underline">Posts</span></Link>
        <Link href={'#'} className="hover:shadow-test rounded-sm hover:bg-main hover:cursor-pointer border-r border-border flex py-8 px-12 basis-1/4 justify-center"><span className="text-lg hover:underline">Acknowledgements</span></Link>
        <Link href={'#'} className="hover:shadow-test rounded-sm hover:bg-main hover:cursor-pointer border-r border-border flex py-8 px-12 basis-1/4 justify-center"><span className="text-lg hover:underline">Source Code</span></Link>
    </nav>
  )
}

export default Nav