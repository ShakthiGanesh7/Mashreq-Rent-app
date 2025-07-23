(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/SideNavigation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SideNavigation)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Home.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AccountBalance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const NavContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        width: '100%',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: '8px'
        }
    }));
_c = NavContainer;
const NavIconButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme, isExpanded })=>({
        width: isExpanded ? '200px' : '48px',
        minWidth: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: isExpanded ? 'flex-start' : 'center',
        padding: '0 10px',
        color: '#FFFFFF',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
        position: 'relative',
        '& .MuiSvgIcon-root': {
            width: '24px',
            height: '24px',
            flexShrink: 0
        },
        '&:hover': {
            backgroundColor: 'rgba(58, 41, 41, 0.39)'
        },
        '&.active': {
            backgroundColor: '#25170aff',
            '&::before': {
                content: '""',
                position: 'absolute',
                left: '-8px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '24px',
                backgroundColor: '#FFFFFF',
                borderRadius: '0 4px 4px 0'
            }
        }
    }));
_c1 = NavIconButton;
const StyledLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
    textDecoration: 'none',
    color: 'inherit',
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
});
_c2 = StyledLink;
const NavText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"])(({ show })=>({
        marginLeft: '12px',
        fontSize: '14px',
        fontWeight: 500,
        opacity: show ? 1 : 0,
        transition: 'opacity 0.3s ease',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    }));
_c3 = NavText;
const ExpandButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])(({ theme })=>({
        position: 'absolute',
        bottom: '16px',
        right: '16px',
        color: '#fff',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }));
_c4 = ExpandButton;
function SideNavigation({ isExpanded }) {
    const navItems = [
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Home$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: '#FFFFFF !important'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/SideNavigation.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            text: 'Dashboard',
            href: '/dashboard',
            active: true
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountBalance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: '#FFFFFF !important'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/SideNavigation.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            text: 'Loans',
            href: '/loans'
        },
        {
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    color: '#FFFFFF !important'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/SideNavigation.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, this),
            text: 'Reports',
            href: '/reports'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavContainer, {
        children: [
            navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledLink, {
                    href: item.href,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavIconButton, {
                        isExpanded: isExpanded,
                        className: item.active ? 'active' : '',
                        children: [
                            item.icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavText, {
                                show: isExpanded,
                                children: item.text
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/SideNavigation.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/SideNavigation.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, item.href, false, {
                    fileName: "[project]/src/app/components/SideNavigation.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandButton, {}, void 0, false, {
                fileName: "[project]/src/app/components/SideNavigation.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/SideNavigation.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c5 = SideNavigation;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "NavContainer");
__turbopack_context__.k.register(_c1, "NavIconButton");
__turbopack_context__.k.register(_c2, "StyledLink");
__turbopack_context__.k.register(_c3, "NavText");
__turbopack_context__.k.register(_c4, "ExpandButton");
__turbopack_context__.k.register(_c5, "SideNavigation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Menu/Menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/AccountCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const HeaderContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '84px',
        background: 'linear-gradient(90deg, #FF5E00 0%, #FB9544 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        zIndex: 100,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        [theme.breakpoints.down('sm')]: {
            padding: '0 16px',
            height: '64px'
        }
    }));
_c = HeaderContainer;
const LogoContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '300px',
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
            width: '150px'
        }
    }));
_c1 = LogoContainer;
const ActionContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        [theme.breakpoints.down('sm')]: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#FFFFFF',
            padding: '8px 16px',
            boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)',
            justifyContent: 'space-around',
            zIndex: 1000
        }
    }));
_c2 = ActionContainer;
const ActionButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"])(({ theme })=>({
        backgroundColor: '#FFFFFF',
        color: '#FF5E00',
        padding: '8px 24px',
        height: '40px',
        borderRadius: '8px',
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 600,
        letterSpacing: '0.4px',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#F8F8F8',
            boxShadow: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '6px 16px',
            height: '36px',
            fontSize: '13px'
        }
    }));
_c3 = ActionButton;
const ProfileIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])(({ theme })=>({
        color: '#FFFFFF',
        padding: '8px',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)'
        },
        '& .MuiSvgIcon-root': {
            fontSize: '36px',
            [theme.breakpoints.down('sm')]: {
                fontSize: '32px',
                color: '#FF5E00'
            }
        },
        [theme.breakpoints.down('sm')]: {
            color: '#FF5E00',
            '&:hover': {
                backgroundColor: 'rgba(255, 94, 0, 0.04)'
            }
        }
    }));
_c4 = ProfileIcon;
const MobileNavItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: '#FF5E00',
            '& .MuiSvgIcon-root': {
                fontSize: '24px'
            }
        }
    }));
_c5 = MobileNavItem;
const NavText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"])({
    fontSize: '12px',
    fontWeight: 500
});
_c6 = NavText;
const UserMenu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Menu$2f$Menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"])({
    '& .MuiPaper-root': {
        marginTop: '8px',
        minWidth: '150px',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
    },
    '& .MuiMenuItem-root': {
        padding: '12px 24px',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: '#F8F8F8'
        }
    }
});
_c7 = UserMenu;
function Header() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isLoginPage = pathname === '/login';
    const showNewLoanButton = !isLoginPage && pathname !== '/loan-application';
    const [anchorEl, setAnchorEl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleNewLoan = ()=>{
        router.push('/loan-application');
    };
    const handleProfileClick = (event)=>{
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = ()=>{
        setAnchorEl(null);
    };
    const handleLogout = ()=>{
        // Clear any stored authentication data
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        // Close the menu
        handleMenuClose();
        // Redirect to login page
        router.push('/login');
        router.refresh(); // Force a refresh to clear any cached data
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoContainer, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/mashreq-logo.png",
                    alt: "Mashreq Logo",
                    fill: true,
                    style: {
                        objectFit: 'contain',
                        objectPosition: 'left center',
                        filter: 'brightness(0) invert(1)'
                    },
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Header.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/Header.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            !isLoginPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionContainer, {
                children: [
                    showNewLoanButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButton, {
                                variant: "contained",
                                onClick: handleNewLoan,
                                disableElevation: true,
                                sx: {
                                    display: {
                                        xs: 'none',
                                        sm: 'block'
                                    }
                                },
                                children: "New Loan Application"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileNavItem, {
                                onClick: handleNewLoan,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            color: '#FF5E00'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/Header.tsx",
                                                lineNumber: 196,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/Header.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavText, {
                                        children: "New Loan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/Header.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProfileIcon, {
                        onClick: handleProfileClick,
                        sx: {
                            display: {
                                xs: 'none',
                                sm: 'flex'
                            }
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileNavItem, {
                        onClick: handleProfileClick,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$AccountCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavText, {
                                children: "Profile"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Header.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 204,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserMenu, {
                        anchorEl: anchorEl,
                        open: Boolean(anchorEl),
                        onClose: handleMenuClose,
                        anchorOrigin: {
                            vertical: 'bottom',
                            horizontal: 'right'
                        },
                        transformOrigin: {
                            vertical: 'top',
                            horizontal: 'right'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                            onClick: handleLogout,
                            sx: {
                                color: '#FF5E00',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 94, 0, 0.04)'
                                }
                            },
                            children: "Logout"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/Header.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/Header.tsx",
                        lineNumber: 208,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/Header.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/Header.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s(Header, "vyDrG2C1RdgVJ9nbYGN8wjLxcV4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c8 = Header;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "HeaderContainer");
__turbopack_context__.k.register(_c1, "LogoContainer");
__turbopack_context__.k.register(_c2, "ActionContainer");
__turbopack_context__.k.register(_c3, "ActionButton");
__turbopack_context__.k.register(_c4, "ProfileIcon");
__turbopack_context__.k.register(_c5, "MobileNavItem");
__turbopack_context__.k.register(_c6, "NavText");
__turbopack_context__.k.register(_c7, "UserMenu");
__turbopack_context__.k.register(_c8, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/loan-application/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LoanApplication)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [app-client] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/styled.js [app-client] (ecmascript) <locals> <export default as styled>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [app-client] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/MenuItem/MenuItem.js [app-client] (ecmascript) <export default as MenuItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Select/Select.js [app-client] (ecmascript) <export default as Select>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/FormControl/FormControl.js [app-client] (ecmascript) <export default as FormControl>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputLabel/InputLabel.js [app-client] (ecmascript) <export default as InputLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Link/Link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Dialog/Dialog.js [app-client] (ecmascript) <export default as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContent/DialogContent.js [app-client] (ecmascript) <export default as DialogContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContentText$2f$DialogContentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContentText$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/DialogContentText/DialogContentText.js [app-client] (ecmascript) <export default as DialogContentText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CheckCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CloudUpload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SideNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SideNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/ChevronRight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
// Styled Components
const PageContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])({
    minHeight: '100vh',
    background: '#F5F5F5',
    paddingTop: '72px',
    width: '100%',
    overflow: 'hidden'
});
_c = PageContainer;
const ContentWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        display: 'flex',
        padding: '24px',
        maxWidth: '1400px',
        margin: '0 auto',
        gap: '24px',
        [theme.breakpoints.down('md')]: {
            padding: '16px 2px',
            flexDirection: 'column',
            gap: '16px',
            margin: 0,
            width: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '12px 2px',
            gap: '12px'
        }
    }));
_c1 = ContentWrapper;
const SideNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme, isExpanded })=>({
        position: 'fixed',
        left: 0,
        top: '100px',
        bottom: 0,
        width: isExpanded ? '240px' : '80px',
        background: '#ff6600ff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '24px 8px',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        overflow: 'hidden',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '0px',
        [theme.breakpoints.down('md')]: {
            position: 'fixed',
            top: 'auto',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: isExpanded ? '240px' : '60px',
            borderRadius: '20px 20px 0 0',
            padding: '8px',
            flexDirection: 'row',
            justifyContent: 'center'
        }
    }));
_c2 = SideNav;
const StepIndicatorContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        width: '280px',
        padding: '32px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        marginTop: '12px',
        borderRadius: '8px',
        height: 'fit-content',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            marginTop: 0,
            padding: '16px',
            flexDirection: 'row',
            overflowX: 'auto',
            gap: '20px',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        [theme.breakpoints.down('sm')]: {
            padding: '12px',
            gap: '16px'
        }
    }));
_c3 = StepIndicatorContainer;
const StepRow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            gap: '8px',
            minWidth: '80px',
            alignItems: 'center',
            textAlign: 'center'
        }
    }));
_c4 = StepRow;
const StepIndicator = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ active, completed, islaststep })=>({
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: completed ? '#FF5E00' : active ? '#FF5E00' : '#E0E0E0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: completed || active ? '#FFFFFF' : '#000000',
        fontWeight: 600,
        position: 'relative',
        '&::after': {
            content: islaststep ? 'none' : '""',
            position: 'absolute',
            left: '50%',
            bottom: '-28px',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '28px',
            background: completed ? '#FF5E00' : '#1a1919ff',
            '@media (max-width: 900px)': {
                display: 'none'
            }
        }
    }));
_c5 = StepIndicator;
const StepLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"])(({ theme, active })=>({
        fontSize: '20px',
        fontWeight: active ? 600 : 500,
        color: '#000000',
        [theme.breakpoints.down('md')]: {
            fontSize: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
        }
    }));
_c6 = StepLabel;
const UploadButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        backgroundColor: '#FFFFFF',
        color: '#FF5E00',
        padding: '20px',
        borderRadius: '8px',
        border: '2px dashed #FF5E00',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: 500,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        '&:hover': {
            backgroundColor: 'rgba(255, 94, 0, 0.04)',
            border: '2px dashed #E65500'
        }
    }));
_c7 = UploadButton;
const MainContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme, sidenavwidth })=>({
        marginLeft: sidenavwidth,
        width: '100%',
        transition: 'margin-left 0.3s ease',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginBottom: '80px',
            width: '100%',
            maxWidth: '100%',
            padding: 0
        }
    }));
_c8 = MainContent;
const FormContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        background: '#FFFFFF',
        borderRadius: '8px',
        padding: '32px',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        [theme.breakpoints.down('md')]: {
            padding: '20px 12px',
            margin: '0 2px',
            borderRadius: '4px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '16px 8px',
            margin: '0 2px'
        }
    }));
_c9 = FormContainer;
const FormTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"])(({ theme })=>({
        fontSize: '24px',
        fontWeight: 600,
        color: '#000000',
        marginBottom: '32px',
        position: 'relative',
        paddingBottom: '8px',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60px',
            height: '4px',
            background: '#FF5E00',
            borderRadius: '2px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            marginBottom: '24px'
        }
    }));
_c10 = FormTitle;
const InputGrid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            gap: '16px'
        }
    }));
_c11 = InputGrid;
const CustomTextField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"])(({ theme })=>({
        '& .MuiOutlinedInput-root': {
            height: '56px',
            '&.Mui-focused fieldset': {
                borderColor: '#FF5E00'
            }
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: '#FF5E00'
        },
        [theme.breakpoints.down('sm')]: {
            '& .MuiOutlinedInput-root': {
                height: '48px'
            },
            '& .MuiInputLabel-root': {
                fontSize: '14px'
            },
            '& .MuiOutlinedInput-input': {
                fontSize: '14px',
                padding: '12px'
            }
        }
    }));
_c12 = CustomTextField;
const CustomSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Select$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"])(({ theme })=>({
        height: '56px',
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#FF5E00'
        },
        [theme.breakpoints.down('sm')]: {
            height: '48px',
            '& .MuiSelect-select': {
                fontSize: '14px',
                padding: '12px'
            }
        }
    }));
_c13 = CustomSelect;
const CustomFormControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$FormControl$2f$FormControl$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FormControl$3e$__["FormControl"])({
    width: '100%',
    '& .MuiInputLabel-root': {
        '&.Mui-focused': {
            color: '#FF5E00'
        }
    }
});
_c14 = CustomFormControl;
const ExpandButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"])(({ theme })=>({
        position: 'absolute',
        right: '-10px',
        top: '24px',
        background: '#FFFFFF',
        width: '40px',
        height: '42px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        '&:hover': {
            background: '#FFFFFF'
        },
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }));
_c15 = ExpandButton;
const ActionButtons = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$styled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__$3c$export__default__as__styled$3e$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"])(({ theme })=>({
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '16px',
        marginTop: '32px',
        [theme.breakpoints.down('md')]: {
            marginTop: '24px'
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            gap: '12px',
            '& .MuiButton-root': {
                width: '100%',
                height: '48px',
                fontSize: '16px',
                padding: '8px 16px'
            }
        }
    }));
_c16 = ActionButtons;
const updateDashboardCounts = ()=>{
    try {
        // Get existing counts or initialize
        const counts = JSON.parse(localStorage.getItem('dashboardCounts') || '{"all": 0, "inProgress": 0}');
        // Increment counts
        counts.all += 1;
        counts.inProgress += 1;
        // Save back to localStorage
        localStorage.setItem('dashboardCounts', JSON.stringify(counts));
    } catch (error) {
        console.error('Error updating dashboard counts:', error);
    }
};
function LoanApplication() {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loanType, setLoanType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [exceptionType, setExceptionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showSuccess, setShowSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Add new state variables for form fields
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [installments, setInstallments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [contractAmount, setContractAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [calculationResults, setCalculationResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        monthlyEmi: null,
        dsr: null
    });
    const [showResults, setShowResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const totalSteps = 6;
    const steps = [
        {
            label: 'Loan Information',
            step: 1
        },
        {
            label: 'Loan Details',
            step: 2
        },
        {
            label: 'Terms & Conditions',
            step: 3
        },
        {
            label: 'Print Application Form',
            step: 4
        },
        {
            label: 'Submit the Details',
            step: 5
        }
    ];
    const loanTypes = [
        {
            value: 'rental',
            label: 'Rental Loan'
        },
        {
            value: 'personal',
            label: 'Personal Loan'
        },
        {
            value: 'home',
            label: 'Home Loan'
        }
    ];
    const exceptionTypes = [
        {
            value: 'ExceptionYes',
            label: 'Yes'
        },
        {
            value: 'ExceptionNo',
            label: 'No'
        }
    ];
    const validateFields = ()=>{
        if (currentStep === 1) {
            if (!loanType || !loanAmount || !installments || !contractAmount) {
                alert('Please fill in all fields before proceeding');
                return false;
            }
        }
        return true;
    };
    const handleNext = ()=>{
        if (!validateFields()) {
            return;
        }
        if (currentStep < totalSteps) {
            setCurrentStep((prev)=>prev + 1);
        }
    };
    const handleBack = ()=>{
        if (currentStep > 1) {
            setCurrentStep((prev)=>prev - 1);
        } else {
            router.back();
        }
    };
    const handleFileSelect = (event)=>{
        if (event.target.files && event.target.files[0]) {
            setSelectedFile(event.target.files[0]);
        }
    };
    const handleSubmit = async ()=>{
        if (currentStep === 5 && !selectedFile) {
            alert('Please attach the signed application form before submitting.');
            return;
        }
        setIsSubmitting(true);
        try {
            // Simulate file upload
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            // Update dashboard counts
            updateDashboardCounts();
            setShowSuccess(true);
            setTimeout(()=>{
                setShowSuccess(false);
                router.push('/dashboard');
            }, 3000);
        } catch (error) {
            alert('Error submitting application. Please try again.');
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleExpandClick = ()=>{
        setIsExpanded(!isExpanded);
    };
    const handleLoanTypeChange = (event)=>{
        setLoanType(event.target.value);
    };
    const handleExceptionTypeChange = (event)=>{
        setExceptionType(event.target.value);
    };
    const handleLoanAmountChange = (event)=>{
        setLoanAmount(event.target.value);
    };
    const handleInstallmentsChange = (event)=>{
        setInstallments(event.target.value);
    };
    const handleContractAmountChange = (event)=>{
        setContractAmount(event.target.value);
    };
    const calculateDSR = ()=>{
        if (!loanAmount || !installments || !contractAmount) {
            alert('Please fill in all required fields');
            return;
        }
        const loan = parseFloat(loanAmount);
        const inst = parseFloat(installments);
        const contract = parseFloat(contractAmount);
        if (loan <= 0 || inst <= 0 || contract <= 0) {
            alert('Please enter valid positive numbers');
            return;
        }
        const monthlyEmi = loan / inst;
        const dsr = monthlyEmi / contract * 100;
        setCalculationResults({
            monthlyEmi: parseFloat(monthlyEmi.toFixed(2)),
            dsr: parseFloat(dsr.toFixed(2))
        });
        setShowResults(true);
    };
    const handleTermsClick = (e)=>{
        e.preventDefault();
        router.push('/terms-and-conditions');
    };
    const generatePDF = ()=>{
        const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
        const currentDate = new Date().toLocaleDateString('en-AE');
        // Title
        doc.setFontSize(20);
        doc.setTextColor(255, 94, 0);
        doc.text('Mashreq Bank - Loan Application Form', 105, 20, {
            align: 'center'
        });
        // Loan Information
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text('Loan Information', 20, 40);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
            startY: 45,
            head: [
                [
                    'Field',
                    'Details'
                ]
            ],
            body: [
                [
                    'Loan Type',
                    loanTypes.find((t)=>t.value === loanType)?.label || ''
                ],
                [
                    'Loan Amount',
                    `AED ${parseFloat(loanAmount).toLocaleString('en-AE', {
                        minimumFractionDigits: 2
                    })}`
                ],
                [
                    'Number of Installments',
                    installments
                ],
                [
                    'Contract Amount',
                    `AED ${parseFloat(contractAmount).toLocaleString('en-AE', {
                        minimumFractionDigits: 2
                    })}`
                ]
            ],
            theme: 'striped',
            headStyles: {
                fillColor: [
                    255,
                    94,
                    0
                ]
            }
        });
        // Loan Details & Calculations
        doc.text('Loan Details & Calculations', 20, doc.lastAutoTable.finalY + 20);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
            startY: doc.lastAutoTable.finalY + 25,
            head: [
                [
                    'Field',
                    'Details'
                ]
            ],
            body: [
                [
                    'Exception for First/Second Installment',
                    exceptionTypes.find((t)=>t.value === exceptionType)?.label || ''
                ],
                [
                    'Monthly EMI',
                    `AED ${calculationResults.monthlyEmi?.toLocaleString('en-AE', {
                        minimumFractionDigits: 2
                    }) || ''}`
                ],
                [
                    'DSR',
                    `${calculationResults.dsr?.toLocaleString('en-AE', {
                        minimumFractionDigits: 2
                    }) || ''}%`
                ]
            ],
            theme: 'striped',
            headStyles: {
                fillColor: [
                    255,
                    94,
                    0
                ]
            }
        });
        // Terms and Conditions
        doc.text('Terms and Conditions', 20, doc.lastAutoTable.finalY + 20);
        doc.setFontSize(12);
        doc.text('I have carefully read and agreed to the terms and conditions.', 20, doc.lastAutoTable.finalY + 30);
        // Submission Details
        doc.setFontSize(14);
        doc.text('Submission Details', 20, doc.lastAutoTable.finalY + 50);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
            startY: doc.lastAutoTable.finalY + 55,
            head: [
                [
                    'Field',
                    'Details'
                ]
            ],
            body: [
                [
                    'Submitted By',
                    'Shakthi G'
                ],
                [
                    'Submitted On',
                    currentDate
                ]
            ],
            theme: 'striped',
            headStyles: {
                fillColor: [
                    255,
                    94,
                    0
                ]
            }
        });
        // Signature
        doc.text('Signature:', 20, doc.lastAutoTable.finalY + 30);
        doc.line(50, doc.lastAutoTable.finalY + 30, 150, doc.lastAutoTable.finalY + 30);
        doc.text('Date:', 20, doc.lastAutoTable.finalY + 40);
        doc.line(50, doc.lastAutoTable.finalY + 40, 150, doc.lastAutoTable.finalY + 40);
        // Save the PDF
        doc.save('Mashreq-Loan-Application.pdf');
        // Move to next step
        handleNext();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContainer, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/loan-application/page.tsx",
                lineNumber: 567,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SideNav, {
                isExpanded: isExpanded,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SideNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isExpanded: isExpanded
                    }, void 0, false, {
                        fileName: "[project]/src/app/loan-application/page.tsx",
                        lineNumber: 569,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExpandButton, {
                        onClick: handleExpandClick,
                        size: "small",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$ChevronRight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                transform: isExpanded ? 'rotate(180deg)' : 'none',
                                transition: 'transform 0.3s ease'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/loan-application/page.tsx",
                            lineNumber: 571,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/loan-application/page.tsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/loan-application/page.tsx",
                lineNumber: 568,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: showSuccess,
                "aria-describedby": "success-dialog-description",
                PaperProps: {
                    sx: {
                        borderRadius: '12px',
                        padding: '24px',
                        minWidth: {
                            xs: '300px',
                            sm: '400px'
                        }
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                    sx: {
                        textAlign: 'center',
                        padding: '24px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: {
                                    xs: 48,
                                    sm: 64
                                },
                                color: '#4CAF50',
                                marginBottom: '16px'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/loan-application/page.tsx",
                            lineNumber: 592,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContentText$2f$DialogContentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContentText$3e$__["DialogContentText"], {
                            id: "success-dialog-description",
                            sx: {
                                color: '#000',
                                fontSize: {
                                    xs: '16px',
                                    sm: '18px'
                                },
                                fontWeight: 500,
                                marginBottom: '8px'
                            },
                            children: "Application Submitted Successfully!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/loan-application/page.tsx",
                            lineNumber: 597,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/loan-application/page.tsx",
                    lineNumber: 591,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/loan-application/page.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainContent, {
                sidenavwidth: isExpanded ? '240px' : '80px',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIndicatorContainer, {
                            children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepRow, {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepIndicator, {
                                            active: step.step === currentStep,
                                            completed: step.step < currentStep,
                                            islaststep: index === steps.length - 1,
                                            children: step.step < currentStep ? '✓' : step.step
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 617,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StepLabel, {
                                            active: step.step === currentStep,
                                            children: step.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 624,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, step.step, true, {
                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                    lineNumber: 616,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/loan-application/page.tsx",
                            lineNumber: 614,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormContainer, {
                            children: [
                                currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormTitle, {
                                            children: "Loan Information"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 634,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGrid, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomFormControl, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__["InputLabel"], {
                                                            id: "loan-type-label",
                                                            children: "Loan Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                                            labelId: "loan-type-label",
                                                            label: "Loan Type",
                                                            value: loanType,
                                                            onChange: handleLoanTypeChange,
                                                            children: loanTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                    value: type.value,
                                                                    children: type.label
                                                                }, type.value, false, {
                                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                                    lineNumber: 645,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                                            lineNumber: 638,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 636,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTextField, {
                                                    label: "Loan Amount",
                                                    fullWidth: true,
                                                    variant: "outlined",
                                                    type: "number",
                                                    value: loanAmount,
                                                    onChange: handleLoanAmountChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTextField, {
                                                    label: "No of Installments",
                                                    fullWidth: true,
                                                    variant: "outlined",
                                                    type: "number",
                                                    value: installments,
                                                    onChange: handleInstallmentsChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 659,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomTextField, {
                                                    label: "Contract Amount",
                                                    fullWidth: true,
                                                    variant: "outlined",
                                                    type: "number",
                                                    value: contractAmount,
                                                    onChange: handleContractAmountChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 667,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 635,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormTitle, {
                                            children: "Loan Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 680,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InputGrid, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomFormControl, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputLabel$2f$InputLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__InputLabel$3e$__["InputLabel"], {
                                                            id: "Exception-type-label",
                                                            children: "Exception for First or Second Installment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                                            lineNumber: 683,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomSelect, {
                                                            labelId: "Exception-type-label",
                                                            label: "Exception Type",
                                                            value: exceptionType,
                                                            variant: "outlined",
                                                            onChange: handleExceptionTypeChange,
                                                            children: exceptionTypes.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$MenuItem$2f$MenuItem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuItem$3e$__["MenuItem"], {
                                                                    value: type.value,
                                                                    children: type.label
                                                                }, type.value, false, {
                                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                                    lineNumber: 692,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                                            lineNumber: 684,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        width: {
                                                            xs: '100%',
                                                            sm: 'auto'
                                                        }
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                        variant: "contained",
                                                        onClick: calculateDSR,
                                                        sx: {
                                                            bgcolor: '#FF5E00',
                                                            '&:hover': {
                                                                bgcolor: '#E65500'
                                                            },
                                                            textTransform: 'none',
                                                            px: {
                                                                xs: 3,
                                                                sm: 4
                                                            },
                                                            py: {
                                                                xs: 1,
                                                                sm: 1.5
                                                            },
                                                            width: {
                                                                xs: '100%',
                                                                sm: 'auto'
                                                            }
                                                        },
                                                        children: "Calculate DSR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/loan-application/page.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 698,
                                                    columnNumber: 19
                                                }, this),
                                                showResults && calculationResults.monthlyEmi !== null && calculationResults.dsr !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    sx: {
                                                        mt: 3,
                                                        p: 2,
                                                        bgcolor: '#f5f5f5',
                                                        borderRadius: 1,
                                                        width: '100%'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            variant: "h6",
                                                            sx: {
                                                                mb: 4,
                                                                fontWeight: 'Bold',
                                                                color: '#ff5e00'
                                                            },
                                                            children: "Calculation Results :"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                mb: 2,
                                                                fontWeight: 'Bold'
                                                            },
                                                            children: [
                                                                "Monthly EMI :  ",
                                                                calculationResults.monthlyEmi.toLocaleString('en-AE', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                            sx: {
                                                                mb: 2,
                                                                fontWeight: 'Bold'
                                                            },
                                                            children: [
                                                                "DSR : ",
                                                                calculationResults.dsr.toLocaleString('en-AE', {
                                                                    minimumFractionDigits: 2,
                                                                    maximumFractionDigits: 2
                                                                }),
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                                            lineNumber: 736,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 681,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormTitle, {
                                            children: "Terms and Conditions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 749,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                mb: 3
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "body1",
                                                    sx: {
                                                        mb: 2
                                                    },
                                                    children: "Please read and accept the terms and conditions to continue."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 751,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                    variant: "body1",
                                                    sx: {
                                                        mb: 4
                                                    },
                                                    children: [
                                                        "I have carefully read and agree to the",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                            href: "/terms-and-conditions",
                                                            onClick: handleTermsClick,
                                                            sx: {
                                                                color: '#1976d2',
                                                                textDecoration: 'underline',
                                                                cursor: 'pointer',
                                                                '&:hover': {
                                                                    color: '#1565c0'
                                                                }
                                                            },
                                                            children: "Terms and Conditions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    variant: "contained",
                                                    onClick: handleNext,
                                                    sx: {
                                                        bgcolor: '#FF5E00',
                                                        '&:hover': {
                                                            bgcolor: '#E65500'
                                                        },
                                                        textTransform: 'none',
                                                        padding: {
                                                            xs: '8px 16px',
                                                            sm: '12px 32px'
                                                        },
                                                        height: {
                                                            xs: '48px',
                                                            sm: 'auto'
                                                        },
                                                        fontSize: {
                                                            xs: '16px',
                                                            sm: 'inherit'
                                                        },
                                                        width: {
                                                            xs: '100%',
                                                            sm: 'auto'
                                                        }
                                                    },
                                                    children: "Accept and Continue"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 750,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true),
                                currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            textAlign: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "h6",
                                                sx: {
                                                    color: '#4CAF50',
                                                    mb: 2,
                                                    fontSize: {
                                                        xs: '18px',
                                                        sm: '20px'
                                                    }
                                                },
                                                children: "Application Ready for Submission, Print Application and Submit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/loan-application/page.tsx",
                                                lineNumber: 792,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                variant: "contained",
                                                onClick: generatePDF,
                                                sx: {
                                                    bgcolor: '#FF5E00',
                                                    '&:hover': {
                                                        bgcolor: '#E65500'
                                                    },
                                                    textTransform: 'none',
                                                    mt: 2,
                                                    width: {
                                                        xs: '100%',
                                                        sm: 'auto'
                                                    }
                                                },
                                                children: "Print Application"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/loan-application/page.tsx",
                                                lineNumber: 799,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/loan-application/page.tsx",
                                        lineNumber: 791,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false),
                                currentStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "h4",
                                                sx: {
                                                    fontWeight: 700,
                                                    marginBottom: '32px',
                                                    color: '#000',
                                                    textAlign: 'center',
                                                    fontSize: {
                                                        xs: '24px',
                                                        sm: '32px'
                                                    }
                                                },
                                                children: "Submit Application"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/loan-application/page.tsx",
                                                lineNumber: 818,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                sx: {
                                                    color: '#666',
                                                    marginBottom: '32px',
                                                    textAlign: 'center',
                                                    fontSize: {
                                                        xs: '14px',
                                                        sm: '16px'
                                                    }
                                                },
                                                children: "Please attach your signed application form to complete the submission process."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/loan-application/page.tsx",
                                                lineNumber: 828,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    marginBottom: '32px',
                                                    padding: {
                                                        xs: '16px',
                                                        sm: '24px'
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: ".pdf",
                                                        onChange: handleFileSelect,
                                                        style: {
                                                            display: 'none'
                                                        },
                                                        id: "application-file"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/loan-application/page.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "application-file",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadButton, {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                                sx: {
                                                                    cursor: 'pointer',
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    alignItems: 'center',
                                                                    gap: '16px',
                                                                    padding: {
                                                                        xs: '24px',
                                                                        sm: '32px'
                                                                    },
                                                                    border: '2px dashed #FF5E00',
                                                                    borderRadius: '12px',
                                                                    transition: 'all 0.3s ease',
                                                                    '&:hover': {
                                                                        backgroundColor: 'rgba(255, 94, 0, 0.04)',
                                                                        border: '2px dashed #E65500'
                                                                    }
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CloudUpload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        sx: {
                                                                            fontSize: {
                                                                                xs: 48,
                                                                                sm: 64
                                                                            },
                                                                            color: '#FF5E00'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/loan-application/page.tsx",
                                                                        lineNumber: 865,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    selectedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        sx: {
                                                                            color: '#FF5E00',
                                                                            fontSize: {
                                                                                xs: '14px',
                                                                                sm: '16px'
                                                                            },
                                                                            fontWeight: 500
                                                                        },
                                                                        children: selectedFile.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/loan-application/page.tsx",
                                                                        lineNumber: 870,
                                                                        columnNumber: 29
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        sx: {
                                                                            color: '#FF5E00',
                                                                            fontSize: {
                                                                                xs: '14px',
                                                                                sm: '16px'
                                                                            },
                                                                            fontWeight: 500
                                                                        },
                                                                        children: "Click to attach signed application form"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/loan-application/page.tsx",
                                                                        lineNumber: 878,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                                        variant: "body2",
                                                                        sx: {
                                                                            color: '#666',
                                                                            fontSize: {
                                                                                xs: '12px',
                                                                                sm: '14px'
                                                                            }
                                                                        },
                                                                        children: "Supported format: PDF"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/loan-application/page.tsx",
                                                                        lineNumber: 886,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/loan-application/page.tsx",
                                                                lineNumber: 850,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                                            lineNumber: 849,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/loan-application/page.tsx",
                                                        lineNumber: 848,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/loan-application/page.tsx",
                                                lineNumber: 837,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    gap: '16px',
                                                    padding: {
                                                        xs: '0 16px',
                                                        sm: '0'
                                                    }
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    onClick: handleSubmit,
                                                    disabled: !selectedFile || isSubmitting,
                                                    variant: "contained",
                                                    sx: {
                                                        backgroundColor: '#FF5E00',
                                                        color: '#FFFFFF',
                                                        padding: '12px 32px',
                                                        borderRadius: '8px',
                                                        textTransform: 'none',
                                                        fontSize: '16px',
                                                        fontWeight: 600,
                                                        width: {
                                                            xs: '100%',
                                                            sm: 'auto'
                                                        },
                                                        minWidth: {
                                                            sm: '200px'
                                                        },
                                                        '&:hover': {
                                                            backgroundColor: '#E65500'
                                                        }
                                                    },
                                                    children: isSubmitting ? 'Submitting...' : 'Submit Application'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/loan-application/page.tsx",
                                                lineNumber: 897,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/loan-application/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActionButtons, {
                                    children: [
                                        currentStep > 1 && currentStep !== 3 && currentStep !== 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            variant: "outlined",
                                            onClick: handleBack,
                                            sx: {
                                                borderColor: '#FF5E00',
                                                color: '#FF5E00',
                                                '&:hover': {
                                                    borderColor: '#E65500',
                                                    color: '#E65500'
                                                },
                                                textTransform: 'none',
                                                padding: {
                                                    xs: '8px 16px',
                                                    sm: '12px 32px'
                                                },
                                                height: {
                                                    xs: '48px',
                                                    sm: 'auto'
                                                },
                                                fontSize: {
                                                    xs: '16px',
                                                    sm: 'inherit'
                                                },
                                                width: {
                                                    xs: '100%',
                                                    sm: 'auto'
                                                }
                                            },
                                            children: "Back"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 930,
                                            columnNumber: 17
                                        }, this),
                                        currentStep < totalSteps && currentStep !== 3 && currentStep !== 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                            variant: "contained",
                                            onClick: handleNext,
                                            sx: {
                                                bgcolor: '#FF5E00',
                                                '&:hover': {
                                                    bgcolor: '#E65500'
                                                },
                                                textTransform: 'none',
                                                padding: {
                                                    xs: '8px 16px',
                                                    sm: '12px 32px'
                                                },
                                                height: {
                                                    xs: '48px',
                                                    sm: 'auto'
                                                },
                                                fontSize: {
                                                    xs: '16px',
                                                    sm: 'inherit'
                                                },
                                                width: {
                                                    xs: '100%',
                                                    sm: 'auto'
                                                }
                                            },
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/loan-application/page.tsx",
                                            lineNumber: 948,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/loan-application/page.tsx",
                                    lineNumber: 928,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/loan-application/page.tsx",
                            lineNumber: 631,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/loan-application/page.tsx",
                    lineNumber: 613,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/loan-application/page.tsx",
                lineNumber: 612,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Dialog$2f$Dialog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dialog$3e$__["Dialog"], {
                open: showSuccess,
                "aria-describedby": "success-dialog-description",
                PaperProps: {
                    sx: {
                        borderRadius: '8px',
                        padding: '16px',
                        minWidth: '300px'
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContent$2f$DialogContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContent$3e$__["DialogContent"], {
                    sx: {
                        textAlign: 'center'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                fontSize: 60,
                                color: '#4CAF50',
                                mb: 2
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/loan-application/page.tsx",
                            lineNumber: 981,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$DialogContentText$2f$DialogContentText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DialogContentText$3e$__["DialogContentText"], {
                            id: "success-dialog-description",
                            sx: {
                                color: '#000',
                                fontSize: '18px',
                                fontWeight: 500
                            },
                            children: "Application Submitted Successfully For Approval!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/loan-application/page.tsx",
                            lineNumber: 982,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/loan-application/page.tsx",
                    lineNumber: 980,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/loan-application/page.tsx",
                lineNumber: 969,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/loan-application/page.tsx",
        lineNumber: 566,
        columnNumber: 5
    }, this);
}
_s(LoanApplication, "v2aUBcFrEHfOgxWVhnIvNOA7NwI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c17 = LoanApplication;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17;
__turbopack_context__.k.register(_c, "PageContainer");
__turbopack_context__.k.register(_c1, "ContentWrapper");
__turbopack_context__.k.register(_c2, "SideNav");
__turbopack_context__.k.register(_c3, "StepIndicatorContainer");
__turbopack_context__.k.register(_c4, "StepRow");
__turbopack_context__.k.register(_c5, "StepIndicator");
__turbopack_context__.k.register(_c6, "StepLabel");
__turbopack_context__.k.register(_c7, "UploadButton");
__turbopack_context__.k.register(_c8, "MainContent");
__turbopack_context__.k.register(_c9, "FormContainer");
__turbopack_context__.k.register(_c10, "FormTitle");
__turbopack_context__.k.register(_c11, "InputGrid");
__turbopack_context__.k.register(_c12, "CustomTextField");
__turbopack_context__.k.register(_c13, "CustomSelect");
__turbopack_context__.k.register(_c14, "CustomFormControl");
__turbopack_context__.k.register(_c15, "ExpandButton");
__turbopack_context__.k.register(_c16, "ActionButtons");
__turbopack_context__.k.register(_c17, "LoanApplication");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_11de6383._.js.map