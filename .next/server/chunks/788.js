"use strict";
exports.id = 788;
exports.ids = [788];
exports.modules = {

/***/ 6809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_PhaseLayout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/index.module.css
var index_module = __webpack_require__(9270);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/PhaseTitle.jsx



const PhaseTitle = ({ headerSvg, phaseNum, phaseTitle, phaseHeaderContent, phaseHeaderImg })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "sidebar",
                children: /*#__PURE__*/ jsx_runtime.jsx("span", {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "title-div",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "phase-pin",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: headerSvg,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            "PHASE ",
                                            phaseNum
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: phaseTitle
                            }),
                            phaseHeaderContent
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "phase1-title-img",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: phaseHeaderImg,
                            alt: ""
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_PhaseTitle = (PhaseTitle);

// EXTERNAL MODULE: ./components/Tool.jsx + 1 modules
var Tool = __webpack_require__(74);
;// CONCATENATED MODULE: ./constants/phase1images/geotag-sticky-note.svg
/* harmony default export */ const geotag_sticky_note = ({"src":"/_next/static/media/geotag-sticky-note.74492e1b.svg","height":26,"width":19,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/StickyNote.jsx





const StickyNote = ({ title, location, content, learnMoreHref })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "StickyNote folded_corner",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "location",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: geotag_sticky_note,
                        alt: ""
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: location
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "content-justify",
                children: content
            }),
            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                className: "pill",
                href: learnMoreHref,
                target: "_blank",
                rel: "noreferrer",
                children: "Learn More"
            })
        ]
    });
};
/* harmony default export */ const components_StickyNote = (StickyNote);

;// CONCATENATED MODULE: ./components/ActionStep.jsx





const ActionStep = ({ icon, title, description, toolsArr, stickyNotesArr })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "ActionStep",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "action-step-title",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: icon !== null ? icon : "",
                        alt: ""
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                        className: "action-title",
                        children: title
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "content-justify",
                children: description
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "tools",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: "Tools"
                    }),
                    toolsArr.map((tool)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx(Tool/* default */.Z, {
                            href: tool.href,
                            title: tool.title
                        }, tool.key);
                    })
                ]
            }),
            stickyNotesArr.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "stickyNotes",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                        children: "Notes from the field"
                    }),
                    stickyNotesArr.map((note)=>{
                        return /*#__PURE__*/ jsx_runtime.jsx(components_StickyNote, {
                            title: note.title,
                            location: note.location,
                            content: note.content,
                            learnMoreHref: note.href
                        }, note.key);
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                style: {
                    visibility: "none"
                }
            }),
            /*#__PURE__*/ jsx_runtime.jsx("hr", {})
        ]
    });
};
/* harmony default export */ const components_ActionStep = (ActionStep);

;// CONCATENATED MODULE: ./components/PhaseContent.jsx



const PhaseContent = ({ phaseContent })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "PhaseContent",
        children: phaseContent.map((step, index)=>{
            return /*#__PURE__*/ jsx_runtime.jsx(components_ActionStep, {
                icon: step.icon,
                title: step.title,
                description: step.description,
                toolsArr: step.toolsArr,
                stickyNotesArr: step.stickyNotesArr
            }, index);
        })
    });
};
/* harmony default export */ const components_PhaseContent = (PhaseContent);

// EXTERNAL MODULE: ./components/NextPage.jsx + 1 modules
var NextPage = __webpack_require__(6620);
// EXTERNAL MODULE: ./components/PhaseHeader.jsx + 1 modules
var PhaseHeader = __webpack_require__(9833);
;// CONCATENATED MODULE: ./components/PhaseLayout.jsx







const PhaseLayout = ({ phaseInfo })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(PhaseHeader/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(index_module_default()).header} font-extrabold text-center w-fit content-page`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(components_PhaseTitle, {
                        headerSvg: phaseInfo.headerSvg,
                        phaseNum: phaseInfo.phaseNum,
                        phaseTitle: phaseInfo.phaseTitle,
                        phaseHeaderContent: phaseInfo.phaseHeaderContent,
                        phaseHeaderImg: phaseInfo.phaseHeaderImg
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(components_PhaseContent, {
                        phaseContent: phaseInfo.phaseContent
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(NextPage/* default */.Z, {
                nextPage: phaseInfo.nextPage,
                nextPageAnchorLink: phaseInfo.nextPageAnchorLink
            })
        ]
    });
};
/* harmony default export */ const components_PhaseLayout = (PhaseLayout);


/***/ }),

/***/ 4860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ PHASE_INFO)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./constants/phase-pin.svg
/* harmony default export */ const phase_pin = ({"src":"/_next/static/media/phase-pin.0997d8cd.svg","height":32,"width":27,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/LayTheFoundation/Phase1headerContent.jsx


const Phase1HeaderContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "content-justify",
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint est vel. Quis eligendi in enim sequi sint dolore est quos explicabo nemo labore, distinctio doloribus et temporibus minus! Dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis corporis distinctio aliquid minima unde perferendis? Quibusdam laboriosam error totam et aspernatur amet voluptate recusandae nesciunt, fugiat, provident nobis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus obcaecati itaque quas sit. Cum nihil ad ipsa sapiente neque alias inventore perferendis eaque minus eveniet tempore eum, hic nisi?"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "content-justify",
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint est vel. Quis eligendi in enim sequi sint dolore est quos explicabo nemo labore, distinctio doloribus et temporibus minus! Dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis corporis distinctio aliquid minima unde perferendis? Quibusdam laboriosam error totam et aspernatur amet voluptate recusandae nesciunt, fugiat, provident nobis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus obcaecati itaque quas sit. Cum nihil ad ipsa sapiente neque alias inventore perferendis eaque minus eveniet tempore eum, hic nisi?"
            })
        ]
    });
};
/* harmony default export */ const Phase1headerContent = (Phase1HeaderContent);

;// CONCATENATED MODULE: ./components/DesignTheSupports/Phase2headerContent.jsx


const Phase2HeaderContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "content-justify",
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint est vel. Quis eligendi in enim sequi sint dolore est quos explicabo nemo labore, distinctio doloribus et temporibus minus! Dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis corporis distinctio aliquid minima unde perferendis? Quibusdam laboriosam error totam et aspernatur amet voluptate recusandae nesciunt, fugiat, provident nobis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus obcaecati itaque quas sit. Cum nihil ad ipsa sapiente neque alias inventore perferendis eaque minus eveniet tempore eum, hic nisi?"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "content-justify",
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint est vel. Quis eligendi in enim sequi sint dolore est quos explicabo nemo labore, distinctio doloribus et temporibus minus! Dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis corporis distinctio aliquid minima unde perferendis? Quibusdam laboriosam error totam et aspernatur amet voluptate recusandae nesciunt, fugiat, provident nobis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus obcaecati itaque quas sit. Cum nihil ad ipsa sapiente neque alias inventore perferendis eaque minus eveniet tempore eum, hic nisi?"
            })
        ]
    });
};
/* harmony default export */ const Phase2headerContent = (Phase2HeaderContent);

;// CONCATENATED MODULE: ./components/ExecuteAndEvaluate/Phase3HeaderContent.jsx


const Phase3HeaderContent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "content-justify",
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint est vel. Quis eligendi in enim sequi sint dolore est quos explicabo nemo labore, distinctio doloribus et temporibus minus! Dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis corporis distinctio aliquid minima unde perferendis? Quibusdam laboriosam error totam et aspernatur amet voluptate recusandae nesciunt, fugiat, provident nobis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus obcaecati itaque quas sit. Cum nihil ad ipsa sapiente neque alias inventore perferendis eaque minus eveniet tempore eum, hic nisi?"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "content-justify",
                children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint est vel. Quis eligendi in enim sequi sint dolore est quos explicabo nemo labore, distinctio doloribus et temporibus minus! Dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, blanditiis corporis distinctio aliquid minima unde perferendis? Quibusdam laboriosam error totam et aspernatur amet voluptate recusandae nesciunt, fugiat, provident nobis libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus obcaecati itaque quas sit. Cum nihil ad ipsa sapiente neque alias inventore perferendis eaque minus eveniet tempore eum, hic nisi?"
            })
        ]
    });
};
/* harmony default export */ const ExecuteAndEvaluate_Phase3HeaderContent = (Phase3HeaderContent);

;// CONCATENATED MODULE: ./constants/phase-title-img.svg
/* harmony default export */ const phase_title_img = ({"src":"/_next/static/media/phase-title-img.32033cfc.svg","height":456,"width":571,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./constants/phase1images/buildthecase.svg
/* harmony default export */ const buildthecase = ({"src":"/_next/static/media/buildthecase.fee75d5b.svg","height":171,"width":168,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./constants/jsonContent/phase1content.js

const PHASE1_CONTENT = [
    {
        icon: buildthecase,
        title: "Create a theory of action",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et leo imperdiet sapien dictum facilisis. Sed maximus tincidunt metus, nec aliquet felis viverra a. Aenean vitae nisi vehicula, lobortis ligula vel, lacinia ipsum. Integer posuere iaculis mi, sed imperdiet velit consequat vitae. Pellentesque et.",
        toolsArr: [
            {
                key: "action-exercise",
                href: "www.google.com",
                title: "Social Capital Theory of Action Exercise"
            }
        ],
        stickyNotesArr: []
    },
    {
        icon: buildthecase,
        title: "Build The Case",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et leo imperdiet sapien dictum facilisis. Sed maximus tincidunt metus, nec aliquet felis viverra a. Aenean vitae nisi vehicula, lobortis ligula vel, lacinia ipsum. Integer posuere iaculis mi, sed imperdiet velit consequat vitae. Pellentesque et.",
        toolsArr: [
            {
                key: "talking-guide",
                href: "www.google.com",
                title: "A Guide For Talking About Social Capital"
            },
            {
                key: "training-materials",
                href: "www.google.com",
                title: "SoCap 101 Training Materials"
            },
            {
                key: "employer-capacity",
                href: "www.google.com",
                title: "Learning Memo: Building Employer Capacity to Facilitate Student Social Capital Development"
            }
        ],
        stickyNotesArr: [
            {
                key: "",
                title: "Engage parents and families as part of social capital building",
                location: "San Diego, California",
                content: "For the San Diego team, it was necessary and beneficial to introduce the concept and benefits of social capital to families. They started with parents participating in an existing leadership program. Family engagement was already a core tenet in their approach to delivering equitable, community-oriented programming, and they found significant interest among parents in learning more about social capital. Leveraging families as both partners in helping students better understand the power in their networks and as brokers for new relationships can add tremendous value and keep these conversations going after the school day is over. It also recognizes the assets that schools already have in their students and families. In other words, there’s value in starting with a community’s own networks before seeking out new connections.",
                href: "www.google.com"
            }
        ]
    },
    {
        icon: buildthecase,
        title: "Identify Your Assets",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et leo imperdiet sapien dictum facilisis. Sed maximus tincidunt metus, nec aliquet felis viverra a. Aenean vitae nisi vehicula, lobortis ligula vel, lacinia ipsum. Integer posuere iaculis mi, sed imperdiet velit consequat vitae. Pellentesque et.",
        toolsArr: [
            {
                key: "talking-guide",
                href: "www.google.com",
                title: "A Guide For Talking About Social Capital"
            },
            {
                key: "training-materials",
                href: "www.google.com",
                title: "SoCap 101 Training Materials"
            },
            {
                key: "employer-capacity",
                href: "www.google.com",
                title: "Learning Memo: Building Employer Capacity to Facilitate Student Social Capital Development"
            }
        ],
        stickyNotesArr: [
            {
                key: "",
                title: "Engage parents and families as part of social capital building",
                location: "San Diego, California",
                content: "For the San Diego team, it was necessary and beneficial to introduce the concept and benefits of social capital to families. They started with parents participating in an existing leadership program. Family engagement was already a core tenet in their approach to delivering equitable, community-oriented programming, and they found significant interest among parents in learning more about social capital. Leveraging families as both partners in helping students better understand the power in their networks and as brokers for new relationships can add tremendous value and keep these conversations going after the school day is over. It also recognizes the assets that schools already have in their students and families. In other words, there’s value in starting with a community’s own networks before seeking out new connections.",
                href: "www.google.com"
            },
            {
                key: "",
                title: "Engage parents and families as part of social capital building",
                location: "San Diego, California",
                content: "For the San Diego team, it was necessary and beneficial to introduce the concept and benefits of social capital to families. They started with parents participating in an existing leadership program. Family engagement was already a core tenet in their approach to delivering equitable, community-oriented programming, and they found significant interest among parents in learning more about social capital. Leveraging families as both partners in helping students better understand the power in their networks and as brokers for new relationships can add tremendous value and keep these conversations going after the school day is over. It also recognizes the assets that schools already have in their students and families. In other words, there’s value in starting with a community’s own networks before seeking out new connections.",
                href: "www.google.com"
            }
        ]
    },
    {
        icon: buildthecase,
        title: "Map Your Network",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et leo imperdiet sapien dictum facilisis. Sed maximus tincidunt metus, nec aliquet felis viverra a. Aenean vitae nisi vehicula, lobortis ligula vel, lacinia ipsum. Integer posuere iaculis mi, sed imperdiet velit consequat vitae. Pellentesque et.",
        toolsArr: [
            {
                key: "talking-guide",
                href: "www.google.com",
                title: "A Guide For Talking About Social Capital"
            },
            {
                key: "training-materials",
                href: "www.google.com",
                title: "SoCap 101 Training Materials"
            },
            {
                key: "employer-capacity",
                href: "www.google.com",
                title: "Learning Memo: Building Employer Capacity to Facilitate Student Social Capital Development"
            }
        ],
        stickyNotesArr: [
            {
                key: "",
                title: "Engage parents and families as part of social capital building",
                location: "San Diego, California",
                content: "For the San Diego team, it was necessary and beneficial to introduce the concept and benefits of social capital to families. They started with parents participating in an existing leadership program. Family engagement was already a core tenet in their approach to delivering equitable, community-oriented programming, and they found significant interest among parents in learning more about social capital. Leveraging families as both partners in helping students better understand the power in their networks and as brokers for new relationships can add tremendous value and keep these conversations going after the school day is over. It also recognizes the assets that schools already have in their students and families. In other words, there’s value in starting with a community’s own networks before seeking out new connections.",
                href: "www.google.com"
            }
        ]
    }
];

;// CONCATENATED MODULE: ./constants/jsonContent/phaseInfo.js







const PHASE_INFO = {
    phaseOne: {
        headerSvg: phase_pin,
        phaseNum: 1,
        phaseTitle: "Lay The Foundation",
        phaseHeaderContent: /*#__PURE__*/ jsx_runtime.jsx(Phase1headerContent, {}),
        phaseHeaderImg: phase_title_img,
        phaseContent: PHASE1_CONTENT,
        nextPage: "Phase 2: Design The Supports",
        nextPageAnchorLink: "/designthesupports"
    },
    phaseTwo: {
        headerSvg: phase_pin,
        phaseNum: 2,
        phaseTitle: "Design The Supports",
        phaseHeaderContent: /*#__PURE__*/ jsx_runtime.jsx(Phase2headerContent, {}),
        phaseHeaderImg: phase_title_img,
        phaseContent: PHASE1_CONTENT,
        nextPage: "Phase 3: Execute and Evaluate",
        nextPageAnchorLink: "/executeandevaluate"
    },
    phaseThree: {
        headerSvg: phase_pin,
        phaseNum: 3,
        phaseTitle: "Execute and Evaluate",
        phaseHeaderContent: /*#__PURE__*/ jsx_runtime.jsx(ExecuteAndEvaluate_Phase3HeaderContent, {}),
        phaseHeaderImg: phase_title_img,
        phaseContent: PHASE1_CONTENT,
        nextPage: "Cultivating Career Connections: Additional Resources",
        nextPageAnchorLink: "/resources"
    }
};


/***/ })

};
;