const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/add-C0wVF3cd.js","assets/index-D0jSknNJ.js","assets/index-DKK9f8P8.js","assets/index-DNt7LD59.css","assets/all-wallets-SF50N3qs.js","assets/arrow-bottom-circle-WnsDiS7B.js","assets/app-store-BjTFqs66.js","assets/apple-Dn_UJ8Sc.js","assets/arrow-bottom-DZFdMv1z.js","assets/arrow-left-DGsC-dL9.js","assets/arrow-right-ChiAmPJO.js","assets/arrow-top-CfJxrjlO.js","assets/bank-ATRwyC3H.js","assets/browser-BmOvXFpA.js","assets/bin-BfqWxA-T.js","assets/bitcoin-vKiPJo8s.js","assets/card-BLiKeiDo.js","assets/checkmark-C0CuRwsA.js","assets/checkmark-bold-C_zCIaLj.js","assets/chevron-bottom-BGfTZfOd.js","assets/chevron-left-BaG57bT1.js","assets/chevron-right-3vDj-JEg.js","assets/chevron-top-CuQwtNKE.js","assets/chrome-store-BNJfatBo.js","assets/clock-B2w-bqFN.js","assets/close-C7e33kZ2.js","assets/compass-DPG7Sa3f.js","assets/coinPlaceholder-BluBrHLk.js","assets/copy-DCD4J9NV.js","assets/cursor-BPho7Hqs.js","assets/cursor-transparent-DGre3jOc.js","assets/circle-7cEZix2r.js","assets/desktop-Bbd9lyQc.js","assets/disconnect-D0ijCKib.js","assets/discord-DraCAKhP.js","assets/ethereum-B7z2HHyK.js","assets/etherscan-BMNmyQ6Y.js","assets/extension-BrKlHWSf.js","assets/external-link-C_jEZ75n.js","assets/facebook-C5jMSKx8.js","assets/farcaster--OUitPOv.js","assets/filters-CMI2LbbU.js","assets/github-DlmjsE5G.js","assets/google-CW-WhYdZ.js","assets/help-circle-DI30dIyL.js","assets/image-BkYSguV_.js","assets/id-BjPQtdli.js","assets/info-circle-CivRqnry.js","assets/lightbulb-BVO14YB2.js","assets/mail-Ds5NycK9.js","assets/mobile-V46BMOM7.js","assets/more-ErB6wnXC.js","assets/network-placeholder-BDo9L5AG.js","assets/nftPlaceholder-RguahCHk.js","assets/off-DlWvdFqw.js","assets/play-store-bpB79ULA.js","assets/plus-VauOqo8B.js","assets/qr-code-BSz-IYL0.js","assets/recycle-horizontal-CzTwVVCQ.js","assets/refresh-zQw4UV0z.js","assets/search-ZBUrsQJZ.js","assets/send-DbvCZ7Su.js","assets/swapHorizontal-quyR4uNo.js","assets/swapHorizontalMedium-56Ndekga.js","assets/swapHorizontalBold-viUj96LV.js","assets/swapHorizontalRoundedBold-Dj0wYlCR.js","assets/swapVertical-Bgow5-wn.js","assets/solana-1dlmRVvw.js","assets/telegram-BdiAW_I5.js","assets/three-dots-Cosacs7y.js","assets/twitch-B0Aqrnn_.js","assets/x-C6laWtp8.js","assets/twitterIcon-_uPr6VKL.js","assets/user-BbUfr08h.js","assets/verify-Ce7_Y0x1.js","assets/verify-filled-BoRc9sOs.js","assets/wallet-B5J_-2I6.js","assets/walletconnect-BmoGfYfs.js","assets/wallet-placeholder-Dm5Fw1tM.js","assets/warning-circle-Dep-je9x.js","assets/info-DLY1rAh6.js","assets/exclamation-triangle-Osk8XCQj.js","assets/reown-logo-D2Z7Vw3B.js","assets/x-mark-D23ztDOX.js"])))=>i.map(i=>d[i]);
import { D as f$1, F as u, i as i$2, r as resetStyles, a as i$3, b, o as A, G as E, p as colorStyles, e as elementStyles } from './index-D0jSknNJ.js';
import { _ as __vitePreload } from './index-DKK9f8P8.js';

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
  add: async () => (await __vitePreload(async () => { const {addSvg} = await import('./add-C0wVF3cd.js');return { addSvg }},true?__vite__mapDeps([0,1,2,3]):void 0)).addSvg,
  allWallets: async () => (await __vitePreload(async () => { const {allWalletsSvg} = await import('./all-wallets-SF50N3qs.js');return { allWalletsSvg }},true?__vite__mapDeps([4,1,2,3]):void 0)).allWalletsSvg,
  arrowBottomCircle: async () => (await __vitePreload(async () => { const {arrowBottomCircleSvg} = await import('./arrow-bottom-circle-WnsDiS7B.js');return { arrowBottomCircleSvg }},true?__vite__mapDeps([5,1,2,3]):void 0)).arrowBottomCircleSvg,
  appStore: async () => (await __vitePreload(async () => { const {appStoreSvg} = await import('./app-store-BjTFqs66.js');return { appStoreSvg }},true?__vite__mapDeps([6,1,2,3]):void 0)).appStoreSvg,
  apple: async () => (await __vitePreload(async () => { const {appleSvg} = await import('./apple-Dn_UJ8Sc.js');return { appleSvg }},true?__vite__mapDeps([7,1,2,3]):void 0)).appleSvg,
  arrowBottom: async () => (await __vitePreload(async () => { const {arrowBottomSvg} = await import('./arrow-bottom-DZFdMv1z.js');return { arrowBottomSvg }},true?__vite__mapDeps([8,1,2,3]):void 0)).arrowBottomSvg,
  arrowLeft: async () => (await __vitePreload(async () => { const {arrowLeftSvg} = await import('./arrow-left-DGsC-dL9.js');return { arrowLeftSvg }},true?__vite__mapDeps([9,1,2,3]):void 0)).arrowLeftSvg,
  arrowRight: async () => (await __vitePreload(async () => { const {arrowRightSvg} = await import('./arrow-right-ChiAmPJO.js');return { arrowRightSvg }},true?__vite__mapDeps([10,1,2,3]):void 0)).arrowRightSvg,
  arrowTop: async () => (await __vitePreload(async () => { const {arrowTopSvg} = await import('./arrow-top-CfJxrjlO.js');return { arrowTopSvg }},true?__vite__mapDeps([11,1,2,3]):void 0)).arrowTopSvg,
  bank: async () => (await __vitePreload(async () => { const {bankSvg} = await import('./bank-ATRwyC3H.js');return { bankSvg }},true?__vite__mapDeps([12,1,2,3]):void 0)).bankSvg,
  browser: async () => (await __vitePreload(async () => { const {browserSvg} = await import('./browser-BmOvXFpA.js');return { browserSvg }},true?__vite__mapDeps([13,1,2,3]):void 0)).browserSvg,
  bin: async () => (await __vitePreload(async () => { const {binSvg} = await import('./bin-BfqWxA-T.js');return { binSvg }},true?__vite__mapDeps([14,1,2,3]):void 0)).binSvg,
  bitcoin: async () => (await __vitePreload(async () => { const {bitcoinSvg} = await import('./bitcoin-vKiPJo8s.js');return { bitcoinSvg }},true?__vite__mapDeps([15,1,2,3]):void 0)).bitcoinSvg,
  card: async () => (await __vitePreload(async () => { const {cardSvg} = await import('./card-BLiKeiDo.js');return { cardSvg }},true?__vite__mapDeps([16,1,2,3]):void 0)).cardSvg,
  checkmark: async () => (await __vitePreload(async () => { const {checkmarkSvg} = await import('./checkmark-C0CuRwsA.js');return { checkmarkSvg }},true?__vite__mapDeps([17,1,2,3]):void 0)).checkmarkSvg,
  checkmarkBold: async () => (await __vitePreload(async () => { const {checkmarkBoldSvg} = await import('./checkmark-bold-C_zCIaLj.js');return { checkmarkBoldSvg }},true?__vite__mapDeps([18,1,2,3]):void 0)).checkmarkBoldSvg,
  chevronBottom: async () => (await __vitePreload(async () => { const {chevronBottomSvg} = await import('./chevron-bottom-BGfTZfOd.js');return { chevronBottomSvg }},true?__vite__mapDeps([19,1,2,3]):void 0)).chevronBottomSvg,
  chevronLeft: async () => (await __vitePreload(async () => { const {chevronLeftSvg} = await import('./chevron-left-BaG57bT1.js');return { chevronLeftSvg }},true?__vite__mapDeps([20,1,2,3]):void 0)).chevronLeftSvg,
  chevronRight: async () => (await __vitePreload(async () => { const {chevronRightSvg} = await import('./chevron-right-3vDj-JEg.js');return { chevronRightSvg }},true?__vite__mapDeps([21,1,2,3]):void 0)).chevronRightSvg,
  chevronTop: async () => (await __vitePreload(async () => { const {chevronTopSvg} = await import('./chevron-top-CuQwtNKE.js');return { chevronTopSvg }},true?__vite__mapDeps([22,1,2,3]):void 0)).chevronTopSvg,
  chromeStore: async () => (await __vitePreload(async () => { const {chromeStoreSvg} = await import('./chrome-store-BNJfatBo.js');return { chromeStoreSvg }},true?__vite__mapDeps([23,1,2,3]):void 0)).chromeStoreSvg,
  clock: async () => (await __vitePreload(async () => { const {clockSvg} = await import('./clock-B2w-bqFN.js');return { clockSvg }},true?__vite__mapDeps([24,1,2,3]):void 0)).clockSvg,
  close: async () => (await __vitePreload(async () => { const {closeSvg} = await import('./close-C7e33kZ2.js');return { closeSvg }},true?__vite__mapDeps([25,1,2,3]):void 0)).closeSvg,
  compass: async () => (await __vitePreload(async () => { const {compassSvg} = await import('./compass-DPG7Sa3f.js');return { compassSvg }},true?__vite__mapDeps([26,1,2,3]):void 0)).compassSvg,
  coinPlaceholder: async () => (await __vitePreload(async () => { const {coinPlaceholderSvg} = await import('./coinPlaceholder-BluBrHLk.js');return { coinPlaceholderSvg }},true?__vite__mapDeps([27,1,2,3]):void 0)).coinPlaceholderSvg,
  copy: async () => (await __vitePreload(async () => { const {copySvg} = await import('./copy-DCD4J9NV.js');return { copySvg }},true?__vite__mapDeps([28,1,2,3]):void 0)).copySvg,
  cursor: async () => (await __vitePreload(async () => { const {cursorSvg} = await import('./cursor-BPho7Hqs.js');return { cursorSvg }},true?__vite__mapDeps([29,1,2,3]):void 0)).cursorSvg,
  cursorTransparent: async () => (await __vitePreload(async () => { const {cursorTransparentSvg} = await import('./cursor-transparent-DGre3jOc.js');return { cursorTransparentSvg }},true?__vite__mapDeps([30,1,2,3]):void 0)).cursorTransparentSvg,
  circle: async () => (await __vitePreload(async () => { const {circleSvg} = await import('./circle-7cEZix2r.js');return { circleSvg }},true?__vite__mapDeps([31,1,2,3]):void 0)).circleSvg,
  desktop: async () => (await __vitePreload(async () => { const {desktopSvg} = await import('./desktop-Bbd9lyQc.js');return { desktopSvg }},true?__vite__mapDeps([32,1,2,3]):void 0)).desktopSvg,
  disconnect: async () => (await __vitePreload(async () => { const {disconnectSvg} = await import('./disconnect-D0ijCKib.js');return { disconnectSvg }},true?__vite__mapDeps([33,1,2,3]):void 0)).disconnectSvg,
  discord: async () => (await __vitePreload(async () => { const {discordSvg} = await import('./discord-DraCAKhP.js');return { discordSvg }},true?__vite__mapDeps([34,1,2,3]):void 0)).discordSvg,
  ethereum: async () => (await __vitePreload(async () => { const {ethereumSvg} = await import('./ethereum-B7z2HHyK.js');return { ethereumSvg }},true?__vite__mapDeps([35,1,2,3]):void 0)).ethereumSvg,
  etherscan: async () => (await __vitePreload(async () => { const {etherscanSvg} = await import('./etherscan-BMNmyQ6Y.js');return { etherscanSvg }},true?__vite__mapDeps([36,1,2,3]):void 0)).etherscanSvg,
  extension: async () => (await __vitePreload(async () => { const {extensionSvg} = await import('./extension-BrKlHWSf.js');return { extensionSvg }},true?__vite__mapDeps([37,1,2,3]):void 0)).extensionSvg,
  externalLink: async () => (await __vitePreload(async () => { const {externalLinkSvg} = await import('./external-link-C_jEZ75n.js');return { externalLinkSvg }},true?__vite__mapDeps([38,1,2,3]):void 0)).externalLinkSvg,
  facebook: async () => (await __vitePreload(async () => { const {facebookSvg} = await import('./facebook-C5jMSKx8.js');return { facebookSvg }},true?__vite__mapDeps([39,1,2,3]):void 0)).facebookSvg,
  farcaster: async () => (await __vitePreload(async () => { const {farcasterSvg} = await import('./farcaster--OUitPOv.js');return { farcasterSvg }},true?__vite__mapDeps([40,1,2,3]):void 0)).farcasterSvg,
  filters: async () => (await __vitePreload(async () => { const {filtersSvg} = await import('./filters-CMI2LbbU.js');return { filtersSvg }},true?__vite__mapDeps([41,1,2,3]):void 0)).filtersSvg,
  github: async () => (await __vitePreload(async () => { const {githubSvg} = await import('./github-DlmjsE5G.js');return { githubSvg }},true?__vite__mapDeps([42,1,2,3]):void 0)).githubSvg,
  google: async () => (await __vitePreload(async () => { const {googleSvg} = await import('./google-CW-WhYdZ.js');return { googleSvg }},true?__vite__mapDeps([43,1,2,3]):void 0)).googleSvg,
  helpCircle: async () => (await __vitePreload(async () => { const {helpCircleSvg} = await import('./help-circle-DI30dIyL.js');return { helpCircleSvg }},true?__vite__mapDeps([44,1,2,3]):void 0)).helpCircleSvg,
  image: async () => (await __vitePreload(async () => { const {imageSvg} = await import('./image-BkYSguV_.js');return { imageSvg }},true?__vite__mapDeps([45,1,2,3]):void 0)).imageSvg,
  id: async () => (await __vitePreload(async () => { const {idSvg} = await import('./id-BjPQtdli.js');return { idSvg }},true?__vite__mapDeps([46,1,2,3]):void 0)).idSvg,
  infoCircle: async () => (await __vitePreload(async () => { const {infoCircleSvg} = await import('./info-circle-CivRqnry.js');return { infoCircleSvg }},true?__vite__mapDeps([47,1,2,3]):void 0)).infoCircleSvg,
  lightbulb: async () => (await __vitePreload(async () => { const {lightbulbSvg} = await import('./lightbulb-BVO14YB2.js');return { lightbulbSvg }},true?__vite__mapDeps([48,1,2,3]):void 0)).lightbulbSvg,
  mail: async () => (await __vitePreload(async () => { const {mailSvg} = await import('./mail-Ds5NycK9.js');return { mailSvg }},true?__vite__mapDeps([49,1,2,3]):void 0)).mailSvg,
  mobile: async () => (await __vitePreload(async () => { const {mobileSvg} = await import('./mobile-V46BMOM7.js');return { mobileSvg }},true?__vite__mapDeps([50,1,2,3]):void 0)).mobileSvg,
  more: async () => (await __vitePreload(async () => { const {moreSvg} = await import('./more-ErB6wnXC.js');return { moreSvg }},true?__vite__mapDeps([51,1,2,3]):void 0)).moreSvg,
  networkPlaceholder: async () => (await __vitePreload(async () => { const {networkPlaceholderSvg} = await import('./network-placeholder-BDo9L5AG.js');return { networkPlaceholderSvg }},true?__vite__mapDeps([52,1,2,3]):void 0)).networkPlaceholderSvg,
  nftPlaceholder: async () => (await __vitePreload(async () => { const {nftPlaceholderSvg} = await import('./nftPlaceholder-RguahCHk.js');return { nftPlaceholderSvg }},true?__vite__mapDeps([53,1,2,3]):void 0)).nftPlaceholderSvg,
  off: async () => (await __vitePreload(async () => { const {offSvg} = await import('./off-DlWvdFqw.js');return { offSvg }},true?__vite__mapDeps([54,1,2,3]):void 0)).offSvg,
  playStore: async () => (await __vitePreload(async () => { const {playStoreSvg} = await import('./play-store-bpB79ULA.js');return { playStoreSvg }},true?__vite__mapDeps([55,1,2,3]):void 0)).playStoreSvg,
  plus: async () => (await __vitePreload(async () => { const {plusSvg} = await import('./plus-VauOqo8B.js');return { plusSvg }},true?__vite__mapDeps([56,1,2,3]):void 0)).plusSvg,
  qrCode: async () => (await __vitePreload(async () => { const {qrCodeIcon} = await import('./qr-code-BSz-IYL0.js');return { qrCodeIcon }},true?__vite__mapDeps([57,1,2,3]):void 0)).qrCodeIcon,
  recycleHorizontal: async () => (await __vitePreload(async () => { const {recycleHorizontalSvg} = await import('./recycle-horizontal-CzTwVVCQ.js');return { recycleHorizontalSvg }},true?__vite__mapDeps([58,1,2,3]):void 0)).recycleHorizontalSvg,
  refresh: async () => (await __vitePreload(async () => { const {refreshSvg} = await import('./refresh-zQw4UV0z.js');return { refreshSvg }},true?__vite__mapDeps([59,1,2,3]):void 0)).refreshSvg,
  search: async () => (await __vitePreload(async () => { const {searchSvg} = await import('./search-ZBUrsQJZ.js');return { searchSvg }},true?__vite__mapDeps([60,1,2,3]):void 0)).searchSvg,
  send: async () => (await __vitePreload(async () => { const {sendSvg} = await import('./send-DbvCZ7Su.js');return { sendSvg }},true?__vite__mapDeps([61,1,2,3]):void 0)).sendSvg,
  swapHorizontal: async () => (await __vitePreload(async () => { const {swapHorizontalSvg} = await import('./swapHorizontal-quyR4uNo.js');return { swapHorizontalSvg }},true?__vite__mapDeps([62,1,2,3]):void 0)).swapHorizontalSvg,
  swapHorizontalMedium: async () => (await __vitePreload(async () => { const {swapHorizontalMediumSvg} = await import('./swapHorizontalMedium-56Ndekga.js');return { swapHorizontalMediumSvg }},true?__vite__mapDeps([63,1,2,3]):void 0)).swapHorizontalMediumSvg,
  swapHorizontalBold: async () => (await __vitePreload(async () => { const {swapHorizontalBoldSvg} = await import('./swapHorizontalBold-viUj96LV.js');return { swapHorizontalBoldSvg }},true?__vite__mapDeps([64,1,2,3]):void 0)).swapHorizontalBoldSvg,
  swapHorizontalRoundedBold: async () => (await __vitePreload(async () => { const {swapHorizontalRoundedBoldSvg} = await import('./swapHorizontalRoundedBold-Dj0wYlCR.js');return { swapHorizontalRoundedBoldSvg }},true?__vite__mapDeps([65,1,2,3]):void 0)).swapHorizontalRoundedBoldSvg,
  swapVertical: async () => (await __vitePreload(async () => { const {swapVerticalSvg} = await import('./swapVertical-Bgow5-wn.js');return { swapVerticalSvg }},true?__vite__mapDeps([66,1,2,3]):void 0)).swapVerticalSvg,
  solana: async () => (await __vitePreload(async () => { const {solanaSvg} = await import('./solana-1dlmRVvw.js');return { solanaSvg }},true?__vite__mapDeps([67,1,2,3]):void 0)).solanaSvg,
  telegram: async () => (await __vitePreload(async () => { const {telegramSvg} = await import('./telegram-BdiAW_I5.js');return { telegramSvg }},true?__vite__mapDeps([68,1,2,3]):void 0)).telegramSvg,
  threeDots: async () => (await __vitePreload(async () => { const {threeDotsSvg} = await import('./three-dots-Cosacs7y.js');return { threeDotsSvg }},true?__vite__mapDeps([69,1,2,3]):void 0)).threeDotsSvg,
  twitch: async () => (await __vitePreload(async () => { const {twitchSvg} = await import('./twitch-B0Aqrnn_.js');return { twitchSvg }},true?__vite__mapDeps([70,1,2,3]):void 0)).twitchSvg,
  twitter: async () => (await __vitePreload(async () => { const {xSvg} = await import('./x-C6laWtp8.js');return { xSvg }},true?__vite__mapDeps([71,1,2,3]):void 0)).xSvg,
  twitterIcon: async () => (await __vitePreload(async () => { const {twitterIconSvg} = await import('./twitterIcon-_uPr6VKL.js');return { twitterIconSvg }},true?__vite__mapDeps([72,1,2,3]):void 0)).twitterIconSvg,
  user: async () => (await __vitePreload(async () => { const {userSvg} = await import('./user-BbUfr08h.js');return { userSvg }},true?__vite__mapDeps([73,1,2,3]):void 0)).userSvg,
  verify: async () => (await __vitePreload(async () => { const {verifySvg} = await import('./verify-Ce7_Y0x1.js');return { verifySvg }},true?__vite__mapDeps([74,1,2,3]):void 0)).verifySvg,
  verifyFilled: async () => (await __vitePreload(async () => { const {verifyFilledSvg} = await import('./verify-filled-BoRc9sOs.js');return { verifyFilledSvg }},true?__vite__mapDeps([75,1,2,3]):void 0)).verifyFilledSvg,
  wallet: async () => (await __vitePreload(async () => { const {walletSvg} = await import('./wallet-B5J_-2I6.js');return { walletSvg }},true?__vite__mapDeps([76,1,2,3]):void 0)).walletSvg,
  walletConnect: async () => (await __vitePreload(async () => { const {walletConnectSvg} = await import('./walletconnect-BmoGfYfs.js');return { walletConnectSvg }},true?__vite__mapDeps([77,1,2,3]):void 0)).walletConnectSvg,
  walletConnectLightBrown: async () => (await __vitePreload(async () => { const {walletConnectLightBrownSvg} = await import('./walletconnect-BmoGfYfs.js');return { walletConnectLightBrownSvg }},true?__vite__mapDeps([77,1,2,3]):void 0)).walletConnectLightBrownSvg,
  walletConnectBrown: async () => (await __vitePreload(async () => { const {walletConnectBrownSvg} = await import('./walletconnect-BmoGfYfs.js');return { walletConnectBrownSvg }},true?__vite__mapDeps([77,1,2,3]):void 0)).walletConnectBrownSvg,
  walletPlaceholder: async () => (await __vitePreload(async () => { const {walletPlaceholderSvg} = await import('./wallet-placeholder-Dm5Fw1tM.js');return { walletPlaceholderSvg }},true?__vite__mapDeps([78,1,2,3]):void 0)).walletPlaceholderSvg,
  warningCircle: async () => (await __vitePreload(async () => { const {warningCircleSvg} = await import('./warning-circle-Dep-je9x.js');return { warningCircleSvg }},true?__vite__mapDeps([79,1,2,3]):void 0)).warningCircleSvg,
  x: async () => (await __vitePreload(async () => { const {xSvg} = await import('./x-C6laWtp8.js');return { xSvg }},true?__vite__mapDeps([71,1,2,3]):void 0)).xSvg,
  info: async () => (await __vitePreload(async () => { const {infoSvg} = await import('./info-DLY1rAh6.js');return { infoSvg }},true?__vite__mapDeps([80,1,2,3]):void 0)).infoSvg,
  exclamationTriangle: async () => (await __vitePreload(async () => { const {exclamationTriangleSvg} = await import('./exclamation-triangle-Osk8XCQj.js');return { exclamationTriangleSvg }},true?__vite__mapDeps([81,1,2,3]):void 0)).exclamationTriangleSvg,
  reown: async () => (await __vitePreload(async () => { const {reownSvg} = await import('./reown-logo-D2Z7Vw3B.js');return { reownSvg }},true?__vite__mapDeps([82,1,2,3]):void 0)).reownSvg,
  "x-mark": async () => (await __vitePreload(async () => { const {xMarkSvg} = await import('./x-mark-D23ztDOX.js');return { xMarkSvg }},true?__vite__mapDeps([83,1,2,3]):void 0)).xMarkSvg
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
