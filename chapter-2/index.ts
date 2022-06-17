class Scene {
  private canvasElement: HTMLCanvasElement | undefined;
  private gl: WebGL2RenderingContext;
  private vertexShader: string = `
  attribute vec4 a_Position;

  void main() {
    gl_Position = a_Position;
    gl_PointSize = 10.0;
  }
  `;
  private fragmentShader: string = `
  void main() {
    gl_FragColor = vec4(1.0,0.0,1.0,1.0);
  }
  `;

  constructor() {
    this.canvasElement = document.querySelector('#webgl-canvas');

    if (!this.canvasElement) {
      console.log('Failed to get canvas element');
      return;
    }

    this.gl = this.canvasElement.getContext('webgl2');

    const hasInitializedShader = this.initializeShader(
      this.gl,
      this.vertexShader,
      this.fragmentShader
    );

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

  private initializeShader(
    gl: WebGL2RenderingContext,
    vShader: string,
    fShader: string
  ): boolean {
    // Create program
    const program = this.createWebGLProgram(gl, vShader, fShader);

    if (!program) {
      console.log('Failed to create program');
      return false;
    }

    const a_Position = this.gl.getAttribLocation(program, 'a_Position');
    this.gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);

    // Use program
    this.gl.useProgram(program);

    return true;
  }

  private createWebGLProgram(
    gl: WebGL2RenderingContext,
    vShader: string,
    fShader: string
  ): WebGLProgram {
    // Load shaders
    const vertexShader = this.getShader(gl, gl.VERTEX_SHADER, vShader);
    const fragmentShader = this.getShader(gl, gl.FRAGMENT_SHADER, fShader);

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
    const linked = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);

    if (!linked) {
      const error = this.gl.getProgramInfoLog(program);

      console.log(`Failed to link program ${error}`);

      // Clean up
      this.gl.deleteProgram(program);
      this.gl.deleteShader(vertexShader);
      this.gl.deleteShader(fragmentShader);
    }

    return program;
  }

  private getShader(
    gl: WebGL2RenderingContext,
    type: number,
    source: string
  ): WebGLShader {
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
}

new Scene();
