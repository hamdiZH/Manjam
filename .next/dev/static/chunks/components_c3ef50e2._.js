(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Hero.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
// Platform URL
const PLATFORM_REGISTER_URL = "https://platform.manjamcapital.com/register/account-type";
// Arrow Icon
const ArrowRightIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "c71f5d52fd05d4c10a04298179e07fca635d85a062b61df4552b4c68ce3eea4a") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c71f5d52fd05d4c10a04298179e07fca635d85a062b61df4552b4c68ce3eea4a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "arrow-hover",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M6 12L10 8L6 4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 21,
                columnNumber: 129
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowRightIcon;
// Animation variants
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
const dashboardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1,
            ease: [
                0.16,
                1,
                0.3,
                1
            ],
            delay: 0.6
        }
    }
};
const buttonVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    },
    hover: {
        scale: 1.05,
        y: -2,
        transition: {
            duration: 0.3,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        }
    },
    tap: {
        scale: 0.98,
        y: 0
    }
};
const glowVariants = {
    animate: {
        opacity: [
            0.3,
            0.5,
            0.3
        ],
        scale: [
            1,
            1.1,
            1
        ],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
function Hero() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "c71f5d52fd05d4c10a04298179e07fca635d85a062b61df4552b4c68ce3eea4a") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c71f5d52fd05d4c10a04298179e07fca635d85a062b61df4552b4c68ce3eea4a";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 20
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            duration: 0.8,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            background: "linear-gradient(135deg, #111827 0%, #1C4A3F 100%)"
        };
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/squares.svg",
            alt: "Squares Pattern",
            fill: true,
            className: "absolute inset-0 opacity-30 z-0 object-cover"
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 151,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: glowVariants,
            animate: "animate",
            className: "absolute z-0",
            style: {
                width: "800px",
                height: "800px",
                top: "-400px",
                left: "50%",
                transform: "translateX(-50%)",
                background: "radial-gradient(50% 50% at 50% 50%, rgba(70, 184, 134, 0.25) 0%, transparent 70%)"
            }
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 160,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight",
            style: {
                background: "linear-gradient(180deg, #FFFFFF 0%, #9CA3AF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
            },
            children: "Professional standards"
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            variants: itemVariants,
            className: "mb-4 sm:mb-5 md:mb-6",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight",
                    style: {
                        background: "linear-gradient(180deg, #FFFFFF 0%, #9CA3AF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                    },
                    children: "for digital assets."
                }, void 0, false, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 187,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 187,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: itemVariants,
            className: "text-white/80 text-sm sm:text-base md:text-lg lg:text-xl font-normal mb-6 sm:mb-8 tracking-wide",
            children: "World's #1 Swiss Shariah-compliant digital asset ecosystem 🇨🇭"
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 193,
            columnNumber: 10
        }, this);
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            background: "radial-gradient(50% 50% at 50% 50%, #111827 0%, #153830 100%)",
            boxShadow: "0px 4px 20px 0px rgba(16, 24, 40, 0.15)"
        };
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: containerVariants,
            initial: "hidden",
            animate: "visible",
            className: "relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-10 sm:pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-10",
            children: [
                t7,
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                    href: PLATFORM_REGISTER_URL,
                    variants: buttonVariants,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl border border-[#1C4A3F] text-white font-medium text-sm sm:text-base cursor-pointer mb-4 sm:mb-5",
                    style: t9,
                    children: [
                        "Become a client",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            className: "inline-flex",
                            animate: {
                                x: 0
                            },
                            whileHover: {
                                x: 4
                            },
                            transition: {
                                duration: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                fileName: "[project]/components/Hero.jsx",
                                lineNumber: 218,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 212,
                            columnNumber: 570
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 212,
                    columnNumber: 246
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    variants: itemVariants,
                    className: "text-white/50 text-xs sm:text-sm font-normal",
                    children: "Exclusively structured for qualified investors."
                }, void 0, false, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 218,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            scale: 1.02,
            y: -5
        };
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            duration: 0.5,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 lg:px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t0,
                animate: t1,
                transition: t2,
                className: "relative w-full rounded-2xl overflow-hidden",
                style: t3,
                children: [
                    t4,
                    t5,
                    t10,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: dashboardVariants,
                        initial: "hidden",
                        animate: "visible",
                        className: "relative z-10 px-3 sm:px-4 md:px-6 lg:px-8 pb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: t11,
                            transition: t12,
                            className: "relative mx-auto max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[1000px] xl:max-w-[1100px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/dashboard.png",
                                    alt: "Manjam Dashboard",
                                    width: 1200,
                                    height: 750,
                                    className: "object-cover rounded-t-xl w-full h-auto"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 245,
                                    columnNumber: 512
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-t-xl pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 245,
                                    columnNumber: 643
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 245,
                            columnNumber: 360
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 245,
                        columnNumber: 224
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 245,
                columnNumber: 90
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    return t13;
}
_c1 = Hero;
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrowRightIcon");
__turbopack_context__.k.register(_c1, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhyManjam.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhyManjam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const sections = [
    {
        id: "regulated",
        label: "Regulated Infrastructure",
        description: "Built on Swiss standards, operated through a GCC hub; a regulatory-first framework with clear rules and oversight at scale."
    },
    {
        id: "shariah",
        label: "Shariah Alignment",
        description: "Shariah-aligned by design; bringing transparency, ethical alignment, and disciplined practices to digital assets in a market that rarely prioritizes it."
    },
    {
        id: "integrity",
        label: "Institutional Integrity",
        description: "Layered security protocols and operational controls built on proven institutional standards to ensure maximum resilience and risk mitigation."
    },
    {
        id: "hybrid",
        label: "Hybrid Operating Model",
        description: "A structured operating model that combines institutional discipline with modern digital-asset efficiency, turning standards into consistent execution."
    }
];
function WhyManjam() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(54);
    if ($[0] !== "973720fec80eef75edaff58274d2d028885e97babbd6fe8dbb51f2f3f2414c6e") {
        for(let $i = 0; $i < 54; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "973720fec80eef75edaff58274d2d028885e97babbd6fe8dbb51f2f3f2414c6e";
    }
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("regulated");
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "WhyManjam[useEffect()]": ()=>{
                const checkMobile = {
                    "WhyManjam[useEffect() > checkMobile]": ()=>{
                        setIsMobile(window.innerWidth < 1024);
                    }
                }["WhyManjam[useEffect() > checkMobile]"];
                checkMobile();
                window.addEventListener("resize", checkMobile);
                return ()=>window.removeEventListener("resize", checkMobile);
            }
        })["WhyManjam[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    if ($[3] !== isMobile) {
        t2 = ({
            "WhyManjam[useEffect()]": ()=>{
                if (isMobile) {
                    return;
                }
                const handleScroll = {
                    "WhyManjam[useEffect() > handleScroll]": ()=>{
                        if (!sectionRef.current) {
                            return;
                        }
                        const section = sectionRef.current;
                        const rect = section.getBoundingClientRect();
                        const sectionTop = rect.top;
                        const sectionHeight = section.offsetHeight;
                        const windowHeight = window.innerHeight;
                        const scrollProgress = -sectionTop / (sectionHeight - windowHeight);
                        if (scrollProgress <= 0 || scrollProgress < 0.25) {
                            setActiveSection("regulated");
                        } else {
                            if (scrollProgress < 0.5) {
                                setActiveSection("shariah");
                            } else {
                                if (scrollProgress < 0.75) {
                                    setActiveSection("integrity");
                                } else {
                                    setActiveSection("hybrid");
                                }
                            }
                        }
                    }
                }["WhyManjam[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["WhyManjam[useEffect()]"];
        t3 = [
            isMobile
        ];
        $[3] = isMobile;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== activeSection) {
        t4 = sections.find({
            "WhyManjam[sections.find()]": (s)=>s.id === activeSection
        }["WhyManjam[sections.find()]"]);
        $[6] = activeSection;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const activeData = t4;
    const t5 = isMobile ? "auto" : `${100 * sections.length}vh`;
    let t6;
    if ($[8] !== t5) {
        t6 = {
            height: t5
        };
        $[8] = t5;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const t7 = `${isMobile ? "relative py-12 sm:py-16" : "sticky top-0 min-h-screen flex items-center py-16 lg:py-20"} px-4 sm:px-6 md:px-8 lg:px-10`;
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-10 lg:mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-3",
                    children: "WHY MANJAM"
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 130,
                    columnNumber: 54
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[#111827] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4",
                    children: "Built to last."
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 130,
                    columnNumber: 150
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#6B7280] text-lg sm:text-xl md:text-2xl font-normal",
                    children: "Institutional standards for the digital-asset era."
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 130,
                    columnNumber: 274
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== activeSection) {
        t9 = sections.map({
            "WhyManjam[sections.map()]": (section_0)=>{
                const isActive = section_0.id === activeSection;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "WhyManjam[sections.map() > <button>.onClick]": ()=>setActiveSection(section_0.id)
                    }["WhyManjam[sections.map() > <button>.onClick]"],
                    className: `shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive ? "bg-[#111827] text-white" : "bg-white text-[#6B7280] hover:bg-[#F3F4F6] border border-[#E5E7EB]"}`,
                    children: section_0.label
                }, section_0.id, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 140,
                    columnNumber: 16
                }, this);
            }
        }["WhyManjam[sections.map()]"]);
        $[11] = activeSection;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden flex overflow-x-auto gap-2 pb-4 scrollbar-hide -mx-4 px-4",
            children: t9
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mr-6 shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1.5 top-2 bottom-2 w-px bg-[#E5E7EB]"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 160,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== activeSection) {
        t12 = sections.map({
            "WhyManjam[sections.map()]": (section_1)=>{
                const isActive_0 = section_1.id === activeSection;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "WhyManjam[sections.map() > <button>.onClick]": ()=>setActiveSection(section_1.id)
                    }["WhyManjam[sections.map() > <button>.onClick]"],
                    className: "text-left py-4 transition-all duration-300 cursor-pointer flex items-center gap-4 group -ml-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative shrink-0 w-6 flex justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `rounded-full transition-all duration-500 ${isActive_0 ? "bg-[#111827] w-3 h-3 shadow-[0_0_10px_rgba(17,24,39,0.3)]" : "bg-transparent w-2 h-2 group-hover:bg-[#D1D5DB]"}`,
                                style: {
                                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 172,
                                columnNumber: 225
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 172,
                            columnNumber: 166
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-lg transition-all duration-300 ${isActive_0 ? "text-[#111827] font-semibold" : "text-[#9CA3AF] font-normal group-hover:text-[#6B7280]"}`,
                            children: section_1.label
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 174,
                            columnNumber: 24
                        }, this)
                    ]
                }, section_1.id, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 170,
                    columnNumber: 16
                }, this);
            }
        }["WhyManjam[sections.map()]"]);
        $[16] = activeSection;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 184,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[18] = t12;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== t10 || $[21] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full lg:w-[280px] xl:w-[320px] shrink-0",
            children: [
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 192,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            background: "rgba(255, 255, 255, 0.7)",
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.8)"
        };
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "3",
                        y: "4",
                        width: "18",
                        height: "16",
                        rx: "2",
                        stroke: "#46B886",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 215,
                        columnNumber: 190
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 9H21",
                        stroke: "#46B886",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 215,
                        columnNumber: 275
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 9V20",
                        stroke: "#46B886",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 215,
                        columnNumber: 330
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 6.5H7",
                        stroke: "#46B886",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 215,
                        columnNumber: 385
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 215,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    const t17 = activeData?.label;
    let t18;
    if ($[25] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-6",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[#111827] text-xl sm:text-2xl font-semibold",
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 223,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[25] = t17;
        $[26] = t18;
    } else {
        t18 = $[26];
    }
    let t19;
    if ($[27] !== activeData?.description || $[28] !== activeSection) {
        t19 = activeSection === "regulated" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-5 text-white",
                            style: {
                                background: "radial-gradient(100% 100% at 50% 0%, #1C4A3F 0%, #111827 100%)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70 text-xs sm:text-sm mb-2",
                                    children: "Total portfolio value:"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 233,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    x: "2",
                                                    y: "4",
                                                    width: "16",
                                                    height: "12",
                                                    rx: "2",
                                                    stroke: "white",
                                                    strokeWidth: "1.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyManjam.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 232
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 10H8",
                                                    stroke: "white",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyManjam.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 315
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 13H10",
                                                    stroke: "white",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyManjam.jsx",
                                                    lineNumber: 233,
                                                    columnNumber: 390
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 233,
                                            columnNumber: 137
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl sm:text-3xl font-bold",
                                            children: "$12,480"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 233,
                                            columnNumber: 472
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 233,
                                    columnNumber: 91
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 text-[#46B886] text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 12 12",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 9V3M6 3L3 6M6 3L9 6",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/WhyManjam.jsx",
                                                lineNumber: 233,
                                                columnNumber: 700
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 233,
                                            columnNumber: 605
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "00%"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 233,
                                            columnNumber: 826
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 233,
                                    columnNumber: 541
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 231,
                            columnNumber: 106
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-5 text-white",
                            style: {
                                background: "radial-gradient(100% 100% at 50% 0%, #1C4A3F 0%, #111827 100%)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70 text-xs sm:text-sm mb-2",
                                    children: "Today's Change:"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 235,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 10L10 5L15 10",
                                                    stroke: "white",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyManjam.jsx",
                                                    lineNumber: 235,
                                                    columnNumber: 225
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 15L10 10L15 15",
                                                    stroke: "white",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyManjam.jsx",
                                                    lineNumber: 235,
                                                    columnNumber: 332
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 235,
                                            columnNumber: 130
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl sm:text-3xl font-bold",
                                            children: "+$134.20"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 235,
                                            columnNumber: 446
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 235,
                                    columnNumber: 84
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 text-[#46B886] text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 12 12",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 9V3M6 3L3 6M6 3L9 6",
                                                stroke: "currentColor",
                                                strokeWidth: "1.5",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/components/WhyManjam.jsx",
                                                lineNumber: 235,
                                                columnNumber: 675
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 235,
                                            columnNumber: 580
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "1.09%"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 235,
                                            columnNumber: 801
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 235,
                                    columnNumber: 516
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 233,
                            columnNumber: 854
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-5 text-white",
                            style: {
                                background: "radial-gradient(100% 100% at 50% 0%, #1C4A3F 0%, #111827 100%)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/70 text-xs sm:text-sm mb-2",
                                    children: "Risk Profile:"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 237,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3 15L8 10L12 14L17 5",
                                                    stroke: "white",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyManjam.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 223
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M14 5H17V8",
                                                    stroke: "white",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/WhyManjam.jsx",
                                                    lineNumber: 237,
                                                    columnNumber: 335
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 237,
                                            columnNumber: 128
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl sm:text-3xl font-bold",
                                            children: "Balanced"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 237,
                                            columnNumber: 442
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 237,
                                    columnNumber: 82
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 235,
                            columnNumber: 831
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 231,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-6 sm:p-8",
                    style: {
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(229, 231, 235, 0.8)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#111827] text-lg sm:text-xl font-medium mb-2",
                            children: "Asset allocation"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 241,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#111827] text-4xl sm:text-5xl lg:text-6xl font-bold mb-3",
                            children: "78,909.72"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 241,
                            columnNumber: 96
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-[#46B886]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M4 12L12 4M12 4H6M12 4V10",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 241,
                                        columnNumber: 338
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 241,
                                    columnNumber: 243
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "4.5%"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 241,
                                    columnNumber: 467
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#6B7280]",
                                    children: "from last week"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 241,
                                    columnNumber: 508
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 241,
                            columnNumber: 187
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 237,
                    columnNumber: 524
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#6B7280] text-sm sm:text-base leading-relaxed mt-6",
                    children: activeData?.description
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 241,
                    columnNumber: 574
                }, this)
            ]
        }, void 0, true);
        $[27] = activeData?.description;
        $[28] = activeSection;
        $[29] = t19;
    } else {
        t19 = $[29];
    }
    let t20;
    if ($[30] !== activeData?.description || $[31] !== activeSection) {
        t20 = activeSection === "shariah" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl p-6 sm:p-8",
            style: {
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#9CA3AF] text-base sm:text-lg",
                            children: "Asset"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 64
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#111827] text-xs font-bold",
                                        children: "bitpay"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 253,
                                        columnNumber: 263
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 253,
                                    columnNumber: 171
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#111827] text-base sm:text-lg font-semibold",
                                    children: "Bitpay"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 253,
                                    columnNumber: 333
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 130
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 253,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#9CA3AF] text-base sm:text-lg",
                            children: "Type"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 482
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#111827] text-base sm:text-lg font-semibold",
                            children: "Crypto"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 547
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 253,
                    columnNumber: 426
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#9CA3AF] text-base sm:text-lg",
                            children: "Balance"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 690
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#111827] text-base sm:text-lg font-semibold",
                            children: "0.045"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 758
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 253,
                    columnNumber: 634
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#9CA3AF] text-base sm:text-lg",
                            children: "In Use"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 900
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#111827] text-base sm:text-lg font-semibold",
                            children: "0.045"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 967
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 253,
                    columnNumber: 844
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#9CA3AF] text-base sm:text-lg",
                            children: "Available"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 1109
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#111827] text-base sm:text-lg font-semibold",
                            children: "0.045"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 1179
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 253,
                    columnNumber: 1053
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#9CA3AF] text-base sm:text-lg",
                            children: "Value (USD)"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 1321
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#111827] text-base sm:text-lg font-semibold",
                            children: "$2300.00"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 253,
                            columnNumber: 1393
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 253,
                    columnNumber: 1265
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F3F4F6] text-[#6B7280] text-sm font-medium hover:bg-[#E5E7EB] transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M2 4H14M4 8H12M6 12H10",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 253,
                                    columnNumber: 1766
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 253,
                                columnNumber: 1671
                            }, this),
                            "Filter"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 253,
                        columnNumber: 1521
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 253,
                    columnNumber: 1482
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#6B7280] text-sm sm:text-base leading-relaxed mt-6",
                    children: activeData?.description
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 253,
                    columnNumber: 1913
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 250,
            columnNumber: 42
        }, this);
        $[30] = activeData?.description;
        $[31] = activeSection;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== activeData?.description || $[34] !== activeSection) {
        t21 = activeSection === "integrity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[#111827] text-2xl sm:text-3xl md:text-4xl font-bold mb-3",
                            children: [
                                "Secure your account",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 262,
                                    columnNumber: 198
                                }, this),
                                "with 2FA"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 262,
                            columnNumber: 100
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#9CA3AF] text-sm sm:text-base",
                            children: "Choose your preferred method for two-factor authentication."
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 262,
                            columnNumber: 217
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 262,
                    columnNumber: 71
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-5 sm:p-6 flex items-center justify-between cursor-pointer transition-all duration-300",
                    style: {
                        background: "rgba(255, 255, 255, 0.95)",
                        border: "2px solid #46B886",
                        boxShadow: "0 2px 12px rgba(70, 184, 134, 0.15)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-5 h-5 rounded-full border-2 border-[#1C4A3F] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2.5 h-2.5 rounded-full bg-[#1C4A3F]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 266,
                                        columnNumber: 148
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 266,
                                    columnNumber: 51
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#111827] text-base sm:text-lg font-semibold",
                                            children: "Google Authenticator"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 266,
                                            columnNumber: 216
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF] text-sm",
                                            children: "Use an authenticator app."
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 266,
                                            columnNumber: 305
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 266,
                                    columnNumber: 211
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 266,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "40",
                                height: "40",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 8L20 20L32 20",
                                        stroke: "#FBBC04",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 266,
                                        columnNumber: 539
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 20L12 32",
                                        stroke: "#34A853",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 266,
                                        columnNumber: 647
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 20L28 32",
                                        stroke: "#4285F4",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 266,
                                        columnNumber: 750
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 20L8 20",
                                        stroke: "#EA4335",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 266,
                                        columnNumber: 853
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 266,
                                columnNumber: 444
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 266,
                            columnNumber: 384
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 262,
                    columnNumber: 337
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-5 sm:p-6 flex items-center justify-between cursor-pointer transition-all duration-300 opacity-60",
                    style: {
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(229, 231, 235, 0.8)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-5 h-5 rounded-full border-2 border-[#D1D5DB]"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 270,
                                    columnNumber: 51
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#6B7280] text-base sm:text-lg font-semibold",
                                            children: "Phone Number (SMS)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 270,
                                            columnNumber: 122
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF] text-sm",
                                            children: [
                                                "Receive a 6-digit code by SMS",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/WhyManjam.jsx",
                                                    lineNumber: 270,
                                                    columnNumber: 276
                                                }, this),
                                                "every time you log in."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 270,
                                            columnNumber: 209
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 270,
                                    columnNumber: 117
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 270,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-xl bg-[#D1FAE5] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 11.5C21 16.75 16.75 21 11.5 21C9.81 21 8.21 20.58 6.8 19.84L3 21L4.16 17.2C3.42 15.79 3 14.19 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 22 7.25 22 12.5",
                                    stroke: "#46B886",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 270,
                                    columnNumber: 499
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 270,
                                columnNumber: 404
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 270,
                            columnNumber: 320
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 266,
                    columnNumber: 973
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#6B7280] text-sm sm:text-base leading-relaxed",
                    children: activeData?.description
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 270,
                    columnNumber: 759
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 262,
            columnNumber: 44
        }, this);
        $[33] = activeData?.description;
        $[34] = activeSection;
        $[35] = t21;
    } else {
        t21 = $[35];
    }
    let t22;
    if ($[36] !== activeData?.description || $[37] !== activeSection) {
        t22 = activeSection === "hybrid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-6 sm:p-8 flex items-center justify-between",
                    style: {
                        background: "radial-gradient(100% 100% at 50% 0%, #1C4A3F 0%, #111827 100%)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "32",
                                    height: "32",
                                    viewBox: "0 0 32 32",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "4",
                                            y: "8",
                                            width: "24",
                                            height: "18",
                                            rx: "3",
                                            stroke: "white",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 281,
                                            columnNumber: 146
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 14H28",
                                            stroke: "white",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 281,
                                            columnNumber: 227
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "8",
                                            y: "4",
                                            width: "16",
                                            height: "4",
                                            rx: "1",
                                            stroke: "white",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 281,
                                            columnNumber: 279
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 281,
                                    columnNumber: 51
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/80 text-base sm:text-lg",
                                    children: "Total wallet balance:"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 281,
                                    columnNumber: 365
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 281,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-white text-3xl sm:text-4xl md:text-5xl font-bold",
                            children: "$2,915.42"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 281,
                            columnNumber: 452
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 279,
                    columnNumber: 68
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-6 sm:p-8",
                    style: {
                        background: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid rgba(229, 231, 235, 0.5)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full border-2 border-[#6B7280] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#6B7280] text-lg font-semibold",
                                            children: "$"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 285,
                                            columnNumber: 197
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 285,
                                        columnNumber: 98
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#6B7280] text-base sm:text-lg",
                                        children: "Available:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 285,
                                        columnNumber: 266
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 285,
                                columnNumber: 61
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#111827] text-2xl sm:text-3xl md:text-4xl font-bold",
                                children: "$1,700.00"
                            }, void 0, false, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 285,
                                columnNumber: 343
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 285,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 281,
                    columnNumber: 546
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl p-4 sm:p-5",
                    style: {
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(229, 231, 235, 0.5)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[#6B7280]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M7 4V16M7 4L4 7M7 4L10 7",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 289,
                                    columnNumber: 161
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M13 16V4M13 16L10 13M13 16L16 13",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 289,
                                    columnNumber: 283
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 289,
                            columnNumber: 66
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 289,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 285,
                    columnNumber: 447
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#6B7280] text-sm sm:text-base leading-relaxed",
                    children: activeData?.description
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 289,
                    columnNumber: 431
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 279,
            columnNumber: 41
        }, this);
        $[36] = activeData?.description;
        $[37] = activeSection;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== t18 || $[40] !== t19 || $[41] !== t20 || $[42] !== t21 || $[43] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-700",
                style: t15,
                children: [
                    t18,
                    t19,
                    t20,
                    t21,
                    t22
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 298,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 298,
            columnNumber: 11
        }, this);
        $[39] = t18;
        $[40] = t19;
        $[41] = t20;
        $[42] = t21;
        $[43] = t22;
        $[44] = t23;
    } else {
        t23 = $[44];
    }
    let t24;
    if ($[45] !== t14 || $[46] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[1400px] mx-auto",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16",
                    children: [
                        t14,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 310,
                    columnNumber: 62
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[45] = t14;
        $[46] = t23;
        $[47] = t24;
    } else {
        t24 = $[47];
    }
    let t25;
    if ($[48] !== t24 || $[49] !== t7) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t7,
            children: t24
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[48] = t24;
        $[49] = t7;
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    let t26;
    if ($[51] !== t25 || $[52] !== t6) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "why-manjam",
            ref: sectionRef,
            className: "relative w-full",
            style: t6,
            children: t25
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[51] = t25;
        $[52] = t6;
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    return t26;
}
_s(WhyManjam, "knDwvwFEhhRN+qXFMJEMAWuP178=");
_c = WhyManjam;
var _c;
__turbopack_context__.k.register(_c, "WhyManjam");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_c3ef50e2._.js.map