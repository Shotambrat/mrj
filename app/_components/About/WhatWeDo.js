export default function WhatWeDo() {
    const services = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                    <circle cx="27.5" cy="27.5" r="27.5" fill="#E6F2EB" />
                    <svg x="15" y="15" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <g clipPath="url(#clip0_108_4310)">
                            <path d="M2.08398 24.479H22.9173M9.0069 15.6248C9.50139 16.1775 10.1199 16.6049 10.8117 16.872C11.5035 17.1391 12.2488 17.2383 12.9864 17.1614C13.724 17.0844 14.4328 16.8336 15.0546 16.4295C15.6763 16.0254 16.1934 15.4795 16.5632 14.8367C16.933 14.1939 17.145 13.4726 17.1819 12.7319C17.2187 11.9913 17.0793 11.2524 16.775 10.5761C16.4708 9.89985 16.0105 9.30538 15.4318 8.84158C14.8532 8.37778 14.1728 8.05788 13.4465 7.90817M13.4465 7.90817L10.9382 10.4165L7.29232 6.77067L12.9902 1.07275C13.1653 0.897634 13.3732 0.758719 13.602 0.663943C13.8307 0.569167 14.0759 0.520386 14.3236 0.520386C14.5712 0.520386 14.8164 0.569167 15.0452 0.663943C15.274 0.758719 15.4818 0.897634 15.6569 1.07275L16.6361 2.05192C16.8112 2.227 16.9501 2.43487 17.0449 2.66364C17.1397 2.89242 17.1884 3.13762 17.1884 3.38525C17.1884 3.63288 17.1397 3.87809 17.0449 4.10686C16.9501 4.33564 16.8112 4.5435 16.6361 4.71859L15.8944 5.46025M13.4465 7.90817L15.8944 5.46025M5.33815 15.6248C5.80184 16.6843 6.49442 17.628 7.36612 18.388C8.23783 19.1481 9.26703 19.7056 10.3798 20.0207M10.3798 20.0207C10.9798 19.5347 11.7285 19.2696 12.5007 19.2696C13.2728 19.2696 14.0215 19.5347 14.6215 20.0207M10.3798 20.0207C10.0057 20.3237 9.70097 20.7034 9.48607 21.1342L8.85482 22.3957C8.85482 22.3957 7.81315 24.479 5.72982 24.479H19.2715C17.1882 24.479 16.1465 22.3957 16.1465 22.3957L15.5152 21.1342C15.3003 20.7034 14.9955 20.3237 14.6215 20.0207M6.77148 9.89567L8.33398 11.4582M2.08398 14.0623H11.459M15.8944 5.46025C17.3229 6.14961 18.5079 7.25728 19.2918 8.63612C20.0758 10.015 20.4217 11.5997 20.2836 13.1798C20.1454 14.7599 19.5298 16.2606 18.5185 17.4825C17.5071 18.7044 16.1479 19.5896 14.6215 20.0207M16.1465 1.56234L17.2923 0.416504" stroke="#088133" stroke-width="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_108_4310">
                                <rect width="25" height="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </svg>
            ),
            text: "Medical equipment leasing"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                    <circle cx="27.5" cy="27.5" r="27.5" fill="#E6F2EB" />
                    <svg x="15" y="15" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <g clipPath="url(#clip0_108_4289)">
                            <path d="M0 5.46875C0 4.84715 0.24693 4.25101 0.686468 3.81147C1.12601 3.37193 1.72215 3.125 2.34375 3.125H16.4062C17.0279 3.125 17.624 3.37193 18.0635 3.81147C18.5031 4.25101 18.75 4.84715 18.75 5.46875V7.8125H20.3438C20.6949 7.81281 21.0415 7.89203 21.3579 8.04429C21.6744 8.19655 21.9525 8.41797 22.1719 8.69219L24.4859 11.5828C24.8189 11.9987 25.0002 12.5157 25 13.0484V16.4062C25 17.0279 24.7531 17.624 24.3135 18.0635C23.874 18.5031 23.2779 18.75 22.6562 18.75H21.875C21.875 19.5788 21.5458 20.3737 20.9597 20.9597C20.3737 21.5458 19.5788 21.875 18.75 21.875C17.9212 21.875 17.1263 21.5458 16.5403 20.9597C15.9542 20.3737 15.625 19.5788 15.625 18.75H7.8125C7.8134 19.1665 7.73102 19.5791 7.57019 19.9633C7.40937 20.3475 7.17335 20.6957 6.87601 20.9875C6.57868 21.2792 6.22602 21.5085 5.83878 21.6619C5.45154 21.8154 5.03753 21.8899 4.62108 21.881C4.20464 21.8722 3.79417 21.7802 3.4138 21.6104C3.03343 21.4406 2.69084 21.1965 2.40617 20.8924C2.1215 20.5883 1.90049 20.2304 1.75615 19.8397C1.6118 19.449 1.54702 19.0333 1.56562 18.6172C1.10789 18.4561 0.711442 18.1569 0.431007 17.7608C0.150571 17.3648 0 16.8915 0 16.4062V5.46875ZM2.02188 17.1188C2.30467 16.6566 2.70276 16.276 3.17707 16.0141C3.65139 15.7523 4.18562 15.6182 4.72737 15.6252C5.26911 15.6321 5.79974 15.7798 6.2672 16.0537C6.73465 16.3276 7.12287 16.7183 7.39375 17.1875H16.0437C16.318 16.7125 16.7125 16.318 17.1875 16.0437V5.46875C17.1875 5.26155 17.1052 5.06284 16.9587 4.91632C16.8122 4.76981 16.6135 4.6875 16.4062 4.6875H2.34375C2.13655 4.6875 1.93784 4.76981 1.79132 4.91632C1.64481 5.06284 1.5625 5.26155 1.5625 5.46875V16.4062C1.56238 16.5566 1.60566 16.7038 1.68714 16.8302C1.76863 16.9566 1.88485 17.0568 2.02188 17.1188ZM18.75 15.625C19.2985 15.625 19.8374 15.7694 20.3125 16.0437C20.7875 16.318 21.182 16.7125 21.4563 17.1875H22.6562C22.8635 17.1875 23.0622 17.1052 23.2087 16.9587C23.3552 16.8122 23.4375 16.6135 23.4375 16.4062V13.0469C23.4372 12.8696 23.3766 12.6977 23.2656 12.5594L20.9531 9.66875C20.8801 9.57725 20.7874 9.50334 20.6819 9.4525C20.5764 9.40165 20.4608 9.37517 20.3438 9.375H18.75V15.625ZM4.6875 17.1875C4.2731 17.1875 3.87567 17.3521 3.58265 17.6451C3.28962 17.9382 3.125 18.3356 3.125 18.75C3.125 19.1644 3.28962 19.5618 3.58265 19.8549C3.87567 20.1479 4.2731 20.3125 4.6875 20.3125C5.1019 20.3125 5.49933 20.1479 5.79235 19.8549C6.08538 19.5618 6.25 19.1644 6.25 18.75C6.25 18.3356 6.08538 17.9382 5.79235 17.6451C5.49933 17.3521 5.1019 17.1875 4.6875 17.1875ZM18.75 17.1875C18.3356 17.1875 17.9382 17.3521 17.6451 17.6451C17.3521 17.9382 17.1875 18.3356 17.1875 18.75C17.1875 19.1644 17.3521 19.5618 17.6451 19.8549C17.9382 20.1479 18.3356 20.3125 18.75 20.3125C19.1644 20.3125 19.5618 20.1479 19.8549 19.8549C20.1479 19.5618 20.3125 19.1644 20.3125 18.75C20.3125 18.3356 20.1479 17.9382 19.8549 17.6451C19.5618 17.3521 19.1644 17.1875 18.75 17.1875Z" fill="#088133" />
                        </g>
                        <defs>
                            <clipPath id="clip0_108_4289">
                                <rect width="25" height="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </svg>
            ),
            text: "Prompt delivery from stock or directly from factory"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                    <circle cx="27.5" cy="27.5" r="27.5" fill="#E6F2EB" />
                    <svg x="15" y="15" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M21.0938 23.4375V20.1562C21.0938 17.0631 21.0938 15.5155 20.1495 14.5552C19.2063 13.5937 17.6863 13.5938 14.6484 13.5938L12.5 15.7812L10.3516 13.5938C7.31367 13.5938 5.79365 13.5937 4.85049 14.5552C3.90625 15.5155 3.90625 17.0631 3.90625 20.1562V23.4375M16.7969 16.875V20.1562M18.4082 18.5156H15.1855M16.2598 6.48438V5.39062C16.2598 4.88791 16.1625 4.39011 15.9736 3.92566C15.7846 3.46122 15.5077 3.03921 15.1586 2.68373C14.8094 2.32826 14.395 2.04628 13.9388 1.8539C13.4826 1.66152 12.9937 1.5625 12.5 1.5625C12.0063 1.5625 11.5174 1.66152 11.0612 1.8539C10.605 2.04628 10.1906 2.32826 9.84144 2.68373C9.49232 3.03921 9.21538 3.46122 9.02643 3.92566C8.83748 4.39011 8.74023 4.88791 8.74023 5.39062V6.48438C8.74023 6.98709 8.83748 7.48489 9.02643 7.94934C9.21538 8.41378 9.49232 8.83579 9.84144 9.19127C10.1906 9.54674 10.605 9.82872 11.0612 10.0211C11.5174 10.2135 12.0063 10.3125 12.5 10.3125C12.9937 10.3125 13.4826 10.2135 13.9388 10.0211C14.395 9.82872 14.8094 9.54674 15.1586 9.19127C15.5077 8.83579 15.7846 8.41378 15.9736 7.94934C16.1625 7.48489 16.2598 6.98709 16.2598 6.48438Z" stroke="#088133" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </svg>
            ),
            text: "Equipment installation and application"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                    <circle cx="27.5" cy="27.5" r="27.5" fill="#E6F2EB" />
                    <svg x="15" y="15" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <g clipPath="url(#clip0_108_4303)">
                            <path d="M12.2 0C19.2712 0 25 5.59625 25 12.5C25 19.4037 19.27 25 12.2 25C8.21125 25 4.5225 23.2037 2.1125 20.1925C2.04494 20.1084 1.99498 20.0116 1.96557 19.9078C1.93617 19.804 1.92793 19.6953 1.94134 19.5883C1.95475 19.4813 1.98953 19.378 2.04363 19.2847C2.09773 19.1913 2.17003 19.1098 2.25625 19.045C2.43206 18.9112 2.65304 18.8512 2.87237 18.8775C3.0917 18.9039 3.29215 19.0146 3.43125 19.1863C4.48554 20.4965 5.82137 21.5526 7.3396 22.276C8.85783 22.9994 10.5195 23.3716 12.2013 23.365C18.345 23.365 23.3262 18.5 23.3262 12.5C23.3262 6.5 18.345 1.635 12.2013 1.635C10.5435 1.62854 8.90498 1.99016 7.40394 2.69377C5.9029 3.39739 4.57677 4.42544 3.52125 5.70375C3.37995 5.87381 3.17794 5.98211 2.9581 6.00568C2.73826 6.02925 2.51789 5.96623 2.34375 5.83C2.25828 5.76404 2.18695 5.68155 2.13402 5.58746C2.08107 5.49337 2.0476 5.38959 2.03559 5.28229C2.02358 5.175 2.03327 5.06639 2.06409 4.96292C2.09491 4.85945 2.14623 4.76323 2.215 4.68C4.62875 1.7425 8.2675 0 12.2 0ZM12.8825 8.5775L16.2662 11.9613C16.5938 12.2888 16.6 12.8112 16.28 13.1313L12.975 16.4375C12.8974 16.5139 12.8055 16.5742 12.7045 16.6149C12.6035 16.6555 12.4954 16.6758 12.3865 16.6746C12.2776 16.6733 12.1701 16.6505 12.0701 16.6074C11.97 16.5644 11.8795 16.5019 11.8038 16.4237C11.7256 16.3479 11.6633 16.2573 11.6204 16.1572C11.5774 16.0572 11.5547 15.9496 11.5536 15.8407C11.5524 15.7318 11.5728 15.6238 11.6136 15.5229C11.6544 15.4219 11.7148 15.33 11.7912 15.2525L13.725 13.3175L0.8375 13.3187C0.728636 13.3204 0.620522 13.3005 0.51939 13.2602C0.418258 13.2198 0.326109 13.1599 0.248255 13.0838C0.170401 13.0077 0.108383 12.9169 0.0657747 12.8167C0.0231668 12.7165 0.000812277 12.6089 0 12.5C0 12.0487 0.375 11.6825 0.8375 11.6825H13.6725L11.725 9.73375C11.6469 9.65789 11.5846 9.56731 11.5416 9.46725C11.4987 9.36718 11.476 9.25961 11.4748 9.15073C11.4737 9.04185 11.4941 8.93381 11.5349 8.83285C11.5756 8.7319 11.636 8.64001 11.7125 8.5625C11.79 8.48648 11.8818 8.42652 11.9826 8.38606C12.0834 8.34559 12.1911 8.32542 12.2997 8.3267C12.4083 8.32798 12.5156 8.35068 12.6154 8.3935C12.7152 8.43633 12.8055 8.49843 12.8813 8.57625" fill="#088133" />
                        </g>
                        <defs>
                            <clipPath id="clip0_108_4303">
                                <rect width="25" height="25" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </svg>
            ),
            text: "Registration of new equipment"
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
                    <circle cx="27.5" cy="27.5" r="27.5" fill="#E6F2EB" />
                    <svg x="15" y="15" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M20.8984 9.37478C20.8995 7.95553 20.5408 6.55916 19.856 5.31607C19.1711 4.07299 18.1824 3.02373 16.9822 2.26628C15.782 1.50883 14.4094 1.06791 12.9925 0.984672C11.5757 0.901438 10.1609 1.17861 8.88026 1.79031C7.5996 2.40202 6.49484 3.32829 5.66915 4.48264C4.84346 5.63699 4.32377 6.98175 4.15862 8.39137C3.99347 9.80098 4.18824 11.2295 4.72474 12.5434C5.26124 13.8573 6.12197 15.0139 7.22656 15.9051V23.4373C7.22667 23.5371 7.2523 23.6353 7.30101 23.7225C7.34972 23.8096 7.4199 23.8829 7.50488 23.9353C7.59713 23.9929 7.70374 24.0234 7.8125 24.0232C7.90333 24.0233 7.99293 24.0022 8.07422 23.9617L12.5 21.7488L16.9268 23.9617C17.0161 24.0061 17.1152 24.0269 17.2148 24.0223C17.3145 24.0176 17.4112 23.9876 17.496 23.9351C17.5808 23.8826 17.6508 23.8093 17.6993 23.7222C17.7479 23.6351 17.7734 23.537 17.7734 23.4373V15.9051C18.749 15.1191 19.5362 14.1246 20.0769 12.9945C20.6177 11.8645 20.8984 10.6276 20.8984 9.37478ZM5.27344 9.37478C5.27344 7.94551 5.69727 6.54832 6.49133 5.35992C7.2854 4.17152 8.41403 3.24527 9.73452 2.69831C11.055 2.15135 12.508 2.00824 13.9098 2.28708C15.3117 2.56592 16.5993 3.25418 17.61 4.26483C18.6206 5.27549 19.3089 6.56314 19.5877 7.96495C19.8665 9.36677 19.7234 10.8198 19.1765 12.1403C18.6295 13.4608 17.7033 14.5894 16.5149 15.3835C15.3265 16.1775 13.9293 16.6013 12.5 16.6013C10.5841 16.599 8.74736 15.8369 7.39262 14.4822C6.03788 13.1274 5.27576 11.2907 5.27344 9.37478ZM16.6016 22.489L12.7607 20.5691C12.6795 20.5285 12.5899 20.5074 12.499 20.5074C12.4082 20.5074 12.3186 20.5285 12.2373 20.5691L8.39844 22.489V16.699C9.65093 17.4027 11.0634 17.7722 12.5 17.7722C13.9366 17.7722 15.3491 17.4027 16.6016 16.699V22.489ZM12.5 14.6482C13.543 14.6482 14.5626 14.3389 15.4298 13.7595C16.297 13.18 16.9729 12.3564 17.372 11.3928C17.7712 10.4292 17.8756 9.36894 17.6721 8.34599C17.4686 7.32304 16.9664 6.38341 16.2289 5.6459C15.4914 4.9084 14.5517 4.40615 13.5288 4.20268C12.5059 3.9992 11.4455 4.10363 10.4819 4.50276C9.51835 4.9019 8.69475 5.57781 8.1153 6.44502C7.53584 7.31223 7.22656 8.3318 7.22656 9.37478C7.22811 10.7729 7.7842 12.1133 8.77283 13.102C9.76146 14.0906 11.1019 14.6467 12.5 14.6482ZM12.5 5.27322C13.3112 5.27322 14.1042 5.51378 14.7787 5.96446C15.4532 6.41515 15.9789 7.05572 16.2894 7.80519C16.5998 8.55465 16.681 9.37933 16.5228 10.175C16.3645 10.9706 15.9739 11.7014 15.4002 12.275C14.8266 12.8486 14.0958 13.2393 13.3002 13.3975C12.5046 13.5558 11.6799 13.4746 10.9304 13.1641C10.1809 12.8537 9.54036 12.328 9.08968 11.6535C8.63899 10.979 8.39844 10.186 8.39844 9.37478C8.39844 8.28698 8.83057 7.24373 9.59976 6.47454C10.369 5.70535 11.4122 5.27322 12.5 5.27322Z" fill="#088133" />
                    </svg>
                </svg>
            ),
            text: "Warranty and post-warranty service of the supplied equipment by certified service engineers",
            highlight: true,
        },
    ];

    return (
        <div className="max-w-[2100px] slg:px-20 mx-auto px-2">
            <div className="2xl:grid 2xl:grid-cols-2">
                <div>
                    <h2 className="ml-0 text-[25px] mb-8 mdx:text-[35px] font-medium uppercase">What we do for <br />our Partners?</h2>
                </div>
                <div className="mt-[25px] grid gap-4 mdx:grid-cols-2">
                    {services.map((service, index) => (
                        <div key={index} className={`w-full h-[186px] flex flex-col gap-[23px] items-start border-[1px] rounded-[20px] px-[20px] pt-[20px] pb-[30px] 2xl:pt-[30px] 2xl:h-[200px] ${service.highlight ? 'mdx:col-span-2' : ''}`}>
                            <div>
                                {service.icon}
                            </div>
                            <div className="text-[16px] mdx:text-[18px] mdl:text-[20px]">
                                {service.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}