class Scene {
  private canvasElement: HTMLCanvasElement | undefined;
  private gl: WebGL2RenderingContext;
  private vertexShader: string = `#version 300 es

  in vec4 a_Position;
  in float a_PointSize;

  uniform vec4 u_Translation;

  void main() {
    gl_Position = a_Position + u_Translation;
    gl_PointSize = a_PointSize;
  }
  `;
  private fragmentShader: string = `#version 300 es
  precision highp float;
  out vec4 outColor;
  void main() {
    outColor = vec4(1, 0, 0.5, 1);
  }
  `;
  private a_Position: number;

  constructor() {
    this.canvasElement = document.querySelector('#webgl-canvas');

    if (!this.canvasElement) {
      console.log('Failed to get canvas element');
      return;
    }

    this.gl = this.canvasElement.getContext('webgl2');

    const n = this.initializeVertexBuffer();

    const hasInitializedShader = this.initializeShader();

    if (!hasInitializedShader) {
      console.log('Failed to create program');
      return;
    }

    const displayWidth = this.canvasElement.clientWidth;
    const displayHeight = this.canvasElement.clientHeight;

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

  private initializeShader(): boolean {
    // Create program
    const program = this.createWebGLProgram();

    if (!program) {
      console.log('Failed to create program');
      return false;
    }

    // Get attribute location
    this.a_Position = this.gl.getAttribLocation(program, 'a_Position');
    const u_Translation = this.gl.getUniformLocation(program, 'u_Translation');

    // Declare new position
    const position = new Float32Array([0.0, 0.0, 0.0, 1.0]);
    const translation = new Float32Array([0.5, 0.5, 0.0, 0.0]);

    // Set new position
    this.gl.vertexAttrib4fv(this.a_Position, position);
    this.gl.uniform4fv(u_Translation, translation);

    // Use program
    this.gl.useProgram(program);

    return true;
  }

  private createWebGLProgram(): WebGLProgram {
    // Load shaders
    const vertexShader = this.getShader(
      this.gl.VERTEX_SHADER,
      this.vertexShader
    );
    const fragmentShader = this.getShader(
      this.gl.FRAGMENT_SHADER,
      this.fragmentShader
    );

    if (!vertexShader || !fragmentShader) {
      return null;
    }

    // Create program object
    const program = this.gl.createProgram();

    // Attach shader object
    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);

    // Link the program object to WebGLRenderingContext
    this.gl.linkProgram(program);

    // Get the result
    const linked: boolean = this.gl.getProgramParameter(
      program,
      this.gl.LINK_STATUS
    );

    if (!linked) {
      const error = this.gl.getProgramInfoLog(program);

      console.log(`Failed to link program ${error}`);

      // Clean up
      this.gl.deleteProgram(program);
      this.gl.deleteShader(vertexShader);
      this.gl.deleteShader(fragmentShader);
      return null;
    }

    return program;
  }

  private getShader(type: number, source: string): WebGLShader {
    // Create shader object
    const shader = this.gl.createShader(type);

    if (!shader) {
      console.log('Could not create the shader');
      return null;
    }

    // Set the shader program
    this.gl.shaderSource(shader, source);

    // Compile the shader
    this.gl.compileShader(shader);

    // Check the result of the compilation
    const compiled = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);

    if (!compiled) {
      const error = this.gl.getShaderInfoLog(shader);
      console.log(`Failed to compile shader ${error}`);

      // Clean up
      this.gl.deleteShader(shader);
      return null;
    }

    return shader;
  }

  private initializeVertexBuffer(): number {
    const vertices = new Float32Array([
      -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, 0.5, -0.5
    ]); //Store vertices in buffer array

    const n = 4; //Number of vertices

    const vertexBuffer = this.gl.createBuffer();

    if (!vertexBuffer) {
      console.log('Failed to create the vertex buffer');
      return -1;
    }

    // Bind the buffer object to a target
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, vertexBuffer);

    // Write data into buffer object
    this.gl.bufferData(this.gl.ARRAY_BUFFER, vertices, this.gl.STATIC_DRAW);

    this.gl.vertexAttribPointer(this.a_Position, 2, this.gl.FLOAT, false, 0, 0);

    this.gl.enableVertexAttribArray(this.a_Position);

    return n;
  }
}

new Scene();
