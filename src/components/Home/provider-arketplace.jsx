import ImageOne from "../../assets/images/market-1.png";
import ImageTwo from "../../assets/images/market-2.png";
import ImageThree from "../../assets/images/market-3.svg";
import { useTranslation } from "react-i18next";

export default function ProviderMarketplace() {
  const { t } = useTranslation();
  return (
    <div className="my-5 w-full bg-[#1A4402] 2xl:mx-auto 2xl:max-w-[1161px]">
      <div className="relative mx-auto flex w-11/12 flex-col items-center justify-center gap-5 p-4 lg:flex-row lg:justify-between lg:pr-16">
        <div>
          <h1
            style={{ fontFamily: "DM Sans" }}
            className="text-[25px] font-medium leading-[45px] text-[#EAF9D6]"
          >
            {t("providerMarket.heading")}
          </h1>
          <p
            style={{ fontFamily: "DM Sans" }}
            className="text-[20px] font-normal leading-[32px] tracking-[-0.2px] text-[#B2FF87]"
          >
            {t("providerMarket.body")}
          </p>

          <button
            style={{ fontWeight: 500 }}
            className="f-f-m mt-2 flex items-center justify-start gap-3 rounded-[10px] bg-[#EAF9D6] px-[16px] py-[12px] text-[18px] font-medium leading-normal tracking-[-0.36px] text-[#1A4402]"
          >
            {t("providerMarket.buttonText")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 2.00134C12.8322 1.99991 12.6541 1.99997 12.463 2.00002L11.3572 2.00004C10.2734 2.00003 9.39926 2.00002 8.69138 2.05786C7.96253 2.11741 7.32234 2.24322 6.73005 2.54501C5.78924 3.02438 5.02434 3.78928 4.54497 4.73009C4.24318 5.32238 4.11737 5.96257 4.05782 6.69142C3.99998 7.3993 3.99999 8.27345 4 9.35723V14.6428C3.99999 15.7266 3.99998 16.6008 4.05782 17.3087C4.11737 18.0375 4.24318 18.6777 4.54497 19.27C5.02434 20.2108 5.78924 20.9757 6.73005 21.4551C7.32234 21.7569 7.96253 21.8827 8.69138 21.9422C9.39923 22.0001 10.2733 22.0001 11.3571 22H12.6428C13.7266 22.0001 14.6008 22.0001 15.3086 21.9422C16.0375 21.8827 16.6777 21.7569 17.27 21.4551C18.2108 20.9757 18.9757 20.2108 19.455 19.27C19.7568 18.6777 19.8826 18.0375 19.9422 17.3087C20 16.6008 20 15.7266 20 14.6428L20 9.53706C20.0001 9.34596 20.0001 9.16781 19.9987 9L17.1615 9C16.6343 9.00002 16.1795 9.00003 15.805 8.96943C15.4096 8.93713 15.0164 8.86581 14.638 8.67302C14.0735 8.3854 13.6146 7.92646 13.327 7.36197C13.1342 6.98359 13.0629 6.59037 13.0306 6.19503C13 5.82046 13 5.36569 13 4.83854L13 2.00134ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13L15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11L9 11ZM8 16C8 15.4477 8.44772 15 9 15H12C12.5523 15 13 15.4477 13 16C13 16.5523 12.5523 17 12 17H9C8.44772 17 8 16.5523 8 16Z"
                fill="#1A4402"
              />
              <path
                d="M19.7175 7C19.6004 6.66675 19.4483 6.34638 19.2632 6.0444C18.953 5.53819 18.5277 5.11309 17.9132 4.49897L17.5011 4.08685C16.8869 3.47238 16.4619 3.04705 15.9556 2.73684C15.6536 2.55178 15.3333 2.39959 15 2.28254V4.8C15 5.37655 15.0008 5.74883 15.0239 6.03216C15.0461 6.30383 15.0838 6.40455 15.109 6.45399C15.2049 6.64215 15.3578 6.79513 15.546 6.89101C15.5955 6.9162 15.6962 6.95388 15.9678 6.97607C16.2512 6.99922 16.6234 7 17.2 7H19.7175Z"
                fill="#1A4402"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-start gap-6 md:flex-row">
          <img className="h-[160px] w-[189.029px]" src={ImageOne} />
          <img className="h-[160px] w-[189.029px]" src={ImageTwo} />
        </div>
        <img className="absolute -bottom-3 -right-1" src={ImageThree} />
      </div>
    </div>
  );
}
