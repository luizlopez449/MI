 export const fragmentShader = 
// `
//     varying lowp vec4 vColor;
//     void main(void) {
//       gl_FragColor = vColor;
//     }
//   `
`
    varying highp vec2 vTextureCoord;
    uniform sampler2D uSampler;
    void main(void) {
      gl_FragColor = texture2D(uSampler, vTextureCoord);
    }
  `;
  ;