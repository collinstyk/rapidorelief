import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    name: "English",
    code: "En",
  });

  const { i18n } = useTranslation();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code.toLowerCase());
    setIsOpen(false); // Close the dropdown after selection
  };

  const languages = [
    { name: "English", code: "En" },
    { name: "Portuguese", code: "Br" },
    { name: "Espanol", code: "Es" },
    { name: "Dutch", code: "Nl" },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-3 rounded-[10px] border-[1px] border-[#58FD0A] bg-[#749D1C80] px-[18px] text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.75 0.5C4.36519 0.5 0 4.86523 0 10.25C0 15.6348 4.36519 20 9.75 20C15.1348 20 19.5 15.6348 19.5 10.25C19.5 4.86523 15.1348 0.5 9.75 0.5ZM8.73962 18.5467C6.88975 18.3252 5.17816 17.4971 3.8403 16.1593C2.26183 14.5808 1.39258 12.4822 1.39258 10.2499C1.39258 8.24035 2.09739 6.33939 3.3895 4.82837C3.42278 5.2276 3.50495 5.65562 3.48391 5.96157C3.40703 7.07696 3.29697 7.77503 3.94984 8.71604C4.20419 9.08256 4.26667 9.60798 4.39047 10.0322C4.51155 10.4472 4.99525 10.6649 5.32886 10.9206C6.00194 11.4367 6.64586 12.0365 7.35958 12.4907C7.83063 12.7904 8.12486 12.9395 7.98691 13.5144C7.87595 13.9766 7.84497 14.2614 7.60581 14.6732C7.53283 14.7989 7.8813 15.6069 7.99727 15.7229C8.34873 16.0743 8.69748 16.3967 9.08059 16.7131C9.67455 17.2038 9.02289 17.8415 8.73962 18.5467ZM15.6598 16.1593C14.4583 17.3609 12.9552 18.1509 11.3213 18.46C11.5528 17.8874 11.9652 17.3786 12.3476 17.0837C12.6803 16.827 13.097 16.3332 13.2707 15.9422C13.4443 15.5516 13.6744 15.213 13.9071 14.8539C14.2383 14.343 13.0906 13.5725 12.7187 13.411C11.8818 13.0477 11.2518 12.5574 10.508 12.034C9.97813 11.6612 8.90225 12.2288 8.30399 11.9676C7.48457 11.6098 6.80947 10.9881 6.09721 10.4517C5.36221 9.89818 5.39774 9.25285 5.39774 8.43624C5.97346 8.45748 6.79246 8.27692 7.17467 8.7399C7.29528 8.88601 7.70999 9.53874 7.98758 9.30681C8.21436 9.11729 7.81953 8.35763 7.74327 8.17904C7.50866 7.6299 8.27783 7.41573 8.67153 7.04335C9.18528 6.55754 10.2873 5.79563 10.2002 5.4474C10.1131 5.09917 9.09753 4.11254 8.50105 4.26648C8.41166 4.28954 7.62463 5.11478 7.47257 5.24424C7.4766 4.9749 7.48063 4.7056 7.48475 4.43626C7.48733 4.2662 7.1675 4.09163 7.18236 3.98195C7.21986 3.70473 7.99152 3.20162 8.18347 2.98084C8.04899 2.89679 7.59008 2.50262 7.45119 2.56046C7.11491 2.70062 6.73513 2.79718 6.39885 2.93729C6.39885 2.82067 6.38469 2.71112 6.36782 2.60293C7.04169 2.30457 7.75471 2.0971 8.49172 1.98643L9.15191 2.25174L9.61803 2.80492L10.0832 3.28459L10.4899 3.4156L11.1358 2.80646L10.9692 2.3716V1.98071C12.2465 2.16624 13.4528 2.64278 14.5093 3.37759C14.3203 3.39451 14.1126 3.42231 13.8783 3.45212C13.7815 3.39493 13.6573 3.36896 13.5518 3.32917C13.8579 3.98738 14.1772 4.63651 14.5017 5.28601C14.8482 5.97981 15.617 6.72399 15.752 7.45637C15.911 8.31962 15.8007 9.10374 15.8877 10.1194C15.9715 11.0974 16.9904 12.2087 16.9904 12.2087C16.9904 12.2087 17.4609 12.369 17.8521 12.3131C17.4874 13.7561 16.7397 15.0794 15.6598 16.1593Z"
            fill="#58FD0A"
          />
        </svg>
        <span className="f-f-m text-[24px] font-medium leading-normal text-white">
          {`${selectedLanguage.name} - ${selectedLanguage.code}`}
        </span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 5.64156L13.3335 0.10232C13.747 -0.226003 14.3587 -0.226003 14.7721 0.10232C15.1856 0.430643 15.1856 1.00006 14.7721 1.32838L8.21933 6.96313C7.80583 7.29146 7.19417 7.29146 6.78067 6.96313L0.227877 1.32838C-0.185626 1.00006 -0.185626 0.430643 0.227877 0.10232C0.641379 -0.226003 1.25305 -0.226003 1.66656 0.10232L7.5 5.64156Z"
              fill="#58FD0A"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.5 3.35844L1.66647 8.89768C1.25297 9.226 0.641302 9.226 0.227799 8.89768C-0.185703 8.56936 -0.185703 7.99994 0.227799 7.67162L6.7806 2.03687C7.1941 1.70854 7.80577 1.70854 8.21928 2.03687L14.7721 7.67162C15.1856 7.99994 15.1856 8.56936 14.7721 8.89768C14.3586 9.226 13.7469 9.226 13.3334 8.89768L7.5 3.35844Z"
              fill="#58FD0A"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-full rounded-md bg-[#56711bfe] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {languages.map((language) => {
            if (language.name === selectedLanguage.name) return null;
            return (
              <li key={language.code}>
                <button
                  onClick={() => handleLanguageSelect(language)}
                  className="block w-full px-4 py-2 text-left text-white hover:bg-[#749d1c53]"
                >
                  {language.name}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
