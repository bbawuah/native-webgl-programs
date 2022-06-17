var Scene = /** @class */ (function () {
    function Scene() {
        var _this = this;
        this.vertexShader = "\n  attribute vec4 a_Position;\n  attribute float a_PointSize;\n\n  void main() {\n    gl_Position = a_Position;\n    gl_PointSize = a_PointSize;\n  }\n  ";
        this.fragmentShader = "\n  precision mediump float;\n  uniform vec4 u_FragColor;\n  void main() {\n    gl_FragColor = u_FragColor;\n  }\n  ";
        this.g_points = [];
        this.g_colors = [];
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
        this.canvasElement.onmousedown = function (ev) {
            _this.onClick(ev, _this.gl, _this.canvasElement, _this.a_Position, _this.u_FragColor);
        };
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
        // Get attribute location
        this.a_Position = this.gl.getAttribLocation(program, 'a_Position');
        this.u_FragColor = this.gl.getUniformLocation(program, 'u_FragColor');
        var a_PointSize = this.gl.getAttribLocation(program, 'a_PointSize');
        // Declare new position
        var position = new Float32Array([0.5, 0.0, 0.0, 1.0]);
        var color = [0.0, 0.5, 0.0, 1.0];
        var pointSize = 14;
        // Set new position
        this.gl.vertexAttrib4fv(this.a_Position, position);
        this.gl.vertexAttrib1f(a_PointSize, pointSize);
        this.gl.uniform4fv(this.u_FragColor, color);
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
    Scene.prototype.onClick = function (ev, gl, canvas, a_Position, u_FragColor) {
        var x = ev.clientX;
        var y = ev.clientY;
        var rect = ev.target.getBoundingClientRect();
        x = (x - rect.left - canvas.width / 2) / (canvas.width / 2);
        y = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2);
        // Store the coordinates to g_points array
        this.g_points.push([x, y]);
        console.log(this.g_points);
        // Clear canvas
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        if (x >= 0.0 && y >= 0.0) {
            this.g_colors.push([1.0, 0.0, 0.0, 1.0]);
        }
        else if (x < 0.0 && y < 0.0) {
            this.g_colors.push([0.0, 1.0, 0.0, 1.0]);
        }
        else {
            this.g_colors.push([1.0, 1.0, 1.0, 1.0]);
        }
        for (var i = 0; i < this.g_points.length; i += 2) {
            var xy = this.g_points[i];
            var rgba = this.g_colors[i];
            this.gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
            this.gl.uniform4fv(this.u_FragColor, rgba);
            this.gl.drawArrays(this.gl.POINTS, 0, 1);
        }
    };
    return Scene;
}());
new Scene();
