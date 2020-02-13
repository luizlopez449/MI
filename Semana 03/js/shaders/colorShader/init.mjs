/**
 * Initialize the buffers we'll need. For this demo, we just
 * have one object -- a simple two-dimensional square.
 *
 * @param gl GL Object
 */
export function initBuffers(gl) {
// Create a buffer for the cube's vertex positions.

const positionBuffer = gl.createBuffer();

// Select the positionBuffer as the one to apply buffer
// operations to from here out.

gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

// Now create an array of positions for the cube.

const positions = [
  0.0, 2.0, 0.0,
 -1.0,0.0,1.0,
 -1.0,0.0,-1.0,

 0.0,2.0,0.0,
 1.0,0.0,1.0,
 -1.0,0.0,1.0,

 0.0,2.0,0.0,
 1.0,0.0,-1.0,
 1.0,0.0,1.0,

 0.0,2.0,0.0,
 -1.0,0.0,-1.0,
 1.0,0.0,-1.0,

 1.0,0.0,1.0,
 -1.0,0.0,-1.0,
 -1.0,0.0,1.0,

 1.0,0.0,1.0,
 1.0,0.0,-1.0,
 -1.0,0.0,-1.0,


];

// Now pass the list of positions into WebGL to build the
// shape. We do this by creating a Float32Array from the
// JavaScript array, then use it to fill the current buffer.

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

// Now set up the colors for the faces. We'll use solid colors
// for each face.

const faceColors = [
  [1.0,  1.0,  1.0,  1.0],    // Front face: white
  [1.0,  0.0,  0.0,  1.0],    // Back face: red
  [0.0,  1.0,  0.0,  1.0],    // Top face: green
  [0.0,  0.0,  1.0,  1.0],    // Bottom face: blue
  [1.0,  1.0,  0.0,  1.0],    // Right face: yellow
  [1.0,  0.0,  1.0,  1.0],    // Left face: purple
];

// Convert the array of colors into a table for all the vertices.

var colors = [];

for (var j = 0; j < faceColors.length; ++j) {
  const c = faceColors[j];

  // Repeat each color four times for the four vertices of the face
  colors = colors.concat(c, c, c, c);
}

const colorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

// Build the element array buffer; this specifies the indices
// into the vertex arrays for each face's vertices.

const indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);

// This array defines each face as two triangles, using the
// indices into the vertex array to specify each triangle's
// position.

const indices = [
 0,1,2,
 3,4,5,
 6,7,8,
 9,10,11,
 12,13,14,
 15,16,17

];

// Now send the element array to GL

gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices), gl.STATIC_DRAW);

return {
  position: positionBuffer,
  color: colorBuffer,
  indices: indexBuffer,
};

}
