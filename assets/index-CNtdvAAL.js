const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-CFo3UxCm.js","assets/index-BngYlCWb.js","assets/index-CT3p-gj6.js","assets/index-STiGLJ-g.css","assets/all-wallets-Df0LXWpq.js","assets/arrow-bottom-circle-DvhDxylk.js","assets/app-store-BidUJP1X.js","assets/apple-T3bLOn_N.js","assets/arrow-bottom-ybDbtINq.js","assets/arrow-left-BNazqXy7.js","assets/arrow-right-DWGzLEjf.js","assets/arrow-top-B3Ux3uUb.js","assets/bank-C7JeT0CK.js","assets/browser-B2KcyjOD.js","assets/bin-BwCTIlY-.js","assets/bitcoin-DNYP-5VZ.js","assets/card-CniGY5-C.js","assets/checkmark-CoNI32JG.js","assets/checkmark-bold-CfEfkQN4.js","assets/chevron-bottom-BzDm_J55.js","assets/chevron-left-6LXJa7x2.js","assets/chevron-right-CyfAYgrJ.js","assets/chevron-top-Ds5Xwe_p.js","assets/chrome-store-CxZqSVDY.js","assets/clock-Cr0uoiMb.js","assets/close-sZ4FnTWL.js","assets/compass-B2D6Gf2O.js","assets/coinPlaceholder-DMnFsNLB.js","assets/copy-_qZC9XcJ.js","assets/cursor-BVsyFS4r.js","assets/cursor-transparent-CJZ3tQQM.js","assets/circle-DfqLr8-w.js","assets/desktop-BM8gQ2ql.js","assets/disconnect-CAYdMnzG.js","assets/discord-B4THS3lI.js","assets/ethereum-7dgbWABp.js","assets/etherscan-BqPXSnYg.js","assets/extension-CF1ZucJ0.js","assets/external-link-dlHj_-zB.js","assets/facebook-BCxra2fU.js","assets/farcaster-DtQUv5h8.js","assets/filters-8dEEOv-p.js","assets/github-BhH2ohEO.js","assets/google-SRtujwAu.js","assets/help-circle-B5b7sJyd.js","assets/image-EoMfU8xs.js","assets/id-DTtD6drL.js","assets/info-circle-CcJRrKS7.js","assets/lightbulb-C96lFJ7i.js","assets/mail-CVG_qlxu.js","assets/mobile-OkF2tJ3W.js","assets/more-CMr3zAjx.js","assets/network-placeholder-BkWdsU7W.js","assets/nftPlaceholder-BEzN9_n4.js","assets/off-Bv7ma-I2.js","assets/play-store-Or1UPTtN.js","assets/plus-c-wknM7F.js","assets/qr-code-CabkdkjB.js","assets/recycle-horizontal-CmEeyyee.js","assets/refresh-DvEy_zQS.js","assets/search-DfsIuT19.js","assets/send-CrO5ExH1.js","assets/swapHorizontal-CYUPGLql.js","assets/swapHorizontalMedium-BrXUmPRm.js","assets/swapHorizontalBold-DK-LckEs.js","assets/swapHorizontalRoundedBold-COCS-ADa.js","assets/swapVertical-jEpt7O4a.js","assets/solana-vzUx_SbL.js","assets/telegram-EQBSQXvt.js","assets/three-dots-8827V_9m.js","assets/twitch-Cps-AjLZ.js","assets/x-CbAhF2z_.js","assets/twitterIcon-CDuMCznn.js","assets/user-_mDPgkaL.js","assets/verify-Y5lkiZUk.js","assets/verify-filled-DQV1U9uo.js","assets/wallet-DD2zbmox.js","assets/walletconnect-kwJpYqNG.js","assets/wallet-placeholder-CgyXRU6j.js","assets/warning-circle-FJEP3LwM.js","assets/info-C_C4J3v_.js","assets/exclamation-triangle-CC_ZldCK.js","assets/reown-logo-BmByE2Za.js","assets/x-mark-D2o1iz53.js"])))=>i.map(i=>d[i]);
import { D as f$1, F as u, i as i$2, r as resetStyles, a as i$3, b, o as A, G as E, p as colorStyles, e as elementStyles } from './index-BngYlCWb.js';
import { _ as __vitePreload } from './index-CT3p-gj6.js';

const UiHelperUtil = {
    getSpacingStyles(spacing, index) {
        if (Array.isArray(spacing)) {
            return spacing[index] ? `var(--wui-spacing-${spacing[index]})` : undefined;
        }
        else if (typeof spacing === 'string') {
            return `var(--wui-spacing-${spacing})`;
        }
        return undefined;
    },
    getFormattedDate(date) {
        return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date);
    },
    getHostName(url) {
        try {
            const newUrl = new URL(url);
            return newUrl.hostname;
        }
        catch (error) {
            return '';
        }
    },
    getTruncateString({ string, charsStart, charsEnd, truncate }) {
        if (string.length <= charsStart + charsEnd) {
            return string;
        }
        if (truncate === 'end') {
            return `${string.substring(0, charsStart)}...`;
        }
        else if (truncate === 'start') {
            return `...${string.substring(string.length - charsEnd)}`;
        }
        return `${string.substring(0, Math.floor(charsStart))}...${string.substring(string.length - Math.floor(charsEnd))}`;
    },
    generateAvatarColors(address) {
        const hash = address
            .toLowerCase()
            .replace(/^0x/iu, '')
            .replace(/[^a-f0-9]/gu, '');
        const baseColor = hash.substring(0, 6).padEnd(6, '0');
        const rgbColor = this.hexToRgb(baseColor);
        const masterBorderRadius = getComputedStyle(document.documentElement).getPropertyValue('--w3m-border-radius-master');
        const radius = Number(masterBorderRadius?.replace('px', ''));
        const edge = 100 - 3 * radius;
        const gradientCircle = `${edge}% ${edge}% at 65% 40%`;
        const colors = [];
        for (let i = 0; i < 5; i += 1) {
            const tintedColor = this.tintColor(rgbColor, 0.15 * i);
            colors.push(`rgb(${tintedColor[0]}, ${tintedColor[1]}, ${tintedColor[2]})`);
        }
        return `
    --local-color-1: ${colors[0]};
    --local-color-2: ${colors[1]};
    --local-color-3: ${colors[2]};
    --local-color-4: ${colors[3]};
    --local-color-5: ${colors[4]};
    --local-radial-circle: ${gradientCircle}
   `;
    },
    hexToRgb(hex) {
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    },
    tintColor(rgb, tint) {
        const [r, g, b] = rgb;
        const tintedR = Math.round(r + (255 - r) * tint);
        const tintedG = Math.round(g + (255 - g) * tint);
        const tintedB = Math.round(b + (255 - b) * tint);
        return [tintedR, tintedG, tintedB];
    },
    isNumber(character) {
        const regex = {
            number: /^[0-9]+$/u
        };
        return regex.number.test(character);
    },
    getColorTheme(theme) {
        if (theme) {
            return theme;
        }
        else if (typeof window !== 'undefined' &&
            window.matchMedia &&
            typeof window.matchMedia === 'function') {
            if (window.matchMedia('(prefers-color-scheme: dark)')?.matches) {
                return 'dark';
            }
            return 'light';
        }
        return 'dark';
    },
    splitBalance(input) {
        const parts = input.split('.');
        if (parts.length === 2) {
            return [parts[0], parts[1]];
        }
        return ['0', '00'];
    },
    roundNumber(number, threshold, fixed) {
        const roundedNumber = number.toString().length >= threshold ? Number(number).toFixed(fixed) : number;
        return roundedNumber;
    },
    formatNumberToLocalString(value, decimals = 2) {
        if (value === undefined) {
            return '0.00';
        }
        if (typeof value === 'number') {
            return value.toLocaleString('en-US', {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals
            });
        }
        return parseFloat(value).toLocaleString('en-US', {
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals
        });
    }
};

function standardCustomElement(tagName, descriptor) {
    const { kind, elements } = descriptor;
    return {
        kind,
        elements,
        finisher(clazz) {
            if (!customElements.get(tagName)) {
                customElements.define(tagName, clazz);
            }
        }
    };
}
function legacyCustomElement(tagName, clazz) {
    if (!customElements.get(tagName)) {
        customElements.define(tagName, clazz);
    }
    return clazz;
}
function customElement(tagName) {
    return function create(classOrDescriptor) {
        return typeof classOrDescriptor === 'function'
            ? legacyCustomElement(tagName, classOrDescriptor)
            : standardCustomElement(tagName, classOrDescriptor);
    };
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o$2 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f$1 }, r$3 = (t2 = o$2, e2, r2) => {
  const { kind: n2, metadata: i } = r2;
  let s = globalThis.litPropertyMetadata.get(i);
  if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = /* @__PURE__ */ new Map()), "setter" === n2 && ((t2 = Object.create(t2)).wrapped = true), s.set(r2.name, t2), "accessor" === n2) {
    const { name: o2 } = r2;
    return { set(r3) {
      const n3 = e2.get.call(this);
      e2.set.call(this, r3), this.requestUpdate(o2, n3, t2, true, r3);
    }, init(e3) {
      return void 0 !== e3 && this.C(o2, void 0, t2, e3), e3;
    } };
  }
  if ("setter" === n2) {
    const { name: o2 } = r2;
    return function(r3) {
      const n3 = this[o2];
      e2.call(this, r3), this.requestUpdate(o2, n3, t2, true, r3);
    };
  }
  throw Error("Unsupported decorator location: " + n2);
};
function n$3(t2) {
  return (e2, o2) => "object" == typeof o2 ? r$3(t2, e2, o2) : ((t3, e3, o3) => {
    const r2 = e3.hasOwnProperty(o3);
    return e3.constructor.createProperty(o3, t3), r2 ? Object.getOwnPropertyDescriptor(e3, o3) : void 0;
  })(t2, e2, o2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function r$2(r){return n$3({...r,state:true,attribute:false})}

const styles$6 = i$2 `
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiFlex = class WuiFlex extends i$3 {
    render() {
        this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap && `var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap && `var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap && `var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 0)};
      padding-right: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 1)};
      padding-bottom: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 2)};
      padding-left: ${this.padding && UiHelperUtil.getSpacingStyles(this.padding, 3)};
      margin-top: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 0)};
      margin-right: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 1)};
      margin-bottom: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 2)};
      margin-left: ${this.margin && UiHelperUtil.getSpacingStyles(this.margin, 3)};
    `;
        return b `<slot></slot>`;
    }
};
WuiFlex.styles = [resetStyles, styles$6];
__decorate$6([
    n$3()
], WuiFlex.prototype, "flexDirection", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "flexWrap", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "flexBasis", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "flexGrow", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "flexShrink", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "alignItems", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "justifyContent", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "columnGap", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "rowGap", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "gap", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "padding", void 0);
__decorate$6([
    n$3()
], WuiFlex.prototype, "margin", void 0);
WuiFlex = __decorate$6([
    customElement('wui-flex')
], WuiFlex);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o$1=o=>o??A;

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n$2=o=>null===o||"object"!=typeof o&&"function"!=typeof o,r$1=o=>void 0===o.strings;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2},e$1=t=>(...e)=>({_$litDirective$:t,values:e});let i$1 = class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s$1=(i,t)=>{const e=i._$AN;if(void 0===e)return  false;for(const i of e)i._$AO?.(t,false),s$1(i,t);return  true},o=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t;}while(0===e?.size)},r=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),c$1(t);}};function h$1(i){ void 0!==this._$AN?(o(this),this._$AM=i,r(this)):this._$AM=i;}function n$1(i,t=false,e=0){const r=this._$AH,h=this._$AN;if(void 0!==h&&0!==h.size)if(t)if(Array.isArray(r))for(let i=e;i<r.length;i++)s$1(r[i],false),o(r[i]);else null!=r&&(s$1(r,false),o(r));else s$1(this,i);}const c$1=i=>{i.type==t.CHILD&&(i._$AP??=n$1,i._$AQ??=h$1);};class f extends i$1{constructor(){super(...arguments),this._$AN=void 0;}_$AT(i,t,e){super._$AT(i,t,e),r(this),this.isConnected=i._$AU;}_$AO(i,t=true){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(s$1(this,i),o(this));}setValue(t){if(r$1(this._$Ct))this._$Ct._$AI(t,this);else {const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0);}}disconnected(){}reconnected(){}}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class s{constructor(t){this.G=t;}disconnect(){this.G=void 0;}reconnect(t){this.G=t;}deref(){return this.G}}class i{constructor(){this.Y=void 0,this.Z=void 0;}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t);}resume(){this.Z?.(),this.Y=this.Z=void 0;}}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const n=t=>!n$2(t)&&"function"==typeof t.then,h=1073741823;class c extends f{constructor(){super(...arguments),this._$Cwt=h,this._$Cbt=[],this._$CK=new s(this),this._$CX=new i;}render(...s){return s.find(t=>!n(t))??E}update(s,i){const e=this._$Cbt;let r=e.length;this._$Cbt=i;const o=this._$CK,c=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<i.length&&!(t>this._$Cwt);t++){const s=i[t];if(!n(s))return this._$Cwt=t,s;t<r&&s===e[t]||(this._$Cwt=h,r=0,Promise.resolve(s).then(async t=>{for(;c.get();)await c.get();const i=o.deref();if(void 0!==i){const e=i._$Cbt.indexOf(s);e>-1&&e<i._$Cwt&&(i._$Cwt=e,i.setValue(t));}}));}return E}disconnected(){this._$CK.disconnect(),this._$CX.pause();}reconnected(){this._$CK.reconnect(this),this._$CX.resume();}}const m=e$1(c);

class CacheUtil {
  constructor() {
    this.cache = /* @__PURE__ */ new Map();
  }
  set(key, value) {
    this.cache.set(key, value);
  }
  get(key) {
    return this.cache.get(key);
  }
  has(key) {
    return this.cache.has(key);
  }
  delete(key) {
    this.cache.delete(key);
  }
  clear() {
    this.cache.clear();
  }
}
const globalSvgCache = new CacheUtil();

const styles$5 = i$2 `
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;

var __decorate$5 = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const ICONS = {
  add: async () => (await __vitePreload(async () => { const {addSvg} = await import('./add-CFo3UxCm.js');return { addSvg }},true?__vite__mapDeps([0,1,2,3]):void 0)).addSvg,
  allWallets: async () => (await __vitePreload(async () => { const {allWalletsSvg} = await import('./all-wallets-Df0LXWpq.js');return { allWalletsSvg }},true?__vite__mapDeps([4,1,2,3]):void 0)).allWalletsSvg,
  arrowBottomCircle: async () => (await __vitePreload(async () => { const {arrowBottomCircleSvg} = await import('./arrow-bottom-circle-DvhDxylk.js');return { arrowBottomCircleSvg }},true?__vite__mapDeps([5,1,2,3]):void 0)).arrowBottomCircleSvg,
  appStore: async () => (await __vitePreload(async () => { const {appStoreSvg} = await import('./app-store-BidUJP1X.js');return { appStoreSvg }},true?__vite__mapDeps([6,1,2,3]):void 0)).appStoreSvg,
  apple: async () => (await __vitePreload(async () => { const {appleSvg} = await import('./apple-T3bLOn_N.js');return { appleSvg }},true?__vite__mapDeps([7,1,2,3]):void 0)).appleSvg,
  arrowBottom: async () => (await __vitePreload(async () => { const {arrowBottomSvg} = await import('./arrow-bottom-ybDbtINq.js');return { arrowBottomSvg }},true?__vite__mapDeps([8,1,2,3]):void 0)).arrowBottomSvg,
  arrowLeft: async () => (await __vitePreload(async () => { const {arrowLeftSvg} = await import('./arrow-left-BNazqXy7.js');return { arrowLeftSvg }},true?__vite__mapDeps([9,1,2,3]):void 0)).arrowLeftSvg,
  arrowRight: async () => (await __vitePreload(async () => { const {arrowRightSvg} = await import('./arrow-right-DWGzLEjf.js');return { arrowRightSvg }},true?__vite__mapDeps([10,1,2,3]):void 0)).arrowRightSvg,
  arrowTop: async () => (await __vitePreload(async () => { const {arrowTopSvg} = await import('./arrow-top-B3Ux3uUb.js');return { arrowTopSvg }},true?__vite__mapDeps([11,1,2,3]):void 0)).arrowTopSvg,
  bank: async () => (await __vitePreload(async () => { const {bankSvg} = await import('./bank-C7JeT0CK.js');return { bankSvg }},true?__vite__mapDeps([12,1,2,3]):void 0)).bankSvg,
  browser: async () => (await __vitePreload(async () => { const {browserSvg} = await import('./browser-B2KcyjOD.js');return { browserSvg }},true?__vite__mapDeps([13,1,2,3]):void 0)).browserSvg,
  bin: async () => (await __vitePreload(async () => { const {binSvg} = await import('./bin-BwCTIlY-.js');return { binSvg }},true?__vite__mapDeps([14,1,2,3]):void 0)).binSvg,
  bitcoin: async () => (await __vitePreload(async () => { const {bitcoinSvg} = await import('./bitcoin-DNYP-5VZ.js');return { bitcoinSvg }},true?__vite__mapDeps([15,1,2,3]):void 0)).bitcoinSvg,
  card: async () => (await __vitePreload(async () => { const {cardSvg} = await import('./card-CniGY5-C.js');return { cardSvg }},true?__vite__mapDeps([16,1,2,3]):void 0)).cardSvg,
  checkmark: async () => (await __vitePreload(async () => { const {checkmarkSvg} = await import('./checkmark-CoNI32JG.js');return { checkmarkSvg }},true?__vite__mapDeps([17,1,2,3]):void 0)).checkmarkSvg,
  checkmarkBold: async () => (await __vitePreload(async () => { const {checkmarkBoldSvg} = await import('./checkmark-bold-CfEfkQN4.js');return { checkmarkBoldSvg }},true?__vite__mapDeps([18,1,2,3]):void 0)).checkmarkBoldSvg,
  chevronBottom: async () => (await __vitePreload(async () => { const {chevronBottomSvg} = await import('./chevron-bottom-BzDm_J55.js');return { chevronBottomSvg }},true?__vite__mapDeps([19,1,2,3]):void 0)).chevronBottomSvg,
  chevronLeft: async () => (await __vitePreload(async () => { const {chevronLeftSvg} = await import('./chevron-left-6LXJa7x2.js');return { chevronLeftSvg }},true?__vite__mapDeps([20,1,2,3]):void 0)).chevronLeftSvg,
  chevronRight: async () => (await __vitePreload(async () => { const {chevronRightSvg} = await import('./chevron-right-CyfAYgrJ.js');return { chevronRightSvg }},true?__vite__mapDeps([21,1,2,3]):void 0)).chevronRightSvg,
  chevronTop: async () => (await __vitePreload(async () => { const {chevronTopSvg} = await import('./chevron-top-Ds5Xwe_p.js');return { chevronTopSvg }},true?__vite__mapDeps([22,1,2,3]):void 0)).chevronTopSvg,
  chromeStore: async () => (await __vitePreload(async () => { const {chromeStoreSvg} = await import('./chrome-store-CxZqSVDY.js');return { chromeStoreSvg }},true?__vite__mapDeps([23,1,2,3]):void 0)).chromeStoreSvg,
  clock: async () => (await __vitePreload(async () => { const {clockSvg} = await import('./clock-Cr0uoiMb.js');return { clockSvg }},true?__vite__mapDeps([24,1,2,3]):void 0)).clockSvg,
  close: async () => (await __vitePreload(async () => { const {closeSvg} = await import('./close-sZ4FnTWL.js');return { closeSvg }},true?__vite__mapDeps([25,1,2,3]):void 0)).closeSvg,
  compass: async () => (await __vitePreload(async () => { const {compassSvg} = await import('./compass-B2D6Gf2O.js');return { compassSvg }},true?__vite__mapDeps([26,1,2,3]):void 0)).compassSvg,
  coinPlaceholder: async () => (await __vitePreload(async () => { const {coinPlaceholderSvg} = await import('./coinPlaceholder-DMnFsNLB.js');return { coinPlaceholderSvg }},true?__vite__mapDeps([27,1,2,3]):void 0)).coinPlaceholderSvg,
  copy: async () => (await __vitePreload(async () => { const {copySvg} = await import('./copy-_qZC9XcJ.js');return { copySvg }},true?__vite__mapDeps([28,1,2,3]):void 0)).copySvg,
  cursor: async () => (await __vitePreload(async () => { const {cursorSvg} = await import('./cursor-BVsyFS4r.js');return { cursorSvg }},true?__vite__mapDeps([29,1,2,3]):void 0)).cursorSvg,
  cursorTransparent: async () => (await __vitePreload(async () => { const {cursorTransparentSvg} = await import('./cursor-transparent-CJZ3tQQM.js');return { cursorTransparentSvg }},true?__vite__mapDeps([30,1,2,3]):void 0)).cursorTransparentSvg,
  circle: async () => (await __vitePreload(async () => { const {circleSvg} = await import('./circle-DfqLr8-w.js');return { circleSvg }},true?__vite__mapDeps([31,1,2,3]):void 0)).circleSvg,
  desktop: async () => (await __vitePreload(async () => { const {desktopSvg} = await import('./desktop-BM8gQ2ql.js');return { desktopSvg }},true?__vite__mapDeps([32,1,2,3]):void 0)).desktopSvg,
  disconnect: async () => (await __vitePreload(async () => { const {disconnectSvg} = await import('./disconnect-CAYdMnzG.js');return { disconnectSvg }},true?__vite__mapDeps([33,1,2,3]):void 0)).disconnectSvg,
  discord: async () => (await __vitePreload(async () => { const {discordSvg} = await import('./discord-B4THS3lI.js');return { discordSvg }},true?__vite__mapDeps([34,1,2,3]):void 0)).discordSvg,
  ethereum: async () => (await __vitePreload(async () => { const {ethereumSvg} = await import('./ethereum-7dgbWABp.js');return { ethereumSvg }},true?__vite__mapDeps([35,1,2,3]):void 0)).ethereumSvg,
  etherscan: async () => (await __vitePreload(async () => { const {etherscanSvg} = await import('./etherscan-BqPXSnYg.js');return { etherscanSvg }},true?__vite__mapDeps([36,1,2,3]):void 0)).etherscanSvg,
  extension: async () => (await __vitePreload(async () => { const {extensionSvg} = await import('./extension-CF1ZucJ0.js');return { extensionSvg }},true?__vite__mapDeps([37,1,2,3]):void 0)).extensionSvg,
  externalLink: async () => (await __vitePreload(async () => { const {externalLinkSvg} = await import('./external-link-dlHj_-zB.js');return { externalLinkSvg }},true?__vite__mapDeps([38,1,2,3]):void 0)).externalLinkSvg,
  facebook: async () => (await __vitePreload(async () => { const {facebookSvg} = await import('./facebook-BCxra2fU.js');return { facebookSvg }},true?__vite__mapDeps([39,1,2,3]):void 0)).facebookSvg,
  farcaster: async () => (await __vitePreload(async () => { const {farcasterSvg} = await import('./farcaster-DtQUv5h8.js');return { farcasterSvg }},true?__vite__mapDeps([40,1,2,3]):void 0)).farcasterSvg,
  filters: async () => (await __vitePreload(async () => { const {filtersSvg} = await import('./filters-8dEEOv-p.js');return { filtersSvg }},true?__vite__mapDeps([41,1,2,3]):void 0)).filtersSvg,
  github: async () => (await __vitePreload(async () => { const {githubSvg} = await import('./github-BhH2ohEO.js');return { githubSvg }},true?__vite__mapDeps([42,1,2,3]):void 0)).githubSvg,
  google: async () => (await __vitePreload(async () => { const {googleSvg} = await import('./google-SRtujwAu.js');return { googleSvg }},true?__vite__mapDeps([43,1,2,3]):void 0)).googleSvg,
  helpCircle: async () => (await __vitePreload(async () => { const {helpCircleSvg} = await import('./help-circle-B5b7sJyd.js');return { helpCircleSvg }},true?__vite__mapDeps([44,1,2,3]):void 0)).helpCircleSvg,
  image: async () => (await __vitePreload(async () => { const {imageSvg} = await import('./image-EoMfU8xs.js');return { imageSvg }},true?__vite__mapDeps([45,1,2,3]):void 0)).imageSvg,
  id: async () => (await __vitePreload(async () => { const {idSvg} = await import('./id-DTtD6drL.js');return { idSvg }},true?__vite__mapDeps([46,1,2,3]):void 0)).idSvg,
  infoCircle: async () => (await __vitePreload(async () => { const {infoCircleSvg} = await import('./info-circle-CcJRrKS7.js');return { infoCircleSvg }},true?__vite__mapDeps([47,1,2,3]):void 0)).infoCircleSvg,
  lightbulb: async () => (await __vitePreload(async () => { const {lightbulbSvg} = await import('./lightbulb-C96lFJ7i.js');return { lightbulbSvg }},true?__vite__mapDeps([48,1,2,3]):void 0)).lightbulbSvg,
  mail: async () => (await __vitePreload(async () => { const {mailSvg} = await import('./mail-CVG_qlxu.js');return { mailSvg }},true?__vite__mapDeps([49,1,2,3]):void 0)).mailSvg,
  mobile: async () => (await __vitePreload(async () => { const {mobileSvg} = await import('./mobile-OkF2tJ3W.js');return { mobileSvg }},true?__vite__mapDeps([50,1,2,3]):void 0)).mobileSvg,
  more: async () => (await __vitePreload(async () => { const {moreSvg} = await import('./more-CMr3zAjx.js');return { moreSvg }},true?__vite__mapDeps([51,1,2,3]):void 0)).moreSvg,
  networkPlaceholder: async () => (await __vitePreload(async () => { const {networkPlaceholderSvg} = await import('./network-placeholder-BkWdsU7W.js');return { networkPlaceholderSvg }},true?__vite__mapDeps([52,1,2,3]):void 0)).networkPlaceholderSvg,
  nftPlaceholder: async () => (await __vitePreload(async () => { const {nftPlaceholderSvg} = await import('./nftPlaceholder-BEzN9_n4.js');return { nftPlaceholderSvg }},true?__vite__mapDeps([53,1,2,3]):void 0)).nftPlaceholderSvg,
  off: async () => (await __vitePreload(async () => { const {offSvg} = await import('./off-Bv7ma-I2.js');return { offSvg }},true?__vite__mapDeps([54,1,2,3]):void 0)).offSvg,
  playStore: async () => (await __vitePreload(async () => { const {playStoreSvg} = await import('./play-store-Or1UPTtN.js');return { playStoreSvg }},true?__vite__mapDeps([55,1,2,3]):void 0)).playStoreSvg,
  plus: async () => (await __vitePreload(async () => { const {plusSvg} = await import('./plus-c-wknM7F.js');return { plusSvg }},true?__vite__mapDeps([56,1,2,3]):void 0)).plusSvg,
  qrCode: async () => (await __vitePreload(async () => { const {qrCodeIcon} = await import('./qr-code-CabkdkjB.js');return { qrCodeIcon }},true?__vite__mapDeps([57,1,2,3]):void 0)).qrCodeIcon,
  recycleHorizontal: async () => (await __vitePreload(async () => { const {recycleHorizontalSvg} = await import('./recycle-horizontal-CmEeyyee.js');return { recycleHorizontalSvg }},true?__vite__mapDeps([58,1,2,3]):void 0)).recycleHorizontalSvg,
  refresh: async () => (await __vitePreload(async () => { const {refreshSvg} = await import('./refresh-DvEy_zQS.js');return { refreshSvg }},true?__vite__mapDeps([59,1,2,3]):void 0)).refreshSvg,
  search: async () => (await __vitePreload(async () => { const {searchSvg} = await import('./search-DfsIuT19.js');return { searchSvg }},true?__vite__mapDeps([60,1,2,3]):void 0)).searchSvg,
  send: async () => (await __vitePreload(async () => { const {sendSvg} = await import('./send-CrO5ExH1.js');return { sendSvg }},true?__vite__mapDeps([61,1,2,3]):void 0)).sendSvg,
  swapHorizontal: async () => (await __vitePreload(async () => { const {swapHorizontalSvg} = await import('./swapHorizontal-CYUPGLql.js');return { swapHorizontalSvg }},true?__vite__mapDeps([62,1,2,3]):void 0)).swapHorizontalSvg,
  swapHorizontalMedium: async () => (await __vitePreload(async () => { const {swapHorizontalMediumSvg} = await import('./swapHorizontalMedium-BrXUmPRm.js');return { swapHorizontalMediumSvg }},true?__vite__mapDeps([63,1,2,3]):void 0)).swapHorizontalMediumSvg,
  swapHorizontalBold: async () => (await __vitePreload(async () => { const {swapHorizontalBoldSvg} = await import('./swapHorizontalBold-DK-LckEs.js');return { swapHorizontalBoldSvg }},true?__vite__mapDeps([64,1,2,3]):void 0)).swapHorizontalBoldSvg,
  swapHorizontalRoundedBold: async () => (await __vitePreload(async () => { const {swapHorizontalRoundedBoldSvg} = await import('./swapHorizontalRoundedBold-COCS-ADa.js');return { swapHorizontalRoundedBoldSvg }},true?__vite__mapDeps([65,1,2,3]):void 0)).swapHorizontalRoundedBoldSvg,
  swapVertical: async () => (await __vitePreload(async () => { const {swapVerticalSvg} = await import('./swapVertical-jEpt7O4a.js');return { swapVerticalSvg }},true?__vite__mapDeps([66,1,2,3]):void 0)).swapVerticalSvg,
  solana: async () => (await __vitePreload(async () => { const {solanaSvg} = await import('./solana-vzUx_SbL.js');return { solanaSvg }},true?__vite__mapDeps([67,1,2,3]):void 0)).solanaSvg,
  telegram: async () => (await __vitePreload(async () => { const {telegramSvg} = await import('./telegram-EQBSQXvt.js');return { telegramSvg }},true?__vite__mapDeps([68,1,2,3]):void 0)).telegramSvg,
  threeDots: async () => (await __vitePreload(async () => { const {threeDotsSvg} = await import('./three-dots-8827V_9m.js');return { threeDotsSvg }},true?__vite__mapDeps([69,1,2,3]):void 0)).threeDotsSvg,
  twitch: async () => (await __vitePreload(async () => { const {twitchSvg} = await import('./twitch-Cps-AjLZ.js');return { twitchSvg }},true?__vite__mapDeps([70,1,2,3]):void 0)).twitchSvg,
  twitter: async () => (await __vitePreload(async () => { const {xSvg} = await import('./x-CbAhF2z_.js');return { xSvg }},true?__vite__mapDeps([71,1,2,3]):void 0)).xSvg,
  twitterIcon: async () => (await __vitePreload(async () => { const {twitterIconSvg} = await import('./twitterIcon-CDuMCznn.js');return { twitterIconSvg }},true?__vite__mapDeps([72,1,2,3]):void 0)).twitterIconSvg,
  user: async () => (await __vitePreload(async () => { const {userSvg} = await import('./user-_mDPgkaL.js');return { userSvg }},true?__vite__mapDeps([73,1,2,3]):void 0)).userSvg,
  verify: async () => (await __vitePreload(async () => { const {verifySvg} = await import('./verify-Y5lkiZUk.js');return { verifySvg }},true?__vite__mapDeps([74,1,2,3]):void 0)).verifySvg,
  verifyFilled: async () => (await __vitePreload(async () => { const {verifyFilledSvg} = await import('./verify-filled-DQV1U9uo.js');return { verifyFilledSvg }},true?__vite__mapDeps([75,1,2,3]):void 0)).verifyFilledSvg,
  wallet: async () => (await __vitePreload(async () => { const {walletSvg} = await import('./wallet-DD2zbmox.js');return { walletSvg }},true?__vite__mapDeps([76,1,2,3]):void 0)).walletSvg,
  walletConnect: async () => (await __vitePreload(async () => { const {walletConnectSvg} = await import('./walletconnect-kwJpYqNG.js');return { walletConnectSvg }},true?__vite__mapDeps([77,1,2,3]):void 0)).walletConnectSvg,
  walletConnectLightBrown: async () => (await __vitePreload(async () => { const {walletConnectLightBrownSvg} = await import('./walletconnect-kwJpYqNG.js');return { walletConnectLightBrownSvg }},true?__vite__mapDeps([77,1,2,3]):void 0)).walletConnectLightBrownSvg,
  walletConnectBrown: async () => (await __vitePreload(async () => { const {walletConnectBrownSvg} = await import('./walletconnect-kwJpYqNG.js');return { walletConnectBrownSvg }},true?__vite__mapDeps([77,1,2,3]):void 0)).walletConnectBrownSvg,
  walletPlaceholder: async () => (await __vitePreload(async () => { const {walletPlaceholderSvg} = await import('./wallet-placeholder-CgyXRU6j.js');return { walletPlaceholderSvg }},true?__vite__mapDeps([78,1,2,3]):void 0)).walletPlaceholderSvg,
  warningCircle: async () => (await __vitePreload(async () => { const {warningCircleSvg} = await import('./warning-circle-FJEP3LwM.js');return { warningCircleSvg }},true?__vite__mapDeps([79,1,2,3]):void 0)).warningCircleSvg,
  x: async () => (await __vitePreload(async () => { const {xSvg} = await import('./x-CbAhF2z_.js');return { xSvg }},true?__vite__mapDeps([71,1,2,3]):void 0)).xSvg,
  info: async () => (await __vitePreload(async () => { const {infoSvg} = await import('./info-C_C4J3v_.js');return { infoSvg }},true?__vite__mapDeps([80,1,2,3]):void 0)).infoSvg,
  exclamationTriangle: async () => (await __vitePreload(async () => { const {exclamationTriangleSvg} = await import('./exclamation-triangle-CC_ZldCK.js');return { exclamationTriangleSvg }},true?__vite__mapDeps([81,1,2,3]):void 0)).exclamationTriangleSvg,
  reown: async () => (await __vitePreload(async () => { const {reownSvg} = await import('./reown-logo-BmByE2Za.js');return { reownSvg }},true?__vite__mapDeps([82,1,2,3]):void 0)).reownSvg,
  "x-mark": async () => (await __vitePreload(async () => { const {xMarkSvg} = await import('./x-mark-D2o1iz53.js');return { xMarkSvg }},true?__vite__mapDeps([83,1,2,3]):void 0)).xMarkSvg
};
async function getSvg(name) {
  if (globalSvgCache.has(name)) {
    return globalSvgCache.get(name);
  }
  const importFn = ICONS[name] ?? ICONS.copy;
  const svgPromise = importFn();
  globalSvgCache.set(name, svgPromise);
  return svgPromise;
}
let WuiIcon = class WuiIcon2 extends i$3 {
  constructor() {
    super(...arguments);
    this.size = "md";
    this.name = "copy";
    this.color = "fg-300";
    this.aspectRatio = "1 / 1";
  }
  render() {
    this.style.cssText = `
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
      --local-aspect-ratio: ${this.aspectRatio}
    `;
    return b`${m(getSvg(this.name), b`<div class="fallback"></div>`)}`;
  }
};
WuiIcon.styles = [resetStyles, colorStyles, styles$5];
__decorate$5([
  n$3()
], WuiIcon.prototype, "size", void 0);
__decorate$5([
  n$3()
], WuiIcon.prototype, "name", void 0);
__decorate$5([
  n$3()
], WuiIcon.prototype, "color", void 0);
__decorate$5([
  n$3()
], WuiIcon.prototype, "aspectRatio", void 0);
WuiIcon = __decorate$5([
  customElement("wui-icon")
], WuiIcon);

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=e$1(class extends i$1{constructor(t$1){if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||t$1.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter(s=>t[s]).join(" ")+" "}update(s,[i]){if(void 0===this.st){this.st=new Set,void 0!==s.strings&&(this.nt=new Set(s.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in i)i[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(i)}const r=s.element.classList;for(const t of this.st)t in i||(r.remove(t),this.st.delete(t));for(const t in i){const s=!!i[t];s===this.st.has(t)||this.nt?.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)));}return E}});

const styles$4 = i$2 `
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600,
  .wui-font-micro-500 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiText = class WuiText extends i$3 {
    constructor() {
        super(...arguments);
        this.variant = 'paragraph-500';
        this.color = 'fg-300';
        this.align = 'left';
        this.lineClamp = undefined;
    }
    render() {
        const classes = {
            [`wui-font-${this.variant}`]: true,
            [`wui-color-${this.color}`]: true,
            [`wui-line-clamp-${this.lineClamp}`]: this.lineClamp ? true : false
        };
        this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `;
        return b `<slot class=${e(classes)}></slot>`;
    }
};
WuiText.styles = [resetStyles, styles$4];
__decorate$4([
    n$3()
], WuiText.prototype, "variant", void 0);
__decorate$4([
    n$3()
], WuiText.prototype, "color", void 0);
__decorate$4([
    n$3()
], WuiText.prototype, "align", void 0);
__decorate$4([
    n$3()
], WuiText.prototype, "lineClamp", void 0);
WuiText = __decorate$4([
    customElement('wui-text')
], WuiText);

const styles$3 = i$2 `
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiIconBox = class WuiIconBox extends i$3 {
    constructor() {
        super(...arguments);
        this.size = 'md';
        this.backgroundColor = 'accent-100';
        this.iconColor = 'accent-100';
        this.background = 'transparent';
        this.border = false;
        this.borderColor = 'wui-color-bg-125';
        this.icon = 'copy';
    }
    render() {
        const iconSize = this.iconSize || this.size;
        const isLg = this.size === 'lg';
        const isXl = this.size === 'xl';
        const bgMix = isLg ? '12%' : '16%';
        const borderRadius = isLg ? 'xxs' : isXl ? 's' : '3xl';
        const isGray = this.background === 'gray';
        const isOpaque = this.background === 'opaque';
        const isColorChange = (this.backgroundColor === 'accent-100' && isOpaque) ||
            (this.backgroundColor === 'success-100' && isOpaque) ||
            (this.backgroundColor === 'error-100' && isOpaque) ||
            (this.backgroundColor === 'inverse-100' && isOpaque);
        let bgValueVariable = `var(--wui-color-${this.backgroundColor})`;
        if (isColorChange) {
            bgValueVariable = `var(--wui-icon-box-bg-${this.backgroundColor})`;
        }
        else if (isGray) {
            bgValueVariable = `var(--wui-color-gray-${this.backgroundColor})`;
        }
        this.style.cssText = `
       --local-bg-value: ${bgValueVariable};
       --local-bg-mix: ${isColorChange || isGray ? `100%` : bgMix};
       --local-border-radius: var(--wui-border-radius-${borderRadius});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor === 'wui-color-bg-125' ? `2px` : `1px`} solid ${this.border ? `var(--${this.borderColor})` : `transparent`}
   `;
        return b ` <wui-icon color=${this.iconColor} size=${iconSize} name=${this.icon}></wui-icon> `;
    }
};
WuiIconBox.styles = [resetStyles, elementStyles, styles$3];
__decorate$3([
    n$3()
], WuiIconBox.prototype, "size", void 0);
__decorate$3([
    n$3()
], WuiIconBox.prototype, "backgroundColor", void 0);
__decorate$3([
    n$3()
], WuiIconBox.prototype, "iconColor", void 0);
__decorate$3([
    n$3()
], WuiIconBox.prototype, "iconSize", void 0);
__decorate$3([
    n$3()
], WuiIconBox.prototype, "background", void 0);
__decorate$3([
    n$3({ type: Boolean })
], WuiIconBox.prototype, "border", void 0);
__decorate$3([
    n$3()
], WuiIconBox.prototype, "borderColor", void 0);
__decorate$3([
    n$3()
], WuiIconBox.prototype, "icon", void 0);
WuiIconBox = __decorate$3([
    customElement('wui-icon-box')
], WuiIconBox);

const styles$2 = i$2 `
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-object-fit='cover']) img {
    object-fit: cover;
    object-position: center center;
  }

  :host([data-object-fit='contain']) img {
    object-fit: contain;
    object-position: center center;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiImage = class WuiImage extends i$3 {
    constructor() {
        super(...arguments);
        this.src = './path/to/image.jpg';
        this.alt = 'Image';
        this.size = undefined;
        this.objectFit = 'cover';
    }
    render() {
        if (this.objectFit) {
            this.dataset['objectFit'] = this.objectFit;
        }
        this.style.cssText = `
      --local-width: ${this.size ? `var(--wui-icon-size-${this.size});` : '100%'};
      --local-height: ${this.size ? `var(--wui-icon-size-${this.size});` : '100%'};
      `;
        return b `<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`;
    }
    handleImageError() {
        this.dispatchEvent(new CustomEvent('onLoadError', { bubbles: true, composed: true }));
    }
};
WuiImage.styles = [resetStyles, colorStyles, styles$2];
__decorate$2([
    n$3()
], WuiImage.prototype, "src", void 0);
__decorate$2([
    n$3()
], WuiImage.prototype, "alt", void 0);
__decorate$2([
    n$3()
], WuiImage.prototype, "size", void 0);
__decorate$2([
    n$3()
], WuiImage.prototype, "objectFit", void 0);
WuiImage = __decorate$2([
    customElement('wui-image')
], WuiImage);

const styles$1 = i$2 `
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }

  :host([data-size='xs']) {
    height: var(--wui-spacing-2l);
    padding: 0 var(--wui-spacing-3xs) !important;
  }

  :host([data-size='xs']) > wui-text {
    transform: translateY(2%);
  }
`;

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiTag = class WuiTag extends i$3 {
    constructor() {
        super(...arguments);
        this.variant = 'main';
        this.size = 'lg';
    }
    render() {
        this.dataset['variant'] = this.variant;
        this.dataset['size'] = this.size;
        const textVariant = this.size === 'md' || this.size === 'xs' ? 'mini-700' : 'micro-700';
        return b `
      <wui-text data-variant=${this.variant} variant=${textVariant} color="inherit">
        <slot></slot>
      </wui-text>
    `;
    }
};
WuiTag.styles = [resetStyles, styles$1];
__decorate$1([
    n$3()
], WuiTag.prototype, "variant", void 0);
__decorate$1([
    n$3()
], WuiTag.prototype, "size", void 0);
WuiTag = __decorate$1([
    customElement('wui-tag')
], WuiTag);

const styles = i$2 `
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let WuiLoadingSpinner = class WuiLoadingSpinner extends i$3 {
    constructor() {
        super(...arguments);
        this.color = 'accent-100';
        this.size = 'lg';
    }
    render() {
        this.style.cssText = `--local-color: ${this.color === 'inherit' ? 'inherit' : `var(--wui-color-${this.color})`}`;
        this.dataset['size'] = this.size;
        return b `<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`;
    }
};
WuiLoadingSpinner.styles = [resetStyles, styles];
__decorate([
    n$3()
], WuiLoadingSpinner.prototype, "color", void 0);
__decorate([
    n$3()
], WuiLoadingSpinner.prototype, "size", void 0);
WuiLoadingSpinner = __decorate([
    customElement('wui-loading-spinner')
], WuiLoadingSpinner);

export { UiHelperUtil as U, e as a, customElement as c, e$1 as e, f, n$3 as n, o$1 as o, r$2 as r };
