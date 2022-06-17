var Scene = /** @class */ (function () {
    function Scene() {
        this.vertexShader = "\n  attribute vec4 a_Position;\n\n  void main() {\n    gl_Position = a_Position;\n    gl_PointSize = 10.0;\n  }\n  ";
        this.fragmentShader = "\n  void main() {\n    gl_FragColor = vec4(1.0,0.0,1.0,1.0);\n  }\n  ";
        this.canvasElement = document.querySelector('#webgl-canvas');
        if (!this.canvasElement) {
            console.log('Failed to get canvas element');
            return;
        }
        this.gl = this.canvasElement.getContext('webgl2');
        var hasInitializedShader = this.initializeShader(this.gl, this.vertexShader, this.fragmentShader);
        if (!hasInitializedShader) {
            console.log('Failed to create program');
            return;
        }
        // Set the color
        this.gl.clearColor(0.0, 1.0, 1.0, 1.0);
        // Clear canvas
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        // Draw point
        this.gl.drawArrays(this.gl.POINTS, 0, 1);
    }
    Scene.prototype.initializeShader = function (gl, vShader, fShader) {
        // Create program
        var program = this.createWebGLProgram(gl, vShader, fShader);
        if (!program) {
            console.log('Failed to create program');
            return false;
        }
        var a_Position = this.gl.getAttribLocation(program, 'a_Position');
        this.gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
        // Use program
        this.gl.useProgram(program);
        return true;
    };
    Scene.prototype.createWebGLProgram = function (gl, vShader, fShader) {
        // Load shaders
        var vertexShader = this.getShader(gl, gl.VERTEX_SHADER, vShader);
        var fragmentShader = this.getShader(gl, gl.FRAGMENT_SHADER, fShader);
        if (!vertexShader || !fragmentShader) {
            return null;
        }
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
        }
        return program;
    };
    Scene.prototype.getShader = function (gl, type, source) {
        // Create shader object
        var shader = this.gl.createShader(type);
        if (!shader) {
            console.log('Could not create the shader');
            return null;
        }
        // Set the shader program
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
    return Scene;
}());
new Scene();
