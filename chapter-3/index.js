var Scene = /** @class */ (function () {
    function Scene() {
        this.vertexShader = "#version 300 es\n\n  in vec4 a_Position;\n  in float a_PointSize;\n\n  uniform vec4 u_Translation;\n  uniform float u_CosB;\n  uniform float u_SinB;\n  uniform mat4 u_xformMatrix;\n\n  void main() {\ngl_Position = u_xformMatrix * a_Position;\n  }\n  ";
        this.fragmentShader = "#version 300 es\n  precision highp float;\n  out vec4 outColor;\n  void main() {\n    outColor = vec4(1.0, 0.0, 0.5, 1);\n  }\n  ";
        this.canvasElement = document.querySelector('#webgl-canvas');
        this.gl = this.canvasElement.getContext('webgl2');
        var n = this.initializeVertexBuffer();
        var hasInitializedShader = this.initializeShader();
        if (!hasInitializedShader) {
            console.log('Failed to create program');
            return;
        }
        var displayWidth = this.canvasElement.clientWidth;
        var displayHeight = this.canvasElement.clientHeight;
        this.canvasElement.width = displayWidth;
        this.canvasElement.height = displayHeight;
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        // Set the color
        this.gl.clearColor(0.0, 1.0, 1.0, 1.0);
        // Clear canvas
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        // Draw point
        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, n);
    }
    Scene.prototype.initializeShader = function () {
        // Create program
        var program = this.createWebGLProgram();
        if (!program) {
            console.log('Failed to create program');
            return false;
        }
        // Use program
        this.gl.useProgram(program);
        // Get attribute location
        this.a_Position = this.gl.getAttribLocation(program, 'a_Position');
        // Get uniform location
        // const u_Translation = this.gl.getUniformLocation(program, 'u_Translation');
        // Declare new position
        var position = new Float32Array([0.0, 0.0, 0.0, 1.0]);
        // Declare translation
        var translation = new Float32Array([0.5, 0.5, 0.0, 0.0]);
        var angle = 4;
        var radian = (Math.PI * angle) / 180;
        var cosB = Math.cos(radian);
        var sinB = Math.sin(radian);
        // Matrix in column major order
        var xFormMatrix = new Float32Array([
            cosB,
            sinB,
            0.0,
            0.0,
            -sinB,
            cosB,
            0.0,
            0.0,
            0.0,
            0.0,
            1.0,
            0.0,
            0.1,
            0.3,
            0.0,
            1.0
        ]);
        /*
         * Rotation matrix
         * [cosB, sinB, 0.0, 0.0,
         *  -sinB, cosB, 0.0, 0.0,
         *  0.0, 0.0, 1.0, 0.0,
         *  0.0, 0.0, 0.0,1.0]
         */
        /*
         * Translation matrix
         * [1.0, 0.0, 0.0, 0.0,
         *  0.0, 1.0, 0.0, 0.0,
         *  0.0, 0.0, 1.0, 0.0,
         *  0.1, 0.3, 0.0,1.0]
         */
        /*
         * Scaled matrix
         * [Sx, 0.0, 0.0, 0.0,
         *  0.0, Sy, 0.0, 0.0,
         *  0.0, 0.0, Sz, 0.0,
         *  0.1, 0.3, 0.0,1.0]
         */
        var u_xformMatrix = this.gl.getUniformLocation(program, 'u_xformMatrix');
        this.gl.uniformMatrix4fv(u_xformMatrix, false, xFormMatrix);
        // Set new position
        this.gl.vertexAttrib4fv(this.a_Position, position);
        // this.gl.uniform4fv(u_Translation, translation);
        return true;
    };
    Scene.prototype.createWebGLProgram = function () {
        // Load shaders
        var vertexShader = this.getShader(this.gl.VERTEX_SHADER, this.vertexShader);
        var fragmentShader = this.getShader(this.gl.FRAGMENT_SHADER, this.fragmentShader);
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
            return null;
        }
        return program;
    };
    Scene.prototype.getShader = function (type, source) {
        // Create shader object
        var shader = this.gl.createShader(type);
        if (!shader) {
            console.log('Could not create the shader');
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
    Scene.prototype.initializeVertexBuffer = function () {
        var vertices = new Float32Array([-0.5, 0.5, -0.5, -0.5, 0.5, 0.5]); //Store vertices in buffer array
        var n = 3; //Number of vertices
        // Create vertex buffer
        var vertexBuffer = this.gl.createBuffer();
        if (!vertexBuffer) {
            console.log('Failed to create the vertex buffer');
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
    return Scene;
}());
new Scene();
