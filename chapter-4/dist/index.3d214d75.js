// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"awEvQ":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bB7Pu":[function(require,module,exports) {
"use strict";
exports.__esModule = true;
var cuon_matrix_js_1 = require("./cuon-matrix.js");
var Scene = /** @class */ function() {
    function Scene1() {
        var _this = this;
        this.previousTime = Date.now();
        this.vertexShader = "#version 300 es\n\n  in vec4 a_Position;\n  in float a_PointSize;\n\n  uniform vec4 u_Translation;\n  uniform float u_CosB;\n  uniform float u_SinB;\n  uniform mat4 u_ModelMatrix;\n\n  void main() {\ngl_Position = u_ModelMatrix * a_Position;\n  }\n  ";
        this.fragmentShader = "#version 300 es\n  precision highp float;\n  out vec4 outColor;\n  void main() {\n    outColor = vec4(1.0, 0.0, 0.5, 1);\n  }\n  ";
        this.canvasElement = document.querySelector("#webgl-canvas");
        this.gl = this.canvasElement.getContext("webgl2");
        var n = this.initializeVertexBuffer();
        var hasInitializedShader = this.initializeShader();
        if (!hasInitializedShader) {
            console.log("Failed to create program");
            return;
        }
        var displayWidth = this.canvasElement.clientWidth;
        var displayHeight = this.canvasElement.clientHeight;
        this.canvasElement.width = displayWidth;
        this.canvasElement.height = displayHeight;
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        // Set the color
        this.gl.clearColor(0.0, 1.0, 1.0, 1.0);
        var currentAngle = 0.0;
        var angle = 45;
        var radian = Math.PI * angle / 180;
        var cosB = Math.cos(radian);
        var sinB = Math.sin(radian);
        var modelMatrix = new cuon_matrix_js_1.Matrix4({});
        // Matrix in column major order
        // const xFormMatrix = new Float32Array([
        //   cosB,
        //   sinB,
        //   0.0,
        //   0.0,
        //   -sinB,
        //   cosB,
        //   0.0,
        //   0.0,
        //   0.0,
        //   0.0,
        //   1.0,
        //   0.0,
        //   0.1,
        //   0.3,
        //   0.0,
        //   1.0
        // ]);
        /*
         * Rotation matrix
         * [cosB, sinB, 0.0, 0.0,
         *  -sinB, cosB, 0.0, 0.0,
         *  0.0, 0.0, 1.0, 0.0,
         *  0.0, 0.0, 0.0,1.0]
         */ /*
         * Translation matrix
         * [1.0, 0.0, 0.0, 0.0,
         *  0.0, 1.0, 0.0, 0.0,
         *  0.0, 0.0, 1.0, 0.0,
         *  0.1, 0.3, 0.0,1.0]
         */ /*
         * Scaled matrix
         * [Sx, 0.0, 0.0, 0.0,
         *  0.0, Sy, 0.0, 0.0,
         *  0.0, 0.0, Sz, 0.0,
         *  0.1, 0.3, 0.0,1.0]
         */ modelMatrix.setTranslate(0.5, 0.5, 0);
        modelMatrix.rotate(angle, 0, 0, 1);
        var u_ModelMatrix = this.gl.getUniformLocation(this.program, "u_ModelMatrix");
        var tick = function() {
            currentAngle = _this.animate(currentAngle);
            _this.draw(n, currentAngle, modelMatrix, u_ModelMatrix);
            requestAnimationFrame(tick);
        };
        tick();
    }
    Scene1.prototype.draw = function(n, angle, modelMatrix, location) {
        // Set rotation
        modelMatrix.setRotate(angle, 0, 0, 1);
        modelMatrix.translate(0.9, 0.0, 0.0);
        this.gl.uniformMatrix4fv(location, false, modelMatrix.elements);
        // Clear canvas
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        // Draw point
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, n);
    };
    Scene1.prototype.animate = function(angle) {
        var now = Date.now();
        var elapsedTime = now - this.previousTime;
        this.previousTime = now;
        var newAngle = angle + 45.0 * elapsedTime / 1000;
        return newAngle %= 360;
    };
    Scene1.prototype.initializeShader = function() {
        // Create program
        var program = this.createWebGLProgram();
        if (!program) {
            console.log("Failed to create program");
            return false;
        }
        // Use program
        this.gl.useProgram(program);
        this.program = program;
        // Get attribute location
        this.a_Position = this.gl.getAttribLocation(program, "a_Position");
        // Get uniform location
        // const u_Translation = this.gl.getUniformLocation(program, 'u_Translation');
        // Declare new position
        var position = new Float32Array([
            0.0,
            0.0,
            0.0,
            1.0
        ]);
        // Declare translation
        var translation = new Float32Array([
            0.5,
            0.5,
            0.0,
            0.0
        ]);
        // Set new position
        this.gl.vertexAttrib4fv(this.a_Position, position);
        // this.gl.uniform4fv(u_Translation, translation);
        return true;
    };
    Scene1.prototype.createWebGLProgram = function() {
        // Load shaders
        var vertexShader = this.getShader(this.gl.VERTEX_SHADER, this.vertexShader);
        var fragmentShader = this.getShader(this.gl.FRAGMENT_SHADER, this.fragmentShader);
        if (!vertexShader || !fragmentShader) return null;
        // Create program object
        var program = this.gl.createProgram();
        // Attach shader object
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        // Link the program object to WebGLRenderingContext
        this.gl.linkProgram(program);
        // Get the result
        var linked = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
        if (!linked) {
            var error = this.gl.getProgramInfoLog(program);
            console.log("Failed to link program ".concat(error));
            // Clean up
            this.gl.deleteProgram(program);
            this.gl.deleteShader(vertexShader);
            this.gl.deleteShader(fragmentShader);
            return null;
        }
        return program;
    };
    Scene1.prototype.getShader = function(type, source) {
        // Create shader object
        var shader = this.gl.createShader(type);
        if (!shader) {
            console.log("Could not create the shader");
            return null;
        }
        // Set the shader source
        this.gl.shaderSource(shader, source);
        // Compile the shader
        this.gl.compileShader(shader);
        // Check the result of the compilation
        var compiled = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (!compiled) {
            var error = this.gl.getShaderInfoLog(shader);
            console.log("Failed to compile shader ".concat(error));
            // Clean up
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    };
    Scene1.prototype.initializeVertexBuffer = function() {
        var vertices = new Float32Array([
            -0.5,
            0.5,
            -0.5,
            -0.5,
            0.5,
            0.5
        ]); //Store vertices in buffer array
        var n = 3; //Number of vertices
        // Create vertex buffer
        var vertexBuffer = this.gl.createBuffer();
        if (!vertexBuffer) {
            console.log("Failed to create the vertex buffer");
            return -1;
        }
        // Bind the buffer object to a target
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);
        // Write data into buffer object
        this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);
        // Assign buffer object to attribute value
        this.gl.vertexAttribPointer(this.a_Position, 2, this.gl.FLOAT, false, 0, 0);
        this.gl.enableVertexAttribArray(this.a_Position);
        return n;
    };
    return Scene1;
}();
new Scene();

},{"./cuon-matrix.js":"6GNX1"}],"6GNX1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Matrix4", ()=>Matrix4);
var Matrix4 = function(opt_src) {
    var i, s, d;
    if (opt_src && typeof opt_src === "object" && opt_src.hasOwnProperty("elements")) {
        s = opt_src.elements;
        d = new Float32Array(16);
        for(i = 0; i < 16; ++i)d[i] = s[i];
        this.elements = d;
    } else this.elements = new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
    ]);
};
/**
 * Set the identity matrix.
 * @return this
 */ Matrix4.prototype.setIdentity = function() {
    var e = this.elements;
    e[0] = 1;
    e[4] = 0;
    e[8] = 0;
    e[12] = 0;
    e[1] = 0;
    e[5] = 1;
    e[9] = 0;
    e[13] = 0;
    e[2] = 0;
    e[6] = 0;
    e[10] = 1;
    e[14] = 0;
    e[3] = 0;
    e[7] = 0;
    e[11] = 0;
    e[15] = 1;
    return this;
};
/**
 * Copy matrix.
 * @param src source matrix
 * @return this
 */ Matrix4.prototype.set = function(src) {
    var i, s, d;
    s = src.elements;
    d = this.elements;
    if (s === d) return;
    for(i = 0; i < 16; ++i)d[i] = s[i];
    return this;
};
/**
 * Multiply the matrix from the right.
 * @param other The multiply matrix
 * @return this
 */ Matrix4.prototype.concat = function(other) {
    var i, e, a, b, ai0, ai1, ai2, ai3;
    // Calculate e = a * b
    e = this.elements;
    a = this.elements;
    b = other.elements;
    // If e equals b, copy b to temporary matrix.
    if (e === b) {
        b = new Float32Array(16);
        for(i = 0; i < 16; ++i)b[i] = e[i];
    }
    for(i = 0; i < 4; i++){
        ai0 = a[i];
        ai1 = a[i + 4];
        ai2 = a[i + 8];
        ai3 = a[i + 12];
        e[i] = ai0 * b[0] + ai1 * b[1] + ai2 * b[2] + ai3 * b[3];
        e[i + 4] = ai0 * b[4] + ai1 * b[5] + ai2 * b[6] + ai3 * b[7];
        e[i + 8] = ai0 * b[8] + ai1 * b[9] + ai2 * b[10] + ai3 * b[11];
        e[i + 12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
    }
    return this;
};
Matrix4.prototype.multiply = Matrix4.prototype.concat;
/**
 * Multiply the three-dimensional vector.
 * @param pos  The multiply vector
 * @return The result of multiplication(Float32Array)
 */ Matrix4.prototype.multiplyVector3 = function(pos) {
    var e = this.elements;
    var p = pos.elements;
    var v = new Vector3();
    var result = v.elements;
    result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + e[12];
    result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + e[13];
    result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + e[14];
    return v;
};
/**
 * Multiply the four-dimensional vector.
 * @param pos  The multiply vector
 * @return The result of multiplication(Float32Array)
 */ Matrix4.prototype.multiplyVector4 = function(pos) {
    var e = this.elements;
    var p = pos.elements;
    var v = new Vector4();
    var result = v.elements;
    result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + p[3] * e[12];
    result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + p[3] * e[13];
    result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + p[3] * e[14];
    result[3] = p[0] * e[3] + p[1] * e[7] + p[2] * e[11] + p[3] * e[15];
    return v;
};
/**
 * Transpose the matrix.
 * @return this
 */ Matrix4.prototype.transpose = function() {
    var e, t;
    e = this.elements;
    t = e[1];
    e[1] = e[4];
    e[4] = t;
    t = e[2];
    e[2] = e[8];
    e[8] = t;
    t = e[3];
    e[3] = e[12];
    e[12] = t;
    t = e[6];
    e[6] = e[9];
    e[9] = t;
    t = e[7];
    e[7] = e[13];
    e[13] = t;
    t = e[11];
    e[11] = e[14];
    e[14] = t;
    return this;
};
/**
 * Calculate the inverse matrix of specified matrix, and set to this.
 * @param other The source matrix
 * @return this
 */ Matrix4.prototype.setInverseOf = function(other) {
    var i, s, d, inv, det;
    s = other.elements;
    d = this.elements;
    inv = new Float32Array(16);
    inv[0] = s[5] * s[10] * s[15] - s[5] * s[11] * s[14] - s[9] * s[6] * s[15] + s[9] * s[7] * s[14] + s[13] * s[6] * s[11] - s[13] * s[7] * s[10];
    inv[4] = -s[4] * s[10] * s[15] + s[4] * s[11] * s[14] + s[8] * s[6] * s[15] - s[8] * s[7] * s[14] - s[12] * s[6] * s[11] + s[12] * s[7] * s[10];
    inv[8] = s[4] * s[9] * s[15] - s[4] * s[11] * s[13] - s[8] * s[5] * s[15] + s[8] * s[7] * s[13] + s[12] * s[5] * s[11] - s[12] * s[7] * s[9];
    inv[12] = -s[4] * s[9] * s[14] + s[4] * s[10] * s[13] + s[8] * s[5] * s[14] - s[8] * s[6] * s[13] - s[12] * s[5] * s[10] + s[12] * s[6] * s[9];
    inv[1] = -s[1] * s[10] * s[15] + s[1] * s[11] * s[14] + s[9] * s[2] * s[15] - s[9] * s[3] * s[14] - s[13] * s[2] * s[11] + s[13] * s[3] * s[10];
    inv[5] = s[0] * s[10] * s[15] - s[0] * s[11] * s[14] - s[8] * s[2] * s[15] + s[8] * s[3] * s[14] + s[12] * s[2] * s[11] - s[12] * s[3] * s[10];
    inv[9] = -s[0] * s[9] * s[15] + s[0] * s[11] * s[13] + s[8] * s[1] * s[15] - s[8] * s[3] * s[13] - s[12] * s[1] * s[11] + s[12] * s[3] * s[9];
    inv[13] = s[0] * s[9] * s[14] - s[0] * s[10] * s[13] - s[8] * s[1] * s[14] + s[8] * s[2] * s[13] + s[12] * s[1] * s[10] - s[12] * s[2] * s[9];
    inv[2] = s[1] * s[6] * s[15] - s[1] * s[7] * s[14] - s[5] * s[2] * s[15] + s[5] * s[3] * s[14] + s[13] * s[2] * s[7] - s[13] * s[3] * s[6];
    inv[6] = -s[0] * s[6] * s[15] + s[0] * s[7] * s[14] + s[4] * s[2] * s[15] - s[4] * s[3] * s[14] - s[12] * s[2] * s[7] + s[12] * s[3] * s[6];
    inv[10] = s[0] * s[5] * s[15] - s[0] * s[7] * s[13] - s[4] * s[1] * s[15] + s[4] * s[3] * s[13] + s[12] * s[1] * s[7] - s[12] * s[3] * s[5];
    inv[14] = -s[0] * s[5] * s[14] + s[0] * s[6] * s[13] + s[4] * s[1] * s[14] - s[4] * s[2] * s[13] - s[12] * s[1] * s[6] + s[12] * s[2] * s[5];
    inv[3] = -s[1] * s[6] * s[11] + s[1] * s[7] * s[10] + s[5] * s[2] * s[11] - s[5] * s[3] * s[10] - s[9] * s[2] * s[7] + s[9] * s[3] * s[6];
    inv[7] = s[0] * s[6] * s[11] - s[0] * s[7] * s[10] - s[4] * s[2] * s[11] + s[4] * s[3] * s[10] + s[8] * s[2] * s[7] - s[8] * s[3] * s[6];
    inv[11] = -s[0] * s[5] * s[11] + s[0] * s[7] * s[9] + s[4] * s[1] * s[11] - s[4] * s[3] * s[9] - s[8] * s[1] * s[7] + s[8] * s[3] * s[5];
    inv[15] = s[0] * s[5] * s[10] - s[0] * s[6] * s[9] - s[4] * s[1] * s[10] + s[4] * s[2] * s[9] + s[8] * s[1] * s[6] - s[8] * s[2] * s[5];
    det = s[0] * inv[0] + s[1] * inv[4] + s[2] * inv[8] + s[3] * inv[12];
    if (det === 0) return this;
    det = 1 / det;
    for(i = 0; i < 16; i++)d[i] = inv[i] * det;
    return this;
};
/**
 * Calculate the inverse matrix of this, and set to this.
 * @return this
 */ Matrix4.prototype.invert = function() {
    return this.setInverseOf(this);
};
/**
 * Set the orthographic projection matrix.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @return this
 */ Matrix4.prototype.setOrtho = function(left, right, bottom, top, near, far) {
    var e, rw, rh, rd;
    if (left === right || bottom === top || near === far) throw "null frustum";
    rw = 1 / (right - left);
    rh = 1 / (top - bottom);
    rd = 1 / (far - near);
    e = this.elements;
    e[0] = 2 * rw;
    e[1] = 0;
    e[2] = 0;
    e[3] = 0;
    e[4] = 0;
    e[5] = 2 * rh;
    e[6] = 0;
    e[7] = 0;
    e[8] = 0;
    e[9] = 0;
    e[10] = -2 * rd;
    e[11] = 0;
    e[12] = -(right + left) * rw;
    e[13] = -(top + bottom) * rh;
    e[14] = -(far + near) * rd;
    e[15] = 1;
    return this;
};
/**
 * Multiply the orthographic projection matrix from the right.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
 * @return this
 */ Matrix4.prototype.ortho = function(left, right, bottom, top, near, far) {
    return this.concat(new Matrix4().setOrtho(left, right, bottom, top, near, far));
};
/**
 * Set the perspective projection matrix.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */ Matrix4.prototype.setFrustum = function(left, right, bottom, top, near, far) {
    var e, rw, rh, rd;
    if (left === right || top === bottom || near === far) throw "null frustum";
    if (near <= 0) throw "near <= 0";
    if (far <= 0) throw "far <= 0";
    rw = 1 / (right - left);
    rh = 1 / (top - bottom);
    rd = 1 / (far - near);
    e = this.elements;
    e[0] = 2 * near * rw;
    e[1] = 0;
    e[2] = 0;
    e[3] = 0;
    e[4] = 0;
    e[5] = 2 * near * rh;
    e[6] = 0;
    e[7] = 0;
    e[8] = (right + left) * rw;
    e[9] = (top + bottom) * rh;
    e[10] = -(far + near) * rd;
    e[11] = -1;
    e[12] = 0;
    e[13] = 0;
    e[14] = -2 * near * far * rd;
    e[15] = 0;
    return this;
};
/**
 * Multiply the perspective projection matrix from the right.
 * @param left The coordinate of the left of clipping plane.
 * @param right The coordinate of the right of clipping plane.
 * @param bottom The coordinate of the bottom of clipping plane.
 * @param top The coordinate of the top top clipping plane.
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */ Matrix4.prototype.frustum = function(left, right, bottom, top, near, far) {
    return this.concat(new Matrix4().setFrustum(left, right, bottom, top, near, far));
};
/**
 * Set the perspective projection matrix by fovy and aspect.
 * @param fovy The angle between the upper and lower sides of the frustum.
 * @param aspect The aspect ratio of the frustum. (width/height)
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */ Matrix4.prototype.setPerspective = function(fovy, aspect, near, far) {
    var e, rd, s, ct;
    if (near === far || aspect === 0) throw "null frustum";
    if (near <= 0) throw "near <= 0";
    if (far <= 0) throw "far <= 0";
    fovy = Math.PI * fovy / 180 / 2;
    s = Math.sin(fovy);
    if (s === 0) throw "null frustum";
    rd = 1 / (far - near);
    ct = Math.cos(fovy) / s;
    e = this.elements;
    e[0] = ct / aspect;
    e[1] = 0;
    e[2] = 0;
    e[3] = 0;
    e[4] = 0;
    e[5] = ct;
    e[6] = 0;
    e[7] = 0;
    e[8] = 0;
    e[9] = 0;
    e[10] = -(far + near) * rd;
    e[11] = -1;
    e[12] = 0;
    e[13] = 0;
    e[14] = -2 * near * far * rd;
    e[15] = 0;
    return this;
};
/**
 * Multiply the perspective projection matrix from the right.
 * @param fovy The angle between the upper and lower sides of the frustum.
 * @param aspect The aspect ratio of the frustum. (width/height)
 * @param near The distances to the nearer depth clipping plane. This value must be plus value.
 * @param far The distances to the farther depth clipping plane. This value must be plus value.
 * @return this
 */ Matrix4.prototype.perspective = function(fovy, aspect, near, far) {
    return this.concat(new Matrix4().setPerspective(fovy, aspect, near, far));
};
/**
 * Set the matrix for scaling.
 * @param x The scale factor along the X axis
 * @param y The scale factor along the Y axis
 * @param z The scale factor along the Z axis
 * @return this
 */ Matrix4.prototype.setScale = function(x, y, z) {
    var e = this.elements;
    e[0] = x;
    e[4] = 0;
    e[8] = 0;
    e[12] = 0;
    e[1] = 0;
    e[5] = y;
    e[9] = 0;
    e[13] = 0;
    e[2] = 0;
    e[6] = 0;
    e[10] = z;
    e[14] = 0;
    e[3] = 0;
    e[7] = 0;
    e[11] = 0;
    e[15] = 1;
    return this;
};
/**
 * Multiply the matrix for scaling from the right.
 * @param x The scale factor along the X axis
 * @param y The scale factor along the Y axis
 * @param z The scale factor along the Z axis
 * @return this
 */ Matrix4.prototype.scale = function(x, y, z) {
    var e = this.elements;
    e[0] *= x;
    e[4] *= y;
    e[8] *= z;
    e[1] *= x;
    e[5] *= y;
    e[9] *= z;
    e[2] *= x;
    e[6] *= y;
    e[10] *= z;
    e[3] *= x;
    e[7] *= y;
    e[11] *= z;
    return this;
};
/**
 * Set the matrix for translation.
 * @param x The X value of a translation.
 * @param y The Y value of a translation.
 * @param z The Z value of a translation.
 * @return this
 */ Matrix4.prototype.setTranslate = function(x, y, z) {
    var e = this.elements;
    e[0] = 1;
    e[4] = 0;
    e[8] = 0;
    e[12] = x;
    e[1] = 0;
    e[5] = 1;
    e[9] = 0;
    e[13] = y;
    e[2] = 0;
    e[6] = 0;
    e[10] = 1;
    e[14] = z;
    e[3] = 0;
    e[7] = 0;
    e[11] = 0;
    e[15] = 1;
    return this;
};
/**
 * Multiply the matrix for translation from the right.
 * @param x The X value of a translation.
 * @param y The Y value of a translation.
 * @param z The Z value of a translation.
 * @return this
 */ Matrix4.prototype.translate = function(x, y, z) {
    var e = this.elements;
    e[12] += e[0] * x + e[4] * y + e[8] * z;
    e[13] += e[1] * x + e[5] * y + e[9] * z;
    e[14] += e[2] * x + e[6] * y + e[10] * z;
    e[15] += e[3] * x + e[7] * y + e[11] * z;
    return this;
};
/**
 * Set the matrix for rotation.
 * The vector of rotation axis may not be normalized.
 * @param angle The angle of rotation (degrees)
 * @param x The X coordinate of vector of rotation axis.
 * @param y The Y coordinate of vector of rotation axis.
 * @param z The Z coordinate of vector of rotation axis.
 * @return this
 */ Matrix4.prototype.setRotate = function(angle, x, y, z) {
    var e, s, c, len, rlen, nc, xy, yz, zx, xs, ys, zs;
    angle = Math.PI * angle / 180;
    e = this.elements;
    s = Math.sin(angle);
    c = Math.cos(angle);
    if (0 !== x && 0 === y && 0 === z) {
        // Rotation around X axis
        if (x < 0) s = -s;
        e[0] = 1;
        e[4] = 0;
        e[8] = 0;
        e[12] = 0;
        e[1] = 0;
        e[5] = c;
        e[9] = -s;
        e[13] = 0;
        e[2] = 0;
        e[6] = s;
        e[10] = c;
        e[14] = 0;
        e[3] = 0;
        e[7] = 0;
        e[11] = 0;
        e[15] = 1;
    } else if (0 === x && 0 !== y && 0 === z) {
        // Rotation around Y axis
        if (y < 0) s = -s;
        e[0] = c;
        e[4] = 0;
        e[8] = s;
        e[12] = 0;
        e[1] = 0;
        e[5] = 1;
        e[9] = 0;
        e[13] = 0;
        e[2] = -s;
        e[6] = 0;
        e[10] = c;
        e[14] = 0;
        e[3] = 0;
        e[7] = 0;
        e[11] = 0;
        e[15] = 1;
    } else if (0 === x && 0 === y && 0 !== z) {
        // Rotation around Z axis
        if (z < 0) s = -s;
        e[0] = c;
        e[4] = -s;
        e[8] = 0;
        e[12] = 0;
        e[1] = s;
        e[5] = c;
        e[9] = 0;
        e[13] = 0;
        e[2] = 0;
        e[6] = 0;
        e[10] = 1;
        e[14] = 0;
        e[3] = 0;
        e[7] = 0;
        e[11] = 0;
        e[15] = 1;
    } else {
        // Rotation around another axis
        len = Math.sqrt(x * x + y * y + z * z);
        if (len !== 1) {
            rlen = 1 / len;
            x *= rlen;
            y *= rlen;
            z *= rlen;
        }
        nc = 1 - c;
        xy = x * y;
        yz = y * z;
        zx = z * x;
        xs = x * s;
        ys = y * s;
        zs = z * s;
        e[0] = x * x * nc + c;
        e[1] = xy * nc + zs;
        e[2] = zx * nc - ys;
        e[3] = 0;
        e[4] = xy * nc - zs;
        e[5] = y * y * nc + c;
        e[6] = yz * nc + xs;
        e[7] = 0;
        e[8] = zx * nc + ys;
        e[9] = yz * nc - xs;
        e[10] = z * z * nc + c;
        e[11] = 0;
        e[12] = 0;
        e[13] = 0;
        e[14] = 0;
        e[15] = 1;
    }
    return this;
};
/**
 * Multiply the matrix for rotation from the right.
 * The vector of rotation axis may not be normalized.
 * @param angle The angle of rotation (degrees)
 * @param x The X coordinate of vector of rotation axis.
 * @param y The Y coordinate of vector of rotation axis.
 * @param z The Z coordinate of vector of rotation axis.
 * @return this
 */ Matrix4.prototype.rotate = function(angle, x, y, z) {
    return this.concat(new Matrix4().setRotate(angle, x, y, z));
};
/**
 * Set the viewing matrix.
 * @param eyeX, eyeY, eyeZ The position of the eye point.
 * @param centerX, centerY, centerZ The position of the reference point.
 * @param upX, upY, upZ The direction of the up vector.
 * @return this
 */ Matrix4.prototype.setLookAt = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
    var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;
    fx = centerX - eyeX;
    fy = centerY - eyeY;
    fz = centerZ - eyeZ;
    // Normalize f.
    rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);
    fx *= rlf;
    fy *= rlf;
    fz *= rlf;
    // Calculate cross product of f and up.
    sx = fy * upZ - fz * upY;
    sy = fz * upX - fx * upZ;
    sz = fx * upY - fy * upX;
    // Normalize s.
    rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
    sx *= rls;
    sy *= rls;
    sz *= rls;
    // Calculate cross product of s and f.
    ux = sy * fz - sz * fy;
    uy = sz * fx - sx * fz;
    uz = sx * fy - sy * fx;
    // Set to this.
    e = this.elements;
    e[0] = sx;
    e[1] = ux;
    e[2] = -fx;
    e[3] = 0;
    e[4] = sy;
    e[5] = uy;
    e[6] = -fy;
    e[7] = 0;
    e[8] = sz;
    e[9] = uz;
    e[10] = -fz;
    e[11] = 0;
    e[12] = 0;
    e[13] = 0;
    e[14] = 0;
    e[15] = 1;
    // Translate.
    return this.translate(-eyeX, -eyeY, -eyeZ);
};
/**
 * Multiply the viewing matrix from the right.
 * @param eyeX, eyeY, eyeZ The position of the eye point.
 * @param centerX, centerY, centerZ The position of the reference point.
 * @param upX, upY, upZ The direction of the up vector.
 * @return this
 */ Matrix4.prototype.lookAt = function(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
    return this.concat(new Matrix4().setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ));
};
/**
 * Multiply the matrix for project vertex to plane from the right.
 * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
 * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
 * @return this
 */ Matrix4.prototype.dropShadow = function(plane, light) {
    var mat = new Matrix4();
    var e = mat.elements;
    var dot = plane[0] * light[0] + plane[1] * light[1] + plane[2] * light[2] + plane[3] * light[3];
    e[0] = dot - light[0] * plane[0];
    e[1] = -light[1] * plane[0];
    e[2] = -light[2] * plane[0];
    e[3] = -light[3] * plane[0];
    e[4] = -light[0] * plane[1];
    e[5] = dot - light[1] * plane[1];
    e[6] = -light[2] * plane[1];
    e[7] = -light[3] * plane[1];
    e[8] = -light[0] * plane[2];
    e[9] = -light[1] * plane[2];
    e[10] = dot - light[2] * plane[2];
    e[11] = -light[3] * plane[2];
    e[12] = -light[0] * plane[3];
    e[13] = -light[1] * plane[3];
    e[14] = -light[2] * plane[3];
    e[15] = dot - light[3] * plane[3];
    return this.concat(mat);
};
/**
 * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
 * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
 * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
 * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
 * @return this
 */ Matrix4.prototype.dropShadowDirectionally = function(normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) {
    var a = planeX * normX + planeY * normY + planeZ * normZ;
    return this.dropShadow([
        normX,
        normY,
        normZ,
        -a
    ], [
        lightX,
        lightY,
        lightZ,
        0
    ]);
};
/**
 * Constructor of Vector3
 * If opt_src is specified, new vector is initialized by opt_src.
 * @param opt_src source vector(option)
 */ var Vector3 = function(opt_src) {
    var v = new Float32Array(3);
    if (opt_src && typeof opt_src === "object") {
        v[0] = opt_src[0];
        v[1] = opt_src[1];
        v[2] = opt_src[2];
    }
    this.elements = v;
};
/**
 * Normalize.
 * @return this
 */ Vector3.prototype.normalize = function() {
    var v = this.elements;
    var c = v[0], d = v[1], e = v[2], g = Math.sqrt(c * c + d * d + e * e);
    if (g) {
        if (g == 1) return this;
    } else {
        v[0] = 0;
        v[1] = 0;
        v[2] = 0;
        return this;
    }
    g = 1 / g;
    v[0] = c * g;
    v[1] = d * g;
    v[2] = e * g;
    return this;
};
/**
 * Constructor of Vector4
 * If opt_src is specified, new vector is initialized by opt_src.
 * @param opt_src source vector(option)
 */ var Vector4 = function(opt_src) {
    var v = new Float32Array(4);
    if (opt_src && typeof opt_src === "object") {
        v[0] = opt_src[0];
        v[1] = opt_src[1];
        v[2] = opt_src[2];
        v[3] = opt_src[3];
    }
    this.elements = v;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["awEvQ","bB7Pu"], "bB7Pu", "parcelRequirecbc4")

//# sourceMappingURL=index.3d214d75.js.map
