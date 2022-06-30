export enum ATTR {
  POSITION_START = "aPositionStart",
  COLOR = "aColor",
}

export const VERTEX_SHADER = `
  attribute vec3 ${ATTR.POSITION_START};
  attribute vec3 ${ATTR.COLOR};
  uniform mat4 uProjectionMatrix;
  uniform mat4 uModelMatrix;
  uniform mat4 uViewMatrix;
  uniform float uProgress;
  varying vec3 vColor;
  mat4 rotate(float _angle){
    return mat4(
      cos(_angle),-sin(_angle), 0.0, 0.0,
      sin(_angle),cos(_angle), 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  mat4 translate(float _angle){
    return mat4(
      1.0, 0.0, 0.0, sin(_angle) * 0.04,
      0.0, 1.0, 0.0, cos(_angle) * 0.04,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  void main(){
    gl_Position = rotate(uProgress) * uProjectionMatrix * uModelMatrix * uViewMatrix * vec4(${ATTR.POSITION_START}, 1.0) * translate(uProgress);
    gl_PointSize = 2.0;
    vColor = ${ATTR.COLOR};
  }
`;

export const FRAGMENT_SHADER = `
  precision mediump float;
  uniform float uProgress;
 
  varying vec3 vColor;
  void main(){
    gl_FragColor = vec4(vColor, 1.0);
  }
`;
