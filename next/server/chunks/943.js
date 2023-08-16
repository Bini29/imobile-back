exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 58546:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 67848:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 63481, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14306));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 33518));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 33586));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 75033))

/***/ }),

/***/ 26833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomLink_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24962);
/* harmony import */ var _CustomLink_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CustomLink_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);





const CustomLink = ({ children, to, futer, ...props })=>{
    let resolved = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    let match = Boolean(resolved === to);
    let active = futer ? (_CustomLink_module_css__WEBPACK_IMPORTED_MODULE_4___default().factive) : (_CustomLink_module_css__WEBPACK_IMPORTED_MODULE_4___default().active);
    console.log(active);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            (_CustomLink_module_css__WEBPACK_IMPORTED_MODULE_4___default().linkwrapper),
            match && active
        ].join(" "),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: to,
            ...props,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLink);


/***/ }),

/***/ 75033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98154);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95785);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_watsapp_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61840);
/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76806);
/* harmony import */ var _CustomLink_CustomLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26833);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27201);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const Footer = ()=>{
    const { store } = (0,_store__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .oR)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default().nav),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default().logo),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: _assets_logo_svg__WEBPACK_IMPORTED_MODULE_2__["default"].src,
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default().logoDesk),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default().adress),
                                        children: [
                                            'ТЦ "Мегамолл" ',
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "1-й этаж Магазин ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: '"Imobile"'
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default().adressBot),
                                        children: [
                                            "ПН-ВСК с ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                                children: " 10-00 до 20-00"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default().navf),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLink_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                to: "/",
                                futer: true,
                                children: "Каталог"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLink_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                to: "/about",
                                futer: true,
                                children: "О компании"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLink_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                to: "/garanty",
                                futer: true,
                                children: "Гарантия и сервис"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CustomLink_CustomLink__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                to: "/contacts",
                                futer: true,
                                children: "Контакты"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default().about),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: _assets_watsapp_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.src,
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                onClick: ()=>store.show(),
                                className: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_8___default().aboutBtn),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: _assets_phone_svg__WEBPACK_IMPORTED_MODULE_4__["default"].src,
                                        alt: ""
                                    }),
                                    " Заказать звонок"
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 14306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Header_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./assets/logo.svg
var logo = __webpack_require__(98154);
;// CONCATENATED MODULE: ./assets/logomobs.svg
/* harmony default export */ const logomobs = ({"src":"/_next/static/media/logomobs.560873f3.svg","height":38,"width":38,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./components/Header/Header.module.css
var Header_module = __webpack_require__(82111);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./assets/watsapp.png
var watsapp = __webpack_require__(61840);
// EXTERNAL MODULE: ./assets/phone.svg
var phone = __webpack_require__(76806);
// EXTERNAL MODULE: ./components/CustomLink/CustomLink.jsx
var CustomLink = __webpack_require__(26833);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/react-device-detect/dist/lib.js
var lib = __webpack_require__(21330);
// EXTERNAL MODULE: ./store/index.js + 1 modules
var store_0 = __webpack_require__(27201);
// EXTERNAL MODULE: ./node_modules/mobx-react-lite/dist/index.js
var dist = __webpack_require__(6121);
// EXTERNAL MODULE: ./node_modules/react-burger-menu/lib/BurgerMenu.js
var BurgerMenu = __webpack_require__(79924);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./components/Header/Header.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
















const Header = (0,dist.observer)(()=>{
    let navigate = (0,navigation.usePathname)();
    const [open, setOpen] = (0,react_.useState)(false);
    const { store } = (0,store_0/* useStore */.oR)();
    const isMenuOpen = function(state) {
        setOpen(state.isOpen);
        return state.isOpen;
    };
    const scroll = ()=>{
        const section = document.querySelector("#contact-us");
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        } else {
        // navigate("/categories");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (Header_module_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_module_default()).navwrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Header_module_default()).mobLogo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: logomobs.src,
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "tel:+79199731997",
                                        children: "+7 (919) 973-19-97"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: "Чебоксары, улица Калинина, 105А"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Header_module_default()).logo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: logo["default"].src,
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Header_module_default()).logoDesk,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (Header_module_default()).adress,
                                        children: [
                                            'ТЦ "Мегамолл" ',
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                            "1-й этаж Магазин ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: '"Imobile"'
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: (Header_module_default()).adressBot,
                                        children: [
                                            "ПН-ВСК с ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                children: " 10-00 до 20-00"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    lib/* isMobile */.tq ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BurgerMenu.slide, {
                        onStateChange: isMenuOpen,
                        isOpen: open,
                        right: true,
                        htmlClassName: "my-class",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                className: (Header_module_default()).nav,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        onClick: ()=>{
                                            // setOpen(false);
                                            scroll();
                                        },
                                        to: "/",
                                        children: "Каталог"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        onClick: ()=>setOpen(false),
                                        to: "/about",
                                        children: "О компании"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        onClick: ()=>setOpen(false),
                                        to: "/garanty",
                                        children: "Гарантия и сервис"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        onClick: ()=>setOpen(false),
                                        to: "/contacts",
                                        children: "Контакты"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Header_module_default()).logoDesk,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: (Header_module_default()).adress,
                                                children: [
                                                    'ТЦ "Мегамолл" ',
                                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                    "1-й этаж Магазин ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                        children: '"Imobile"'
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: (Header_module_default()).adressBot,
                                                children: [
                                                    "ПН-ВСК с ",
                                                    /*#__PURE__*/ jsx_runtime_.jsx("b", {
                                                        children: " 10-00 до 20-00"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: (Header_module_default()).about,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: watsapp/* default */.Z.src,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                onClick: ()=>store.show(),
                                                className: (Header_module_default()).aboutBtn,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: phone["default"].src,
                                                        alt: ""
                                                    }),
                                                    " Заказать звонок"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                className: (Header_module_default()).nav,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        to: "/",
                                        onClick: ()=>scroll(),
                                        children: "Каталог"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        to: "/about",
                                        children: "О компании"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        to: "/garanty",
                                        children: "Гарантия и сервис"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomLink/* default */.Z, {
                                        to: "/contacts",
                                        children: "Контакты"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: (Header_module_default()).about,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: watsapp/* default */.Z.src,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                        onClick: ()=>store.show(),
                                        className: (Header_module_default()).aboutBtn,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: phone["default"].src,
                                                alt: ""
                                            }),
                                            " Заказать звонок"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
});
/* harmony default export */ const Header_Header = (Header);


/***/ }),

/***/ 33586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85931);
/* harmony import */ var _ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4374);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2318);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27201);
/* harmony import */ var _assets_phone_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76806);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18745);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const ModalAbout = (0,mobx_react__WEBPACK_IMPORTED_MODULE_4__/* .observer */ .Pi)(()=>{
    const { store } = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .oR)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: [
            (_ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal),
            store.open && (_ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5___default().active)
        ].join(" "),
        onClick: ()=>store.show(),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5___default().modal__content),
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5___default().closeBtn),
                    onClick: ()=>store.show(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CloseOutlined, {
                        style: {
                            fontSize: 24
                        }
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                    className: (_ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: " Оставьте ваши данные"
                        }),
                        " и наши ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        " специалисты вам перезвонят"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5___default().form),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_7__/* .Input */ .II, {
                            size: "large",
                            type: "test",
                            placeholder: "Ваше имя"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_7__/* .Input */ .II, {
                            size: "large",
                            placeholder: "Ваш телефон"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_7__/* .Input */ .II, {
                            size: "large",
                            type: "email",
                            placeholder: "Ваш Email"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: (_ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5___default().aboutBtn),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: _assets_phone_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
                                    alt: ""
                                }),
                                " Заказать звонок"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "#",
                            className: (_ModalAbout_module_css__WEBPACK_IMPORTED_MODULE_5___default().pers),
                            children: [
                                "Оставляя данные вы соглашаетесь с обработкой ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                " персональных данных"
                            ]
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalAbout);


/***/ }),

/***/ 27201:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  oR: () => (/* binding */ useStore)
});

// UNUSED EXPORTS: StoreContext, default

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/mobx/dist/mobx.cjs.production.min.js
var mobx_cjs_production_min = __webpack_require__(66171);
;// CONCATENATED MODULE: ./store/PhoneStore/PhoneStore.js

const PhoneStore = ()=>{
    return (0,mobx_cjs_production_min.makeAutoObservable)({
        open: false,
        list: [],
        categories: [],
        models: [],
        loader: true,
        show () {
            this.open = !this.open;
        },
        setCategories: async function() {
            this.loader = true;
            const categoriesP = await fetch("/api/items/category").then(async (res)=>{
                this.loader = false;
                return await res.json();
            });
            this.categories = categoriesP;
        },
        setModels: async function() {
            const modelsP = await fetch("/api/items/model").then(async (res)=>{
                return await res.json();
            });
            this.models = modelsP;
        }
    });
};
/* harmony default export */ const PhoneStore_PhoneStore = (PhoneStore);

;// CONCATENATED MODULE: ./store/index.js


const store = {
    store: PhoneStore_PhoneStore()
};
const StoreContext = /*#__PURE__*/ (0,react_.createContext)(store);
const useStore = ()=>{
    return (0,react_.useContext)(StoreContext);
};
/* harmony default export */ const store_0 = ((/* unused pure expression or super */ null && (store)));


/***/ }),

/***/ 24962:
/***/ ((module) => {

// Exports
module.exports = {
	"linkwrapper": "CustomLink_linkwrapper__9r5EN",
	"active": "CustomLink_active__O46Vo",
	"factive": "CustomLink_factive__hVZdj"
};


/***/ }),

/***/ 95785:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Footer_header__YhDIT",
	"nav": "Footer_nav__KuoC6",
	"logoDesk": "Footer_logoDesk__mgGBm",
	"navf": "Footer_navf__aliVB",
	"adress": "Footer_adress__BvZLG",
	"adressBot": "Footer_adressBot__2D8G_",
	"logo": "Footer_logo__Gk619",
	"about": "Footer_about__pjBWp",
	"aboutBtn": "Footer_aboutBtn__XunCG"
};


/***/ }),

/***/ 82111:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__pUpk9",
	"nav": "Header_nav__uJ8Zp",
	"navwrapper": "Header_navwrapper__OhvgW",
	"logoDesk": "Header_logoDesk__s5UUl",
	"adress": "Header_adress__2tgCq",
	"adressBot": "Header_adressBot__FW0vq",
	"logo": "Header_logo__vPR6R",
	"about": "Header_about__7WOgw",
	"aboutBtn": "Header_aboutBtn__blhel",
	"mobLogo": "Header_mobLogo__MpXs_",
	"moblilink": "Header_moblilink__jh4j3"
};


/***/ }),

/***/ 85931:
/***/ ((module) => {

// Exports
module.exports = {
	"modal": "ModalAbout_modal__eqJWE",
	"active": "ModalAbout_active__4SXoU",
	"modal__content": "ModalAbout_modal__content__vpSDe",
	"content": "ModalAbout_content__4sUx_",
	"closeBtn": "ModalAbout_closeBtn__a8lW3",
	"title": "ModalAbout_title__dti5_",
	"form": "ModalAbout_form__oeE2J",
	"aboutBtn": "ModalAbout_aboutBtn__spTRW",
	"pers": "ModalAbout_pers___HPC2",
	"imgwrapper": "ModalAbout_imgwrapper__bEqHS",
	"imgwrapperbottom": "ModalAbout_imgwrapperbottom__9IR_E"
};


/***/ }),

/***/ 27504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Montserrat","arguments":[{"variable":"--font-inter","weight":"400","subsets":["cyrillic"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Montserrat_arguments_variable_font_inter_weight_400_subsets_cyrillic_variableName_inter_ = __webpack_require__(85676);
var target_path_app_layout_tsx_import_Montserrat_arguments_variable_font_inter_weight_400_subsets_cyrillic_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Montserrat_arguments_variable_font_inter_weight_400_subsets_cyrillic_variableName_inter_);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(46495);
// EXTERNAL MODULE: ./node_modules/react-hot-toast/dist/index.mjs
var dist = __webpack_require__(69035);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./components/Header/Header.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Vadimus\Desktop\imobile-back\components\Header\Header.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
;// CONCATENATED MODULE: ./components/ModalAbout/ModalAbout.jsx

const ModalAbout_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Vadimus\Desktop\imobile-back\components\ModalAbout\ModalAbout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ModalAbout_esModule, $$typeof: ModalAbout_$$typeof } = ModalAbout_proxy;
const ModalAbout_default_ = ModalAbout_proxy.default;


/* harmony default export */ const ModalAbout = (ModalAbout_default_);
;// CONCATENATED MODULE: ./components/Footer/Footer.jsx

const Footer_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Vadimus\Desktop\imobile-back\components\Footer\Footer.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Footer_esModule, $$typeof: Footer_$$typeof } = Footer_proxy;
const Footer_default_ = Footer_proxy.default;


/* harmony default export */ const Footer = (Footer_default_);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(91661);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./app/layout.tsx
// These styles apply to every route in the application









const title = "iMobile";
const description = "";
const metadata = {
    title,
    description
};
async function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                src: "//api.b2pos.ru/shop/v2/connect.js"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (target_path_app_layout_tsx_import_Montserrat_arguments_variable_font_inter_weight_400_subsets_cyrillic_variableName_inter_default()).variable,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* Toaster */.x7, {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_shared_subset.Suspense, {
                        fallback: "Loading...",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                            children,
                            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ModalAbout, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 98154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.171a186b.svg","height":46,"width":166,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 76806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/phone.c29198aa.svg","height":20,"width":19,"blurWidth":0,"blurHeight":0});

/***/ }),

/***/ 61840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/watsapp.4efbcf67.png","height":48,"width":48,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAhFBMVEUyqCclphMkphOgzJ6ey5xgs1tgs1pdslhcsldXsFJWsFDN5MzL48nH4cbH4MW32LW217Sv1K2s0qqr0qmq0aip0KekzqGhzZ6gzZ6fzJyezJucy5mOxIuAvn1/vnx6vHd5vHV5u3UwqCUwqCQwpyQEpAAAowAAogAAnwAAngAAnQAAhwBeKYwqAAAAC3RSTlOGhob+/v7+/v7+/v/9pG8AAABHSURBVHjaBUAFEoAgEFzsbsUOhCP8//8cMEnWkfDw6njsIi1ASbGfVUgwSz18R+9g+LW182ThgvJp8lSBbp+vGUmAnLVKsh/qdwaGBRFsxAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 83174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 95804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/png","width":1505,"height":904}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "opengraph-image.png")

    return [{
      ...imageData,
      url: imageUrl + "?d90dabbe6f70cc11",
    }]
  });

/***/ }),

/***/ 46495:
/***/ (() => {



/***/ })

};
;