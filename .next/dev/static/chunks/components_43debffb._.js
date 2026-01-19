(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Platform URLs - Update these with actual URLs
const PLATFORM_LOGIN_URL = "https://platform.manjamcapital.com";
const PLATFORM_REGISTER_URL = "https://platform.manjamcapital.com/register/account-type";
const ChevronDown = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    const { className, isOpen } = t0;
    const t1 = `${className} transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 4.5L6 7.5L9 4.5",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] !== t1) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: t1,
            children: t2
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    return t3;
};
_c = ChevronDown;
const ArrowRightIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.33333 8H12.6667M12.6667 8L8 3.33333M12.6667 8L8 12.6667",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 52,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = ArrowRightIcon;
const HamburgerIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 12H21M3 6H21M3 18H21",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 69,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = HamburgerIcon;
const CloseIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M18 6L6 18M6 6L18 18",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 86,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = CloseIcon;
const serviceItems = [
    {
        id: "academy",
        title: "Academy",
        description: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
        image: "/manjam dropdown.png"
    },
    {
        id: "fund",
        title: "Fund",
        description: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
        image: "/manjam dropdown.png",
        badge: "Start your voyage"
    },
    {
        id: "platform",
        title: "Platform",
        description: "Tortor interdum condimentum nunc molestie quam lectus euismod pulvinar risus. Cursus in odio aenean.",
        image: "/manjam dropdown.png"
    }
];
const insightsItems = [
    {
        id: "articles",
        title: "Articles",
        description: "Tortor interdum condimentum nunc molestie",
        href: "/blogs"
    },
    {
        id: "news",
        title: "News",
        description: "Tortor interdum condimentum nunc molestie"
    },
    {
        id: "newsletter",
        title: "Newsletter",
        description: "Tortor interdum condimentum nunc molestie"
    }
];
const insightsLearnMore = [
    {
        id: "learn1",
        title: "Learn More",
        description: "Tortor interdum condimentum nunc molestie"
    },
    {
        id: "learn2",
        title: "Learn More",
        description: "Tortor interdum condimentum nunc molestie"
    },
    {
        id: "learn3",
        title: "Learn More",
        description: "Tortor interdum condimentum nunc molestie"
    }
];
const exploreItemsLeft = [
    {
        id: "why",
        title: "Why Manjam ?",
        description: "Tortor interdum condimentum nunc molestie"
    },
    {
        id: "about",
        title: "About",
        description: "Tortor interdum condimentum nunc molestie",
        href: "/about"
    },
    {
        id: "gallery",
        title: "Gallery",
        description: "Tortor interdum condimentum nunc molestie"
    }
];
const exploreItemsRight = [
    {
        id: "team",
        title: "Team",
        description: "Tortor interdum condimentum nunc molestie"
    },
    {
        id: "partners",
        title: "Partners",
        description: "Tortor interdum condimentum nunc molestie"
    },
    {
        id: "learnmore",
        title: "Learn More",
        description: "Tortor interdum condimentum nunc molestie"
    }
];
// Team members data
const teamMembers = [
    {
        id: 1,
        name: "Koray Okumus",
        role: "Sr. Developer",
        image: "/team.png"
    },
    {
        id: 2,
        name: "Nicolas Jesus",
        role: "Sr. Product Manager",
        image: "/team.png"
    },
    {
        id: 3,
        name: "Ava Wright",
        role: "Jr. Product Designer",
        image: "/team.png"
    },
    {
        id: 4,
        name: "Noah Pierre",
        role: "Sr. Product Designer",
        image: "/team.png"
    },
    {
        id: 5,
        name: "Lana Steiner",
        role: "Sr. Product Designer",
        image: "/team.png"
    },
    {
        id: 6,
        name: "Emma Wilson",
        role: "Frontend Developer",
        image: "/team.png"
    }
];
// Social Icons for Team Modal
const FacebookIconTeam = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 1.66667H12.5C11.395 1.66667 10.3352 2.10566 9.55376 2.88706C8.77236 3.66846 8.33337 4.72827 8.33337 5.83334V8.33334H5.83337V11.6667H8.33337V18.3333H11.6667V11.6667H14.1667L15 8.33334H11.6667V5.83334C11.6667 5.61232 11.7545 5.40036 11.9108 5.24408C12.0671 5.0878 12.279 5 12.5 5H15V1.66667Z",
                stroke: "#6B7280",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 209,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 209,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c4 = FacebookIconTeam;
const TwitterIconTeam = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M19.1667 2.5C18.3687 3.06288 17.4851 3.49338 16.55 3.775C16.0481 3.19788 15.3809 2.78893 14.6392 2.60328C13.8975 2.41763 13.1164 2.46434 12.4018 2.73704C11.6872 3.00974 11.0737 3.49533 10.6442 4.12809C10.2147 4.76086 9.99049 5.51028 10 6.275V7.10833C8.53559 7.14631 7.08439 6.82151 5.77584 6.16288C4.46729 5.50424 3.34191 4.53221 2.50004 3.33334C2.50004 3.33334 -0.833292 10.8333 6.66671 14.1667C4.9506 15.3317 2.90614 15.9158 0.833374 15.8333C8.33337 20 17.5 15.8333 17.5 6.25C17.4993 6.01788 17.4769 5.78633 17.4334 5.55834C18.2839 4.71958 18.884 3.66064 19.1667 2.5Z",
                stroke: "#6B7280",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 226,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 226,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c5 = TwitterIconTeam;
const LinkedInIconTeam = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.3333 6.66667C14.6594 6.66667 15.9312 7.19346 16.8689 8.13114C17.8066 9.06882 18.3333 10.3406 18.3333 11.6667V17.5H15V11.6667C15 11.2246 14.8244 10.8007 14.5118 10.4882C14.1993 10.1756 13.7754 10 13.3333 10C12.8913 10 12.4674 10.1756 12.1548 10.4882C11.8423 10.8007 11.6667 11.2246 11.6667 11.6667V17.5H8.33333V11.6667C8.33333 10.3406 8.86012 9.06882 9.7978 8.13114C10.7355 7.19346 12.0073 6.66667 13.3333 6.66667Z",
                    stroke: "#6B7280",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 243,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.00004 7.5H1.66671V17.5H5.00004V7.5Z",
                    stroke: "#6B7280",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 243,
                    columnNumber: 615
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.33337 5C4.25385 5 5.00004 4.25381 5.00004 3.33334C5.00004 2.41286 4.25385 1.66667 3.33337 1.66667C2.4129 1.66667 1.66671 2.41286 1.66671 3.33334C1.66671 4.25381 2.4129 5 3.33337 5Z",
                    stroke: "#6B7280",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 243,
                    columnNumber: 746
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 243,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c6 = LinkedInIconTeam;
const InstagramIconTeam = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.1667 1.66667H5.83337C3.53219 1.66667 1.66671 3.53215 1.66671 5.83334V14.1667C1.66671 16.4679 3.53219 18.3333 5.83337 18.3333H14.1667C16.4679 18.3333 18.3334 16.4679 18.3334 14.1667V5.83334C18.3334 3.53215 16.4679 1.66667 14.1667 1.66667Z",
                    stroke: "#6B7280",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 260,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M13.3333 9.475C13.4362 10.1685 13.3177 10.8769 12.9948 11.4992C12.6719 12.1215 12.1609 12.6262 11.5347 12.9414C10.9084 13.2566 10.1987 13.3663 9.50653 13.2549C8.81439 13.1436 8.17478 12.8167 7.67904 12.321C7.18331 11.8252 6.85645 11.1856 6.74511 10.4935C6.63377 9.80132 6.74343 9.09162 7.05862 8.46536C7.3738 7.83909 7.87854 7.32812 8.50085 7.00523C9.12315 6.68234 9.83156 6.56383 10.525 6.66667C11.2324 6.77158 11.8874 7.10122 12.3931 7.60691C12.8988 8.1126 13.2285 8.76757 13.3333 9.475Z",
                    stroke: "#6B7280",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 260,
                    columnNumber: 439
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14.5834 5.41667H14.5917",
                    stroke: "#6B7280",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 260,
                    columnNumber: 1021
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 260,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c7 = InstagramIconTeam;
const ArrowLeftIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15.8333 10H4.16667M4.16667 10L10 15.8333M4.16667 10L10 4.16667",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 277,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 277,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c8 = ArrowLeftIcon;
const ArrowRightIconLarge = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M4.16667 10H15.8333M15.8333 10L10 4.16667M15.8333 10L10 15.8333",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 294,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 294,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c9 = ArrowRightIconLarge;
function Navbar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(73);
    if ($[0] !== "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932") {
        for(let $i = 0; $i < 73; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e70d18bc9b85172cc3af55cef9dd500f713381ef7532bb12595fb0bb17776932";
    }
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("EN");
    const [langDropdownOpen, setLangDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [insightsOpen, setInsightsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [exploreOpen, setExploreOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileActiveDropdown, setMobileActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [teamModalOpen, setTeamModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subscribeModalOpen, setSubscribeModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const teamSliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let t0;
    if ($[1] !== pathname) {
        t0 = ({
            "Navbar[handleLogoClick]": (e)=>{
                if (pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }
            }
        })["Navbar[handleLogoClick]"];
        $[1] = pathname;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleLogoClick = t0;
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Navbar[handleTeamClick]": ()=>{
                setTeamModalOpen(true);
                setExploreOpen(false);
                setMobileMenuOpen(false);
            }
        })["Navbar[handleTeamClick]"];
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const handleTeamClick = t1;
    let navItems;
    let scrollTeamSlider;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let toggleMobileDropdown;
    if ($[4] !== exploreOpen || $[5] !== insightsOpen || $[6] !== mobileActiveDropdown || $[7] !== mobileMenuOpen || $[8] !== servicesOpen) {
        const handleSubscribeClick = {
            "Navbar[handleSubscribeClick]": ()=>{
                setSubscribeModalOpen(true);
                closeAllDropdowns();
                setMobileMenuOpen(false);
            }
        }["Navbar[handleSubscribeClick]"];
        let t7;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = ({
                "Navbar[scrollTeamSlider]": (direction)=>{
                    if (teamSliderRef.current) {
                        if (direction === "left") {
                            teamSliderRef.current.scrollBy({
                                left: -320,
                                behavior: "smooth"
                            });
                        } else {
                            teamSliderRef.current.scrollBy({
                                left: 320,
                                behavior: "smooth"
                            });
                        }
                    }
                }
            })["Navbar[scrollTeamSlider]"];
            $[17] = t7;
        } else {
            t7 = $[17];
        }
        scrollTeamSlider = t7;
        navItems = [
            {
                label: "Services",
                hasDropdown: true,
                id: "services"
            },
            {
                label: "Insights",
                hasDropdown: true,
                id: "insights"
            },
            {
                label: "Explore Manjam",
                hasDropdown: true,
                id: "explore"
            }
        ];
        const handleMouseEnter = {
            "Navbar[handleMouseEnter]": (id)=>{
                if (id === "services") {
                    setServicesOpen(true);
                    setInsightsOpen(false);
                    setExploreOpen(false);
                } else {
                    if (id === "insights") {
                        setInsightsOpen(true);
                        setServicesOpen(false);
                        setExploreOpen(false);
                    } else {
                        if (id === "explore") {
                            setExploreOpen(true);
                            setServicesOpen(false);
                            setInsightsOpen(false);
                        }
                    }
                }
            }
        }["Navbar[handleMouseEnter]"];
        const handleMouseLeave = {
            "Navbar[handleMouseLeave]": (id_0)=>{
                if (id_0 === "services") {
                    setServicesOpen(false);
                }
                if (id_0 === "insights") {
                    setInsightsOpen(false);
                }
                if (id_0 === "explore") {
                    setExploreOpen(false);
                }
            }
        }["Navbar[handleMouseLeave]"];
        const closeAllDropdowns = {
            "Navbar[closeAllDropdowns]": ()=>{
                setServicesOpen(false);
                setInsightsOpen(false);
                setExploreOpen(false);
            }
        }["Navbar[closeAllDropdowns]"];
        const isActive = {
            "Navbar[isActive]": (id_1)=>{
                if (id_1 === "services") {
                    return servicesOpen;
                }
                if (id_1 === "insights") {
                    return insightsOpen;
                }
                if (id_1 === "explore") {
                    return exploreOpen;
                }
                return false;
            }
        }["Navbar[isActive]"];
        let t8;
        if ($[18] !== mobileActiveDropdown) {
            t8 = ({
                "Navbar[toggleMobileDropdown]": (id_2)=>{
                    setMobileActiveDropdown(mobileActiveDropdown === id_2 ? null : id_2);
                }
            })["Navbar[toggleMobileDropdown]"];
            $[18] = mobileActiveDropdown;
            $[19] = t8;
        } else {
            t8 = $[19];
        }
        toggleMobileDropdown = t8;
        t6 = "w-full bg-white relative";
        t4 = "flex items-center justify-between h-[60px] md:h-[70px] lg:h-[80px] px-4 md:px-6 lg:px-0 relative z-60 bg-white";
        if ($[20] !== mobileMenuOpen) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "lg:hidden text-[#1C4A3F] p-2",
                onClick: {
                    "Navbar[<button>.onClick]": ()=>setMobileMenuOpen(!mobileMenuOpen)
                }["Navbar[<button>.onClick]"],
                children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 479,
                    columnNumber: 56
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HamburgerIcon, {}, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 479,
                    columnNumber: 72
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 477,
                columnNumber: 12
            }, this);
            $[20] = mobileMenuOpen;
            $[21] = t5;
        } else {
            t5 = $[21];
        }
        t2 = "hidden lg:flex items-center gap-3 xl:gap-5 w-auto xl:w-[336px] h-5";
        t3 = navItems.map({
            "Navbar[navItems.map()]": (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    onMouseEnter: {
                        "Navbar[navItems.map() > <div>.onMouseEnter]": ()=>handleMouseEnter(item.id)
                    }["Navbar[navItems.map() > <div>.onMouseEnter]"],
                    onMouseLeave: {
                        "Navbar[navItems.map() > <div>.onMouseLeave]": ()=>handleMouseLeave(item.id)
                    }["Navbar[navItems.map() > <div>.onMouseLeave]"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `flex items-center gap-1 font-medium text-xs xl:text-sm transition-all whitespace-nowrap font-(family-name:--font-space-grotesk) px-3 py-2 rounded-t-xl ${isActive(item.id) ? "text-[#10B981] bg-white" : "text-[#1C4A3F] hover:opacity-80"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 491,
                                    columnNumber: 315
                                }, this),
                                item.hasDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {
                                    className: isActive(item.id) ? "text-[#10B981]" : "text-[#1C4A3F]",
                                    isOpen: isActive(item.id)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 491,
                                    columnNumber: 361
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 491,
                            columnNumber: 57
                        }, this),
                        item.id === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute left-0 top-full rounded-b-2xl rounded-tr-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-200 overflow-hidden ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                            style: {
                                width: "580px",
                                background: "linear-gradient(135deg, #111827 0%, #1C4A3F 100%)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#fund",
                                            onClick: closeAllDropdowns,
                                            className: "group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white font-bold text-base mb-1",
                                                    children: "The Fund"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 297
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/70 text-sm font-normal mb-2",
                                                    children: "Manjam Capital's Innovation Fund"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 362
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/50 text-xs font-normal leading-relaxed",
                                                    children: "World class governance, shaped by Switzerland's best-in-class institutions."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 452
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 494,
                                            columnNumber: 73
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#platform",
                                            onClick: closeAllDropdowns,
                                            className: "group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white font-bold text-base mb-1",
                                                    children: "The Platform"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 831
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/70 text-sm font-normal mb-2",
                                                    children: "Manjam Capital's digital backbone"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 900
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/50 text-xs font-normal leading-relaxed",
                                                    children: "One secure platform designed for a seamless end-to-end experience."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 991
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 494,
                                            columnNumber: 603
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/#academy",
                                            onClick: closeAllDropdowns,
                                            className: "group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white font-bold text-base mb-1",
                                                    children: "The Academy"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 1360
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/70 text-sm font-normal mb-2",
                                                    children: "Manjam Capital's education arm"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 1428
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/50 text-xs font-normal leading-relaxed",
                                                    children: "Leading the next era of specialized digital-asset and blockchain education."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 1516
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 494,
                                            columnNumber: 1133
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 494,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 494,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 491,
                            columnNumber: 508
                        }, this),
                        item.id === "insights" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute left-0 top-full rounded-b-2xl rounded-tr-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-200 overflow-hidden ${insightsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                            style: {
                                width: "520px",
                                background: "linear-gradient(135deg, #111827 0%, #1C4A3F 100%)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative p-5 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mb-3 overflow-hidden",
                                        style: {
                                            background: "linear-gradient(135deg, rgba(70, 184, 134, 0.15) 0%, rgba(28, 74, 63, 0.2) 100%)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-20 h-20 rounded-lg bg-linear-to-br from-[#46B886] to-[#1C4A3F] flex items-center justify-center shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white font-bold text-2xl",
                                                        children: "M"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 499,
                                                        columnNumber: 168
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 499,
                                                    columnNumber: 44
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-white font-bold text-lg mb-1",
                                                            children: "Weekly Digest"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 499,
                                                            columnNumber: 254
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/70 text-sm font-normal mb-2",
                                                            children: "What matters most in digital assets this week."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 499,
                                                            columnNumber: 322
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-white/50 text-xs font-normal mb-3",
                                                            children: "Concise, clear, and built for professionals; a 4–5 minute read."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 499,
                                                            columnNumber: 426
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleSubscribeClick,
                                                            className: "flex items-center gap-2 px-4 py-2 bg-[#46B886] text-white text-sm font-medium rounded-lg hover:bg-[#3da677] transition-colors cursor-pointer",
                                                            children: [
                                                                "Subscribe",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                                                    fileName: "[project]/components/Navbar.jsx",
                                                                    lineNumber: 499,
                                                                    columnNumber: 748
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 499,
                                                            columnNumber: 547
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 499,
                                                    columnNumber: 230
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 499,
                                            columnNumber: 16
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 497,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blogs",
                                                onClick: closeAllDropdowns,
                                                className: "group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-base mb-1",
                                                        children: "Articles"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 499,
                                                        columnNumber: 1057
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm font-normal leading-relaxed",
                                                        children: "Deep dives, frameworks, and professional-grade perspectives"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 499,
                                                        columnNumber: 1122
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 499,
                                                columnNumber: 833
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blogs",
                                                onClick: closeAllDropdowns,
                                                className: "group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-base mb-1",
                                                        children: "Market Updates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 499,
                                                        columnNumber: 1481
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm font-normal leading-relaxed",
                                                        children: "Key moves, signals, and context; explained simply"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 499,
                                                        columnNumber: 1552
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 499,
                                                columnNumber: 1257
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 499,
                                        columnNumber: 793
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 497,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 494,
                            columnNumber: 1713
                        }, this),
                        item.id === "explore" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `absolute left-0 top-full rounded-b-2xl rounded-tr-2xl border border-[#E5E7EB] shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-200 overflow-hidden ${exploreOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`,
                            style: {
                                width: "520px",
                                background: "linear-gradient(135deg, #111827 0%, #1C4A3F 100%)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/#why-manjam",
                                        onClick: closeAllDropdowns,
                                        className: "group relative flex gap-4 p-5 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] mb-3 overflow-hidden",
                                        style: {
                                            background: "linear-gradient(135deg, rgba(70, 184, 134, 0.15) 0%, rgba(28, 74, 63, 0.2) 100%)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 rounded-lg bg-linear-to-br from-[#46B886] to-[#1C4A3F] flex items-center justify-center shrink-0 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/manjam-logo.png",
                                                    alt: "Manjam",
                                                    width: 60,
                                                    height: 60,
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 504,
                                                    columnNumber: 156
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 504,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-lg mb-1",
                                                        children: "Why Manjam?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 281
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/70 text-sm font-normal leading-relaxed",
                                                        children: "The mission, the model, and what makes us different."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 347
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 504,
                                                columnNumber: 257
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 502,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                onClick: closeAllDropdowns,
                                                className: "group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-base mb-1",
                                                        children: "About"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 745
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm font-normal leading-relaxed",
                                                        children: "Who we are, what we build, and how we're structured."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 807
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 504,
                                                columnNumber: 521
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleTeamClick,
                                                className: "group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] text-left w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-base mb-1",
                                                        children: "Team"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 1162
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm font-normal leading-relaxed",
                                                        children: "The people behind everything and the expertise we bring."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 1223
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 504,
                                                columnNumber: 935
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#partners",
                                                onClick: closeAllDropdowns,
                                                className: "group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-base mb-1",
                                                        children: "Partners"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 1585
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm font-normal leading-relaxed",
                                                        children: "Trusted institutions and collaborators we work with."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 1650
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 504,
                                                columnNumber: 1357
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/#gallery",
                                                onClick: closeAllDropdowns,
                                                className: "group block p-4 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white font-bold text-base mb-1",
                                                        children: "Gallery"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 2005
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-white/60 text-sm font-normal leading-relaxed",
                                                        children: "Highlights from events, releases, and visual insights."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 504,
                                                        columnNumber: 2069
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 504,
                                                columnNumber: 1778
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 504,
                                        columnNumber: 481
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 502,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 499,
                            columnNumber: 1722
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 487,
                    columnNumber: 50
                }, this)
        }["Navbar[navItems.map()]"]);
        $[4] = exploreOpen;
        $[5] = insightsOpen;
        $[6] = mobileActiveDropdown;
        $[7] = mobileMenuOpen;
        $[8] = servicesOpen;
        $[9] = navItems;
        $[10] = scrollTeamSlider;
        $[11] = t2;
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
        $[16] = toggleMobileDropdown;
    } else {
        navItems = $[9];
        scrollTeamSlider = $[10];
        t2 = $[11];
        t3 = $[12];
        t4 = $[13];
        t5 = $[14];
        t6 = $[15];
        toggleMobileDropdown = $[16];
    }
    let t7;
    if ($[22] !== t2 || $[23] !== t3) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 531,
            columnNumber: 10
        }, this);
        $[22] = t2;
        $[23] = t3;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    let t8;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/manjam-logo.png",
            alt: "Manjam Logo",
            width: 130.2,
            height: 42,
            priority: true,
            className: "object-contain w-[100px] md:w-[115px] lg:w-[130px]"
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 540,
            columnNumber: 10
        }, this);
        $[25] = t8;
    } else {
        t8 = $[25];
    }
    let t9;
    if ($[26] !== handleLogoClick) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 transform -translate-x-1/2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                onClick: handleLogoClick,
                className: "block cursor-pointer",
                "aria-label": "Go to homepage",
                children: t8
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 547,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 547,
            columnNumber: 10
        }, this);
        $[26] = handleLogoClick;
        $[27] = t9;
    } else {
        t9 = $[27];
    }
    let t10;
    if ($[28] !== langDropdownOpen) {
        t10 = ({
            "Navbar[<button>.onClick]": ()=>setLangDropdownOpen(!langDropdownOpen)
        })["Navbar[<button>.onClick]"];
        $[28] = langDropdownOpen;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== language) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: language
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 565,
            columnNumber: 11
        }, this);
        $[30] = language;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {
            className: "text-[#1C4A3F]"
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 573,
            columnNumber: 11
        }, this);
        $[32] = t12;
    } else {
        t12 = $[32];
    }
    let t13;
    if ($[33] !== t10 || $[34] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t10,
            className: "flex items-center gap-1 text-[#1C4A3F] font-medium text-xs md:text-sm hover:opacity-80 transition-opacity",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        $[33] = t10;
        $[34] = t11;
        $[35] = t13;
    } else {
        t13 = $[35];
    }
    let t14;
    if ($[36] !== langDropdownOpen || $[37] !== language) {
        t14 = langDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-full mt-2 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 min-w-[60px] z-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Navbar[<button>.onClick]": ()=>{
                            setLanguage("EN");
                            setLangDropdownOpen(false);
                        }
                    }["Navbar[<button>.onClick]"],
                    className: `w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${language === "EN" ? "text-[#1C4A3F] font-medium" : "text-gray-600"}`,
                    children: "EN"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 589,
                    columnNumber: 148
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "Navbar[<button>.onClick]": ()=>{
                            setLanguage("AR");
                            setLangDropdownOpen(false);
                        }
                    }["Navbar[<button>.onClick]"],
                    className: `w-full px-3 py-2 text-left text-sm hover:bg-gray-50 ${language === "AR" ? "text-[#1C4A3F] font-medium" : "text-gray-600"}`,
                    children: "AR"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 594,
                    columnNumber: 185
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 589,
            columnNumber: 31
        }, this);
        $[36] = langDropdownOpen;
        $[37] = language;
        $[38] = t14;
    } else {
        t14 = $[38];
    }
    let t15;
    if ($[39] !== t13 || $[40] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 608,
            columnNumber: 11
        }, this);
        $[39] = t13;
        $[40] = t14;
        $[41] = t15;
    } else {
        t15 = $[41];
    }
    let t16;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: PLATFORM_LOGIN_URL,
            className: "hidden md:flex items-center justify-center w-auto md:w-[100px] lg:w-[113px] h-[38px] md:h-[42px] lg:h-[46px] py-2 md:py-[14px] px-3 md:px-5 gap-2 rounded-lg border border-[#1C4A3F] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-[#1C4A3F] font-medium text-xs md:text-sm transition-all hover:bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] hover:text-white cursor-pointer",
            children: "Log in"
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: PLATFORM_REGISTER_URL,
            className: "flex items-center justify-center w-auto h-[38px] md:h-[42px] lg:h-[46px] py-2 md:py-[14px] px-3 md:px-5 gap-2 rounded-lg border border-[#1C4A3F] bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-white font-medium text-xs md:text-sm transition-all hover:opacity-90 cursor-pointer whitespace-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hidden sm:inline",
                    children: "Become a Client"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 624,
                    columnNumber: 417
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sm:hidden",
                    children: "Client"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 624,
                    columnNumber: 474
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 624,
            columnNumber: 11
        }, this);
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] !== t15) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 md:gap-3 lg:gap-4",
            children: [
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 631,
            columnNumber: 11
        }, this);
        $[44] = t15;
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    let t19;
    if ($[46] !== t18 || $[47] !== t4 || $[48] !== t5 || $[49] !== t7 || $[50] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t7,
                t9,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 639,
            columnNumber: 11
        }, this);
        $[46] = t18;
        $[47] = t4;
        $[48] = t5;
        $[49] = t7;
        $[50] = t9;
        $[51] = t19;
    } else {
        t19 = $[51];
    }
    const t20 = `lg:hidden fixed inset-0 top-[60px] md:top-[70px] bg-white z-50 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`;
    let t21;
    if ($[52] !== mobileActiveDropdown || $[53] !== navItems || $[54] !== toggleMobileDropdown) {
        t21 = navItems.map({
            "Navbar[navItems.map()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-[#E5E7EB]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Navbar[navItems.map() > <button>.onClick]": ()=>toggleMobileDropdown(item_0.id)
                            }["Navbar[navItems.map() > <button>.onClick]"],
                            className: `flex items-center justify-between w-full py-4 font-medium text-base ${mobileActiveDropdown === item_0.id ? "text-[#10B981]" : "text-[#1C4A3F]"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: item_0.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 655,
                                    columnNumber: 215
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronDown, {
                                    className: mobileActiveDropdown === item_0.id ? "text-[#10B981]" : "text-[#1C4A3F]",
                                    isOpen: mobileActiveDropdown === item_0.id
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 655,
                                    columnNumber: 242
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 653,
                            columnNumber: 102
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `overflow-hidden transition-all duration-300 ${mobileActiveDropdown === item_0.id ? "max-h-[500px] pb-4" : "max-h-0"}`,
                            children: [
                                item_0.id === "services" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 pl-4",
                                    children: serviceItems.map(_NavbarNavItemsMapServiceItemsMap)
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 655,
                                    columnNumber: 560
                                }, this),
                                item_0.id === "insights" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 pl-4",
                                    children: insightsItems.map({
                                        "Navbar[navItems.map() > insightsItems.map()]": (insight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1",
                                                children: [
                                                    insight.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: insight.href,
                                                        onClick: {
                                                            "Navbar[navItems.map() > insightsItems.map() > <Link>.onClick]": ()=>setMobileMenuOpen(false)
                                                        }["Navbar[navItems.map() > insightsItems.map() > <Link>.onClick]"],
                                                        className: "text-[#10B981] font-semibold italic hover:underline",
                                                        children: insight.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 656,
                                                        columnNumber: 144
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-[#10B981] font-semibold italic",
                                                        children: insight.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 658,
                                                        columnNumber: 174
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[#6B7280] text-sm",
                                                        children: insight.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 658,
                                                        columnNumber: 247
                                                    }, this)
                                                ]
                                            }, insight.id, true, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 656,
                                                columnNumber: 74
                                            }, this)
                                    }["Navbar[navItems.map() > insightsItems.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 655,
                                    columnNumber: 691
                                }, this),
                                item_0.id === "explore" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-4 pl-4",
                                    children: [
                                        exploreItemsLeft.map({
                                            "Navbar[navItems.map() > exploreItemsLeft.map()]": (explore)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    children: [
                                                        explore.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: explore.href,
                                                            className: "text-[#10B981] font-semibold italic",
                                                            onClick: {
                                                                "Navbar[navItems.map() > exploreItemsLeft.map() > <Link>.onClick]": ()=>setMobileMenuOpen(false)
                                                            }["Navbar[navItems.map() > exploreItemsLeft.map() > <Link>.onClick]"],
                                                            children: explore.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 660,
                                                            columnNumber: 147
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "text-[#10B981] font-semibold italic",
                                                            children: explore.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 662,
                                                            columnNumber: 113
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#6B7280] text-sm",
                                                            children: explore.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 662,
                                                            columnNumber: 186
                                                        }, this)
                                                    ]
                                                }, explore.id, true, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 660,
                                                    columnNumber: 77
                                                }, this)
                                        }["Navbar[navItems.map() > exploreItemsLeft.map()]"]),
                                        exploreItemsRight.map({
                                            "Navbar[navItems.map() > exploreItemsRight.map()]": (explore_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col gap-1",
                                                    onClick: explore_0.id === "team" ? handleTeamClick : undefined,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: `text-[#10B981] font-semibold ${explore_0.id === "team" ? "cursor-pointer" : ""}`,
                                                            children: explore_0.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 664,
                                                            columnNumber: 200
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[#6B7280] text-sm",
                                                            children: explore_0.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 664,
                                                            columnNumber: 320
                                                        }, this)
                                                    ]
                                                }, explore_0.id, true, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 664,
                                                    columnNumber: 80
                                                }, this)
                                        }["Navbar[navItems.map() > exploreItemsRight.map()]"])
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 659,
                                    columnNumber: 99
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 655,
                            columnNumber: 395
                        }, this)
                    ]
                }, item_0.id, true, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 653,
                    columnNumber: 43
                }, this)
        }["Navbar[navItems.map()]"]);
        $[52] = mobileActiveDropdown;
        $[53] = navItems;
        $[54] = toggleMobileDropdown;
        $[55] = t21;
    } else {
        t21 = $[55];
    }
    let t22;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: PLATFORM_LOGIN_URL,
            className: "md:hidden mt-4 flex items-center justify-center w-full h-[46px] py-[14px] px-5 gap-2 rounded-lg border border-[#1C4A3F] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-[#1C4A3F] font-medium text-sm transition-all hover:bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] hover:text-white cursor-pointer",
            children: "Log in"
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 676,
            columnNumber: 11
        }, this);
        $[56] = t22;
    } else {
        t22 = $[56];
    }
    let t23;
    if ($[57] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col p-4 h-full overflow-y-auto",
            children: [
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 683,
            columnNumber: 11
        }, this);
        $[57] = t21;
        $[58] = t23;
    } else {
        t23 = $[58];
    }
    let t24;
    if ($[59] !== t20 || $[60] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20,
            children: t23
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 691,
            columnNumber: 11
        }, this);
        $[59] = t20;
        $[60] = t23;
        $[61] = t24;
    } else {
        t24 = $[61];
    }
    let t25;
    if ($[62] !== scrollTeamSlider || $[63] !== teamModalOpen) {
        t25 = teamModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black/50 z-100 flex items-center justify-center p-4",
            onClick: {
                "Navbar[<div>.onClick]": ()=>setTeamModalOpen(false)
            }["Navbar[<div>.onClick]"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F9FAFB] rounded-2xl w-full max-w-[1200px] max-h-[90vh] overflow-hidden",
                onClick: _NavbarDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 sm:p-8 md:p-12 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[#111827] text-2xl sm:text-3xl md:text-4xl font-bold",
                                        children: "Meet our team"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 702,
                                        columnNumber: 250
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "Navbar[<button>.onClick]": ()=>setTeamModalOpen(false)
                                        }["Navbar[<button>.onClick]"],
                                        className: "text-[#6B7280] hover:text-[#111827] transition-colors p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 704,
                                            columnNumber: 114
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.jsx",
                                        lineNumber: 702,
                                        columnNumber: 342
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 702,
                                columnNumber: 195
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#6B7280] text-sm sm:text-base max-w-xl",
                                children: "The Designership's team is made up of some of the best global talents"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 704,
                                columnNumber: 142
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 702,
                        columnNumber: 154
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 sm:px-8 md:px-12 pb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: teamSliderRef,
                            className: "flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4",
                            style: {
                                scrollSnapType: "x mandatory"
                            },
                            children: teamMembers.map(_NavbarTeamMembersMap)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 704,
                            columnNumber: 325
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 704,
                        columnNumber: 281
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-12 flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Navbar[<button>.onClick]": ()=>scrollTeamSlider("left")
                                }["Navbar[<button>.onClick]"],
                                className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#111827] hover:bg-gray-50 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeftIcon, {}, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 708,
                                    columnNumber: 209
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 706,
                                columnNumber: 151
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "Navbar[<button>.onClick]": ()=>scrollTeamSlider("right")
                                }["Navbar[<button>.onClick]"],
                                className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E5E7EB] bg-white flex items-center justify-center text-[#111827] hover:bg-gray-50 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIconLarge, {}, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 710,
                                    columnNumber: 209
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 708,
                                columnNumber: 235
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 706,
                        columnNumber: 66
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 702,
                columnNumber: 33
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 700,
            columnNumber: 28
        }, this);
        $[62] = scrollTeamSlider;
        $[63] = teamModalOpen;
        $[64] = t25;
    } else {
        t25 = $[64];
    }
    let t26;
    if ($[65] !== subscribeModalOpen) {
        t26 = subscribeModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-100 flex items-center justify-center p-4",
            onClick: {
                "Navbar[<div>.onClick]": ()=>setSubscribeModalOpen(false)
            }["Navbar[<div>.onClick]"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-black/60 backdrop-blur-md"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 721,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[500px] rounded-2xl overflow-hidden",
                    onClick: _NavbarDivOnClick2,
                    style: {
                        background: "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(249,250,251,0.98) 100%)",
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 1px rgba(255,255,255,0.8)",
                        backdropFilter: "blur(20px)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "Navbar[<button>.onClick]": ()=>setSubscribeModalOpen(false)
                            }["Navbar[<button>.onClick]"],
                            className: "absolute top-4 right-4 text-[#6B7280] hover:text-[#111827] transition-colors z-10 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                                fileName: "[project]/components/Navbar.jsx",
                                lineNumber: 727,
                                columnNumber: 149
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 725,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 rounded-xl bg-linear-to-br from-[#1C4A3F] to-[#111827] flex items-center justify-center shrink-0 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-bold text-xl",
                                                children: "M"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.jsx",
                                                lineNumber: 727,
                                                columnNumber: 366
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 727,
                                            columnNumber: 232
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-[#111827] font-bold text-xl mb-1",
                                                    children: "Al Bidaya Weekly"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 727,
                                                    columnNumber: 432
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[#6B7280] text-sm flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Sunday by"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 727,
                                                            columnNumber: 569
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#1C4A3F] font-medium",
                                                            children: "Manjam Capital"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.jsx",
                                                            lineNumber: 727,
                                                            columnNumber: 591
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 727,
                                                    columnNumber: 507
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 727,
                                            columnNumber: 427
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 727,
                                    columnNumber: 199
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[#4B5563] text-sm leading-relaxed mb-4",
                                    children: "Your weekly starting point in digital assets: a focused summary of what matters; clear, concise, and built for professionals."
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 727,
                                    columnNumber: 673
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex -space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-7 h-7 rounded-full bg-[#E5E7EB] border-2 border-white flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#6B7280] text-xs",
                                                        children: "👤"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 727,
                                                        columnNumber: 1046
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 727,
                                                    columnNumber: 940
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-7 h-7 rounded-full bg-[#D1FAE5] border-2 border-white flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#10B981] text-xs",
                                                        children: "👤"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 727,
                                                        columnNumber: 1208
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 727,
                                                    columnNumber: 1102
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-7 h-7 rounded-full bg-[#FEF3C7] border-2 border-white flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#F59E0B] text-xs",
                                                        children: "👤"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.jsx",
                                                        lineNumber: 727,
                                                        columnNumber: 1370
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 727,
                                                    columnNumber: 1264
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 727,
                                            columnNumber: 907
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#46B886] text-sm font-medium",
                                            children: "+1000 professionals"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 727,
                                            columnNumber: 1432
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 727,
                                    columnNumber: 861
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-px bg-[#E5E7EB] mb-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 727,
                                    columnNumber: 1517
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: {
                                        "Navbar[<form>.onSubmit]": (e_2)=>{
                                            e_2.preventDefault();
                                            setSubscribeModalOpen(false);
                                        }
                                    }["Navbar[<form>.onSubmit]"],
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[#111827] text-sm font-medium mb-2",
                                                    children: "Your Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 732,
                                                    columnNumber: 68
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    required: true,
                                                    placeholder: "hello@manjam.com",
                                                    className: "w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#46B886] focus:border-transparent transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 732,
                                                    columnNumber: 151
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 732,
                                            columnNumber: 63
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-[#111827] text-sm font-medium mb-2",
                                                    children: "First Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 732,
                                                    columnNumber: 434
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    placeholder: "Your name",
                                                    className: "w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#46B886] focus:border-transparent transition-all"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 732,
                                                    columnNumber: 517
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 732,
                                            columnNumber: 429
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full py-3 px-6 border-[#1C4A3F] bg-[radial-gradient(50%_50%_at_50%_50%,#111827_0%,#153830_100%)] shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)] text-white md:text-sm hover:opacity-90 whitespace-nowrap font-medium text-sm rounded-xl cursor-pointer transition-colors flex items-center justify-center gap-2",
                                            children: [
                                                "Subscribe",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                                    fileName: "[project]/components/Navbar.jsx",
                                                    lineNumber: 732,
                                                    columnNumber: 1134
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.jsx",
                                            lineNumber: 732,
                                            columnNumber: 787
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar.jsx",
                                    lineNumber: 727,
                                    columnNumber: 1559
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 727,
                            columnNumber: 171
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 721,
                    columnNumber: 98
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 719,
            columnNumber: 33
        }, this);
        $[65] = subscribeModalOpen;
        $[66] = t26;
    } else {
        t26 = $[66];
    }
    let t27;
    if ($[67] !== t19 || $[68] !== t24 || $[69] !== t25 || $[70] !== t26 || $[71] !== t6) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t6,
            children: [
                t19,
                t24,
                t25,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/components/Navbar.jsx",
            lineNumber: 740,
            columnNumber: 11
        }, this);
        $[67] = t19;
        $[68] = t24;
        $[69] = t25;
        $[70] = t26;
        $[71] = t6;
        $[72] = t27;
    } else {
        t27 = $[72];
    }
    return t27;
}
_s(Navbar, "5sN92X1YkpOlTqGGF8tTFUthhhI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c10 = Navbar;
function _NavbarDivOnClick2(e_1) {
    return e_1.stopPropagation();
}
function _NavbarTeamMembersMap(member) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "shrink-0 w-[220px] sm:w-[260px] md:w-[280px]",
        style: {
            scrollSnapAlign: "start"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-4/5 rounded-lg overflow-hidden mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: member.image,
                    alt: member.name,
                    fill: true,
                    className: "object-cover"
                }, void 0, false, {
                    fileName: "[project]/components/Navbar.jsx",
                    lineNumber: 758,
                    columnNumber: 82
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 758,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[#111827] text-base sm:text-lg font-semibold mb-1",
                children: member.name
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 758,
                columnNumber: 171
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[#6B7280] text-sm mb-3",
                children: member.role
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 758,
                columnNumber: 260
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-[#6B7280] hover:text-[#111827] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FacebookIconTeam, {}, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 758,
                            columnNumber: 439
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 758,
                        columnNumber: 361
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-[#6B7280] hover:text-[#111827] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TwitterIconTeam, {}, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 758,
                            columnNumber: 541
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 758,
                        columnNumber: 463
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-[#6B7280] hover:text-[#111827] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedInIconTeam, {}, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 758,
                            columnNumber: 642
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 758,
                        columnNumber: 564
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "text-[#6B7280] hover:text-[#111827] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InstagramIconTeam, {}, void 0, false, {
                            fileName: "[project]/components/Navbar.jsx",
                            lineNumber: 758,
                            columnNumber: 744
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.jsx",
                        lineNumber: 758,
                        columnNumber: 666
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 758,
                columnNumber: 320
            }, this)
        ]
    }, member.id, true, {
        fileName: "[project]/components/Navbar.jsx",
        lineNumber: 756,
        columnNumber: 10
    }, this);
}
function _NavbarDivOnClick(e_0) {
    return e_0.stopPropagation();
}
function _NavbarNavItemsMapServiceItemsMap(service) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-[#111827] font-semibold",
                children: service.title
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 764,
                columnNumber: 64
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[#6B7280] text-sm",
                children: service.description
            }, void 0, false, {
                fileName: "[project]/components/Navbar.jsx",
                lineNumber: 764,
                columnNumber: 129
            }, this)
        ]
    }, service.id, true, {
        fileName: "[project]/components/Navbar.jsx",
        lineNumber: 764,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "ChevronDown");
__turbopack_context__.k.register(_c1, "ArrowRightIcon");
__turbopack_context__.k.register(_c2, "HamburgerIcon");
__turbopack_context__.k.register(_c3, "CloseIcon");
__turbopack_context__.k.register(_c4, "FacebookIconTeam");
__turbopack_context__.k.register(_c5, "TwitterIconTeam");
__turbopack_context__.k.register(_c6, "LinkedInIconTeam");
__turbopack_context__.k.register(_c7, "InstagramIconTeam");
__turbopack_context__.k.register(_c8, "ArrowLeftIcon");
__turbopack_context__.k.register(_c9, "ArrowRightIconLarge");
__turbopack_context__.k.register(_c10, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DisclaimerPopup.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DisclaimerPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DisclaimerPopup() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "d6dc87344d0f96df6bc8a5a171552253188ca2a3b684b44db26e015dd8bf537c") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d6dc87344d0f96df6bc8a5a171552253188ca2a3b684b44db26e015dd8bf537c";
    }
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "DisclaimerPopup[useEffect()]": ()=>{
                const hasAccepted = localStorage.getItem("manjam-disclaimer-accepted");
                if (!hasAccepted) {
                    setIsOpen(true);
                    document.body.style.overflow = "hidden";
                }
            }
        })["DisclaimerPopup[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "DisclaimerPopup[handleContinue]": ()=>{
                localStorage.setItem("manjam-disclaimer-accepted", "true");
                setIsOpen(false);
                document.body.style.overflow = "unset";
            }
        })["DisclaimerPopup[handleContinue]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleContinue = t2;
    const handleReturn = _DisclaimerPopupHandleReturn;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "DisclaimerPopup[handleClose]": ()=>{
                handleReturn();
            }
        })["DisclaimerPopup[handleClose]"];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const handleClose = t3;
    if (!isOpen) {
        return null;
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/60 backdrop-blur-md",
            onClick: handleClose
        }, void 0, false, {
            fileName: "[project]/components/DisclaimerPopup.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleClose,
            className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10",
            "aria-label": "Close",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 6L6 18M6 6L18 18",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/DisclaimerPopup.jsx",
                    lineNumber: 73,
                    columnNumber: 246
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/DisclaimerPopup.jsx",
                lineNumber: 73,
                columnNumber: 151
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/DisclaimerPopup.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl sm:text-2xl md:text-3xl font-semibold text-[#1C4A3F] mb-6 pr-8",
            children: "Important Disclaimer"
        }, void 0, false, {
            fileName: "[project]/components/DisclaimerPopup.jsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 text-[#4B5563] text-sm sm:text-base leading-relaxed",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: [
                        'By clicking "',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#46B886] font-semibold",
                            children: "Continue"
                        }, void 0, false, {
                            fileName: "[project]/components/DisclaimerPopup.jsx",
                            lineNumber: 87,
                            columnNumber: 105
                        }, this),
                        '", you confirm that you have read and understood this disclaimer, and that you are accessing this website as a professional, qualified, or otherwise sophisticated investor.'
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DisclaimerPopup.jsx",
                    lineNumber: 87,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "This website and the information made available on it are provided solely for general informational purposes and should not be construed as investment, financial, legal, accounting, or tax advice. Nothing on this website constitutes an offer, solicitation, commitment, or recommendation to acquire or dispose of any financial product, service, or security in any jurisdiction. The information presented may be subject to change without notice, may be incomplete or condensed, and should not be relied upon as a basis for any contract or investment decision."
                }, void 0, false, {
                    fileName: "[project]/components/DisclaimerPopup.jsx",
                    lineNumber: 87,
                    columnNumber: 343
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Visitors are solely responsible for independently evaluating the accuracy, adequacy, and relevance of the information presented and are strongly advised to obtain independent legal, tax, and financial advice prior to making any investment or business decision. This website is intended exclusively for professional, qualified, or otherwise sophisticated investors with the necessary expertise to assess the risks involved and is not directed to retail clients or the general public. Distribution to, or reliance by, any other person is unauthorized and may be restricted or prohibited under applicable laws."
                }, void 0, false, {
                    fileName: "[project]/components/DisclaimerPopup.jsx",
                    lineNumber: 87,
                    columnNumber: 907
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DisclaimerPopup.jsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            background: "linear-gradient(135deg, rgba(28, 74, 63, 0.08) 0%, rgba(70, 184, 134, 0.08) 100%)",
            boxShadow: "0 4px 24px -1px rgba(28, 74, 63, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.6)"
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleReturn,
            className: "group flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 order-2 sm:order-1\n                bg-white/10 backdrop-blur-xl border border-[#1C4A3F]/20 text-[#1C4A3F]\n                hover:bg-[#1C4A3F]/10 hover:border-[#1C4A3F]/40 hover:shadow-lg",
            style: t8,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "transition-transform duration-300 group-hover:-translate-x-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M11.25 13.5L6.75 9L11.25 4.5",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/DisclaimerPopup.jsx",
                        lineNumber: 104,
                        columnNumber: 538
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/DisclaimerPopup.jsx",
                    lineNumber: 104,
                    columnNumber: 370
                }, this),
                "RETURN"
            ]
        }, void 0, true, {
            fileName: "[project]/components/DisclaimerPopup.jsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            background: "linear-gradient(135deg, rgba(70, 184, 134, 0.9) 0%, rgba(28, 74, 63, 0.95) 100%)",
            boxShadow: "0 4px 24px -1px rgba(70, 184, 134, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(12px)"
        };
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-9999 flex items-center justify-center",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative bg-white rounded-2xl shadow-2xl max-w-[700px] w-[92%] max-h-[90vh] overflow-y-auto mx-4",
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 sm:p-8 md:p-10",
                            children: [
                                t6,
                                t7,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-8",
                                    children: [
                                        t9,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleContinue,
                                            className: "group flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-medium text-sm text-white transition-all duration-300 order-1 sm:order-2\n                hover:shadow-xl hover:scale-[1.02]",
                                            style: t10,
                                            children: [
                                                "CONTINUE",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 18 18",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "transition-transform duration-300 group-hover:translate-x-1",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6.75 13.5L11.25 9L6.75 4.5",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/DisclaimerPopup.jsx",
                                                        lineNumber: 122,
                                                        columnNumber: 784
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DisclaimerPopup.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 617
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DisclaimerPopup.jsx",
                                            lineNumber: 122,
                                            columnNumber: 352
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DisclaimerPopup.jsx",
                                    lineNumber: 122,
                                    columnNumber: 248
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DisclaimerPopup.jsx",
                            lineNumber: 122,
                            columnNumber: 204
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DisclaimerPopup.jsx",
                    lineNumber: 122,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DisclaimerPopup.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    return t11;
}
_s(DisclaimerPopup, "vl0Rt3/A8evyRPW1OQ1AhRk4UhU=");
_c = DisclaimerPopup;
function _DisclaimerPopupHandleReturn() {
    window.location.href = "https://www.google.com";
}
var _c;
__turbopack_context__.k.register(_c, "DisclaimerPopup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_43debffb._.js.map