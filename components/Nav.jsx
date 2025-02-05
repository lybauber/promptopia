"use client";

import Link from "@node_modules/next/link";
import Image from "@node_modules/next/image";
import { useState, useEffect } from "react";
import {singIn, singOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="Promptopia Logo"
            width={30}
            height={30}
            className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
        <Link/>
        
    </nav> 
 )
}

export default Nav