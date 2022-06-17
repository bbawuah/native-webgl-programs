var Scene = /** @class */ (function () {
    function Scene() {
        this.canvasElement = document.querySelector('#webgl-canvas');
        if (!this.canvasElement) {
            console.log('Failed to get canvas element');
            return;
        }
        this.gl = this.canvasElement.getContext('webgl2');
        this.gl.clearColor(0.0, 1.0, 1.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    return Scene;
}());
new Scene();
