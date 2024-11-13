import { t } from "i18next";
import { useState } from "react";

const WatchVideo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex cursor-pointer items-center justify-start gap-2"
      >
        {/* Video Icon */}
        <div className="flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full border-2 border-[#C7C7C7]">
          <div className="flex h-[43.33px] w-[43.33px] items-center justify-center rounded-full bg-[#58FD0A]">
            {/*Video Image */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M5.59032 3.33325V16.6666L15.9723 9.99992L5.59032 3.33325Z"
                stroke="#1A4402"
                stroke-width="1.73721"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <h1 className="f-f-m text-[20px] font-normal text-white">
          {t("watchVideo")}
        </h1>
      </div>
      <div
        className={`absolute left-0 top-0 z-[99999999] h-screen w-full transform transition-all duration-300 ease-in-out ${
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex items-center justify-center bg-[#B2FF87] p-10">
            {/* Youtube video player */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ac7r4S6onpw?si=HhN5f7biGhfqSj4K"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {/* Close Button */}
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="absolute right-[10px] top-[10px]"
            >
              <svg
                className="h-[25px] w-[25px] md:h-[30px] md:w-[30px]"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.6 22.5L15 17.1L20.4 22.5L22.5 20.4L17.1 15L22.5 9.6L20.4 7.5L15 12.9L9.6 7.5L7.5 9.6L12.9 15L7.5 20.4L9.6 22.5ZM15 30C12.925 30 10.975 29.606 9.15 28.818C7.325 28.031 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.969 22.675 1.182 20.85C0.394 19.025 0 17.075 0 15C0 12.925 0.394 10.975 1.182 9.15C1.969 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.9685 9.15 1.1805C10.975 0.3935 12.925 0 15 0C17.075 0 19.025 0.3935 20.85 1.1805C22.675 1.9685 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.031 7.325 28.818 9.15C29.606 10.975 30 12.925 30 15C30 17.075 29.606 19.025 28.818 20.85C28.031 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.031 20.85 28.818C19.025 29.606 17.075 30 15 30ZM15 27C18.35 27 21.1875 25.8375 23.5125 23.5125C25.8375 21.1875 27 18.35 27 15C27 11.65 25.8375 8.8125 23.5125 6.4875C21.1875 4.1625 18.35 3 15 3C11.65 3 8.8125 4.1625 6.4875 6.4875C4.1625 8.8125 3 11.65 3 15C3 18.35 4.1625 21.1875 6.4875 23.5125C8.8125 25.8375 11.65 27 15 27Z"
                  fill="#1A4402"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WatchVideo;
