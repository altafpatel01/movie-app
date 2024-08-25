import React from "react";

function Footers() {
  return (
    <div className="   bg-gradient-to-t from-blue-900 to-blue-400 border-t   mt-8 flex flex-col gap-8 items-center justify-center py-10 ">
      <div className="  font-sans  text-white  w-[80%] ">
        Discover a world of cinema with the latest releases, timeless classics,
        and hidden gems. Dive into reviews, trailers, and behind-the-scenes
        content that bring every story to life. Whether you're a film buff or
        casual viewer, your next favorite movie is just a click away.
      </div>
      <div className=" bg-white h-[0.1px] w-full"></div>
      <div className="flex-row flex justify-between     pb-4 text-gray-200 text-[0.8rem]  font-serif   w-[80%] ">
        <ul>
          <li>
            <h4 className="my-4 text-[1rem]">Services</h4>
          </li>
          <li className="hover:text-gray-700">Home</li>
          <li className="hover:text-gray-700">Now Showing</li>
          <li className="hover:text-gray-700">Upcoming Releases</li>
          <li className="hover:text-gray-700">Genres</li>
          <li className="hover:text-gray-700">Top Rated</li>
          <li className="hover:text-gray-700">Blog</li>
        </ul>
        <ul>
          <li>
            <h4 className="my-4 text-[1rem]">Info</h4>
          </li>
          <li className="hover:text-gray-700">About Us</li>
          <li className="hover:text-gray-700">Contact</li>
          <li className="hover:text-gray-700">Privacy Policy</li>
          <li className="hover:text-gray-700">Terms of Service</li>
          <li className="hover:text-gray-700">Careers</li>
          <li className="hover:text-gray-700">FAQs</li>
        </ul>
        <ul>
          <li>
            <h4 className="my-4 text-[1rem]">Help</h4>
          </li>
          <li className="hover:text-gray-700">Support</li>
          <li className="hover:text-gray-700">Careers</li>
          <li className="hover:text-gray-700">Privacy Policy</li>
          <li className="hover:text-gray-700">About Us</li>
          <li className="hover:text-gray-700">Policy</li>
          <li className="hover:text-gray-700">Security</li>
        </ul>
      </div>
      <div className="flex gap-10">
        <div>
          <a href="g">
            <img src="" alt="" />
          </a>
        </div>
        <div>
          <a href="g">
            <img src="" alt="" />
          </a>
        </div>
        <div>
          <a href="g">
            <img src="" alt="" />
          </a>
        </div>
        <div>
          <a href="g">
            <img src="" alt="" />
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center mb-4 items-center gap-3">
      <div className="w-10 h-10 bg-contain hover:bg-[url('https://cdn-icons-png.flaticon.com/128/1077/1077042.png')] bg-[url('https://cdn-icons-png.flaticon.com/128/1384/1384063.png')]"  ></div>
      <div className="w-10 h-10 bg-contain hover:bg-[url('https://cdn-icons-png.flaticon.com/128/1051/1051360.png')] bg-[url('https://cdn-icons-png.flaticon.com/128/2504/2504903.png')]"  ></div>
      <div className="w-10 h-10 bg-contain hover:bg-[url('https://cdn-icons-png.flaticon.com/128/3536/3536569.png')] bg-[url('https://cdn-icons-png.flaticon.com/128/174/174857.png')]"  ></div>
      <div className="w-10 h-10 bg-contain hover:bg-[url('https://cdn-icons-png.flaticon.com/128/546/546394.png')] bg-[url('https://cdn-icons-png.flaticon.com/128/2965/2965306.png')]"  ></div>

      </div>
    </div>
  );
}

export default Footers;
