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
    if ($[0] !== "15ec4c5a8ab71ad9e45f834aea058be5494d4d2b350b53c521d3f9633558ba79") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15ec4c5a8ab71ad9e45f834aea058be5494d4d2b350b53c521d3f9633558ba79";
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
        scale: 1.02,
        y: -2,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)',
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "15ec4c5a8ab71ad9e45f834aea058be5494d4d2b350b53c521d3f9633558ba79") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15ec4c5a8ab71ad9e45f834aea058be5494d4d2b350b53c521d3f9633558ba79";
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
            lineNumber: 152,
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
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight",
            style: {
                background: "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 40%, #6B7280 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
            },
            children: "Professional standards"
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            variants: itemVariants,
            className: "mb-3 sm:mb-4 md:mb-5 lg:mb-4",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "block text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight",
                    style: {
                        background: "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 40%, #6B7280 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                    },
                    children: "for digital assets"
                }, void 0, false, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 174,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: itemVariants,
            className: "text-white/80 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-normal mb-4 sm:mb-6 lg:mb-5 tracking-wide",
            children: "World's #1 Swiss Shariah-compliant digital asset ecosystem 🇨🇭"
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 180,
            columnNumber: 10
        }, this);
        $[7] = t6;
        $[8] = t7;
    } else {
        t6 = $[7];
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.1)"
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: containerVariants,
            initial: "hidden",
            animate: "visible",
            className: "relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-8 sm:pt-10 md:pt-12 lg:pt-14 xl:pt-12 pb-6 md:pb-8 lg:pb-6",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                    href: PLATFORM_REGISTER_URL,
                    variants: buttonVariants,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "group inline-flex items-center justify-center gap-2 px-5 sm:px-7 lg:px-6 py-2.5 sm:py-3 lg:py-2.5 rounded-2xl text-white font-medium text-sm sm:text-base cursor-pointer mb-3 sm:mb-4 lg:mb-3",
                    style: t8,
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
                                lineNumber: 208,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 202,
                            columnNumber: 587
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 202,
                    columnNumber: 260
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    variants: itemVariants,
                    className: "text-white/50 text-xs sm:text-sm font-normal",
                    children: "Exclusively structured for qualified investors."
                }, void 0, false, {
                    fileName: "[project]/components/Hero.jsx",
                    lineNumber: 208,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 202,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            scale: 1.02,
            y: -5
        };
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            duration: 0.5,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full py-2 sm:py-3 md:py-4 lg:py-3 xl:py-2 px-4 sm:px-6 md:px-8 lg:px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t0,
                animate: t1,
                transition: t2,
                className: "relative w-full rounded-2xl overflow-hidden",
                style: t3,
                children: [
                    t4,
                    t9,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: dashboardVariants,
                        initial: "hidden",
                        animate: "visible",
                        className: "relative z-10 px-3 sm:px-4 md:px-6 lg:px-6 xl:px-8 pb-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            whileHover: t10,
                            transition: t11,
                            className: "relative mx-auto max-w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[850px] xl:max-w-[900px] 2xl:max-w-[1100px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/dashboard.png",
                                    alt: "Manjam Dashboard",
                                    width: 1200,
                                    height: 750,
                                    className: "object-cover rounded-t-xl w-full h-auto"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 235,
                                    columnNumber: 548
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-linear-to-b from-white/5 to-transparent rounded-t-xl pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.jsx",
                                    lineNumber: 235,
                                    columnNumber: 679
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.jsx",
                            lineNumber: 235,
                            columnNumber: 379
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.jsx",
                        lineNumber: 235,
                        columnNumber: 235
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.jsx",
                lineNumber: 235,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Hero.jsx",
            lineNumber: 235,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    return t12;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
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
// Animation variants
const headerVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};
const navItemVariants = {
    hidden: {
        opacity: 0,
        x: -20
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
const contentVariants = {
    initial: {
        opacity: 0,
        y: 30,
        scale: 0.98
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
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
    exit: {
        opacity: 0,
        y: -20,
        scale: 0.98,
        transition: {
            duration: 0.4,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                delay: i * 0.1
            }
        })
};
const pulseVariants = {
    animate: {
        scale: [
            1,
            1.2,
            1
        ],
        opacity: [
            0.5,
            0,
            0.5
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
function WhyManjam() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(81);
    if ($[0] !== "84bf99773eac22af972930fe92162c1d8c8e3ab80db9992c70684f00aaafdcf5") {
        for(let $i = 0; $i < 81; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "84bf99773eac22af972930fe92162c1d8c8e3ab80db9992c70684f00aaafdcf5";
    }
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("regulated");
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [, setPrevSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("regulated");
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            target: sectionRef,
            offset: [
                "start end",
                "end start"
            ]
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            0.1,
            0.9
        ];
        t2 = [
            "0%",
            "100%"
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, t1, t2);
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
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
        t4 = [];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[6] !== activeSection || $[7] !== isMobile) {
        t5 = ({
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
                        let newSection;
                        if (scrollProgress <= 0 || scrollProgress < 0.25) {
                            newSection = "regulated";
                        } else {
                            if (scrollProgress < 0.5) {
                                newSection = "shariah";
                            } else {
                                if (scrollProgress < 0.75) {
                                    newSection = "integrity";
                                } else {
                                    newSection = "hybrid";
                                }
                            }
                        }
                        if (newSection !== activeSection) {
                            setPrevSection(activeSection);
                            setActiveSection(newSection);
                        }
                    }
                }["WhyManjam[useEffect() > handleScroll]"];
                window.addEventListener("scroll", handleScroll, {
                    passive: true
                });
                return ()=>window.removeEventListener("scroll", handleScroll);
            }
        })["WhyManjam[useEffect()]"];
        t6 = [
            isMobile,
            activeSection
        ];
        $[6] = activeSection;
        $[7] = isMobile;
        $[8] = t5;
        $[9] = t6;
    } else {
        t5 = $[8];
        t6 = $[9];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[10] !== activeSection) {
        t7 = sections.find({
            "WhyManjam[sections.find()]": (s)=>s.id === activeSection
        }["WhyManjam[sections.find()]"]);
        $[10] = activeSection;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const activeData = t7;
    let t8;
    if ($[12] !== activeSection) {
        t8 = ({
            "WhyManjam[sections.findIndex()]": (s_0)=>s_0.id === activeSection
        })["WhyManjam[sections.findIndex()]"];
        $[12] = activeSection;
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    const activeIndex = sections.findIndex(t8);
    console.log("sections.length: ", sections.length);
    const t9 = isMobile ? "auto" : `${100 * sections.length}vh`;
    let t10;
    if ($[14] !== t9) {
        t10 = {
            height: t9
        };
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const t11 = `${isMobile ? "relative py-12 sm:py-16" : "sticky top-0 min-h-screen flex items-start py-16 lg:py-20 xl:py-10 2xl:py-20"} px-4 sm:px-6 md:px-8 lg:px-10`;
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            once: true,
            margin: "-100px"
        };
        $[16] = t12;
    } else {
        t12 = $[16];
    }
    let t13;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: t12,
            variants: staggerContainer,
            className: "text-center mb-10 lg:mb-16 xl:mb-8 2xl:mb-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    variants: headerVariants,
                    className: "text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-3 xl:mb-2 2xl:mb-3",
                    children: "WHY MANJAM"
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 280,
                    columnNumber: 162
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    variants: headerVariants,
                    className: "text-[#111827] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl 2xl:text-7xl font-bold leading-tight mb-4 xl:mb-2 2xl:mb-4",
                    children: "Built to last"
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 280,
                    columnNumber: 315
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[17] = t13;
    } else {
        t13 = $[17];
    }
    let t14;
    if ($[18] !== activeSection) {
        t14 = sections.map({
            "WhyManjam[sections.map()]": (section_0, index)=>{
                const isActive = section_0.id === activeSection;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: {
                        "WhyManjam[sections.map() > <motion.button>.onClick]": ()=>{
                            setPrevSection(activeSection);
                            setActiveSection(section_0.id);
                        }
                    }["WhyManjam[sections.map() > <motion.button>.onClick]"],
                    whileTap: {
                        scale: 0.95
                    },
                    initial: {
                        opacity: 0,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: index * 0.05
                    },
                    className: `shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${isActive ? "bg-[#111827] text-white" : "bg-white text-[#6B7280] hover:bg-[#F3F4F6] border border-[#E5E7EB]"}`,
                    children: section_0.label
                }, section_0.id, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 290,
                    columnNumber: 16
                }, this);
            }
        }["WhyManjam[sections.map()]"]);
        $[18] = activeSection;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden flex overflow-x-auto gap-2 pb-4 scrollbar-hide -mx-4 px-4",
            children: t14
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[20] = t14;
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            once: true
        };
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-[9px] top-3 bottom-3 w-px bg-[#E5E7EB]"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    const t18 = `${(activeIndex + 1) / sections.length * 100}%`;
    let t19;
    if ($[24] !== t18) {
        t19 = {
            height: t18
        };
        $[24] = t18;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            height: "0%"
        };
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    const t21 = `${(activeIndex + 1) / sections.length * 100}%`;
    let t22;
    if ($[27] !== t21) {
        t22 = {
            height: t21
        };
        $[27] = t21;
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    let t23;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            duration: 0.5,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[29] = t23;
    } else {
        t23 = $[29];
    }
    let t24;
    if ($[30] !== t19 || $[31] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mr-4 shrink-0",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute left-[9px] top-3 w-px bg-[#14352D]",
                    style: t19,
                    initial: t20,
                    animate: t22,
                    transition: t23
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 380,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[30] = t19;
        $[31] = t22;
        $[32] = t24;
    } else {
        t24 = $[32];
    }
    let t25;
    if ($[33] !== activeIndex || $[34] !== activeSection) {
        t25 = sections.map({
            "WhyManjam[sections.map()]": (section_1, index_0)=>{
                const isActive_0 = section_1.id === activeSection;
                const isPast = index_0 < activeIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    variants: navItemVariants,
                    onClick: {
                        "WhyManjam[sections.map() > <motion.button>.onClick]": ()=>{
                            setPrevSection(activeSection);
                            setActiveSection(section_1.id);
                        }
                    }["WhyManjam[sections.map() > <motion.button>.onClick]"],
                    className: "text-left py-4 xl:py-2.5 2xl:py-4 cursor-pointer flex items-center gap-3 group -ml-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative shrink-0 w-5 flex justify-center items-center",
                            children: [
                                isActive_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        scale: 0,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    className: "absolute w-5 h-5 rounded-full bg-[#E5E7EB]"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 398,
                                    columnNumber: 251
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        backgroundColor: isActive_0 || isPast ? "#14352D" : "#D1D5DB"
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    className: "relative z-10 w-1.5 h-1.5 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 404,
                                    columnNumber: 74
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 398,
                            columnNumber: 164
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            animate: {
                                color: isActive_0 ? "#111827" : isPast ? "#6B7280" : "#9CA3AF",
                                fontWeight: isActive_0 ? 600 : 400
                            },
                            transition: {
                                duration: 0.3
                            },
                            className: "text-lg xl:text-sm 2xl:text-lg",
                            children: section_1.label
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 408,
                            columnNumber: 75
                        }, this)
                    ]
                }, section_1.id, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 393,
                    columnNumber: 16
                }, this);
            }
        }["WhyManjam[sections.map()]"]);
        $[33] = activeIndex;
        $[34] = activeSection;
        $[35] = t25;
    } else {
        t25 = $[35];
    }
    let t26;
    if ($[36] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: t25
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[36] = t25;
        $[37] = t26;
    } else {
        t26 = $[37];
    }
    let t27;
    if ($[38] !== t24 || $[39] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: "hidden",
            whileInView: "visible",
            viewport: t16,
            variants: staggerContainer,
            className: "hidden lg:flex",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[38] = t24;
        $[39] = t26;
        $[40] = t27;
    } else {
        t27 = $[40];
    }
    let t28;
    if ($[41] !== t15 || $[42] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full lg:w-[280px] xl:w-[240px] 2xl:w-[320px] shrink-0",
            children: [
                t15,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 441,
            columnNumber: 11
        }, this);
        $[41] = t15;
        $[42] = t27;
        $[43] = t28;
    } else {
        t28 = $[43];
    }
    let t29;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = {
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.8)"
        };
        $[44] = t29;
    } else {
        t29 = $[44];
    }
    let t30;
    let t31;
    let t32;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = {
            opacity: 0,
            x: -20
        };
        t31 = {
            opacity: 1,
            x: 0
        };
        t32 = {
            delay: 0.1,
            duration: 0.4
        };
        $[45] = t30;
        $[46] = t31;
        $[47] = t32;
    } else {
        t30 = $[45];
        t31 = $[46];
        t32 = $[47];
    }
    let t33;
    let t34;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            rotate: 5,
            scale: 1.05
        };
        t34 = {
            duration: 0.3
        };
        $[48] = t33;
        $[49] = t34;
    } else {
        t33 = $[48];
        t34 = $[49];
    }
    let t35;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t33,
            transition: t34,
            className: "w-12 h-12 xl:w-10 xl:h-10 2xl:w-12 2xl:h-12 rounded-xl bg-[#E8F5F0] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "xl:w-5 xl:h-5 2xl:w-6 2xl:h-6",
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
                        lineNumber: 503,
                        columnNumber: 307
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 9H21",
                        stroke: "#46B886",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 503,
                        columnNumber: 392
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M9 9V20",
                        stroke: "#46B886",
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 503,
                        columnNumber: 447
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6 6.5H7",
                        stroke: "#46B886",
                        strokeWidth: "1.5",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 503,
                        columnNumber: 502
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 503,
                columnNumber: 170
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 503,
            columnNumber: 11
        }, this);
        $[50] = t35;
    } else {
        t35 = $[50];
    }
    const t36 = activeData?.label;
    let t37;
    if ($[51] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t30,
            animate: t31,
            transition: t32,
            className: "flex items-center gap-3 mb-6 xl:mb-4 2xl:mb-6",
            children: [
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-[#111827] text-xl sm:text-2xl xl:text-lg 2xl:text-2xl font-semibold",
                    children: t36
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 511,
                    columnNumber: 131
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 511,
            columnNumber: 11
        }, this);
        $[51] = t36;
        $[52] = t37;
    } else {
        t37 = $[52];
    }
    let t38;
    if ($[53] !== activeData?.description || $[54] !== activeSection) {
        t38 = activeSection === "regulated" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-3 gap-4 xl:gap-2 2xl:gap-4 mb-6 xl:mb-3 2xl:mb-6",
                    children: [
                        {
                            label: "Total portfolio value:",
                            value: "$12,480",
                            change: "00%",
                            icon: "wallet"
                        },
                        {
                            label: "Today's Change:",
                            value: "+$134.20",
                            change: "1.09%",
                            icon: "arrow"
                        },
                        {
                            label: "Risk Profile:",
                            value: "Balanced",
                            icon: "chart"
                        }
                    ].map(_WhyManjamAnonymous)
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 519,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.3,
                        duration: 0.5
                    },
                    whileHover: {
                        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
                    },
                    className: "rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-6 sm:p-8 xl:p-4 2xl:p-8",
                    style: {
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(229, 231, 235, 0.8)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#111827] text-lg sm:text-xl xl:text-base 2xl:text-xl font-medium mb-2 xl:mb-1 2xl:mb-2",
                            children: "Asset allocation"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 548,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                delay: 0.4,
                                duration: 0.5,
                                ease: [
                                    0.34,
                                    1.56,
                                    0.64,
                                    1
                                ]
                            },
                            className: "text-[#111827] text-4xl sm:text-5xl lg:text-6xl xl:text-3xl 2xl:text-6xl font-bold mb-3 xl:mb-2 2xl:mb-3",
                            children: "78,909.72"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 548,
                            columnNumber: 138
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 text-[#46B886] xl:text-sm 2xl:text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                    animate: {
                                        y: [
                                            0,
                                            -3,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity
                                    },
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
                                        lineNumber: 563,
                                        columnNumber: 104
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 558,
                                    columnNumber: 230
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: "4.5%"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 563,
                                    columnNumber: 240
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#6B7280]",
                                    children: "from last week"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 563,
                                    columnNumber: 281
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 558,
                            columnNumber: 149
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 533,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.5
                    },
                    className: "text-[#6B7280] text-sm sm:text-base xl:text-xs 2xl:text-base leading-relaxed mt-6 xl:mt-3 2xl:mt-6",
                    children: activeData?.description
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 563,
                    columnNumber: 354
                }, this)
            ]
        }, void 0, true);
        $[53] = activeData?.description;
        $[54] = activeSection;
        $[55] = t38;
    } else {
        t38 = $[55];
    }
    let t39;
    if ($[56] !== activeData?.description || $[57] !== activeSection) {
        t39 = activeSection === "shariah" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            className: "rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-6 sm:p-8 xl:p-4 2xl:p-8",
            style: {
                background: "rgba(255, 255, 255, 0.9)",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
            },
            children: [
                [
                    {
                        label: "Asset",
                        value: "Bitpay",
                        hasIcon: true
                    },
                    {
                        label: "Type",
                        value: "Crypto"
                    },
                    {
                        label: "Balance",
                        value: "0.045"
                    },
                    {
                        label: "In Use",
                        value: "0.045"
                    },
                    {
                        label: "Available",
                        value: "0.045"
                    },
                    {
                        label: "Value (USD)",
                        value: "$2300.00"
                    }
                ].map(_WhyManjamAnonymous2),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end pt-4 xl:pt-2 2xl:pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        className: "flex items-center gap-2 px-4 py-2 xl:px-3 xl:py-1.5 2xl:px-4 2xl:py-2 rounded-lg bg-[#F3F4F6] text-[#6B7280] text-sm xl:text-xs 2xl:text-sm font-medium",
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
                                    lineNumber: 608,
                                    columnNumber: 271
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 608,
                                columnNumber: 176
                            }, this),
                            "Filter"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 604,
                        columnNumber: 92
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 604,
                    columnNumber: 36
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.4
                    },
                    className: "text-[#6B7280] text-sm sm:text-base xl:text-xs 2xl:text-base leading-relaxed mt-6 xl:mt-3 2xl:mt-6",
                    children: activeData?.description
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 608,
                    columnNumber: 425
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 578,
            columnNumber: 42
        }, this);
        $[56] = activeData?.description;
        $[57] = activeSection;
        $[58] = t39;
    } else {
        t39 = $[58];
    }
    let t40;
    if ($[59] !== activeData?.description || $[60] !== activeSection) {
        t40 = activeSection === "integrity" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6 xl:space-y-3 2xl:space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[#111827] text-2xl sm:text-3xl md:text-4xl xl:text-2xl 2xl:text-4xl font-bold mb-3 xl:mb-2 2xl:mb-3",
                            children: [
                                "Secure your account",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 629,
                                    columnNumber: 174
                                }, this),
                                "with 2FA"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 629,
                            columnNumber: 34
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[#9CA3AF] text-sm sm:text-base xl:text-xs 2xl:text-base",
                            children: "Choose your preferred method for two-factor authentication."
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 629,
                            columnNumber: 193
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 623,
                    columnNumber: 98
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: 0.1
                    },
                    whileHover: {
                        scale: 1.02,
                        boxShadow: "0 10px 30px -10px rgba(70, 184, 134, 0.3)"
                    },
                    className: "rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-5 sm:p-6 xl:p-3 2xl:p-6 flex items-center justify-between cursor-pointer",
                    style: {
                        background: "rgba(255, 255, 255, 0.95)",
                        border: "2px solid #46B886",
                        boxShadow: "0 2px 12px rgba(70, 184, 134, 0.15)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 xl:gap-3 2xl:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    animate: {
                                        scale: [
                                            1,
                                            1.1,
                                            1
                                        ]
                                    },
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity
                                    },
                                    className: "w-5 h-5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 rounded-full border-2 border-[#1C4A3F] flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2.5 h-2.5 xl:w-2 xl:h-2 2xl:w-2.5 2xl:h-2.5 rounded-full bg-[#1C4A3F]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 649,
                                        columnNumber: 136
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 644,
                                    columnNumber: 70
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#111827] text-base sm:text-lg xl:text-sm 2xl:text-lg font-semibold",
                                            children: "Google Authenticator"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 649,
                                            columnNumber: 245
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF] text-sm xl:text-xs 2xl:text-sm",
                                            children: "Use an authenticator app."
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 649,
                                            columnNumber: 357
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 649,
                                    columnNumber: 240
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 644,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: [
                                    0,
                                    10,
                                    -10,
                                    0
                                ]
                            },
                            transition: {
                                duration: 3,
                                repeat: Infinity
                            },
                            className: "w-12 h-12 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "40",
                                height: "40",
                                viewBox: "0 0 40 40",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "xl:w-8 xl:h-8 2xl:w-10 2xl:h-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 8L20 20L32 20",
                                        stroke: "#FBBC04",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 654,
                                        columnNumber: 238
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 20L12 32",
                                        stroke: "#34A853",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 654,
                                        columnNumber: 346
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 20L28 32",
                                        stroke: "#4285F4",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 654,
                                        columnNumber: 449
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 20L8 20",
                                        stroke: "#EA4335",
                                        strokeWidth: "4",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 654,
                                        columnNumber: 552
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 654,
                                columnNumber: 99
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 649,
                            columnNumber: 459
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 629,
                    columnNumber: 345
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        x: -20
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        delay: 0.2
                    },
                    whileHover: {
                        opacity: 0.8
                    },
                    className: "rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-5 sm:p-6 xl:p-3 2xl:p-6 flex items-center justify-between cursor-pointer opacity-60",
                    style: {
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(229, 231, 235, 0.8)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 xl:gap-3 2xl:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-5 h-5 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 rounded-full border-2 border-[#D1D5DB]"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 668,
                                    columnNumber: 70
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#6B7280] text-base sm:text-lg xl:text-sm 2xl:text-lg font-semibold",
                                            children: "Phone Number (SMS)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 668,
                                            columnNumber: 171
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[#9CA3AF] text-sm xl:text-xs 2xl:text-sm",
                                            children: [
                                                "Receive a 6-digit code by SMS",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/WhyManjam.jsx",
                                                    lineNumber: 668,
                                                    columnNumber: 371
                                                }, this),
                                                "every time you log in."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 668,
                                            columnNumber: 281
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 668,
                                    columnNumber: 166
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 668,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 xl:w-9 xl:h-9 2xl:w-12 2xl:h-12 rounded-xl bg-[#D1FAE5] flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "xl:w-5 xl:h-5 2xl:w-6 2xl:h-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M21 11.5C21 16.75 16.75 21 11.5 21C9.81 21 8.21 20.58 6.8 19.84L3 21L4.16 17.2C3.42 15.79 3 14.19 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 22 7.25 22 12.5",
                                    stroke: "#46B886",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 668,
                                    columnNumber: 668
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 668,
                                columnNumber: 531
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 668,
                            columnNumber: 415
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 654,
                    columnNumber: 686
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.3
                    },
                    className: "text-[#6B7280] text-sm sm:text-base xl:text-xs 2xl:text-base leading-relaxed",
                    children: activeData?.description
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 668,
                    columnNumber: 935
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 623,
            columnNumber: 44
        }, this);
        $[59] = activeData?.description;
        $[60] = activeSection;
        $[61] = t40;
    } else {
        t40 = $[61];
    }
    let t41;
    if ($[62] !== activeData?.description || $[63] !== activeSection) {
        t41 = activeSection === "hybrid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 xl:space-y-2 2xl:space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    whileHover: {
                        scale: 1.02,
                        boxShadow: "0 15px 40px -10px rgba(28, 74, 63, 0.4)"
                    },
                    className: "rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-6 sm:p-8 xl:p-4 2xl:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 xl:gap-3 2xl:gap-4",
                    style: {
                        background: "radial-gradient(100% 100% at 50% 0%, #1C4A3F 0%, #111827 100%)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 xl:gap-3 2xl:gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                    animate: {
                                        rotate: [
                                            0,
                                            5,
                                            -5,
                                            0
                                        ]
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity
                                    },
                                    width: "32",
                                    height: "32",
                                    viewBox: "0 0 32 32",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "xl:w-6 xl:h-6 2xl:w-8 2xl:h-8",
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
                                            lineNumber: 699,
                                            columnNumber: 146
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 14H28",
                                            stroke: "white",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 699,
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
                                            lineNumber: 699,
                                            columnNumber: 279
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 694,
                                    columnNumber: 70
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/80 text-base sm:text-lg xl:text-sm 2xl:text-lg",
                                    children: "Total wallet balance:"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 699,
                                    columnNumber: 372
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 694,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            initial: {
                                opacity: 0,
                                scale: 0.9
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                delay: 0.2,
                                ease: [
                                    0.34,
                                    1.56,
                                    0.64,
                                    1
                                ]
                            },
                            className: "text-white text-3xl sm:text-4xl md:text-5xl xl:text-2xl 2xl:text-5xl font-bold",
                            children: "$2,915.42"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 699,
                            columnNumber: 482
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 683,
                    columnNumber: 95
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.1
                    },
                    whileHover: {
                        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)"
                    },
                    className: "rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-6 sm:p-8 xl:p-4 2xl:p-8",
                    style: {
                        background: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid rgba(229, 231, 235, 0.5)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3 xl:gap-2 2xl:gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        whileHover: {
                                            scale: 1.1,
                                            rotate: 5
                                        },
                                        className: "w-10 h-10 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 rounded-full border-2 border-[#6B7280] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#6B7280] text-lg xl:text-sm 2xl:text-lg font-semibold",
                                            children: "$"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WhyManjam.jsx",
                                            lineNumber: 725,
                                            columnNumber: 142
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 722,
                                        columnNumber: 117
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#6B7280] text-base sm:text-lg xl:text-sm 2xl:text-lg",
                                        children: "Available:"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WhyManjam.jsx",
                                        lineNumber: 725,
                                        columnNumber: 241
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 722,
                                columnNumber: 61
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#111827] text-2xl sm:text-3xl md:text-4xl xl:text-xl 2xl:text-4xl font-bold",
                                children: "$1,700.00"
                            }, void 0, false, {
                                fileName: "[project]/components/WhyManjam.jsx",
                                lineNumber: 725,
                                columnNumber: 341
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 722,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 708,
                    columnNumber: 139
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.2
                    },
                    className: "rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-4 sm:p-5 xl:p-2 2xl:p-5",
                    style: {
                        background: "rgba(255, 255, 255, 0.9)",
                        border: "1px solid rgba(229, 231, 235, 0.5)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                -3,
                                0
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity
                        },
                        className: "flex items-center gap-2 text-[#6B7280]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "20",
                            height: "20",
                            viewBox: "0 0 20 20",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "xl:w-4 xl:h-4 2xl:w-5 2xl:h-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M7 4V16M7 4L4 7M7 4L10 7",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 742,
                                    columnNumber: 200
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M13 16V4M13 16L10 13M13 16L16 13",
                                    stroke: "currentColor",
                                    strokeWidth: "1.5",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam.jsx",
                                    lineNumber: 742,
                                    columnNumber: 322
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 742,
                            columnNumber: 63
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 737,
                        columnNumber: 10
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 725,
                    columnNumber: 476
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        delay: 0.3
                    },
                    className: "text-[#6B7280] text-sm sm:text-base xl:text-xs 2xl:text-base leading-relaxed",
                    children: activeData?.description
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 742,
                    columnNumber: 484
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 683,
            columnNumber: 41
        }, this);
        $[62] = activeData?.description;
        $[63] = activeSection;
        $[64] = t41;
    } else {
        t41 = $[64];
    }
    let t42;
    if ($[65] !== activeSection || $[66] !== t37 || $[67] !== t38 || $[68] !== t39 || $[69] !== t40 || $[70] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layout: true,
                className: "rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-5 2xl:p-10 overflow-hidden",
                style: t29,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: contentVariants,
                        initial: "initial",
                        animate: "animate",
                        exit: "exit",
                        children: [
                            t37,
                            t38,
                            t39,
                            t40,
                            t41
                        ]
                    }, activeSection, true, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 757,
                        columnNumber: 177
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 757,
                    columnNumber: 148
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 757,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 757,
            columnNumber: 11
        }, this);
        $[65] = activeSection;
        $[66] = t37;
        $[67] = t38;
        $[68] = t39;
        $[69] = t40;
        $[70] = t41;
        $[71] = t42;
    } else {
        t42 = $[71];
    }
    let t43;
    if ($[72] !== t28 || $[73] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[1400px] mx-auto",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-8 2xl:gap-16",
                    children: [
                        t28,
                        t42
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 770,
                    columnNumber: 63
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 770,
            columnNumber: 11
        }, this);
        $[72] = t28;
        $[73] = t42;
        $[74] = t43;
    } else {
        t43 = $[74];
    }
    let t44;
    if ($[75] !== t11 || $[76] !== t43) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: t43
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 779,
            columnNumber: 11
        }, this);
        $[75] = t11;
        $[76] = t43;
        $[77] = t44;
    } else {
        t44 = $[77];
    }
    let t45;
    if ($[78] !== t10 || $[79] !== t44) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "why-manjam",
            ref: sectionRef,
            className: "relative w-full",
            style: t10,
            children: t44
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 788,
            columnNumber: 11
        }, this);
        $[78] = t10;
        $[79] = t44;
        $[80] = t45;
    } else {
        t45 = $[80];
    }
    return t45;
}
_s(WhyManjam, "nwggltXIqp263PjhAFX/aKxmcCc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = WhyManjam;
function _WhyManjamAnonymous2(row, i_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            x: -20
        },
        animate: {
            opacity: 1,
            x: 0
        },
        transition: {
            delay: i_0 * 0.05
        },
        className: "flex items-center justify-between py-4 xl:py-2 2xl:py-4 border-b border-[#F3F4F6] last:border-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#9CA3AF] text-base sm:text-lg xl:text-sm 2xl:text-lg",
                children: row.label
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 806,
                columnNumber: 114
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 xl:gap-2 2xl:gap-3",
                children: [
                    row.hasIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.1
                        },
                        className: "w-10 h-10 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 rounded-full bg-white flex items-center justify-center shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#111827] text-xs xl:text-[10px] 2xl:text-xs font-bold",
                            children: "bitpay"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 808,
                            columnNumber: 129
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 806,
                        columnNumber: 285
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#111827] text-base sm:text-lg xl:text-sm 2xl:text-lg font-semibold",
                        children: row.value
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 808,
                        columnNumber: 234
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 806,
                columnNumber: 209
            }, this)
        ]
    }, row.label, true, {
        fileName: "[project]/components/WhyManjam.jsx",
        lineNumber: 798,
        columnNumber: 10
    }, this);
}
function _WhyManjamAnonymous(card, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: i,
        variants: cardVariants,
        initial: "hidden",
        animate: "visible",
        whileHover: {
            y: -4,
            boxShadow: "0 10px 30px -10px rgba(28, 74, 63, 0.3)"
        },
        className: "rounded-2xl xl:rounded-xl 2xl:rounded-2xl p-5 xl:p-3 2xl:p-5 text-white",
        style: {
            background: "radial-gradient(100% 100% at 50% 0%, #1C4A3F 0%, #111827 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/70 text-xs sm:text-sm xl:text-xs 2xl:text-sm mb-2 xl:mb-1 2xl:mb-2",
                children: card.label
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 816,
                columnNumber: 6
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-2xl sm:text-3xl xl:text-xl 2xl:text-3xl font-bold",
                    children: card.value
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 816,
                    columnNumber: 161
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 816,
                columnNumber: 115
            }, this),
            card.change && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 text-[#46B886] text-sm xl:text-xs 2xl:text-sm",
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
                            lineNumber: 816,
                            columnNumber: 457
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 816,
                        columnNumber: 362
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: card.change
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam.jsx",
                        lineNumber: 816,
                        columnNumber: 583
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 816,
                columnNumber: 275
            }, this)
        ]
    }, card.label, true, {
        fileName: "[project]/components/WhyManjam.jsx",
        lineNumber: 811,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "WhyManjam");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/OurView/ViewCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ViewCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function ViewCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "ff962068d8018ded33c86e4277be31657811e0d9a1d5d794573e1071b306a947") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ff962068d8018ded33c86e4277be31657811e0d9a1d5d794573e1071b306a947";
    }
    const { icon, title, description } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: -8,
            boxShadow: "0 25px 50px -15px rgba(70,184,134,0.25)"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            duration: 0.4,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            background: "rgba(255, 255, 255, 0.9)",
            border: "1px solid rgba(229, 231, 235, 0.8)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            scale: 1.15,
            rotate: 8,
            backgroundColor: "#46B886",
            color: "#FFFFFF"
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            duration: 0.3,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== icon) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t4,
            transition: t5,
            className: "w-10 h-10 rounded-lg bg-[#E8F5F0] flex items-center justify-center text-[#46B886]",
            children: icon
        }, void 0, false, {
            fileName: "[project]/components/OurView/ViewCard.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[6] = icon;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            color: "#46B886"
        };
        t8 = {
            duration: 0.2
        };
        $[8] = t7;
        $[9] = t8;
    } else {
        t7 = $[8];
        t8 = $[9];
    }
    let t9;
    if ($[10] !== title) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
            className: "text-[#111827] text-lg sm:text-xl font-semibold leading-tight",
            whileHover: t7,
            transition: t8,
            children: title
        }, void 0, false, {
            fileName: "[project]/components/OurView/ViewCard.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[10] = title;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] !== description) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#6B7280] text-sm leading-relaxed",
            children: description
        }, void 0, false, {
            fileName: "[project]/components/OurView/ViewCard.jsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[12] = description;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t10 || $[15] !== t6 || $[16] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t1,
            transition: t2,
            className: "group flex flex-col w-full h-full min-h-[200px] sm:min-h-[220px] md:min-h-[240px] p-5 sm:p-6 gap-4 rounded-xl",
            style: t3,
            children: [
                t6,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/components/OurView/ViewCard.jsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[14] = t10;
        $[15] = t6;
        $[16] = t9;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    return t11;
}
_c = ViewCard;
var _c;
__turbopack_context__.k.register(_c, "ViewCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/OurView/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OurView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OurView$2f$ViewCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/OurView/ViewCard.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
// Arrow Right Icon (Brand-Adopted Arrow)
const ArrowRightIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39";
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
                d: "M6 12L10 8L6 4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/OurView/index.jsx",
                lineNumber: 18,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowRightIcon;
// Placeholder Icons for each card
const StandardsIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39";
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
                d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/OurView/index.jsx",
                lineNumber: 37,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 37,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = StandardsIcon;
const EvaluationIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39";
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
                d: "M9 17H15M9 13H15M9 9H10M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/OurView/index.jsx",
                lineNumber: 54,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 54,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = EvaluationIcon;
const MarketIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39";
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
                d: "M3 15L8 10L12 14L21 5M21 5H15M21 5V11",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/OurView/index.jsx",
                lineNumber: 71,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = MarketIcon;
const ClarityIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39";
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
                d: "M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/OurView/index.jsx",
                lineNumber: 88,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c4 = ClarityIcon;
const viewCards = [
    {
        id: "principles",
        title: "Principles First",
        description: "clarity, transparency, and alignment with Sharia foundations, forming the basis of every evaluation.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StandardsIcon, {}, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 99,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "analysis",
        title: "Structured Analysis",
        description: "A disciplined method that considers technology, utility, governance, and long-term relevance across digital assets.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EvaluationIcon, {}, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 104,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "future",
        title: "Future Ready",
        description: "A forward-looking outlook shaped by emerging global regulations and evolving digital-asset trends.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketIcon, {}, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 109,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "innovation",
        title: "Responsible Innovation",
        description: "Balancing modern digital-asset innovation with a focus on trust, structure, and sustainable long-term thinking.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClarityIcon, {}, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 114,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }
];
// Animation variants
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
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
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                delay: i * 0.1
            }
        })
};
const buttonVariants = {
    hover: {
        scale: 1.05,
        y: -3,
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
function OurView() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "283047ee9dae9ec327ac6670d76f9b832f64d47ffe74b5f9e7b857f45e284e39";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: itemVariants,
            className: "text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-4",
            children: "THE MANJAM STANDARD"
        }, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 195,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
            variants: itemVariants,
            className: "text-[#111827] text-3xl sm:text-4xl md:text-5xl lg:text-[42px] xl:text-5xl font-bold leading-[1.1] mb-5",
            children: [
                "Our View on",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/OurView/index.jsx",
                    lineNumber: 203,
                    columnNumber: 172
                }, this),
                "Digital Assets"
            ]
        }, void 0, true, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 203,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: itemVariants,
            className: "text-[#6B7280] text-base sm:text-lg leading-relaxed mb-8",
            children: "A structured perspective that guides how we understand and navigate today's digital-asset landscape"
        }, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 204,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            boxShadow: "0 4px 20px -5px rgba(70, 184, 134, 0.4)"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full lg:w-[380px] xl:w-[420px] shrink-0 lg:sticky lg:top-32",
            children: [
                t1,
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                    href: "https://platform.manjamcapital.com/register/account-type",
                    variants: buttonVariants,
                    whileHover: "hover",
                    whileTap: "tap",
                    className: "group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#46B886] text-white font-medium text-sm",
                    style: t4,
                    children: [
                        "Start Securely",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                            className: "inline-flex",
                            whileHover: {
                                x: 4
                            },
                            transition: {
                                duration: 0.2
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                fileName: "[project]/components/OurView/index.jsx",
                                lineNumber: 226,
                                columnNumber: 12
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/OurView/index.jsx",
                            lineNumber: 222,
                            columnNumber: 391
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/OurView/index.jsx",
                    lineNumber: 222,
                    columnNumber: 101
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 222,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full py-12 sm:py-16 md:py-20 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                whileInView: "visible",
                viewport: t0,
                className: "max-w-[1400px] mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-start",
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5",
                                children: viewCards.map(_OurViewViewCardsMap)
                            }, void 0, false, {
                                fileName: "[project]/components/OurView/index.jsx",
                                lineNumber: 233,
                                columnNumber: 346
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/OurView/index.jsx",
                            lineNumber: 233,
                            columnNumber: 315
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/OurView/index.jsx",
                    lineNumber: 233,
                    columnNumber: 229
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/OurView/index.jsx",
                lineNumber: 233,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 233,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    return t6;
}
_c5 = OurView;
function _OurViewViewCardsMap(card, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: index,
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OurView$2f$ViewCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: card.icon,
            title: card.title,
            description: card.description
        }, void 0, false, {
            fileName: "[project]/components/OurView/index.jsx",
            lineNumber: 243,
            columnNumber: 6
        }, this)
    }, card.id, false, {
        fileName: "[project]/components/OurView/index.jsx",
        lineNumber: 241,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ArrowRightIcon");
__turbopack_context__.k.register(_c1, "StandardsIcon");
__turbopack_context__.k.register(_c2, "EvaluationIcon");
__turbopack_context__.k.register(_c3, "MarketIcon");
__turbopack_context__.k.register(_c4, "ClarityIcon");
__turbopack_context__.k.register(_c5, "OurView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SwissFramework/FrameworkCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FrameworkCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
// Arrow Icon for Learn More link
const ArrowCircleIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "f65e7246e5fbd6005650bb64bd460d34e7be1fafa5c31ce7d4feeddc8aae7e18") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f65e7246e5fbd6005650bb64bd460d34e7be1fafa5c31ce7d4feeddc8aae7e18";
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "10",
                    cy: "10",
                    r: "9",
                    stroke: "currentColor",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/FrameworkCard.jsx",
                    lineNumber: 17,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 10H12M12 10L10 8M12 10L10 12",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/FrameworkCard.jsx",
                    lineNumber: 17,
                    columnNumber: 177
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/SwissFramework/FrameworkCard.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowCircleIcon;
function FrameworkCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "f65e7246e5fbd6005650bb64bd460d34e7be1fafa5c31ce7d4feeddc8aae7e18") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f65e7246e5fbd6005650bb64bd460d34e7be1fafa5c31ce7d4feeddc8aae7e18";
    }
    const { icon, title, description } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: -8,
            backgroundColor: "rgba(255,255,255,0.08)",
            boxShadow: "0 25px 50px -15px rgba(70,184,134,0.35)"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            duration: 0.4,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            background: "rgba(17, 24, 39, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)"
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            scale: 1.15,
            rotate: 5
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            duration: 0.3,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== icon) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "mb-6",
            whileHover: t4,
            transition: t5,
            children: icon
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/FrameworkCard.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[6] = icon;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-lg sm:text-xl font-semibold mb-3",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/FrameworkCard.jsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[8] = title;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== description) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[rgba(255,255,255,0.6)] text-sm leading-relaxed mb-6 flex-1",
            children: description
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/FrameworkCard.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[10] = description;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t6 || $[13] !== t7 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t1,
            transition: t2,
            className: "group flex flex-col h-full p-5 sm:p-6 md:p-7 rounded-2xl",
            style: t3,
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/SwissFramework/FrameworkCard.jsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    return t9;
}
_c1 = FrameworkCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrowCircleIcon");
__turbopack_context__.k.register(_c1, "FrameworkCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SwissFramework/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SwissFramework
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SwissFramework$2f$FrameworkCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SwissFramework/FrameworkCard.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// Platform URL
const PLATFORM_REGISTER_URL = "https://platform.manjamcapital.com/register/account-type";
// Brand Arrow Icon
const ArrowRightIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22";
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
                d: "M6 12L10 8L6 4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/SwissFramework/index.jsx",
                lineNumber: 22,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowRightIcon;
// Placeholder Icons
const SwissIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 4L4 10V22L16 28L28 22V10L16 4Z",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 41,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 16L28 10",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 41,
                    columnNumber: 230
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 16V28",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 41,
                    columnNumber: 333
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 16L4 10",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 41,
                    columnNumber: 433
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = SwissIcon;
const ShariahIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 4V28M4 16H28",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 58,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "16",
                    cy: "16",
                    r: "10",
                    stroke: "#46B886",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 58,
                    columnNumber: 212
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = ShariahIcon;
const QualifiedIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "6",
                    y: "8",
                    width: "20",
                    height: "16",
                    rx: "2",
                    stroke: "#46B886",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 75,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 14H26",
                    stroke: "#46B886",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 75,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 20H14",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 75,
                    columnNumber: 242
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = QualifiedIcon;
const frameworkCards = [
    {
        id: "swiss",
        title: "Swiss-Anchored Structure",
        description: "World-class governance shaped by Switzerland's best-in-class institutions.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SwissIcon, {}, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 86,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "shariah",
        title: "Sharia-Aligned Framework",
        description: "Designed to reflect Islamic finance principles across structural and operational elements.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShariahIcon, {}, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 91,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "qualified",
        title: "Qualified Participation Environment",
        description: "Developed within the L-QIF model, tailored for qualified participation in digital-asset strategies.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QualifiedIcon, {}, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 96,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }
];
// Placeholder partner logos
const partners = [
    {
        id: 1,
        name: "Designership"
    },
    {
        id: 2,
        name: "Designership"
    },
    {
        id: 3,
        name: "Designership"
    },
    {
        id: 4,
        name: "Designership"
    },
    {
        id: 5,
        name: "Designership"
    },
    {
        id: 6,
        name: "Designership"
    }
];
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
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                delay: i * 0.15
            }
        })
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
        scale: 1.02,
        y: -2,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)',
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
function SwissFramework() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e0ad68f195365743db07fa3eb80b251a49e3b651fe98798966b4307166b05b22";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 40
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            duration: 0.8,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            background: "radial-gradient(50% 50% at 50% 50%, #111827 0%, #153830 100%)",
            border: "1px solid",
            borderImageSource: "linear-gradient(106.89deg, rgba(255, 255, 255, 0.132) 0%, rgba(255, 255, 255, 0.00431373) 98.8%)",
            boxShadow: "0px 4px 4px 0px rgba(7, 19, 16, 0.25)"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: [
                0.5,
                0.7,
                0.5
            ],
            scale: [
                1,
                1.05,
                1
            ]
        };
        t6 = {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t5,
            transition: t6,
            className: "absolute pointer-events-none hidden lg:block",
            style: {
                width: "700px",
                height: "700px",
                top: "-300px",
                left: "-300px",
                background: "radial-gradient(51.17% 65.15% at 48.83% 47.08%, rgba(240, 255, 249, 0.5) 0%, rgba(21, 56, 47, 0) 77.4%)",
                transform: "rotate(-134.41deg)",
                borderRadius: "24px"
            }
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 265,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none",
            style: {
                backgroundImage: "url('/squares.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.5
            }
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 280,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            once: true,
            margin: "-50px"
        };
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            scale: 1.05
        };
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            rotate: [
                0,
                15,
                -15,
                0
            ]
        };
        t12 = {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[12] = t11;
        $[13] = t12;
    } else {
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: itemVariants,
            className: "flex justify-center mb-6 xl:mb-4 2xl:mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                whileHover: t10,
                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(70,184,134,0.15)] border border-[rgba(70,184,134,0.3)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                        animate: t11,
                        transition: t12,
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 3V5.5M3 4H5M4.5 11V13.5M3.5 12.25H5.5M8.5 3L10 7.5L14 9L10 10.5L8.5 15L7 10.5L3 9L7 7.5L8.5 3Z",
                            stroke: "#46B886",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/SwissFramework/index.jsx",
                            lineNumber: 328,
                            columnNumber: 394
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SwissFramework/index.jsx",
                        lineNumber: 328,
                        columnNumber: 261
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#46B886] text-xs font-medium tracking-wider uppercase",
                        children: "THE FUND"
                    }, void 0, false, {
                        fileName: "[project]/components/SwissFramework/index.jsx",
                        lineNumber: 328,
                        columnNumber: 597
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SwissFramework/index.jsx",
                lineNumber: 328,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
            variants: itemVariants,
            className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-[52px] font-semibold leading-tight text-center mb-5 sm:mb-6 md:mb-8 xl:mb-5 2xl:mb-8 max-w-4xl mx-auto",
            style: {
                background: "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 40%, #6B7280 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
            },
            children: "A Structured Swiss Framework for Qualified Participation."
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 335,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: itemVariants,
            className: "text-[rgba(255,255,255,0.7)] text-sm sm:text-base md:text-lg xl:text-base 2xl:text-lg text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 xl:mb-10 2xl:mb-16",
            children: [
                "Our flagship foundation, ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/SwissFramework/index.jsx",
                    lineNumber: 347,
                    columnNumber: 278
                }, this),
                " built to evolve within one of the world's most trusted financial jurisdictions."
            ]
        }, void 0, true, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 347,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-4 2xl:gap-6 mb-10 sm:mb-12 md:mb-16 xl:mb-8 2xl:mb-16 max-w-7xl mx-auto",
            children: frameworkCards.map(_SwissFrameworkFrameworkCardsMap)
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 354,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.1)"
        };
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: itemVariants,
            className: "flex justify-center mb-12 sm:mb-16 md:mb-20 xl:mb-10 2xl:mb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                href: PLATFORM_REGISTER_URL,
                variants: buttonVariants,
                whileHover: "hover",
                whileTap: "tap",
                className: "group inline-flex items-center justify-center gap-2 px-5 sm:px-7 lg:px-6 py-2.5 sm:py-3 lg:py-2.5 rounded-2xl text-white font-medium text-sm sm:text-base cursor-pointer mb-3 sm:mb-4 lg:mb-3",
                style: t17,
                children: [
                    "Review Fund Specifications",
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
                            fileName: "[project]/components/SwissFramework/index.jsx",
                            lineNumber: 380,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SwissFramework/index.jsx",
                        lineNumber: 374,
                        columnNumber: 461
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SwissFramework/index.jsx",
                lineNumber: 374,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    let t20;
    let t21;
    let t22;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            opacity: 0,
            y: 20
        };
        t20 = {
            opacity: 1,
            y: 0
        };
        t21 = {
            once: true
        };
        t22 = {
            duration: 0.6,
            delay: 0.4
        };
        $[20] = t19;
        $[21] = t20;
        $[22] = t21;
        $[23] = t22;
    } else {
        t19 = $[20];
        t20 = $[21];
        t21 = $[22];
        t22 = $[23];
    }
    let t23;
    let t24;
    let t25;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            WebkitBackdropFilter: "blur(20px)"
        };
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[24] = t23;
        $[25] = t24;
        $[26] = t25;
    } else {
        t23 = $[24];
        t24 = $[25];
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "fund",
            className: "w-full py-8 sm:py-10 md:py-12 lg:pt-16 xl:pt-10 2xl:pt-16 lg:pb-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t0,
                whileInView: t1,
                viewport: t2,
                transition: t3,
                className: "relative mx-2 sm:mx-4 md:mx-6 lg:mx-4 xl:mx-6 2xl:mx-4 rounded-lg sm:rounded-xl overflow-hidden backdrop-blur-md",
                style: t4,
                children: [
                    t7,
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: t9,
                        className: "relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-12 xl:pt-16 2xl:px-20 2xl:pt-18 xl:pb-4",
                        children: [
                            t13,
                            t14,
                            t15,
                            t16,
                            t18,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: t19,
                                whileInView: t20,
                                viewport: t21,
                                transition: t22,
                                className: "relative overflow-hidden rounded-xl py-6 sm:py-8 xl:py-4 2xl:py-8",
                                style: t23,
                                children: [
                                    t24,
                                    t25,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex animate-marquee",
                                        children: [
                                            ...partners,
                                            ...partners
                                        ].map(_SwissFrameworkAnonymous)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SwissFramework/index.jsx",
                                        lineNumber: 434,
                                        columnNumber: 755
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SwissFramework/index.jsx",
                                lineNumber: 434,
                                columnNumber: 579
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SwissFramework/index.jsx",
                        lineNumber: 434,
                        columnNumber: 324
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SwissFramework/index.jsx",
                lineNumber: 434,
                columnNumber: 108
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    return t26;
}
_c4 = SwissFramework;
function _SwissFrameworkAnonymous(partner, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center px-10 sm:px-16 xl:px-12 2xl:px-16 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/partners.svg",
            alt: partner.name,
            width: 180,
            height: 60,
            className: "h-12 sm:h-16 lg:h-20 xl:h-14 2xl:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 442,
            columnNumber: 132
        }, this)
    }, `partner-1-${index_0}`, false, {
        fileName: "[project]/components/SwissFramework/index.jsx",
        lineNumber: 442,
        columnNumber: 10
    }, this);
}
function _SwissFrameworkFrameworkCardsMap(card, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: index,
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SwissFramework$2f$FrameworkCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: card.icon,
            title: card.title,
            description: card.description
        }, void 0, false, {
            fileName: "[project]/components/SwissFramework/index.jsx",
            lineNumber: 447,
            columnNumber: 6
        }, this)
    }, card.id, false, {
        fileName: "[project]/components/SwissFramework/index.jsx",
        lineNumber: 445,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ArrowRightIcon");
__turbopack_context__.k.register(_c1, "SwissIcon");
__turbopack_context__.k.register(_c2, "ShariahIcon");
__turbopack_context__.k.register(_c3, "QualifiedIcon");
__turbopack_context__.k.register(_c4, "SwissFramework");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DigitalAssetJourney/FeatureCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeatureCard
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
function FeatureCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "6578d28769bba5379416bd4768d22ccfbfc6582d089352bfabf537ce5ba7a047") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6578d28769bba5379416bd4768d22ccfbfc6582d089352bfabf537ce5ba7a047";
    }
    const { title, imageSrc, imageAlt } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: -8,
            boxShadow: "0 30px 60px -15px rgba(70,184,134,0.25)"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            duration: 0.4,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            border: "1px solid rgba(229, 231, 235, 0.8)",
            boxShadow: "0 4px 20px rgba(16, 24, 40, 0.08)"
        };
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/DigitalAssetsbg.png",
            alt: "",
            fill: true,
            className: "absolute inset-0 object-cover -z-10"
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/FeatureCard.jsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            color: "#46B886"
        };
        t6 = {
            duration: 0.2
        };
        $[5] = t5;
        $[6] = t6;
    } else {
        t5 = $[5];
        t6 = $[6];
    }
    let t7;
    if ($[7] !== title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 sm:p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                whileHover: t5,
                transition: t6,
                className: "text-[#111827] text-lg sm:text-[24px] font-semibold leading-tight",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/DigitalAssetJourney/FeatureCard.jsx",
                lineNumber: 70,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/FeatureCard.jsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = title;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            scale: 1.05
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] !== imageAlt || $[12] !== imageSrc) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t8,
            transition: t9,
            className: "absolute inset-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: imageSrc,
                alt: imageAlt,
                fill: true,
                className: "object-contain object-center"
            }, void 0, false, {
                fileName: "[project]/components/DigitalAssetJourney/FeatureCard.jsx",
                lineNumber: 97,
                columnNumber: 84
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/FeatureCard.jsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[11] = imageAlt;
        $[12] = imageSrc;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-0",
            style: {
                background: "linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 30%)"
            }
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/FeatureCard.jsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    let t13;
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            opacity: 0
        };
        t13 = {
            opacity: 1
        };
        t14 = {
            duration: 0.3
        };
        $[15] = t12;
        $[16] = t13;
        $[17] = t14;
    } else {
        t12 = $[15];
        t13 = $[16];
        t14 = $[17];
    }
    let t15;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t12,
            whileHover: t13,
            transition: t14,
            className: "absolute inset-0 pointer-events-none",
            style: {
                background: "radial-gradient(circle at center, rgba(70,184,134,0.15) 0%, transparent 70%)"
            }
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/FeatureCard.jsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[18] = t15;
    } else {
        t15 = $[18];
    }
    let t16;
    if ($[19] !== t10) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full aspect-4/2 overflow-hidden",
            children: [
                t10,
                t11,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/DigitalAssetJourney/FeatureCard.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] !== t16 || $[22] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t1,
            transition: t2,
            className: "group relative flex flex-col w-full rounded-xl overflow-hidden",
            style: t3,
            children: [
                t4,
                t7,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/components/DigitalAssetJourney/FeatureCard.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[21] = t16;
        $[22] = t7;
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    return t17;
}
_c = FeatureCard;
var _c;
__turbopack_context__.k.register(_c, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DigitalAssetJourney/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DigitalAssetJourney
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DigitalAssetJourney$2f$FeatureCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DigitalAssetJourney/FeatureCard.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// Platform URL
const PLATFORM_REGISTER_URL = "https://platform.manjamcapital.com/register/account-type";
// Brand Arrow Icon
const ArrowRightIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "14b1153c460592326c494338df0b5cdf167ae6232e22e11c122e0854b0e2516a") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14b1153c460592326c494338df0b5cdf167ae6232e22e11c122e0854b0e2516a";
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
                d: "M6 12L10 8L6 4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/DigitalAssetJourney/index.jsx",
                lineNumber: 22,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/index.jsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowRightIcon;
const featureCards = [
    {
        id: "onboarding",
        title: "Integrated Onboarding",
        imageSrc: "/digital-asset-1.png",
        imageAlt: "Integrated Onboarding"
    },
    {
        id: "operations",
        title: "Disciplined Operations",
        imageSrc: "/digital-asset-2.png",
        imageAlt: "Disciplined Operations"
    },
    {
        id: "oversight",
        title: "Ongoing Oversight",
        imageSrc: "/digital-asset-3.png",
        imageAlt: "Ongoing Oversight"
    }
];
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
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.95
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                delay: i * 0.15
            }
        })
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
        scale: 1.02,
        y: -2,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)',
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
function DigitalAssetJourney() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "14b1153c460592326c494338df0b5cdf167ae6232e22e11c122e0854b0e2516a") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "14b1153c460592326c494338df0b5cdf167ae6232e22e11c122e0854b0e2516a";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 40
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            duration: 0.8,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            border: "1px solid rgba(229, 231, 235, 1)",
            boxShadow: "-10px 12px 24px 0px rgba(16, 24, 40, 0.12)"
        };
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/DigitalAssetsbg.png",
            alt: "",
            fill: true,
            priority: true,
            className: "absolute inset-0 object-cover -z-10"
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/index.jsx",
            lineNumber: 166,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            once: true
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: itemVariants,
            className: "text-[#34644f] font-medium text-xs tracking-[0.2em] uppercase mb-3",
            children: "THE PLATFORM"
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/index.jsx",
            lineNumber: 184,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            background: "linear-gradient(to right, #14352D 0%, #14352D 60%, #1C4A3F 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t10;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
            variants: itemVariants,
            className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 max-w-4xl mx-auto",
            style: t8,
            children: [
                "One Secure Platform ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/DigitalAssetJourney/index.jsx",
                    lineNumber: 204,
                    columnNumber: 180
                }, this),
                " For End-To-End Access"
            ]
        }, void 0, true, {
            fileName: "[project]/components/DigitalAssetJourney/index.jsx",
            lineNumber: 204,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: itemVariants,
            className: "text-[#1C4A3F]/80 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto mb-8",
            children: "Onboarding, eligibility checks, secure access, and reporting in one controlled workflow."
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/index.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t9;
    } else {
        t10 = $[10];
        t9 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.1)"
        };
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: t0,
            whileInView: t1,
            viewport: t2,
            transition: t3,
            className: "relative rounded-lg overflow-hidden mb-10 sm:mb-12 md:mb-16 p-6 sm:p-8 md:p-10 lg:p-12",
            style: t4,
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: containerVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: t6,
                    className: "flex flex-col items-center text-center",
                    children: [
                        t7,
                        t9,
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: PLATFORM_REGISTER_URL,
                            variants: buttonVariants,
                            whileHover: "hover",
                            whileTap: "tap",
                            className: "group inline-flex items-center justify-center gap-2 px-5 sm:px-7 lg:px-6 py-2.5 sm:py-3 lg:py-2.5 rounded-2xl text-white font-medium text-sm sm:text-base cursor-pointer mb-3 sm:mb-4 lg:mb-3",
                            style: t11,
                            children: [
                                "Explore the platform",
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
                                        fileName: "[project]/components/DigitalAssetJourney/index.jsx",
                                        lineNumber: 233,
                                        columnNumber: 14
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/DigitalAssetJourney/index.jsx",
                                    lineNumber: 227,
                                    columnNumber: 688
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DigitalAssetJourney/index.jsx",
                            lineNumber: 227,
                            columnNumber: 355
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DigitalAssetJourney/index.jsx",
                    lineNumber: 227,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DigitalAssetJourney/index.jsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "platform",
            className: "w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-[1920px] mx-auto",
                    children: featureCards.map(_DigitalAssetJourneyFeatureCardsMap)
                }, void 0, false, {
                    fileName: "[project]/components/DigitalAssetJourney/index.jsx",
                    lineNumber: 240,
                    columnNumber: 121
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DigitalAssetJourney/index.jsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    return t13;
}
_c1 = DigitalAssetJourney;
function _DigitalAssetJourneyFeatureCardsMap(card, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: index,
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DigitalAssetJourney$2f$FeatureCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: card.title,
            imageSrc: card.imageSrc,
            imageAlt: card.imageAlt
        }, void 0, false, {
            fileName: "[project]/components/DigitalAssetJourney/index.jsx",
            lineNumber: 250,
            columnNumber: 6
        }, this)
    }, card.id, false, {
        fileName: "[project]/components/DigitalAssetJourney/index.jsx",
        lineNumber: 248,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrowRightIcon");
__turbopack_context__.k.register(_c1, "DigitalAssetJourney");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ManjamAcademy/AcademyCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AcademyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
// Arrow Icon for Learn More link
const ArrowCircleIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "f709c2c67f9c7179043f668cfece28cb43c7299764c45525057899cee0ef50dd") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f709c2c67f9c7179043f668cfece28cb43c7299764c45525057899cee0ef50dd";
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "10",
                    cy: "10",
                    r: "9",
                    stroke: "currentColor",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/AcademyCard.jsx",
                    lineNumber: 17,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M8 10H12M12 10L10 8M12 10L10 12",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/AcademyCard.jsx",
                    lineNumber: 17,
                    columnNumber: 177
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ManjamAcademy/AcademyCard.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowCircleIcon;
function AcademyCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "f709c2c67f9c7179043f668cfece28cb43c7299764c45525057899cee0ef50dd") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f709c2c67f9c7179043f668cfece28cb43c7299764c45525057899cee0ef50dd";
    }
    const { icon, title, description } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: -8,
            backgroundColor: "rgba(255,255,255,0.08)",
            boxShadow: "0 25px 50px -15px rgba(70,184,134,0.35)"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            duration: 0.4,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            background: "rgba(17, 24, 39, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)"
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            scale: 1.15,
            rotate: 5
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            duration: 0.3,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== icon) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "mb-6",
            whileHover: t4,
            transition: t5,
            children: icon
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/AcademyCard.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, this);
        $[6] = icon;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== title) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-white text-lg sm:text-xl font-semibold mb-3",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/AcademyCard.jsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[8] = title;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== description) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[rgba(255,255,255,0.6)] text-sm leading-relaxed mb-6 flex-1",
            children: description
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/AcademyCard.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[10] = description;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== t6 || $[13] !== t7 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t1,
            transition: t2,
            className: "group flex flex-col h-full p-5 sm:p-6 md:p-7 rounded-2xl",
            style: t3,
            children: [
                t6,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/components/ManjamAcademy/AcademyCard.jsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    return t9;
}
_c1 = AcademyCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrowCircleIcon");
__turbopack_context__.k.register(_c1, "AcademyCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ManjamAcademy/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ManjamAcademy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManjamAcademy$2f$AcademyCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ManjamAcademy/AcademyCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// Platform URL
const PLATFORM_REGISTER_URL = "https://platform.manjamcapital.com/register/account-type";
// Brand Arrow Icon
const ArrowRightIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226";
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
                d: "M6 12L10 8L6 4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/ManjamAcademy/index.jsx",
                lineNumber: 22,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowRightIcon;
// Placeholder Icons
const CurriculumIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 8H26M6 16H26M6 24H18",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 41,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "22",
                    y: "20",
                    width: "6",
                    height: "6",
                    rx: "1",
                    stroke: "#46B886",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 41,
                    columnNumber: 219
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = CurriculumIcon;
const MajlisIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "16",
                    cy: "12",
                    r: "4",
                    stroke: "#46B886",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 58,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "8",
                    cy: "20",
                    r: "3",
                    stroke: "#46B886",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 58,
                    columnNumber: 170
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "24",
                    cy: "20",
                    r: "3",
                    stroke: "#46B886",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 58,
                    columnNumber: 234
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 16V20M8 23V26M24 23V26",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 58,
                    columnNumber: 299
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = MajlisIcon;
const WorkshopIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "4",
                    y: "6",
                    width: "24",
                    height: "16",
                    rx: "2",
                    stroke: "#46B886",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 75,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M4 12H28",
                    stroke: "#46B886",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 75,
                    columnNumber: 188
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 26H20",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 75,
                    columnNumber: 242
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 22V26",
                    stroke: "#46B886",
                    strokeWidth: "2",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 75,
                    columnNumber: 319
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = WorkshopIcon;
const academyCards = [
    {
        id: "curriculum",
        title: "Structured Curriculum",
        description: "Clear learning paths in blockchain and digital assets, built for practical understanding.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurriculumIcon, {}, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 86,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "majlis",
        title: "Majlis Manjam",
        description: "Live interactive sessions that turn complex topics into clear, actionable takeaways.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MajlisIcon, {}, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 91,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    },
    {
        id: "workshops",
        title: "Hands On Workshops",
        description: "Focused training on high demand topics with applied practice and real examples.",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkshopIcon, {}, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 96,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }
];
// Placeholder collaborative partners
const partners = [
    {
        id: 1,
        name: "Partner"
    },
    {
        id: 2,
        name: "Partner"
    },
    {
        id: 3,
        name: "Partner"
    },
    {
        id: 4,
        name: "Partner"
    },
    {
        id: 5,
        name: "Partner"
    },
    {
        id: 6,
        name: "Partner"
    }
];
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
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40,
        scale: 0.95
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                delay: i * 0.15
            }
        })
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
        scale: 1.02,
        y: -2,
        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 1px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.1)',
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
function ManjamAcademy() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29);
    if ($[0] !== "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226") {
        for(let $i = 0; $i < 29; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7ba6d978c4a7063c54f87767e3ff1db0b0f85fae59aab7d58c4b1de7d1901226";
    }
    let t0;
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            opacity: 0,
            y: 40
        };
        t1 = {
            opacity: 1,
            y: 0
        };
        t2 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
        $[2] = t1;
        $[3] = t2;
    } else {
        t0 = $[1];
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            duration: 0.8,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            background: "radial-gradient(50% 50% at 50% 50%, #111827 0%, #153830 100%)",
            border: "1px solid",
            borderImageSource: "linear-gradient(106.89deg, rgba(255, 255, 255, 0.132) 0%, rgba(255, 255, 255, 0.00431373) 98.8%)",
            boxShadow: "0px 4px 4px 0px rgba(7, 19, 16, 0.25)"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            opacity: [
                0.5,
                0.7,
                0.5
            ],
            scale: [
                1,
                1.05,
                1
            ]
        };
        t6 = {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            animate: t5,
            transition: t6,
            className: "absolute pointer-events-none hidden lg:block",
            style: {
                width: "700px",
                height: "700px",
                top: "-300px",
                left: "-300px",
                background: "radial-gradient(51.17% 65.15% at 48.83% 47.08%, rgba(240, 255, 249, 0.5) 0%, rgba(21, 56, 47, 0) 77.4%)",
                transform: "rotate(-134.41deg)",
                borderRadius: "24px"
            }
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 265,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 pointer-events-none",
            style: {
                backgroundImage: "url('/squares.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.5
            }
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 280,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = {
            once: true,
            margin: "-50px"
        };
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            scale: 1.05
        };
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            rotate: [
                0,
                15,
                -15,
                0
            ]
        };
        t12 = {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[12] = t11;
        $[13] = t12;
    } else {
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: itemVariants,
            className: "flex justify-center mb-6 xl:mb-4 2xl:mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                whileHover: t10,
                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(70,184,134,0.15)] border border-[rgba(70,184,134,0.3)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                        animate: t11,
                        transition: t12,
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 3V5.5M3 4H5M4.5 11V13.5M3.5 12.25H5.5M8.5 3L10 7.5L14 9L10 10.5L8.5 15L7 10.5L3 9L7 7.5L8.5 3Z",
                            stroke: "#46B886",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/ManjamAcademy/index.jsx",
                            lineNumber: 328,
                            columnNumber: 394
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ManjamAcademy/index.jsx",
                        lineNumber: 328,
                        columnNumber: 261
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#46B886] text-xs font-medium tracking-wider uppercase",
                        children: "THE ACADEMY"
                    }, void 0, false, {
                        fileName: "[project]/components/ManjamAcademy/index.jsx",
                        lineNumber: 328,
                        columnNumber: 597
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ManjamAcademy/index.jsx",
                lineNumber: 328,
                columnNumber: 101
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            background: "linear-gradient(to right, #FFFFFF 0%, #FFFFFF 40%, #6B7280 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
        };
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    let t16;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
            variants: itemVariants,
            className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-[52px] font-semibold leading-tight text-center mb-5 sm:mb-6 md:mb-8 xl:mb-5 2xl:mb-8 max-w-4xl mx-auto",
            style: t14,
            children: [
                "Practical Education ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/ManjamAcademy/index.jsx",
                    lineNumber: 348,
                    columnNumber: 259
                }, this),
                " For Digital Assets"
            ]
        }, void 0, true, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 348,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: itemVariants,
            className: "text-[rgba(255,255,255,0.7)] text-sm sm:text-base md:text-lg xl:text-base 2xl:text-lg text-center max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16 xl:mb-10 2xl:mb-16",
            children: "Structured learning that builds clarity in blockchain and digital assets."
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 349,
            columnNumber: 11
        }, this);
        $[16] = t15;
        $[17] = t16;
    } else {
        t15 = $[16];
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-4 2xl:gap-6 mb-10 sm:mb-12 md:mb-16 xl:mb-8 2xl:mb-16 max-w-7xl mx-auto",
            children: academyCards.map(_ManjamAcademyAcademyCardsMap)
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 1px rgba(255, 255, 255, 0.15), inset 0 -1px 1px rgba(0, 0, 0, 0.1)"
        };
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: itemVariants,
            className: "flex justify-center mb-12 sm:mb-16 md:mb-20 xl:mb-10 2xl:mb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                href: PLATFORM_REGISTER_URL,
                variants: buttonVariants,
                whileHover: "hover",
                whileTap: "tap",
                className: "group inline-flex items-center justify-center gap-2 px-5 sm:px-7 lg:px-6 py-2.5 sm:py-3 lg:py-2.5 rounded-2xl text-white font-medium text-sm sm:text-base cursor-pointer mb-3 sm:mb-4 lg:mb-3",
                style: t18,
                children: [
                    "Explore the Academy",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: "inline-flex",
                        whileHover: {
                            x: 4
                        },
                        transition: {
                            duration: 0.2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                            fileName: "[project]/components/ManjamAcademy/index.jsx",
                            lineNumber: 382,
                            columnNumber: 12
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ManjamAcademy/index.jsx",
                        lineNumber: 378,
                        columnNumber: 454
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ManjamAcademy/index.jsx",
                lineNumber: 378,
                columnNumber: 122
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    let t21;
    let t22;
    let t23;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            opacity: 0,
            y: 20
        };
        t21 = {
            opacity: 1,
            y: 0
        };
        t22 = {
            once: true
        };
        t23 = {
            duration: 0.6,
            delay: 0.4
        };
        $[21] = t20;
        $[22] = t21;
        $[23] = t22;
        $[24] = t23;
    } else {
        t20 = $[21];
        t21 = $[22];
        t22 = $[23];
        t23 = $[24];
    }
    let t24;
    let t25;
    let t26;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            WebkitBackdropFilter: "blur(20px)"
        };
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[25] = t24;
        $[26] = t25;
        $[27] = t26;
    } else {
        t24 = $[25];
        t25 = $[26];
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "academy",
            className: "w-full py-8 sm:py-10 md:py-12 lg:pt-16 xl:pt-10 2xl:pt-16 lg:pb-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: t0,
                whileInView: t1,
                viewport: t2,
                transition: t3,
                className: "relative mx-2 sm:mx-4 md:mx-6 lg:mx-4 xl:mx-6 2xl:mx-4 rounded-lg sm:rounded-xl overflow-hidden backdrop-blur-md",
                style: t4,
                children: [
                    t7,
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: t9,
                        className: "relative z-10 px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-24 xl:px-12 xl:pt-16 2xl:px-20 2xl:pt-18 xl:pb-4",
                        children: [
                            t13,
                            t15,
                            t16,
                            t17,
                            t19,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: t20,
                                whileInView: t21,
                                viewport: t22,
                                transition: t23,
                                className: "relative overflow-hidden rounded-xl py-6 sm:py-8 xl:py-4 2xl:py-8",
                                style: t24,
                                children: [
                                    t25,
                                    t26,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex animate-marquee",
                                        children: [
                                            ...partners,
                                            ...partners
                                        ].map(_ManjamAcademyAnonymous)
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManjamAcademy/index.jsx",
                                        lineNumber: 436,
                                        columnNumber: 758
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManjamAcademy/index.jsx",
                                lineNumber: 436,
                                columnNumber: 582
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ManjamAcademy/index.jsx",
                        lineNumber: 436,
                        columnNumber: 327
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ManjamAcademy/index.jsx",
                lineNumber: 436,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 436,
            columnNumber: 11
        }, this);
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    return t27;
}
_c4 = ManjamAcademy;
function _ManjamAcademyAnonymous(partner, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center px-10 sm:px-16 xl:px-12 2xl:px-16 shrink-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/partners.svg",
            alt: partner.name,
            width: 180,
            height: 60,
            className: "h-12 sm:h-16 lg:h-20 xl:h-14 2xl:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 444,
            columnNumber: 132
        }, this)
    }, `partner-1-${index_0}`, false, {
        fileName: "[project]/components/ManjamAcademy/index.jsx",
        lineNumber: 444,
        columnNumber: 10
    }, this);
}
function _ManjamAcademyAcademyCardsMap(card, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: index,
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManjamAcademy$2f$AcademyCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: card.icon,
            title: card.title,
            description: card.description
        }, void 0, false, {
            fileName: "[project]/components/ManjamAcademy/index.jsx",
            lineNumber: 449,
            columnNumber: 6
        }, this)
    }, card.id, false, {
        fileName: "[project]/components/ManjamAcademy/index.jsx",
        lineNumber: 447,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ArrowRightIcon");
__turbopack_context__.k.register(_c1, "CurriculumIcon");
__turbopack_context__.k.register(_c2, "MajlisIcon");
__turbopack_context__.k.register(_c3, "WorkshopIcon");
__turbopack_context__.k.register(_c4, "ManjamAcademy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Timeline/TimelineCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TimelineCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function TimelineCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "265a2fb6d9fcad42faea436de97e099a9813465e6bc85b499002598bd9006d7d") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "265a2fb6d9fcad42faea436de97e099a9813465e6bc85b499002598bd9006d7d";
    }
    const { year, title, description } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: -8
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            duration: 0.4,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            scale: 1.3
        };
        t4 = {
            duration: 0.3
        };
        $[3] = t3;
        $[4] = t4;
    } else {
        t3 = $[3];
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t3,
            transition: t4,
            className: "w-4 h-4 rounded-full bg-[#46B886] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                animate: {
                    scale: [
                        1,
                        0.8,
                        1
                    ]
                },
                transition: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                className: "w-2 h-2 rounded-full bg-white"
            }, void 0, false, {
                fileName: "[project]/components/Timeline/TimelineCard.jsx",
                lineNumber: 54,
                columnNumber: 133
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Timeline/TimelineCard.jsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            scale: 1,
            opacity: 0
        };
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t6,
                    whileHover: {
                        scale: 2,
                        opacity: [
                            0,
                            0.5,
                            0
                        ]
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "absolute inset-0 w-4 h-4 rounded-full bg-[#46B886]"
                }, void 0, false, {
                    fileName: "[project]/components/Timeline/TimelineCard.jsx",
                    lineNumber: 77,
                    columnNumber: 40
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline/TimelineCard.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            letterSpacing: "0.1em"
        };
        t9 = {
            duration: 0.3
        };
        $[8] = t8;
        $[9] = t9;
    } else {
        t8 = $[8];
        t9 = $[9];
    }
    let t10;
    if ($[10] !== year) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 mb-6",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    whileHover: t8,
                    transition: t9,
                    className: "text-[#46B886] text-sm font-semibold tracking-wider",
                    children: year
                }, void 0, false, {
                    fileName: "[project]/components/Timeline/TimelineCard.jsx",
                    lineNumber: 104,
                    columnNumber: 61
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline/TimelineCard.jsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[10] = year;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            boxShadow: "0 25px 50px -15px rgba(0,0,0,0.15)",
            borderColor: "rgba(70, 184, 134, 0.3)"
        };
        t12 = {
            duration: 0.3
        };
        $[12] = t11;
        $[13] = t12;
    } else {
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            background: "rgba(249, 250, 251, 0.9)",
            border: "1px solid rgba(229, 231, 235, 0.8)"
        };
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    let t15;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            color: "#46B886"
        };
        t15 = {
            duration: 0.2
        };
        $[15] = t14;
        $[16] = t15;
    } else {
        t14 = $[15];
        t15 = $[16];
    }
    let t16;
    if ($[17] !== title) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
            whileHover: t14,
            transition: t15,
            className: "text-[#111827] md:text-md xl:text-lg sm:text-xl font-semibold mb-3 leading-tight",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/Timeline/TimelineCard.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[17] = title;
        $[18] = t16;
    } else {
        t16 = $[18];
    }
    let t17;
    if ($[19] !== description) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#6B7280] text-sm sm:text-base leading-relaxed flex-1",
            children: description
        }, void 0, false, {
            fileName: "[project]/components/Timeline/TimelineCard.jsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[19] = description;
        $[20] = t17;
    } else {
        t17 = $[20];
    }
    let t18;
    if ($[21] !== t16 || $[22] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t11,
            transition: t12,
            className: "flex-1 p-6 sm:p-8 rounded-xl min-h-[180px] flex flex-col",
            style: t13,
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline/TimelineCard.jsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[21] = t16;
        $[22] = t17;
        $[23] = t18;
    } else {
        t18 = $[23];
    }
    let t19;
    if ($[24] !== t10 || $[25] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t1,
            transition: t2,
            className: "group relative flex flex-col w-full h-full",
            children: [
                t10,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline/TimelineCard.jsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t18;
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    return t19;
}
_c = TimelineCard;
var _c;
__turbopack_context__.k.register(_c, "TimelineCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Timeline/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Timeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timeline$2f$TimelineCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Timeline/TimelineCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const timelineData = [
    {
        id: "2020",
        year: "2020",
        title: "Founded in 2020",
        description: "Manjam Capital is shaping the region's first structured, Sharia-Compliant digital-asset ecosystem."
    },
    {
        id: "2021",
        year: "2021",
        title: "Sharia board formed",
        description: "Established an independent Sharia board to ensure compliance and ethical alignment across all operations."
    },
    {
        id: "2022",
        year: "2022",
        title: "Swiss-compliant framework approved",
        description: "Secured regulatory approval within Switzerland's trusted financial framework for qualified participation."
    },
    {
        id: "2023",
        year: "2023",
        title: "Platform development",
        description: "Launched development of the integrated digital platform for seamless onboarding and portfolio management."
    },
    {
        id: "2024",
        year: "2024",
        title: "Academy launch",
        description: "Introduced Manjam Academy to provide structured education in blockchain and digital assets."
    },
    {
        id: "2025",
        year: "2025",
        title: "Regional expansion",
        description: "Expanded operations across GCC markets with strategic partnerships and institutional collaborations."
    },
    {
        id: "2026",
        year: "2026",
        title: "Full ecosystem integration",
        description: "Complete integration of fund, platform, and academy into a unified digital-asset ecosystem."
    }
];
// Arrow Icons
const ArrowLeftIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "446e5eb7e065774b54bc96305ceeb7980d2d5e5b54cec6ff39627bdb07e14e4d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "446e5eb7e065774b54bc96305ceeb7980d2d5e5b54cec6ff39627bdb07e14e4d";
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
                d: "M15 18L9 12L15 6",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Timeline/index.jsx",
                lineNumber: 55,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowLeftIcon;
const ArrowRightIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "446e5eb7e065774b54bc96305ceeb7980d2d5e5b54cec6ff39627bdb07e14e4d") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "446e5eb7e065774b54bc96305ceeb7980d2d5e5b54cec6ff39627bdb07e14e4d";
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
                d: "M9 18L15 12L9 6",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Timeline/index.jsx",
                lineNumber: 72,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = ArrowRightIcon;
// Animation variants
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};
const headerVariants = {
    hidden: {
        opacity: 0,
        y: 30
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
    }
};
const lineVariants = {
    hidden: {
        scaleX: 0
    },
    visible: {
        scaleX: 1,
        transition: {
            duration: 1.2,
            ease: [
                0.16,
                1,
                0.3,
                1
            ],
            delay: 0.5
        }
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                delay: 0.2 + i * 0.1
            }
        })
};
function Timeline() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "446e5eb7e065774b54bc96305ceeb7980d2d5e5b54cec6ff39627bdb07e14e4d") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "446e5eb7e065774b54bc96305ceeb7980d2d5e5b54cec6ff39627bdb07e14e4d";
    }
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Timeline[checkScrollButtons]": ()=>{
                if (scrollContainerRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                    setCanScrollLeft(scrollLeft > 0);
                    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
                }
            }
        })["Timeline[checkScrollButtons]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const checkScrollButtons = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Timeline[scroll]": (direction)=>{
                if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const cards = container.querySelectorAll("[data-timeline-card]");
                    if (cards.length === 0) {
                        return;
                    }
                    const cardWidth = cards[0].offsetWidth;
                    const scrollAmount = cardWidth + 24;
                    container.scrollBy({
                        left: direction === "left" ? -scrollAmount : scrollAmount,
                        behavior: "smooth"
                    });
                    setTimeout(checkScrollButtons, 350);
                }
            }
        })["Timeline[scroll]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const scroll = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            once: true,
            margin: "-100px"
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12 sm:mb-16 md:mb-20 xl:mb-12 2xl:mb-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    variants: headerVariants,
                    className: "text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-4",
                    children: "ROADMAP"
                }, void 0, false, {
                    fileName: "[project]/components/Timeline/index.jsx",
                    lineNumber: 203,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    variants: headerVariants,
                    className: "max-w-4xl mx-auto text-[#111827] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-6",
                    children: "Building the future of digital assets"
                }, void 0, false, {
                    fileName: "[project]/components/Timeline/index.jsx",
                    lineNumber: 203,
                    columnNumber: 215
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    variants: headerVariants,
                    className: "max-w-2xl mx-auto text-[#6B7280] text-base sm:text-lg xl:text-base 2xl:text-lg leading-relaxed",
                    children: "Founded in 2020, Manjam Capital is shaping the region's first structured, Sharia-Compliant digital-asset ecosystem."
                }, void 0, false, {
                    fileName: "[project]/components/Timeline/index.jsx",
                    lineNumber: 203,
                    columnNumber: 445
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 203,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    let t5;
    let t6;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Timeline[<motion.button>.onClick]": ()=>scroll("left")
        })["Timeline[<motion.button>.onClick]"];
        t5 = {
            scale: 1.1
        };
        t6 = {
            scale: 0.95
        };
        $[5] = t4;
        $[6] = t5;
        $[7] = t6;
    } else {
        t4 = $[5];
        t5 = $[6];
        t6 = $[7];
    }
    const t7 = `w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${canScrollLeft ? "bg-[#14352D] text-white shadow-lg" : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"}`;
    const t8 = !canScrollLeft;
    const t9 = canScrollLeft ? "0 4px 20px rgba(20, 53, 45, 0.3)" : "none";
    let t10;
    if ($[8] !== t9) {
        t10 = {
            boxShadow: t9
        };
        $[8] = t9;
        $[9] = t10;
    } else {
        t10 = $[9];
    }
    let t11;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowLeftIcon, {}, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    let t12;
    if ($[11] !== t10 || $[12] !== t7 || $[13] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t4,
            whileHover: t5,
            whileTap: t6,
            className: t7,
            disabled: t8,
            style: t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t7;
        $[13] = t8;
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    let t13;
    let t14;
    let t15;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = ({
            "Timeline[<motion.button>.onClick]": ()=>scroll("right")
        })["Timeline[<motion.button>.onClick]"];
        t14 = {
            scale: 1.1
        };
        t15 = {
            scale: 0.95
        };
        $[15] = t13;
        $[16] = t14;
        $[17] = t15;
    } else {
        t13 = $[15];
        t14 = $[16];
        t15 = $[17];
    }
    const t16 = `w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${canScrollRight ? "bg-[#14352D] text-white shadow-lg" : "bg-[#E5E7EB] text-[#9CA3AF] cursor-not-allowed"}`;
    const t17 = !canScrollRight;
    const t18 = canScrollRight ? "0 4px 20px rgba(20, 53, 45, 0.3)" : "none";
    let t19;
    if ($[18] !== t18) {
        t19 = {
            boxShadow: t18
        };
        $[18] = t18;
        $[19] = t19;
    } else {
        t19 = $[19];
    }
    let t20;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[20] = t20;
    } else {
        t20 = $[20];
    }
    let t21;
    if ($[21] !== t16 || $[22] !== t17 || $[23] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            onClick: t13,
            whileHover: t14,
            whileTap: t15,
            className: t16,
            disabled: t17,
            style: t19,
            children: t20
        }, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[21] = t16;
        $[22] = t17;
        $[23] = t19;
        $[24] = t21;
    } else {
        t21 = $[24];
    }
    let t22;
    if ($[25] !== t12 || $[26] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-end gap-3 mb-6",
            children: [
                t12,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t21;
        $[27] = t22;
    } else {
        t22 = $[27];
    }
    let t23;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: lineVariants,
            className: "hidden lg:block absolute top-[calc(3rem+48px+24px)] left-0 right-0 h-px bg-linear-to-r from-transparent via-[#E5E7EB] to-transparent origin-left"
        }, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[28] = t23;
    } else {
        t23 = $[28];
    }
    let t24;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: scrollContainerRef,
            onScroll: checkScrollButtons,
            className: "flex items-stretch gap-6 sm:gap-8 lg:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory pt-6",
            style: {
                scrollbarWidth: "none",
                msOverflowStyle: "none"
            },
            children: timelineData.map(_TimelineTimelineDataMap)
        }, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[29] = t24;
    } else {
        t24 = $[29];
    }
    let t25;
    if ($[30] !== t22) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full py-16 sm:py-20 md:py-24 lg:py-28 xl:py-20 2xl:py-28 px-4 sm:px-6 md:px-8 lg:px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                whileInView: "visible",
                viewport: t2,
                className: "max-w-[1600px] mx-auto",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            t22,
                            t23,
                            t24
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Timeline/index.jsx",
                        lineNumber: 338,
                        columnNumber: 254
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Timeline/index.jsx",
                lineNumber: 338,
                columnNumber: 121
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 338,
            columnNumber: 11
        }, this);
        $[30] = t22;
        $[31] = t25;
    } else {
        t25 = $[31];
    }
    return t25;
}
_s(Timeline, "vPdWhVjwpYYK59DBc+mLxInd3jc=");
_c2 = Timeline;
function _TimelineTimelineDataMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        "data-timeline-card": true,
        custom: index,
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true
        },
        className: "shrink-0 w-[300px] sm:w-[340px] lg:w-[calc(33.333%-16px)] h-full snap-start",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timeline$2f$TimelineCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            year: item.year,
            title: item.title,
            description: item.description,
            isFirst: index === 0,
            isLast: index === timelineData.length - 1
        }, void 0, false, {
            fileName: "[project]/components/Timeline/index.jsx",
            lineNumber: 349,
            columnNumber: 94
        }, this)
    }, item.id, false, {
        fileName: "[project]/components/Timeline/index.jsx",
        lineNumber: 347,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ArrowLeftIcon");
__turbopack_context__.k.register(_c1, "ArrowRightIcon");
__turbopack_context__.k.register(_c2, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Blog/BlogCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// Arrow Icon
const ArrowIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "b408d3426a14dcd5853b537aff3752ade68193c7a8a6751aeaff09058936fc20") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b408d3426a14dcd5853b537aff3752ade68193c7a8a6751aeaff09058936fc20";
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
                d: "M4 12L12 4M12 4H6M12 4V10",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Blog/BlogCard.jsx",
                lineNumber: 19,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowIcon;
function BlogCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "b408d3426a14dcd5853b537aff3752ade68193c7a8a6751aeaff09058936fc20") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b408d3426a14dcd5853b537aff3752ade68193c7a8a6751aeaff09058936fc20";
    }
    const { image, category, title, description, author, date, readTime } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            y: -8,
            boxShadow: "0 25px 50px -15px rgba(0,0,0,0.15)"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            duration: 0.4,
            ease: [
                0.34,
                1.56,
                0.64,
                1
            ]
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            border: "1px solid rgba(229, 231, 235, 0.8)",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)"
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            scale: 1.08
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            duration: 0.6,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== image || $[7] !== title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t4,
            transition: t5,
            className: "absolute inset-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                alt: title,
                fill: true,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/components/Blog/BlogCard.jsx",
                lineNumber: 94,
                columnNumber: 83
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[6] = image;
        $[7] = title;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            whileHover: {
                opacity: 1
            },
            transition: {
                duration: 0.3
            },
            className: "absolute inset-0 bg-linear-to-t from-black/30 to-transparent"
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            scale: 1.05
        };
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== category) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 left-4 z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                whileHover: t8,
                className: "inline-block px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[#111827] text-xs font-medium shadow-sm",
                children: category
            }, void 0, false, {
                fileName: "[project]/components/Blog/BlogCard.jsx",
                lineNumber: 125,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 125,
            columnNumber: 10
        }, this);
        $[11] = category;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t6 || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative aspect-16/10 overflow-hidden",
            children: [
                t6,
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[13] = t6;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    let t12;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            color: "#46B886"
        };
        t12 = {
            duration: 0.2
        };
        $[16] = t11;
        $[17] = t12;
    } else {
        t11 = $[16];
        t12 = $[17];
    }
    let t13;
    if ($[18] !== title) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
            whileHover: t11,
            transition: t12,
            className: "text-[#111827] text-lg sm:text-xl font-semibold leading-tight mb-3 line-clamp-2 min-h-[56px]",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[18] = title;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== description) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#6B7280] text-sm leading-relaxed line-clamp-2 mb-6 min-h-[40px]",
            children: description
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[20] = description;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    let t16;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            scale: 1.1
        };
        t16 = {
            duration: 0.2
        };
        $[22] = t15;
        $[23] = t16;
    } else {
        t15 = $[22];
        t16 = $[23];
    }
    let t17;
    if ($[24] !== author.avatar || $[25] !== author.name) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t15,
            transition: t16,
            className: "relative w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ring-[#F3F4F6]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: author.avatar,
                alt: author.name,
                fill: true,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/components/Blog/BlogCard.jsx",
                lineNumber: 188,
                columnNumber: 146
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[24] = author.avatar;
        $[25] = author.name;
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== author.name) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#111827] text-sm font-medium",
            children: author.name
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[27] = author.name;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== date || $[30] !== readTime) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[#9CA3AF] text-xs",
            children: [
                date,
                " • ",
                readTime
            ]
        }, void 0, true, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[29] = date;
        $[30] = readTime;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] !== t18 || $[33] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: [
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[32] = t18;
        $[33] = t19;
        $[34] = t20;
    } else {
        t20 = $[34];
    }
    let t21;
    if ($[35] !== t17 || $[36] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t17,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[35] = t17;
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    let t23;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            scale: 1.15,
            backgroundColor: "#46B886",
            color: "#FFFFFF"
        };
        t23 = {
            duration: 0.3
        };
        $[38] = t22;
        $[39] = t23;
    } else {
        t22 = $[38];
        t23 = $[39];
    }
    let t24;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            whileHover: t22,
            transition: t23,
            className: "w-8 h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                whileHover: {
                    x: 2,
                    y: -2
                },
                transition: {
                    duration: 0.2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowIcon, {}, void 0, false, {
                    fileName: "[project]/components/Blog/BlogCard.jsx",
                    lineNumber: 254,
                    columnNumber: 10
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Blog/BlogCard.jsx",
                lineNumber: 249,
                columnNumber: 151
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 249,
            columnNumber: 11
        }, this);
        $[40] = t24;
    } else {
        t24 = $[40];
    }
    let t25;
    if ($[41] !== t21) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between pt-4 border-t border-[#F3F4F6] mt-auto",
            children: [
                t21,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[41] = t21;
        $[42] = t25;
    } else {
        t25 = $[42];
    }
    let t26;
    if ($[43] !== t13 || $[44] !== t14 || $[45] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col flex-1 p-5 sm:p-6",
            children: [
                t13,
                t14,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[43] = t13;
        $[44] = t14;
        $[45] = t25;
        $[46] = t26;
    } else {
        t26 = $[46];
    }
    let t27;
    if ($[47] !== t10 || $[48] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/blogs",
            className: "group block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                whileHover: t1,
                transition: t2,
                className: "flex flex-col h-full bg-white rounded-2xl overflow-hidden",
                style: t3,
                children: [
                    t10,
                    t26
                ]
            }, void 0, true, {
                fileName: "[project]/components/Blog/BlogCard.jsx",
                lineNumber: 279,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Blog/BlogCard.jsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[47] = t10;
        $[48] = t26;
        $[49] = t27;
    } else {
        t27 = $[49];
    }
    return t27;
}
_c1 = BlogCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrowIcon");
__turbopack_context__.k.register(_c1, "BlogCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Blog/index.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Blog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Blog$2f$BlogCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Blog/BlogCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
// Brand Arrow Icon
const ArrowRightIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "cfc6f93c9cf6c5c2b6fc6afe1fb270714519376f06df3c24b2c7264b29bc3ddd") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cfc6f93c9cf6c5c2b6fc6afe1fb270714519376f06df3c24b2c7264b29bc3ddd";
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
                d: "M6 12L10 8L6 4",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/Blog/index.jsx",
                lineNumber: 19,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/Blog/index.jsx",
            lineNumber: 19,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ArrowRightIcon;
const blogPosts = [
    {
        id: 1,
        image: "/blog1.png",
        category: "Market Analysis",
        title: "Understanding Digital Asset Fundamentals",
        description: "A structured approach to evaluating blockchain projects and digital assets with clarity and discipline.",
        author: {
            name: "Manjam Team",
            avatar: "/Avatar Base.png"
        },
        date: "Jan 15, 2026",
        readTime: "5 min read"
    },
    {
        id: 2,
        image: "/blog2.png",
        category: "Insights",
        title: "The Role of Governance in Digital Assets",
        description: "Why institutional-grade governance matters in building trust and long-term value in the digital asset space.",
        author: {
            name: "Manjam Team",
            avatar: "/Avatar Base.png"
        },
        date: "Jan 10, 2026",
        readTime: "4 min read"
    },
    {
        id: 3,
        image: "/blog3.png",
        category: "Education",
        title: "Sharia-Compliant Digital Assets Explained",
        description: "How Islamic finance principles apply to modern digital assets and what qualified investors should know.",
        author: {
            name: "Manjam Team",
            avatar: "/Avatar Base.png"
        },
        date: "Jan 5, 2026",
        readTime: "6 min read"
    }
];
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
const headerVariants = {
    hidden: {
        opacity: 0,
        y: 30
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
    }
};
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ],
                delay: i * 0.15
            }
        })
};
const buttonVariants = {
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
function Blog() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "cfc6f93c9cf6c5c2b6fc6afe1fb270714519376f06df3c24b2c7264b29bc3ddd") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "cfc6f93c9cf6c5c2b6fc6afe1fb270714519376f06df3c24b2c7264b29bc3ddd";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            once: true,
            margin: "-100px"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: headerVariants,
            className: "lg:max-w-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#46B886] font-medium text-xs tracking-[0.2em] uppercase mb-4",
                    children: "INSIGHTS"
                }, void 0, false, {
                    fileName: "[project]/components/Blog/index.jsx",
                    lineNumber: 140,
                    columnNumber: 73
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-[#111827] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4",
                    children: "Latest from Manjam"
                }, void 0, false, {
                    fileName: "[project]/components/Blog/index.jsx",
                    lineNumber: 140,
                    columnNumber: 167
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#6B7280] text-base sm:text-lg leading-relaxed",
                    children: "Practical updates, market perspectives, and Sharia-aligned analysis — built for professionals."
                }, void 0, false, {
                    fileName: "[project]/components/Blog/index.jsx",
                    lineNumber: 140,
                    columnNumber: 295
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Blog/index.jsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
            whileHover: {
                color: "#46B886"
            },
            transition: {
                duration: 0.2
            },
            children: "View all articles"
        }, void 0, false, {
            fileName: "[project]/components/Blog/index.jsx",
            lineNumber: 147,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 sm:mb-12 md:mb-16",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: headerVariants,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/blogs",
                        className: "hidden lg:inline-flex items-center gap-2 text-[#111827] font-medium text-sm group",
                        children: [
                            t2,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                whileHover: {
                                    x: 4
                                },
                                transition: {
                                    duration: 0.2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                    fileName: "[project]/components/Blog/index.jsx",
                                    lineNumber: 162,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Blog/index.jsx",
                                lineNumber: 158,
                                columnNumber: 275
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Blog/index.jsx",
                        lineNumber: 158,
                        columnNumber: 157
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Blog/index.jsx",
                    lineNumber: 158,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Blog/index.jsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch",
            children: blogPosts.map(_BlogBlogPostsMap)
        }, void 0, false, {
            fileName: "[project]/components/Blog/index.jsx",
            lineNumber: 169,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full py-16 sm:py-20 md:py-24 lg:py-4 px-4 sm:px-6 md:px-8 lg:px-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: containerVariants,
                initial: "hidden",
                whileInView: "visible",
                viewport: t0,
                className: "max-w-[1400px] mx-auto",
                children: [
                    t3,
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: headerVariants,
                        className: "flex justify-center mt-10 lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "/blogs",
                            variants: buttonVariants,
                            whileHover: "hover",
                            whileTap: "tap",
                            className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111827] text-white font-medium text-sm",
                            children: [
                                "View all articles",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                    whileHover: {
                                        x: 4
                                    },
                                    transition: {
                                        duration: 0.2
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowRightIcon, {}, void 0, false, {
                                        fileName: "[project]/components/Blog/index.jsx",
                                        lineNumber: 180,
                                        columnNumber: 16
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Blog/index.jsx",
                                    lineNumber: 176,
                                    columnNumber: 532
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Blog/index.jsx",
                            lineNumber: 176,
                            columnNumber: 323
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Blog/index.jsx",
                        lineNumber: 176,
                        columnNumber: 237
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Blog/index.jsx",
                lineNumber: 176,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Blog/index.jsx",
            lineNumber: 176,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c1 = Blog;
function _BlogBlogPostsMap(post, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        custom: index,
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true
        },
        className: "h-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Blog$2f$BlogCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            image: post.image,
            category: post.category,
            title: post.title,
            description: post.description,
            author: post.author,
            date: post.date,
            readTime: post.readTime
        }, void 0, false, {
            fileName: "[project]/components/Blog/index.jsx",
            lineNumber: 190,
            columnNumber: 25
        }, this)
    }, post.id, false, {
        fileName: "[project]/components/Blog/index.jsx",
        lineNumber: 188,
        columnNumber: 10
    }, this);
}
var _c, _c1;
__turbopack_context__.k.register(_c, "ArrowRightIcon");
__turbopack_context__.k.register(_c1, "Blog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_98663e98._.js.map