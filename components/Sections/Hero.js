import React from "react"
import Link from 'next/link'

export default function Hero() {
  return (
          <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center rounded-lg">
              <div class="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                  <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                      <span class="block">
                      The finest food in London.
                      </span>
                  </h2>
                  <p class="text-md mt-4 text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div class="lg:mt-0 lg:flex-shrink-0">
                      <div class="mt-12 inline-flex rounded-md shadow">
                        <Link href="/menu">
                          <button type="button" class="py-2 px-4  bg-red-600	 hover:bg-red-700	 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                              Place an order
                          </button>
                        </Link>
                      </div>
                  </div>
              </div>
              <div class="flex items-center gap-8 p-8 lg:p-24">
                  <img src="https://i.ibb.co/S7bx5QM/2.jpg" class="rounded-lg w-1/2" alt="Tree"/>
                  <div>
                      <img src="https://i.ibb.co/BwCZDp0/1.jpg" class="rounded-lg mb-8" alt="Tree"/>
                      <img src="https://i.ibb.co/MZYkfM9/6.jpg" class="rounded-lg" alt="Tree"/>
                  </div>
              </div>
          </div>


  )
}
