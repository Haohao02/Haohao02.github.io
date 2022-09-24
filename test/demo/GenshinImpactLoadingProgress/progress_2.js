(function (_) {
    const version = 2.2;
    const StringTable = {
        export_name: 'GenshinImpactLoadingProgressClass',

        0xC002: 'GenshinImpactLoadingProgressWrapperClass',
        0xC003: 'GenshinImpactLoadingProgressMainClass',
        0xC004: 'GenshinImpactLoadingProgressMainClass-Empty',
        0xC005: 'GenshinImpactLoadingProgressMainClass-Full',
        0xC006: 'GenshinImpactLoadingProgressBackdropClass',
        0xC007: 'GenshinImpactLoadingProgressEventFilterClass',

        0xE002: `Class is already defined, only one version of v1 and v2 can be selected.`,
        0xE003: `Invalid paramter`,
        0xE005: `Internal Error`,
        0xE007: `Cannot set NaN as value`,
    };
    let GenshinElements = {
        order: ['pyro', 'hydro', 'anemo', 'electro', 'dendro', 'cryo', 'geo'],
        color: { full: '#666666', empty: '#F6F6F6' },
        // size: 64,
        source: 'https://www.iconfont.cn/collections/detail?cid=34264',

        pyro: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M724 458.67s-55.333-42.667-76-133.333c0 0-35.333 26-41.333 79.333 0 0-4.001 44.667 28.666 72.667 0 0 16 23.334 18 41.334 0 0-62-51.334-77.333-115.334 0 0-14.001-32.667 13.333-116.667 0 0-77.333 48-89.333 103.333 0 0-7.69 35.452 27.333 69.333 0 0-46.667-26.666-45.333-73.333 0 0-1.334-44 71.333-101.333 0 0 34-25.333 6.667-80.667 0 0-42-73.342-64-88.004 0 0 10 56-77 155 0 0-27 39-28 82 0 0-6 77 121 120 0 0 153 46 160 139 0 0 27 84-69 132 0 0-91 46-159-9 0 0-43.666-60.666 27.667-108.333 0 0-82-25.666-101 48.667 0 0-7.667 52.667 64.667 85 0 0 84 42.034 185 1.684S744.998 665.667 749.331 621c0 0 9-44-22-109 0 0 75 39.334 74 105.667 0 0 6.334 56.994-93.333 112.661S644.666 756.667 512 848.667c0 0-85-57.917-222-126.167 0 0-66.667-34.166-71.667-105.166 0 0-7-66.333 81.333-118.667 0 0-52.667 57.667-43.667 113 0 0 3.667 75.167 118.5 126.333 0 0-58.5-50.001-39.75-128.501 0 0 25.53-116.166 175.057-122.166 0 0-162.141-48.661-158.807-154.995 0 0-17 44.323-96 138.323 0 0-54 62.004-71 128.004 0 0-16 59.333 9 88.333 0 0 20 35.5 122.5 89 0 0 73 37 196.5 134.5 0 0 43.333-53.166 197.333-137.166 0 0 101.333-46 120-128.667 0.001 0.002 21.335-91.328-105.332-185.995z"></path><path d="M623.5 634c-3.5-75-66.5-97-66.5-97-118.5-36-150.5 61.5-150.5 61.5C507 553.5 545 626 545 626c28 42-5 86-5 86 82-26 83.5-78 83.5-78z"></path></svg>',
        hydro: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M889.071 478.092c-3-118.494-116.404-325.425-347.071-340.758S181.5 300 175 340.5s23.5 53.597 23.5 53.597c30 20.597 62.103 0 62.103 0 117.269-159.239 271.372-135.428 271.372-135.428 294.641 37.333 284.692 307.998 284.692 307.998C815.334 752 652.5 830 652.5 830 809 730.5 772 568 772 568c-45-230-260-221.333-260-221.333-78.667 2-108.333 25-108.333 25C374 394 386 427 386 427c11 45 58 36 58 36 49-19 87.975-10 87.975-10C725.949 486 714 664.667 714 664.667 691.333 852.668 512 854 512 854c-95.333 9.333-219.898-59.424-219.898-59.424 37.498 92.995 239.473 94.495 239.473 94.495 392.464-53.997 357.496-410.979 357.496-410.979z"></path><path d="M498 644s36.5-4 45.5 49.5c0 0 16 45.5 65.5 29.5 0 0 37-9.5 28-71.5 0 0-19-87.5-125-92 0 0-114.5-5.961-136.5 124.77 0 0-6 133.23 136.5 144.73 0 0 69.5-1 108-55.5 0 0 8.833-10.334 7.5-14 0 0 0.5-3-6.5 2.5s-25.5 48.5-109 47c0 0-71-3-88.5-81 0 0-9.5-80 74.5-84z"></path><path d="M189 518.735m-53 0a53 53 0 1 0 106 0 53 53 0 1 0-106 0Z"></path><path d="M257 684m-37 0a37 37 0 1 0 74 0 37 37 0 1 0-74 0Z"></path></svg>',
        anemo: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M436.667 611.334c27.604 60.544-60.667 62-60.667 62 1.333 33.333 38.667 34.667 38.667 34.667 56-8 50.667-66.667 50.667-66.667-2-93.334-142-90.667-142-90.667-115.333 10.667-196-132-196-132-31.333 109.998 22 167.334 22 167.334 81.132 92 208 13.333 208 13.333 59.999-34.667 79.333 12 79.333 12zM471 512c-205-186-91-361-91-361-7-9-145.5 57-122 190 24.384 138.002 213 171 213 171z"></path><path d="M615.965 718.018l-21.334 13.334s-80-15.346-76.334-79.346c0 0-3.332-106.669 184.334-125.336 0 0 218.334-28.67 100.334-264.67 0 0-1 185.523-213 259.262 0 0-71.965 37.738-84.483 88.738C492.964 559 421 521.262 421 521.262 209 447.523 208 262 208 262 90 498 308.333 526.67 308.333 526.67c187.665 18.667 184.333 125.336 184.333 125.336 3.667 64-76.333 79.346-76.333 79.346L395 718.018c-21-3-31.333 5.329-31.333 5.329 108 95.343 141.815 196.334 141.815 196.334s33.815-100.991 141.815-196.334c0 0-10.332-8.329-31.332-5.329zM505.482 848.343c-3.518-12.666-34.148-56.676-34.148-56.676 19.667-7.666 34.148-23 34.148-23s14.481 15.334 34.149 23c0 0-30.631 44.01-34.149 56.676z m0-107.01c-23.851 31-61.148 16.667-61.148 16.667 43.333-7.667 61.148-51.667 61.148-51.667s17.815 44 61.149 51.667c0 0-37.297 14.333-61.149-16.667z"></path><path d="M752.965 341c23.5-133-115-199-122-190 0 0 114 175-91 361 0 0 188.615-32.998 213-171zM883.631 418.667s-80.666 142.667-196 132c0 0-140-2.667-142 90.667 0 0-5.334 58.667 50.666 66.667 0 0 37.334-1.334 38.668-34.667 0 0-88.271-1.456-60.668-62 0 0 19.334-46.667 79.334-12 0 0 126.867 78.667 208-13.333 0 0 53.334-57.337 22-167.334z"></path></svg>',
        electro: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M506.482 707.444s-60.077-91.746 14.887-164.088l0.082 0.273s61.361-56.949 118.21-28.747c56.849 28.203 39.907 81.545 28.884 105.973 0 0 106.062-30.37 129.396-145.455 0 0 13.834-61.294-12.812-149.81 0 0 49.431 22.38 105.318 136.246 0 0-17.828-155.785-146.725-252.528 0 0-105.854-81.322-231.335-76.981 0 0 260.969 111.988 171.63 286.729 0 0-49.416 97.901-149.548 69.152l0.196-0.208s-80-24.666-84-87.999 50.667-75.333 77.333-78c0 0-79.333-76.667-190.667-39.333 0 0-60 18.667-123.333 86 0 0-5.333-53.998 65.333-159.332 0 0-126 93.332-145.333 253.332 0 0-17.5 132.332 49 238.832 0 0-33.5-282 162.5-292 0 0 109.491-6.154 134.66 94.936l-0.277-0.066s18.639 81.615-34.209 116.746c-52.849 35.131-90.574-6.212-106.217-27.972 0 0-26.729 107.037 61.27 184.788 0 0 46.166 42.628 136.145 63.81 0 0-44.098 31.618-170.652 23.085 0 0 143.828 62.453 292.059-0.803 0 0 123.354-51.011 182.335-161.852 0 0.001-227.469 170.013-334.13 5.272z"></path></svg>',
        dendro: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.572 316.734V317c0.073-0.044 0.142-0.089 0.214-0.133L512 317v-0.266c127.394-77.83 8.078-196.516 0-204.324V112l-0.214 0.204-0.214-0.204v0.41c-8.078 7.809-127.394 126.494 0 204.324zM287.5 580s21-21.75 59.75-10c0 0 36.25 11 58.5 29.25 0 0 52.5 31 64 35 0 0-81-66.5-92.5-133.5 0 0-9.75-77.75 81.75-71.75 0 0-10-44.5-78.5-41 0 0-73-2.5-82 82.5 0 0-2.25 31 35.75 71.75 0 0-40-5.25-46.75 37.75z"></path><path d="M824.572 530c11-113.5-45.5-169-45.5-169 98 31 105.5-91.5 105.5-91.5-130-21.5-116.5 79.5-116.5 79.5-145-126-243-5-243-5-13 24 27.5 48 27.5 48 18.5-56 80.5-51.5 80.5-51.5 145 1.5 142.5 142 142.5 142 1.5 140-122.5 184-122.5 184-112.15 41.643-138.757 94.765-141.286 100.34-2.53-5.575-29.136-58.697-141.286-100.34 0 0-124-44-122.5-184 0 0-2.5-140.5 142.5-142 0 0 62-4.5 80.5 51.5 0 0 40.5-24 27.5-48 0 0-98-121-243 5 0 0 13.5-101-116.5-79.5 0 0 7.5 122.5 105.5 91.5 0 0-56.5 55.5-45.5 169 0 0-36.5-48-87 21 0 0 62.5 51 89.5-8 0 0 13.5 99 114.5 159 0 0 54.25 38.75 96.5 54.25 0 0 57.766 21.61 99.072 128.65v1.099c0.071-0.186 0.143-0.364 0.214-0.549 0.071 0.185 0.143 0.363 0.214 0.549V884.9c41.305-107.04 99.072-128.65 99.072-128.65 42.25-15.5 96.5-54.25 96.5-54.25 101-60 114.5-159 114.5-159 27 59 89.5 8 89.5 8-50.5-69-87-21-87-21z"></path><path d="M553.822 634.25c11.5-4 64-35 64-35 22.25-18.25 58.5-29.25 58.5-29.25 38.75-11.75 59.75 10 59.75 10-6.75-43-46.75-37.75-46.75-37.75 38-40.75 35.75-71.75 35.75-71.75-9-85-82-82.5-82-82.5-68.5-3.5-78.5 41-78.5 41 91.5-6 81.75 71.75 81.75 71.75-11.5 67-92.5 133.5-92.5 133.5z"></path></svg>',
        cryo: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M475 257s35.999-28 37-39V97s-72 148-108 192l34-10s49.999 43 74 184v-91s-20-101-37-115zM512 97v121c1.001 11 37 39 37 39-17 14-37 115-37 115v91c24.001-141 74-184 74-184l34 10C584 245 512 97 512 97z"></path><path d="M492.592 409.814l-42.58-18.126-0.012-0.021-0.002 0.015-0.015-0.006 0.013 0.022-5.33 45.969s59.007 56.596 67.194 60.545l0.064 0.111 0.004-0.077 0.07 0.035-0.065-0.113c0.624-9.067-19.341-88.354-19.341-88.354zM702.324 345.598s42.248 17.176 52.274 12.542l104.789-60.5s-164.171 11.646-220.276 2.47l25.66 24.445s-12.239 64.8-122.349 156.085l78.809-45.5c0 0.001 77.469-67.819 81.093-89.542zM859.389 297.641l-104.789 60.5c-9.026 6.367-15.275 51.543-15.275 51.543-20.624-7.723-118.093 25.457-118.093 25.457l-78.809 45.5c134.11-49.714 196.349-27.914 196.349-27.914l8.34 34.445c20.105-53.177 112.277-189.531 112.277-189.531z"></path><path d="M578.779 437.241l-5.592-45.938 0.012-0.021-0.014 0.006-0.002-0.016-0.013 0.022-42.476 18.369s-19.51 79.399-18.836 88.464l-0.063 0.111c0.021-0.009 0.047-0.024 0.068-0.035 0.002 0.024 0.002 0.055 0.005 0.078l0.065-0.113c8.165-3.995 66.846-60.927 66.846-60.927z"></path><path d="M739.258 586.766s6.249 45.176 15.275 51.542l104.789 60.5s-92.172-136.353-112.277-189.53l-8.34 34.445s-62.238 21.801-196.348-27.914l78.808 45.5s97.469 33.179 118.093 25.457z"></path><path d="M859.322 698.809L754.533 638.31c-10.026-4.634-52.275 12.542-52.275 12.542-3.624-21.722-81.093-89.543-81.093-89.543l-78.809-45.5c110.109 91.286 122.349 156.086 122.349 156.086l-25.66 24.445c56.105-9.177 220.277 2.469 220.277 2.469zM598.121 525.594l36.987-27.812h0.024l-0.012-0.009 0.013-0.01h-0.025l-37.146-27.6s-78.517 22.804-86.03 27.919l-0.128 0.001 0.064 0.042-0.065 0.043h0.131c7.541 5.073 86.187 27.426 86.187 27.426z"></path><path d="M548.868 739.335s-35.999 28-37 39v121s71.999-148 108-192l-34 10s-50-43-74-183.999v90.999s20 101 37 115zM511.868 899.335l-0.001-120.999c-1-11-37-39.001-37-39.001 17-13.999 37-115 37-115v-91c-24.001 141-74 184-74 184l-34-10c36 44.001 108.001 192 108.001 192z"></path><path d="M531.275 586.521l42.579 18.126 0.013 0.021 0.002-0.015 0.015 0.007-0.013-0.022 5.329-45.97s-59.007-56.596-67.193-60.544l-0.065-0.111c-0.002 0.022-0.002 0.053-0.003 0.077l-0.07-0.035 0.066 0.113c-0.624 9.067 19.34 88.353 19.34 88.353z"></path><path d="M321.544 650.737s-42.248-17.176-52.275-12.542l-104.789 60.5s164.171-11.647 220.277-2.47l-25.66-24.445s12.239-64.801 122.348-156.085l-78.808 45.499s-77.469 67.821-81.093 89.543z"></path><path d="M164.48 698.694l104.788-60.5c9.026-6.367 15.276-51.543 15.276-51.543 20.623 7.723 118.093-25.457 118.093-25.457l78.808-45.5c-134.11 49.714-196.349 27.914-196.349 27.914l-8.34-34.446C256.65 562.34 164.48 698.694 164.48 698.694zM445.088 559.095l5.592 45.938-0.012 0.021 0.014-0.006 0.001 0.017 0.013-0.022 42.476-18.37s19.51-79.399 18.836-88.463l0.063-0.112c-0.021 0.009-0.048 0.024-0.068 0.035l-0.004-0.078-0.065 0.114c-8.164 3.993-66.846 60.926-66.846 60.926z"></path><path d="M284.61 409.57s-6.25-45.176-15.276-51.542l-104.789-60.5s92.173 136.353 112.277 189.53l8.34-34.445s62.238-21.801 196.347 27.914l-78.807-45.5c0.001 0-97.468-33.179-118.092-25.457zM164.546 297.527l104.788 60.499c10.027 4.633 52.276-12.542 52.276-12.542 3.624 21.722 81.093 89.543 81.093 89.543l78.808 45.5c-110.108-91.286-122.349-156.086-122.349-156.086l25.661-24.445c-56.106 9.176-220.277-2.469-220.277-2.469z"></path><path d="M425.747 470.741l-36.987 27.812h-0.024l0.012 0.009-0.014 0.01h0.026l37.147 27.6s78.517-22.803 86.029-27.918l0.129-0.001-0.065-0.042c0.02-0.014 0.046-0.029 0.066-0.042h-0.132c-7.541-5.074-86.187-27.428-86.187-27.428z"></path></svg>',
        geo: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 123S364 228 255 362c0 0 31 109 65 164 0 0 126.999-138 192-153 0 0 65 52 79 103 0 0-83 77-91 84 0 0 14 21 31 38 0 0 109-77 135-114 0 0-56.001-111-154-205 0 0-137 113-165 140 0 0 6.999-92 165-253 0 0 196 207 284 457 0 0 52-62.334 80-111 0 0-123-224-364-389z"></path><path d="M512 651s-65-52-79-103c0 0 83-77 91-84 0 0-14-21-31-38 0 0-109 77-135 114 0 0 56.001 111 154 205 0 0 137-113 165-140 0 0-6.999 92-165 253 0 0-196-207-284-457 0 0-52 62.334-80 111 0 0 123 224 364 389 0 0 148-105 257-239 0 0-31-109-65-164 0 0-126.999 138-192 153z"></path></svg>',

        createElement: function (svg, size, color = '#000000') {
            if (typeof svg !== 'string' ||
                (typeof size !== 'number' && size != null) ||
                (typeof color !== 'string' && color != null)) {
                throw new TypeError(StringTable[0xE003]);
            }
            let el = document.createElement('span');

            el.innerHTML = svg;
            if (el.querySelector('svg path') == null/* or undefined (not bug) */) {
                throw new TypeError(StringTable[0xE003] + ' "svg"');
            }
            let svgs = el.querySelectorAll('svg');
            for (let i of svgs) {
                if (size) {
                    el.style.width = el.style.height =
                    i.style.width = i.style.height =
                        size + 'px';
                }
                if (color) {
                    let paths = i.querySelectorAll('path');
                    for (let j of paths) {
                        j.setAttribute('fill', color);
                    }
                }
            }

            return el;
        }
    };
    const password = (function () {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }); 
    }());

    if (typeof (_[StringTable.export_name]) !== 'undefined') {
        throw new Error(StringTable[0xE002]);
    }

    class Progress {
        constructor(parent = null) {
            const _defattr = (attr, initval = 0) => defprop(this, attr, { value: initval, writable: true });
            _defattr('elem_root');
            _defattr('elem_ch1F');
            // _defattr('elem_ch1E');
            _defattr('elem_bkdp');
            _defattr('elem_evft');
            // _defattr('__value__', 0);
            // _defattr('__min__', 0);
            // _defattr('__max__', 100);
            
            this.__elem_root__ = document.createElement('div');
            this.__elem_ch1F__ = document.createElement('div');
            // this.elem_ch1E = document.createElement('div');
            this.__elem_bkdp__ = document.createElement('div');
            this.__elem_evft__ = document.createElement('div');

            this.__elem_root__.classList.add(StringTable[0xC002]);
            this.__elem_ch1F__.classList.add(StringTable[0xC003]);
            this.__elem_ch1F__.classList.add(StringTable[0xC005]);
            // this.elem_ch1E.classList.add(StringTable[0xC003]);
            // this.elem_ch1E.classList.add(StringTable[0xC004]);
            this.__elem_bkdp__.classList.add(StringTable[0xC006]);
            this.__elem_evft__.classList.add(StringTable[0xC007]);

            this.__elem_root__.contentEditable = 'false';

            this.__elem_root__.append(this.__elem_ch1F__);
            // this.elem_root.append(this.elem_ch1E);
            this.__elem_root__.append(this.__elem_bkdp__);
            this.__elem_root__.append(this.__elem_evft__);

            (parent || document.body || document.documentElement).append(this.__elem_root__);

            // for (let col of [GenshinElements.color.full, GenshinElements.color.empty])
            for (let i of GenshinElements.order) {
                let svg = GenshinElements[i];
                let el = GenshinElements.createElement(svg, null,
                    GenshinElements.color.full);
                this.__elem_ch1F__.append(el);
            }

            this.__elem_root__.style.display = 'none';


        }

        __elem_root__ = null;
        __elem_ch1F__ = null;
        __elem_bkdp__ = null;
        __elem_evft__ = null;

        #value = 0;
        #min = 0;
        #max = 100;

        get value() {
            return this.#value;
        }
        get min() {
            return this.#min;
        }
        get max() {
            return this.#max;
        }

        set min(newValue) {
            if (
                typeof newValue !== 'number' ||
                newValue > this.#max
            ) throw new TypeError(StringTable[0xE003]);
            if (isNaN(newValue)) throw new TypeError(StringTable[0xE007]);
            this.#min = newValue;
            this.redraw();
        }
        set max(newValue) {
            if (
                typeof newValue !== 'number' ||
                newValue < this.#min
            ) throw new TypeError(StringTable[0xE003]);
            if (isNaN(newValue)) throw new TypeError(StringTable[0xE007]);
            this.#max = newValue;
            this.redraw();
        }
        set value(newValue) {
            if (
                typeof newValue !== 'number' ||
                newValue < this.#min || newValue > this.#max
            ) throw new TypeError(StringTable[0xE003]);
            if (isNaN(newValue)) throw new TypeError(StringTable[0xE007]);
            this.#value = newValue;
            this.redraw();
        }

        #execute_hide(prop) {
            if (typeof prop !== 'object' || prop.password !== password) {
                throw new TypeError('Illegal invocation');
            }

            let timer = null;
            let opacity = 1;
            let validate = function (d) { return (d < 0) ? 0 : d; };
            timer = setInterval(function (thisArg) {
                thisArg.elem_root.style.opacity = validate(opacity -= 0.025);
                if (opacity <= 0) {
                    clearInterval(timer);
                    thisArg.elem_root.style.display = 'none';

                    if (prop.destroy) thisArg.destroy.call(thisArg);
                }
            }, 10, this);
        }

        hide() {
            this.#execute_hide({ password: password });
        }
        show() {
            this.__elem_root__.style.opacity = 1;
            this.__elem_root__.style.display = '';
            this.redraw();
        }

        toggle() {
            return(this.getState().state.visible ? this.hide() : this.show());
        }

        getHalfGeoValue() {
            let rect = this.__elem_ch1F__.lastElementChild;
            if (rect) rect = rect.getBoundingClientRect();
            else throw new Error(StringTable[0xE005]);
            let px = rect.x + (rect.width / 2);

            let rc2 = this.__elem_ch1F__.firstElementChild.getBoundingClientRect();
            let min = rc2.x, max = rc2.x + (rc2.width * this.__elem_ch1F__.childElementCount);
            let area = max - min;
            let percent = (px - min) / area;
            let value = percent * (this.max - this.min) + this.min;

            return value;
        }

        getState() {
            return {
                state: {
                    value: this.value,
                    min: this.min,
                    max: this.max,
                    visible: (this.__elem_root__.style.display !== 'none'),
                    visibility: (this.__elem_root__.style.display !== 'none') ?
                        (this.__elem_root__.style.opacity == '1') ? 
                            1 : 2 : 0,
                }
            };
        }

        setRange(min, max) {
            if (isNaN (min) || isNaN (max) || min > max) {
                throw new TypeError(StringTable[0xE003]);
            }
            this.#min = Number(min);
            this.#max = Number(max);
            this.redraw();
        }

        hide_and_destroy() {
            this.#execute_hide({ password: password, destroy: true }); 
        }

        on(ev, h, p) {
            return this.__elem_evft__.addEventListener(ev, h, p);
        }
        removeEventListener(ev, h) {
            return this.__elem_evft__.removeEventListener(ev, h);
        }

        moveTo(element) {
            return element.append(this.__elem_root__);
        }

        redraw() {
            let rect = this.__elem_ch1F__.firstElementChild.getBoundingClientRect();
            let min = rect.x, max = rect.x + (rect.width * this.__elem_ch1F__.childElementCount);
            let area = max - min; // area === rect.width
            let percent = (this.value - this.min) / (this.max - this.min);
            let parent_x = this.__elem_ch1F__.parentElement.getBoundingClientRect().x;
            // let container_w = this.elem_root.clientWidth;
            let n = percent * area + min - parent_x;
            this.__elem_bkdp__.style.left = n + 'px';
        }

        destroy() {
            this.__elem_root__.remove();
        }

    }

    let ProgressProxy = new(Proxy)(Progress, {
        get(target, prop, receiver) {
            if (prop === 'version') return version;

            return Reflect.get(target, prop, receiver);
        },
        set(target, prop, newValue, receiver) {
            throw new TypeError(`Trying to set constant target ${target} property` +
                ` ${prop} to value ${newValue} at receiver ${receiver}`);
            return false;
        },
    })
    

    defprop(_, StringTable.export_name, {
        get() { return ProgressProxy },
        set(__) { throw new TypeError(StringTable[8] + String(__) + StringTable[9]) },
        enumerable: true,
        configurable: true
    });

    addCSS(`
    .${StringTable[0xC002]} {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 20001;
        background: var(--background);
        box-sizing: border-box;
        margin: 0;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        --background: #FFFFFF;
        --linelen: ${GenshinElements.size}px;
        --svgsize: 6%;
    }
    .${StringTable[0xC002]} .${StringTable[0xC003]} {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .${StringTable[0xC002]} .${StringTable[0xC003]} > span {
        display: inline-block;
    }
    .${StringTable[0xC002]} .${StringTable[0xC006]} {
        position: absolute;
        width: 100%;
        height: 100%;
        background: var(--background);
        opacity: 0.9;
    }
    .${StringTable[0xC002]} .${StringTable[0xC003]} span {
        width: var(--svgsize);
        /*aspect-ratio: 1;*/
        padding: 0;
    }
    .${StringTable[0xC002]} .${StringTable[0xC003]} svg {
        width: 100%;
        height: 100%;
    }
    .${StringTable[0xC002]} .${StringTable[0xC007]} {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: var(--background);
        opacity: 0;
    }
    `);


    function defprop(o, n, a) {
        return Object.defineProperty(o, n, a);
    }
    function addCSS(css) {
        var c = document.createElement('style');
        c.innerHTML = css;
        (document.head || document.documentElement).append(c);
    }
    
}((typeof (exports) === "undefined" ? window : exports) || window));
