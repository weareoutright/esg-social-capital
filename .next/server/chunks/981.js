exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 3740:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(167);
const _interop_require_wildcard = __webpack_require__(8760);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__webpack_require__(6689));
const _head = /*#__PURE__*/ _interop_require_default._(__webpack_require__(2636));
const _imageblursvg = __webpack_require__(4486);
const _imageconfig = __webpack_require__(5843);
const _imageconfigcontext = __webpack_require__(744);
const _warnonce = __webpack_require__(618);
const _imageloader = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths(param, width, sizes) {
    let { deviceSizes, allSizes } = param;
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs(param) {
    let { config, src, unoptimized, width, quality, sizes, loader } = param;
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>loader({
                config,
                src,
                quality,
                width: w
            }) + " " + (kind === "w" ? w : i + 1) + kind).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "undefined") {
        return x;
    }
    if (typeof x === "number") {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
function getDynamicProps(fetchPriority) {
    const [majorStr, minorStr] = _react.version.split(".");
    const major = parseInt(majorStr, 10);
    const minor = parseInt(minorStr, 10);
    if (major > 18 || major === 18 && minor >= 3) {
        // In React 18.3.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { imgAttributes, heightInt, widthInt, qualityInt, className, imgStyle, blurStyle, isLazy, fetchPriority, fill, placeholder, loading, srcString, config, unoptimized, loader, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, onLoad, onError, ...rest } = param;
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        loading: loading,
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        style: {
            ...imgStyle,
            ...blurStyle
        },
        ...imgAttributes,
        ref: (0, _react.useCallback)((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
const Image = /*#__PURE__*/ (0, _react.forwardRef)((param, forwardedRef)=>{
    let { src, sizes, unoptimized = false, priority = false, loading, className, quality, width, height, fill, style, onLoad, onLoadingComplete, placeholder = "empty", blurDataURL, fetchPriority, layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...all } = param;
    const configContext = (0, _react.useContext)(_imageconfigcontext.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes
        };
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageloader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error('Image with src "' + src + '" is missing "loader" prop.' + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader");
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(staticImageData));
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(staticImageData));
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (!src || src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    if (priority) {
        fetchPriority = "high";
    }
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: 'url("data:image/svg+xml;charset=utf-8,' + (0, _imageblursvg.getImageBlurSvg)({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL,
            objectFit: imgStyle.objectFit
        }) + '")'
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = {
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fetchPriority,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText,
        ...rest
    };
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, {
        ...imgElementArgs,
        ref: forwardedRef
    }), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", {
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src,
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin,
        referrerPolicy: rest.referrerPolicy,
        ...getDynamicProps(fetchPriority)
    })) : null);
});
const _default = Image;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 5675:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(3740)


/***/ }),

/***/ 1686:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  bA: () => (/* reexport */ chunk_IQQGVK5S_x),
  Ds: () => (/* reexport */ O),
  ND: () => (/* reexport */ w),
  oL: () => (/* reexport */ chunk_6S5AGBKT_m)
});

// UNUSED EXPORTS: Footer, Grid, Header, Recipe, sortChar, sortDate

// EXTERNAL MODULE: external "next/compat/router.js"
var router_js_ = __webpack_require__(1250);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/chunk-DJBNDD37.mjs



var c = (o)=>typeof o == "number", S = (o)=>o instanceof HTMLElement, O = ({ data: o, itemsPerPage: r, breakpoints: g, routing: C, Component: L })=>{
    let p = (0,router_js_.useRouter)(), [b, B] = (0,external_react_.useState)(g?.start || null), v = g?.end || null, d = g?.add || null, x = p?.pathname.replace(/\/{1}\[{1,2}.*\]{1,2}$/, "") || "", H = p?.query ? Object.keys(p.query)[0] : "", [e, h] = (0,external_react_.useState)(Number(p?.query[H]) || 1), [u, k] = (0,external_react_.useState)((e - 1) * r), [M, R] = (0,external_react_.useState)([]), [m] = (0,external_react_.useState)(o.length), [a] = (0,external_react_.useState)(Math.ceil(o.length / r));
    (0,external_react_.useEffect)(()=>{
        R(o.slice((e - 1) * r, r * e));
        let t = (e - 1) * r % m;
        e > 0 && k(Number(t)), C && p?.push(`${x}/${e}`, `${x}/${e}`, {
            shallow: !0
        });
    }, [
        o,
        u,
        r,
        b,
        e,
        m
    ]);
    let [E, T] = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        let t = ()=>{
            T(window.innerWidth);
        };
        return T(window.innerWidth), window.addEventListener("resize", ()=>t), ()=>{
            window.removeEventListener("resize", t);
        };
    }, []);
    let y = (t)=>{
        if (S(t.target)) if (t.target.id === "next-btn") u < m - r && k(Number(u) + Number(r)), e < a && h(Number(e + 1));
        else if (t.target.id === "back-btn") u >= 0 && k(u - r), e > 1 && h(Number(e - 1));
        else {
            let f = Number(t.target.innerHTML);
            h(f);
        }
    }, W = ()=>{
        if (a <= 1) return null;
        let t = [];
        for(let i = 0; i < a; i++){
            let n = Number(i + 1), w = (0,jsx_runtime.jsx)("button", {
                className: `
          ${e === n ? "ps-block" : "ps-hidden md:ps-block"}
          ps-h-16 ps-w-12 ps-border-t-2 ps-border-b-2 ps-border-black ps-bg-white hover:ps-bg-blue-300 focus:ps-bg-blue-200 focus:ps-border-blue-300 ${e === n ? "ps-border-blue-700 ps-border-2" : ""}
          `,
                onClick: y,
                "aria-label": e === n ? `Current Page, Page ${n}` : `Go to Page ${n}`,
                "aria-current": e === n,
                children: n
            }, n);
            if (i === b) {
                if (c(d) && b + d >= a) {
                    t.push(w);
                    continue;
                }
                t.push((0,jsx_runtime.jsx)("button", {
                    className: "ps-hidden md:ps-block ps-h-16 ps-w-12 ps-border-2 ps-border-black ps-bg-slate-200 hover:ps-bg-blue-300 focus:ps-bg-blue-200 focus:ps-border-blue-300",
                    onClick: ()=>{
                        c(d) && B(b + d);
                    },
                    "aria-label": "Expand Hidden Buttons",
                    children: "..."
                }, "..."));
            }
            if (c(b) && c(v) && n >= b && n < v && c(E)) {
                E < 768 && t.push(w);
                continue;
            }
            t.push(w);
        }
        let f = "ps-h-16 ps-w-12 disabled:ps-bg-gray-500 hover:ps-bg-blue-300 focus:ps-bg-blue-200 focus:ps-border-blue-300 ps-border-y-2 ps-border-black ps-bg-white";
        return (0,jsx_runtime.jsx)("nav", {
            role: "navigation",
            "aria-label": "Pagination Navigation",
            children: (0,jsx_runtime.jsxs)("ul", {
                className: "ps-list-none ps-flex ps-flex-row ps-justify-center ps-mx-auto ps-mt-auto ps-mb-4 [&>li]:ps-p-0",
                children: [
                    (0,jsx_runtime.jsx)("li", {
                        children: (0,jsx_runtime.jsx)("button", {
                            className: `${f} ps-border-l-2`,
                            id: "back-btn",
                            disabled: u === 0,
                            onClick: y,
                            "aria-label": "Go to Previous Page",
                            children: "<"
                        })
                    }, "back"),
                    t.map((i, n)=>(0,jsx_runtime.jsx)("li", {
                            children: i
                        }, n)),
                    (0,jsx_runtime.jsx)("li", {
                        children: (0,jsx_runtime.jsx)("button", {
                            className: `${f} ps-border-r-2`,
                            id: "next-btn",
                            disabled: u >= m - r,
                            onClick: y,
                            "aria-label": "Go to Next Page",
                            children: ">"
                        })
                    }, "next")
                ]
            })
        });
    };
    return (0,jsx_runtime.jsxs)("div", {
        className: "ps-max-w-full",
        children: [
            a > 1 ? (0,jsx_runtime.jsxs)("h3", {
                className: "ps-mb-8 ps-prose-sm ps-font-bold",
                children: [
                    "Page ",
                    e,
                    "/",
                    a
                ]
            }) : null,
            (0,jsx_runtime.jsx)("section", {
                children: (0,jsx_runtime.jsx)(L, {
                    currentItems: M
                })
            }),
            (0,jsx_runtime.jsx)("div", {
                className: "ps-sticky lg:ps-bottom-12 ps-bottom-4 ps-mt-10",
                children: (0,jsx_runtime.jsx)(W, {})
            })
        ]
    });
};


// EXTERNAL MODULE: external "next/link.js"
var link_js_ = __webpack_require__(5384);
;// CONCATENATED MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/chunk-BAETGDFI.mjs



var w = ({ clearPreviewRoute: t = "/api/clear-preview" })=>{
    let [e, r] = (0,external_react_.useState)(!0);
    return (0,jsx_runtime.jsxs)("div", {
        children: [
            (0,jsx_runtime.jsx)("div", {
                className: `ps-flex ps-justify-between ps-items-center ps-min-h-[3.5rem] ps-h-14 ps-px-8 ps-py-2 ps-bg-[#3017A1] ps-text-white ps-transition-all ps-duration-300 ps-w-full ${e ? "" : "ps-justify-start ps-translate-x-[calc(100%-5rem)] ps-pl-4"}`,
                children: e && (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        (0,jsx_runtime.jsx)("span", {
                            className: "ps-mr-auto ps-self-center",
                            children: "Preview Mode Enabled"
                        }),
                        (0,jsx_runtime.jsx)(link_js_, {
                            href: t,
                            className: "ps-justify-self-end ps-border ps-text-black ps-border-black ps-w-fit ps-px-4 ps-py-2 ps-mr-12 ps-bg-yellow-300",
                            children: "Exit Preview Mode"
                        })
                    ]
                })
            }),
            (0,jsx_runtime.jsx)("button", {
                className: "ps-absolute ps-right-6 ps-top-[.75rem] ps-z-10",
                onClick: ()=>{
                    r(!e);
                },
                children: (0,jsx_runtime.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    className: `ps-w-8 ps-h-8 ps-transition-all ${e ? "ps-rotate-180" : ""}`,
                    children: (0,jsx_runtime.jsx)("path", {
                        fill: "#FFFFFF",
                        d: "M11.29,12l3.54-3.54a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L9.17,11.29a1,1,0,0,0,0,1.42L13.41,17a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41Z"
                    })
                })
            })
        ]
    });
};


// EXTERNAL MODULE: external "next/image.js"
var image_js_ = __webpack_require__(5564);
;// CONCATENATED MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/chunk-4EWRTXBX.mjs



var x = ({ title: t, category: a, imageProps: p, ingredients: o, instructions: i, children: c })=>{
    let n = useRouter();
    return jsxs("article", {
        className: "ps-prose lg:ps-prose-xl ps-mt-10 ps-mx-auto h-fit ps-p-4 sm:ps-p-0",
        children: [
            jsxs("header", {
                children: [
                    jsx("h1", {
                        children: t
                    }),
                    jsxs("div", {
                        className: "ps-flex ps-flex-row ps-justify-between",
                        children: [
                            jsx("a", {
                                onClick: ()=>n?.back(),
                                className: "ps-font-normal ps-cursor-pointer",
                                children: "Back →"
                            }),
                            jsx("span", {
                                className: "text ps-pb-2 ps-pr-3 ps-text-sm text-slate-400",
                                children: a
                            })
                        ]
                    })
                ]
            }),
            p ? jsx("div", {
                className: "ps-relative ps-max-w-lg ps-mx-auto ps-min-w-full ps-h-[50vh] ps-rounded-lg ps-shadow-lg ps-overflow-hidden ps-mt-12 ps-mb-10",
                children: jsx(m, {
                    priority: !0,
                    src: p.src,
                    style: {
                        objectFit: "cover",
                        padding: "0",
                        margin: "auto"
                    },
                    fill: !0,
                    alt: p.alt ? p.alt : t
                })
            }) : null,
            jsxs("div", {
                className: "ps-flex ps-flex-col sm:ps-flex-row",
                children: [
                    jsxs("section", {
                        className: "ps-flex ps-flex-col min-w-fit sm:ps-border-r-2 ps-pr-4",
                        children: [
                            jsx("h2", {
                                children: "Ingredients"
                            }),
                            jsx("ul", {
                                children: o?.map((r, l)=>r.startsWith("For") ? jsx("li", {
                                        className: "ps-list-none",
                                        children: jsx("strong", {
                                            children: r
                                        })
                                    }, l) : jsx("li", {
                                        children: r
                                    }, l))
                            })
                        ]
                    }),
                    jsxs("section", {
                        className: "ps-flex ps-flex-col ps-pl-4",
                        children: [
                            jsx("h2", {
                                className: "ps-ml-4",
                                children: "Directions"
                            }),
                            jsx("div", {
                                dangerouslySetInnerHTML: {
                                    __html: i
                                }
                            })
                        ]
                    })
                ]
            }),
            c
        ]
    });
};


;// CONCATENATED MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/chunk-IQQGVK5S.mjs



var chunk_IQQGVK5S_x = ({ title: p, content: m, date: t, imageProps: e, contentClassName: a = "ps-max-w-screen lg:ps-max-w-screen-lg md:ps-max-w-screen-md sm:ps-max-w-screen-sm ps-mx-auto" })=>{
    let n = (0,router_js_.useRouter)();
    return (0,jsx_runtime.jsxs)("article", {
        className: "ps-prose ps-max-w-none xs:ps-prose-xs md:ps-prose-md lg:ps-prose-lg ps-mt-10 ps-mx-auto ps-py-4 ps-px-12",
        children: [
            (0,jsx_runtime.jsxs)("section", {
                className: "ps-prose xs:ps-prose-xs md:ps-prose-md lg:ps-prose-lg ps-mt-10 ps-max-w-screen lg:ps-max-w-screen-lg md:ps-max-w-screen-md sm:ps-max-w-screen-sm ps-mx-auto",
                children: [
                    (0,jsx_runtime.jsx)("h1", {
                        children: p
                    }),
                    t ? (0,jsx_runtime.jsx)("p", {
                        className: "ps-text-sm ps-text-gray-600",
                        children: t
                    }) : null,
                    (0,jsx_runtime.jsx)("button", {
                        onClick: ()=>n?.back(),
                        className: "ps-font-normal ps-underline ps-cursor-pointer",
                        children: "Back →"
                    })
                ]
            }),
            (0,jsx_runtime.jsx)("div", {
                className: "ps-mt-12 ps-max-w-screen ps-mx-auto lg:ps-max-w-screen-lg [&*>img]:ps-rounded-lg",
                children: e ? (0,jsx_runtime.jsx)("div", {
                    className: "ps-relative ps-mb-10 ps-min-h-[50vh]",
                    children: (0,jsx_runtime.jsx)(image_js_, {
                        priority: !0,
                        src: e.src,
                        style: {
                            objectFit: "cover"
                        },
                        fill: !0,
                        alt: e.alt ? e.alt : p
                    })
                }) : null
            }),
            (0,jsx_runtime.jsx)("div", {
                className: `ps-break-words ps-mt-12 ${a}`,
                dangerouslySetInnerHTML: {
                    __html: m
                }
            })
        ]
    });
};


;// CONCATENATED MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/chunk-MDVSHE5G.mjs


var a = (s)=>s.parentId ? !0 : !!s.parent, n = ({ footerMenuItems: s, children: i })=>jsxs("footer", {
        className: "ps-w-full ps-text-white ps-bg-black ps-p-4 ps-mt-12",
        children: [
            jsx(()=>{
                let p = [];
                if (s) for(let e = 0; e < s.length; e++)s[e + 1] && a(s[e + 1]) ? (p.push(jsxs("ul", {
                    children: [
                        jsx("li", {
                            className: "ps-list-disc ps-text-blue-300",
                            children: jsx(l, {
                                href: s[e].href,
                                className: "ps-text-blue-300 hover:ps-underline hover:ps-text-blue-100 focus:ps-text-purple-600 active:ps-text-purple-300",
                                children: s[e].linkText
                            })
                        }),
                        jsx("li", {
                            className: "ps-list-disc ps-text-blue-300 ps-ml-3",
                            children: jsx(l, {
                                href: s[e + 1].href,
                                className: "ps-text-blue-300 hover:ps-underline hover:ps-text-blue-100 focus:ps-text-purple-600 active:ps-text-purple-300",
                                children: s[e + 1].linkText
                            })
                        })
                    ]
                }, e)), e++) : p.push(jsx("li", {
                    className: "ps-list-disc ps-text-blue-300",
                    children: jsx(l, {
                        href: s[e].href,
                        className: "ps-text-blue-300 hover:ps-underline hover:ps-text-blue-100 focus:ps-text-purple-600 active:ps-text-purple-300",
                        children: s[e].linkText
                    })
                }, e));
                return jsx("nav", {
                    className: "ps-flex ps-flex-col ps-max-w-lg ps-mx-auto lg:ps-max-w-screen-lg",
                    children: jsx("ul", {
                        children: p?.map((e)=>e)
                    })
                });
            }, {}),
            jsx("div", {
                className: "ps-flex ps-my-4 ps-p-2",
                children: i
            })
        ]
    });


;// CONCATENATED MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/chunk-6S5AGBKT.mjs

var i = ({ cols: t = 3, children: o })=>(0,jsx_runtime.jsx)("div", {
        className: `ps-mt-12 ps-grid ps-gap-5 ps-max-w-content ps-mx-auto lg:ps-max-w-screen-lg lg:ps-grid-cols-${String(t)}`,
        children: o
    }), chunk_6S5AGBKT_m = (t)=>({ data: n, cols: p, FallbackComponent: r, ...s })=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: n ? (0,jsx_runtime.jsx)(i, {
                cols: p,
                children: n.map((c, d)=>(0,jsx_runtime.jsx)(t, {
                        content: c,
                        ...s
                    }, d))
            }) : r ? (0,jsx_runtime.jsx)(r, {}) : null
        });


;// CONCATENATED MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/chunk-4EOHPKC5.mjs


var chunk_4EOHPKC5_n = ({ navItems: p })=>jsx("div", {
        className: "ps-my-0 ps-pt-10 ps-px-5 ps-text-xl",
        children: jsx("nav", {
            children: jsx("ul", {
                className: "ps-flex ps-flex-row ps-flex-wrap sm:ps-flex-nowrap ps-list-none ps-justify-between ps-max-w-screen-sm ps-mx-auto",
                children: p.map((s)=>jsx("li", {
                        className: `${s.href === "/" ? "ps-mr-auto" : "ps-mx-4"}`,
                        children: jsx(r, {
                            className: "ps-font-sans hover:ps-underline",
                            href: s.href,
                            children: s.linkText
                        })
                    }, s.href))
            })
        })
    });


;// CONCATENATED MODULE: ./node_modules/@pantheon-systems/nextjs-kit/dist/index.mjs












/***/ })

};
;