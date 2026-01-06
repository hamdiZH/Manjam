(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/WhyManjam/FeatureCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function FeatureCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "47c50c3d382a90a24dd8cac48e381de9fdf77a4c46730d3c01891f8d7f9d3ef7") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "47c50c3d382a90a24dd8cac48e381de9fdf77a4c46730d3c01891f8d7f9d3ef7";
    }
    const { icon, title, description, children } = t0;
    let t1;
    if ($[1] !== icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#E6F7F1] rounded-lg md:rounded-xl flex items-center justify-center shrink-0",
            children: icon
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/FeatureCard.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[#111827] font-semibold text-base sm:text-lg",
            children: title
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/FeatureCard.jsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[3] = title;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 sm:gap-3",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/FeatureCard.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-hidden",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/FeatureCard.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== description) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#1C4A3F] text-sm sm:text-base md:text-lg font-medium italic leading-relaxed",
            children: description
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/FeatureCard.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[10] = description;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] !== t3 || $[13] !== t4 || $[14] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-full max-w-[700px] min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] xl:h-[593px] p-4 sm:p-5 md:p-6 gap-4 sm:gap-5 md:gap-6 bg-[rgba(243,244,246,0.5)] border border-[rgba(229,231,235,1)] rounded-2xl md:rounded-3xl shadow-[0px_2px_6px_0px_rgba(16,24,40,0.06)]",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/FeatureCard.jsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t4;
        $[14] = t5;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_c = FeatureCard;
var _c;
__turbopack_context__.k.register(_c, "FeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhyManjam/StatCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function StatCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "36f4d8da8a0a5f4434be19f1650c5475bfd22b7a8d9ebcf7469dbc83efadb5be") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "36f4d8da8a0a5f4434be19f1650c5475bfd22b7a8d9ebcf7469dbc83efadb5be";
    }
    const { icon, label, value, subValue, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `shrink-0 bg-[radial-gradient(100%_100%_at_0%_0%,#1C4A3F_0%,#0F2A24_100%)] rounded-lg md:rounded-xl p-3 sm:p-4 min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[225px] ${className}`;
    let t3;
    if ($[1] !== label) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-white/80 text-[10px] sm:text-xs",
            children: label
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/StatCard.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== icon || $[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2",
            children: [
                icon,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/StatCard.jsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[3] = icon;
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== value) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-white text-lg sm:text-xl md:text-2xl font-bold mb-0.5 sm:mb-1",
            children: value
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/StatCard.jsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[6] = value;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== subValue) {
        t6 = subValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#10B981] text-[10px] sm:text-xs",
            children: subValue
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/StatCard.jsx",
            lineNumber: 46,
            columnNumber: 22
        }, this);
        $[8] = subValue;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t2 || $[11] !== t4 || $[12] !== t5 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/StatCard.jsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhyManjam/StatsSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ChevronLeft = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "77e336c4b241903e2fc2850f6e333b5dc75dd8c655dca47f54d9975a71c1b6e8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77e336c4b241903e2fc2850f6e333b5dc75dd8c655dca47f54d9975a71c1b6e8";
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
                d: "M12.5 15L7.5 10L12.5 5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
                lineNumber: 15,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
            lineNumber: 15,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ChevronLeft;
const ChevronRight = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "77e336c4b241903e2fc2850f6e333b5dc75dd8c655dca47f54d9975a71c1b6e8") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77e336c4b241903e2fc2850f6e333b5dc75dd8c655dca47f54d9975a71c1b6e8";
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
                d: "M7.5 15L12.5 10L7.5 5",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
                lineNumber: 32,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = ChevronRight;
function StatsSlider(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "77e336c4b241903e2fc2850f6e333b5dc75dd8c655dca47f54d9975a71c1b6e8") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "77e336c4b241903e2fc2850f6e333b5dc75dd8c655dca47f54d9975a71c1b6e8";
    }
    const { children } = t0;
    const sliderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "StatsSlider[checkScrollPosition]": ()=>{
                if (sliderRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
                    setCanScrollLeft(scrollLeft > 0);
                    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
                }
            }
        })["StatsSlider[checkScrollPosition]"];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const checkScrollPosition = t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "StatsSlider[scroll]": (direction)=>{
                if (sliderRef.current) {
                    sliderRef.current.scrollBy({
                        left: direction === "left" ? -200 : 200,
                        behavior: "smooth"
                    });
                    setTimeout(checkScrollPosition, 300);
                }
            }
        })["StatsSlider[scroll]"];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const scroll = t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            scrollbarWidth: "none",
            msOverflowStyle: "none"
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== children) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: sliderRef,
            onScroll: checkScrollPosition,
            className: "flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth",
            style: t3,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[4] = children;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== canScrollLeft) {
        t5 = canScrollLeft && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "StatsSlider[<button>.onClick]": ()=>scroll("left")
            }["StatsSlider[<button>.onClick]"],
            className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1C4A3F] hover:bg-gray-50 transition-colors z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronLeft, {}, void 0, false, {
                fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
                lineNumber: 113,
                columnNumber: 237
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
            lineNumber: 111,
            columnNumber: 27
        }, this);
        $[6] = canScrollLeft;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== canScrollRight) {
        t6 = canScrollRight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "StatsSlider[<button>.onClick]": ()=>scroll("right")
            }["StatsSlider[<button>.onClick]"],
            className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1C4A3F] hover:bg-gray-50 transition-colors z-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChevronRight, {}, void 0, false, {
                fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
                lineNumber: 123,
                columnNumber: 237
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
            lineNumber: 121,
            columnNumber: 28
        }, this);
        $[8] = canScrollRight;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t4 || $[11] !== t5 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/StatsSlider.jsx",
            lineNumber: 131,
            columnNumber: 10
        }, this);
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_s(StatsSlider, "1JDlu/4InMKsDuE2TkWD9NbAZR4=");
_c2 = StatsSlider;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ChevronLeft");
__turbopack_context__.k.register(_c1, "ChevronRight");
__turbopack_context__.k.register(_c2, "StatsSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhyManjam/RegulatedInfrastructure.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RegulatedInfrastructure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$FeatureCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyManjam/FeatureCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyManjam/StatCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$StatsSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyManjam/StatsSlider.jsx [app-client] (ecmascript)");
;
;
;
;
;
// Icons
const ShieldIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6";
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
                d: "M9 12L11 14L15 10M20.618 5.984C17.456 6.151 14.347 5.065 12 3C9.653 5.065 6.544 6.151 3.382 5.984C3.128 6.967 3 7.993 3 9.05C3 14.549 6.82 19.227 12 20.777C17.18 19.227 21 14.549 21 9.05C21 7.993 20.872 6.967 20.618 5.984Z",
                stroke: "#1C4A3F",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 17,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = ShieldIcon;
const WalletIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6";
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
                d: "M17.5 6.66667V5C17.5 4.08333 16.75 3.33333 15.8333 3.33333H4.16667C3.25 3.33333 2.5 4.08333 2.5 5V15C2.5 15.9167 3.25 16.6667 4.16667 16.6667H15.8333C16.75 16.6667 17.5 15.9167 17.5 15V13.3333M17.5 6.66667H10.8333C9.91667 6.66667 9.16667 7.41667 9.16667 8.33333V11.6667C9.16667 12.5833 9.91667 13.3333 10.8333 13.3333H17.5M17.5 6.66667V13.3333M13.3333 10H13.3417",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 34,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = WalletIcon;
const ArrowUpDownIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6";
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
                d: "M5.83333 14.1667V5.83333M5.83333 5.83333L3.33333 8.33333M5.83333 5.83333L8.33333 8.33333M14.1667 5.83333V14.1667M14.1667 14.1667L11.6667 12.1667M14.1667 14.1667L16.6667 12.1667",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 51,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = ArrowUpDownIcon;
const TrendingUpIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6";
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
                d: "M18.3333 5L10.8333 12.5L7.5 9.16667L1.66667 15M18.3333 5H13.3333M18.3333 5V10",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 68,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = TrendingUpIcon;
const ClockIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6";
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
                d: "M10 5V10L13.3333 11.6667M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z",
                stroke: "white",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 85,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 85,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c4 = ClockIcon;
const PortfolioIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6";
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
                d: "M3.33333 6.66667L6.66667 10L10 6.66667M3.33333 6.66667V13.3333L6.66667 16.6667M3.33333 6.66667L6.66667 3.33333L10 6.66667M10 6.66667V13.3333M10 6.66667L13.3333 3.33333L16.6667 6.66667M10 13.3333L6.66667 16.6667M10 13.3333L13.3333 16.6667M6.66667 16.6667L10 13.3333M16.6667 6.66667L13.3333 10L10 13.3333M16.6667 6.66667V13.3333L13.3333 16.6667M13.3333 16.6667L10 13.3333",
                stroke: "#10B981",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 102,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c5 = PortfolioIcon;
const ArrowTrendUp = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6";
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
                d: "M14 4L8 10L5.33333 7.33333L2 10.6667M14 4H10M14 4V8",
                stroke: "#10B981",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 119,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 119,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c6 = ArrowTrendUp;
function RegulatedInfrastructure() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6650d86652ef241ddb3c12afa717554547b17899cbe7d496dbf20168e1efd1d6";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShieldIcon, {}, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletIcon, {}, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 143,
                columnNumber: 26
            }, void 0),
            label: "Total portfolio value:",
            value: "$12,480",
            subValue: "\u2191 00%"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 143,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowUpDownIcon, {}, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 150,
                columnNumber: 26
            }, void 0),
            label: "Today's Change:",
            value: "+$134.20",
            subValue: "\u2191 1.09%"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrendingUpIcon, {}, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 157,
                columnNumber: 26
            }, void 0),
            label: "Risk Profile:",
            value: "Balanced"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 157,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClockIcon, {}, void 0, false, {
                fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                lineNumber: 164,
                columnNumber: 26
            }, void 0),
            label: "Last Sync:",
            value: "5 mins ago"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$StatsSlider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                t1,
                t2,
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioIcon, {}, void 0, false, {
                        fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                        lineNumber: 171,
                        columnNumber: 55
                    }, void 0),
                    label: "Portfolio Type:",
                    value: "Active"
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                    lineNumber: 171,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 171,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#6B7280] text-xs sm:text-sm mb-1",
            children: "Asset allocation"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#111827] text-2xl sm:text-3xl md:text-4xl font-bold mb-2",
            children: "78,909.72"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
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
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$FeatureCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: t0,
            title: "Regulated Infrastructure",
            description: "Built on Swiss standards that delivers clarity, and future-aligned structure for the digital-asset ecosystem.",
            children: [
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[660px] h-auto min-h-[150px] sm:min-h-[180px] md:min-h-[200px] lg:h-[222px] p-4 sm:p-5 md:p-6 lg:p-8 gap-6 md:gap-10 bg-[linear-gradient(355.47deg,#EEEEF0_14.32%,rgba(235,235,237,0)_96.61%)] border border-[#E5E7EB] rounded-lg md:rounded-xl shadow-[0px_6px_15px_-2px_rgba(16,24,40,0.08)] overflow-hidden",
                    children: [
                        t6,
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowTrendUp, {}, void 0, false, {
                                    fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                                    lineNumber: 189,
                                    columnNumber: 585
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#10B981] text-xs sm:text-sm font-medium",
                                    children: "4.5%"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                                    lineNumber: 189,
                                    columnNumber: 601
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#9CA3AF] text-xs sm:text-sm",
                                    children: "from last week"
                                }, void 0, false, {
                                    fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                                    lineNumber: 189,
                                    columnNumber: 676
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                            lineNumber: 189,
                            columnNumber: 544
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-[40px] left-1/2 -translate-x-1/2 w-[200px] sm:w-[250px] md:w-[300px] h-[60px] sm:h-[70px] md:h-[80px] bg-[rgba(156,163,175,0.08)] rounded-[50%] blur-sm"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                            lineNumber: 189,
                            columnNumber: 755
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
                    lineNumber: 189,
                    columnNumber: 194
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/RegulatedInfrastructure.jsx",
            lineNumber: 189,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    return t8;
}
_c7 = RegulatedInfrastructure;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "ShieldIcon");
__turbopack_context__.k.register(_c1, "WalletIcon");
__turbopack_context__.k.register(_c2, "ArrowUpDownIcon");
__turbopack_context__.k.register(_c3, "TrendingUpIcon");
__turbopack_context__.k.register(_c4, "ClockIcon");
__turbopack_context__.k.register(_c5, "PortfolioIcon");
__turbopack_context__.k.register(_c6, "ArrowTrendUp");
__turbopack_context__.k.register(_c7, "RegulatedInfrastructure");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhyManjam/ShariahCompliant.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShariahCompliant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$FeatureCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyManjam/FeatureCard.jsx [app-client] (ecmascript)");
;
;
;
const DocumentIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "9157cc6d6d9d61319ac8d0d06dc64811708fc70d8bc3f71c4387d3239ec83e92") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9157cc6d6d9d61319ac8d0d06dc64811708fc70d8bc3f71c4387d3239ec83e92";
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
                d: "M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.586C12.8512 3 13.1055 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z",
                stroke: "#1C4A3F",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                lineNumber: 13,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
            lineNumber: 13,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = DocumentIcon;
const FilterIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "9157cc6d6d9d61319ac8d0d06dc64811708fc70d8bc3f71c4387d3239ec83e92") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9157cc6d6d9d61319ac8d0d06dc64811708fc70d8bc3f71c4387d3239ec83e92";
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
                d: "M2.66667 4H13.3333M4.66667 8H11.3333M6.66667 12H9.33333",
                stroke: "#6B7280",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                lineNumber: 30,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = FilterIcon;
const tableData = [
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
];
function ShariahCompliant() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "9157cc6d6d9d61319ac8d0d06dc64811708fc70d8bc3f71c4387d3239ec83e92") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9157cc6d6d9d61319ac8d0d06dc64811708fc70d8bc3f71c4387d3239ec83e92";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentIcon, {}, void 0, false, {
            fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 sm:gap-3 md:gap-4",
            children: tableData.map(_ShariahCompliantTableDataMap)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$FeatureCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: t0,
            title: "Sharia-Compliant",
            description: "Guided by the principles of Islamic finance, ensuring transparency, and ethical alignment across the digital-asset environment.",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col flex-1",
                children: [
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end mt-3 sm:mt-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white border border-[#E5E7EB] rounded-lg text-[#6B7280] text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterIcon, {}, void 0, false, {
                                    fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                                    lineNumber: 81,
                                    columnNumber: 497
                                }, this),
                                "Filter"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                            lineNumber: 81,
                            columnNumber: 289
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                        lineNumber: 81,
                        columnNumber: 242
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                lineNumber: 81,
                columnNumber: 200
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c2 = ShariahCompliant;
function _ShariahCompliantTableDataMap(row, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[#6B7280] text-sm sm:text-base",
                children: row.label
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                lineNumber: 89,
                columnNumber: 73
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 sm:gap-2",
                children: [
                    row.hasIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#3B82F6] text-[10px] sm:text-xs font-medium bg-[#EFF6FF] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded",
                        children: "bitpay"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                        lineNumber: 89,
                        columnNumber: 213
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#111827] text-sm sm:text-base font-medium",
                        children: row.value
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                        lineNumber: 89,
                        columnNumber: 346
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
                lineNumber: 89,
                columnNumber: 145
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/components/WhyManjam/ShariahCompliant.jsx",
        lineNumber: 89,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DocumentIcon");
__turbopack_context__.k.register(_c1, "FilterIcon");
__turbopack_context__.k.register(_c2, "ShariahCompliant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhyManjam/InstitutionalSecurity.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InstitutionalSecurity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
function InstitutionalSecurity() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "8deccaf73d141469f2f629497c5c62a0c662ca66e31cb136cc2f49fbcf454db5") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8deccaf73d141469f2f629497c5c62a0c662ca66e31cb136cc2f49fbcf454db5";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/Institutional-Grade Security & Compliance.svg",
            alt: "Institutional-Grade Security & Compliance",
            width: 842,
            height: 526,
            className: "object-contain object-top w-full h-full rounded-[7.02px]"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/InstitutionalSecurity.jsx",
            lineNumber: 14,
            columnNumber: 10
        }, this);
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-12 sm:bottom-14 md:bottom-18 left-0 right-0 h-[150px] sm:h-[200px] md:h-[250px] bg-linear-to-b from-transparent via-[rgba(229,231,235,0.8)] to-[rgba(229,231,235,1)] backdrop-blur-[93.55]"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/InstitutionalSecurity.jsx",
            lineNumber: 15,
            columnNumber: 10
        }, this);
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-full max-w-[700px] min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[550px] xl:h-[593px] p-4 sm:p-5 md:p-6 gap-4 sm:gap-5 md:gap-6 rounded-2xl md:rounded-3xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 overflow-hidden rounded-lg md:rounded-xl",
                children: [
                    t0,
                    t1,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-12 sm:bottom-14 md:bottom-18 left-0 right-0 h-[180px] sm:h-[230px] md:h-[300px] bg-linear-to-b from-transparent via-[rgba(229,231,235,0.8)] to-[#ffffff] backdrop-blur-[93.55]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "absolute bottom-3 sm:bottom-4 md:bottom-6 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 text-[#1C4A3F] text-sm sm:text-base md:text-lg font-medium italic leading-relaxed z-10",
                            children: "A multilayered security architecture rooted in global best practices ensures resilient operations, strong governance, and trusted standards."
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam/InstitutionalSecurity.jsx",
                            lineNumber: 24,
                            columnNumber: 499
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam/InstitutionalSecurity.jsx",
                        lineNumber: 24,
                        columnNumber: 291
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam/InstitutionalSecurity.jsx",
                lineNumber: 24,
                columnNumber: 209
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/InstitutionalSecurity.jsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = InstitutionalSecurity;
var _c;
__turbopack_context__.k.register(_c, "InstitutionalSecurity");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhyManjam/HybridOperatingModel.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HybridOperatingModel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$FeatureCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyManjam/FeatureCard.jsx [app-client] (ecmascript)");
;
;
;
const LayersIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a";
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
                d: "M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.586C12.8512 3 13.1055 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z",
                stroke: "#1C4A3F",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                lineNumber: 13,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
            lineNumber: 13,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = LayersIcon;
const WalletIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M19 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7Z",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                    lineNumber: 30,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 14C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12C15.4477 12 15 12.4477 15 13C15 13.5523 15.4477 14 16 14Z",
                    fill: "white"
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                    lineNumber: 30,
                    columnNumber: 316
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3 9V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V9",
                    stroke: "white",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                    lineNumber: 30,
                    columnNumber: 461
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c1 = WalletIcon;
const DollarIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "#1C4A3F",
                    strokeWidth: "1.5"
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                    lineNumber: 47,
                    columnNumber: 105
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 6V18M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5",
                    stroke: "#1C4A3F",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                    lineNumber: 47,
                    columnNumber: 173
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c2 = DollarIcon;
const ArrowUpDownIcon = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a";
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
                d: "M7 17V7M7 7L4 10M7 7L10 10M17 7V17M17 17L14 14M17 17L20 14",
                stroke: "#9CA3AF",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                lineNumber: 64,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c3 = ArrowUpDownIcon;
function HybridOperatingModel() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2e2a7bf7aa2d80fa7e62dff2e050f1db9cacc536e8c81eea14b5750f5ed2283a";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayersIcon, {}, void 0, false, {
            fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[radial-gradient(100%_100%_at_0%_0%,#1C4A3F_0%,#0F2A24_100%)] rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletIcon, {}, void 0, false, {
                                fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                                lineNumber: 88,
                                columnNumber: 287
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/80 text-sm sm:text-base",
                                children: "Total wallet balance:"
                            }, void 0, false, {
                                fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                                lineNumber: 88,
                                columnNumber: 301
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                        lineNumber: 88,
                        columnNumber: 237
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white text-xl sm:text-2xl md:text-3xl font-bold",
                        children: "$2,915.42"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                        lineNumber: 88,
                        columnNumber: 388
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                lineNumber: 88,
                columnNumber: 135
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white border border-[#E5E7EB] rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DollarIcon, {}, void 0, false, {
                                fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                                lineNumber: 95,
                                columnNumber: 199
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#6B7280] text-sm sm:text-base",
                                children: "Available:"
                            }, void 0, false, {
                                fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                                lineNumber: 95,
                                columnNumber: 213
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                        lineNumber: 95,
                        columnNumber: 153
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#111827] text-lg sm:text-xl md:text-2xl font-bold",
                        children: "$1,700.00"
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                        lineNumber: 95,
                        columnNumber: 290
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                lineNumber: 95,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
            lineNumber: 95,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$FeatureCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            icon: t0,
            title: "Hybrid Operating Model",
            description: "Strengthened through a GCC operational base, unites traditional structural rigor with the efficiency and innovation of modern digital-asset technologies.",
            children: [
                t1,
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 opacity-60",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowUpDownIcon, {}, void 0, false, {
                            fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                            lineNumber: 102,
                            columnNumber: 398
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                        lineNumber: 102,
                        columnNumber: 348
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
                    lineNumber: 102,
                    columnNumber: 240
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam/HybridOperatingModel.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c4 = HybridOperatingModel;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "LayersIcon");
__turbopack_context__.k.register(_c1, "WalletIcon");
__turbopack_context__.k.register(_c2, "DollarIcon");
__turbopack_context__.k.register(_c3, "ArrowUpDownIcon");
__turbopack_context__.k.register(_c4, "HybridOperatingModel");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$RegulatedInfrastructure$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyManjam/RegulatedInfrastructure.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$ShariahCompliant$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyManjam/ShariahCompliant.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$InstitutionalSecurity$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyManjam/InstitutionalSecurity.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$HybridOperatingModel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhyManjam/HybridOperatingModel.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const tabs = [
    {
        id: "regulated",
        label: "Regulated Infrastructure",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$RegulatedInfrastructure$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "sharia",
        label: "Sharia-Compliant",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$ShariahCompliant$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "security",
        label: "Institutional-Grade Security & Compliance",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$InstitutionalSecurity$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: "hybrid",
        label: "Hybrid Operating Model",
        component: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhyManjam$2f$HybridOperatingModel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
];
function WhyManjam() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44);
    if ($[0] !== "44e4c905c10d25a394051fdef6679bbd8e2f015bf6267f885a0f212a20523d48") {
        for(let $i = 0; $i < 44; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44e4c905c10d25a394051fdef6679bbd8e2f015bf6267f885a0f212a20523d48";
    }
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("regulated");
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
                        if (scrollProgress <= 0) {
                            setActiveTab("regulated");
                        } else {
                            if (scrollProgress < 0.25) {
                                setActiveTab("regulated");
                            } else {
                                if (scrollProgress < 0.5) {
                                    setActiveTab("sharia");
                                } else {
                                    if (scrollProgress < 0.75) {
                                        setActiveTab("security");
                                    } else {
                                        setActiveTab("hybrid");
                                    }
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
    if ($[6] !== activeTab) {
        t4 = ({
            "WhyManjam[tabs.findIndex()]": (tab)=>tab.id === activeTab
        })["WhyManjam[tabs.findIndex()]"];
        $[6] = activeTab;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const activeTabIndex = tabs.findIndex(t4);
    let t5;
    if ($[8] !== activeTab) {
        t5 = tabs.find({
            "WhyManjam[tabs.find()]": (tab_0)=>tab_0.id === activeTab
        }["WhyManjam[tabs.find()]"]);
        $[8] = activeTab;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const activeTabData = t5;
    const ActiveComponent = activeTabData?.component;
    const t6 = isMobile ? "auto" : `${100 * tabs.length}vh`;
    let t7;
    if ($[10] !== t6) {
        t7 = {
            height: t6
        };
        $[10] = t6;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    const t8 = `${isMobile ? "relative py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-10" : "sticky top-0 flex items-center py-10 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-10"}`;
    let t10;
    let t9;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[#10B981] font-semibold text-xs sm:text-sm tracking-wider uppercase mb-2 sm:mb-3 md:mb-4",
            children: "WHY MANJAM?"
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 152,
            columnNumber: 10
        }, this);
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-[#111827] text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-semibold leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12",
            children: "Designed for safety, clarity, and long-term growth."
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t9;
    } else {
        t10 = $[12];
        t9 = $[13];
    }
    let t11;
    if ($[14] !== activeTabIndex) {
        t11 = tabs.map({
            "WhyManjam[tabs.map()]": (tab_1, index)=>{
                const isActive = index === activeTabIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "WhyManjam[tabs.map() > <button>.onClick]": ()=>setActiveTab(tab_1.id)
                    }["WhyManjam[tabs.map() > <button>.onClick]"],
                    className: `shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${isActive ? "bg-[#10B981] text-white" : "bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]"}`,
                    children: tab_1.label
                }, tab_1.id, false, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 165,
                    columnNumber: 16
                }, this);
            }
        }["WhyManjam[tabs.map()]"]);
        $[14] = activeTabIndex;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden flex overflow-x-auto gap-2 pb-4 scrollbar-hide -mx-4 px-4",
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 top-0 bottom-0 w-[2px] bg-[#E5E7EB]",
            style: {
                height: "200px"
            }
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    const t14 = `${(activeTabIndex + 1) / tabs.length * 200}px`;
    let t15;
    if ($[19] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-0 top-0 w-[2px] bg-[#10B981] transition-all duration-300",
            style: {
                height: t14
            }
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        $[19] = t14;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== activeTabIndex) {
        t16 = tabs.map({
            "WhyManjam[tabs.map()]": (tab_2, index_0)=>{
                const isPassed = index_0 < activeTabIndex;
                const isActive_0 = index_0 === activeTabIndex;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: {
                        "WhyManjam[tabs.map() > <button>.onClick]": ()=>setActiveTab(tab_2.id)
                    }["WhyManjam[tabs.map() > <button>.onClick]"],
                    className: `relative pl-4 lg:pl-5 xl:pl-6 py-2 lg:py-2.5 xl:py-3 text-left transition-all duration-300 text-sm lg:text-base ${isActive_0 ? "text-[#111827] font-semibold" : isPassed ? "text-[#6B7280] font-normal" : "text-[#9CA3AF] font-normal hover:text-[#6B7280]"}`,
                    children: [
                        isActive_0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-[-3px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#10B981] rounded-full transition-all duration-300"
                        }, void 0, false, {
                            fileName: "[project]/components/WhyManjam.jsx",
                            lineNumber: 211,
                            columnNumber: 338
                        }, this),
                        tab_2.label
                    ]
                }, tab_2.id, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 209,
                    columnNumber: 16
                }, this);
            }
        }["WhyManjam[tabs.map()]"]);
        $[21] = activeTabIndex;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col",
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[23] = t16;
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] !== t15 || $[26] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:block",
            children: [
                t13,
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[25] = t15;
        $[26] = t17;
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== t12 || $[29] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full lg:w-[45%] xl:w-[40%]",
            children: [
                t9,
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t12,
                        t18
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/WhyManjam.jsx",
                    lineNumber: 238,
                    columnNumber: 66
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t18;
        $[30] = t19;
    } else {
        t19 = $[30];
    }
    let t20;
    if ($[31] !== ActiveComponent) {
        t20 = ActiveComponent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 247,
            columnNumber: 30
        }, this);
        $[31] = ActiveComponent;
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full lg:w-[55%] xl:w-[60%] mt-6 lg:mt-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "transition-opacity duration-500",
                children: t20
            }, void 0, false, {
                fileName: "[project]/components/WhyManjam.jsx",
                lineNumber: 255,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[33] = t20;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] !== t19 || $[36] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16",
            children: [
                t19,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[35] = t19;
        $[36] = t21;
        $[37] = t22;
    } else {
        t22 = $[37];
    }
    let t23;
    if ($[38] !== t22 || $[39] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: contentRef,
            className: t8,
            children: t22
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[38] = t22;
        $[39] = t8;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== t23 || $[42] !== t7) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: "relative w-full",
            style: t7,
            children: t23
        }, void 0, false, {
            fileName: "[project]/components/WhyManjam.jsx",
            lineNumber: 281,
            columnNumber: 11
        }, this);
        $[41] = t23;
        $[42] = t7;
        $[43] = t24;
    } else {
        t24 = $[43];
    }
    return t24;
}
_s(WhyManjam, "bbEGqSPp6y3cqy2WAOoz2dh97oI=");
_c = WhyManjam;
var _c;
__turbopack_context__.k.register(_c, "WhyManjam");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_ea6465c1._.js.map