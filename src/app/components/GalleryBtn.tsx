'use client'
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function GalleryBtn() { 
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);


  
    function toggleDropdown() {
      setDropdownOpen(!dropdownOpen);
    }
    return (
        <div>
            <nav className='flex-1 text-center py-0 '>
                <ul className="md:flex p-5 space-x-3 cursor-pointer">
                <li className="relative group">
                    <span onClick={toggleDropdown}>
                      Gallery
                      {/* Arrow icon that changes based on dropdown state */}
                      {dropdownOpen ? (
                        <FontAwesomeIcon icon={faChevronUp} className="ml-2"/>
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} className="ml-2"/>
                      )}
                    </span>
                    {/* Dropdown */}
                    <ul className={`absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md ${dropdownOpen ? "block" : "hidden"}`}>
                      <li>
                        <Link href="/gallery/2018">2018</Link>
                      </li>
                      <li>
                        <Link href="/gallery/2019">2019</Link>
                      </li>
                      <li>
                        <Link href="/gallery/2020">2020</Link>
                      </li>
                    </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}