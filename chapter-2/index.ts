class Scene {
  private canvasElement: HTMLCanvasElement | undefined;
  private gl: WebGL2RenderingContext;
  private vertexShader: string = `
  attribute vec4 a_Position;
  attribute float a_PointSize;

  void main() {
    gl_Position = a_Position;
    gl_PointSize = a_PointSize;
  }
  `;
  private fragmentShader: string = `
  precision mediump float;
  uniform vec4 u_FragColor;
  void main() {
    gl_FragColor = u_FragColor;
  }
  `;
  private a_Position: number;
  private u_FragColor: WebGLUniformLocation;
  private g_points: Array<number[]> = [];
  private g_colors: Array<number[]> = [];

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

    this.canvasElement.onmousedown = (ev) => {
      this.onClick(
        ev,
        this.gl,
        this.canvasElement,
        this.a_Position,
        this.u_FragColor
      );
    };

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

    // Get attribute location
    this.a_Position = this.gl.getAttribLocation(program, 'a_Position');
    this.u_FragColor = this.gl.getUniformLocation(program, 'u_FragColor');

    const a_PointSize = this.gl.getAttribLocation(program, 'a_PointSize');

    // Declare new position
    const position = new Float32Array([0.5, 0.0, 0.0, 1.0]);
    const color = [0.0, 0.5, 0.0, 1.0];
    const pointSize = 14;

    // Set new position
    this.gl.vertexAttrib4fv(this.a_Position, position);
    this.gl.vertexAttrib1f(a_PointSize, pointSize);
    this.gl.uniform4fv(this.u_FragColor, color);

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

  private onClick(
    ev: MouseEvent,
    gl: WebGLRenderingContext,
    canvas: HTMLCanvasElement,
    a_Position: number,
    u_FragColor: WebGLUniformLocation
  ): void {
    let x = ev.clientX;
    let y = ev.clientY;

    const rect: DOMRect = (ev.target as any).getBoundingClientRect() as DOMRect;

    x = (x - rect.left - canvas.width / 2) / (canvas.width / 2);
    y = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2);

    // Store the coordinates to g_points array
    this.g_points.push([x, y]);

    console.log(this.g_points);
    // Clear canvas
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    if (x >= 0.0 && y >= 0.0) {
      this.g_colors.push([1.0, 0.0, 0.0, 1.0]);
    } else if (x < 0.0 && y < 0.0) {
      this.g_colors.push([0.0, 1.0, 0.0, 1.0]);
    } else {
      this.g_colors.push([1.0, 1.0, 1.0, 1.0]);
    }

    for (let i = 0; i < this.g_points.length; i += 2) {
      const xy = this.g_points[i];
      const rgba = this.g_colors[i];
      this.gl.vertexAttrib3f(a_Position, xy[0], xy[1], 0.0);
      this.gl.uniform4fv(this.u_FragColor, rgba);

      this.gl.drawArrays(this.gl.POINTS, 0, 1);
    }
  }
}

new Scene();
