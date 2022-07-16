export enum ATTR {
  POSITION_START = "aPositionStart",
  COLOR = "aColor",
  OFFSET_Y = "aOffsetY",
}

export const VERTEX_SHADER = `
  attribute vec3 ${ATTR.POSITION_START};
  attribute vec3 ${ATTR.COLOR};
  attribute float ${ATTR.OFFSET_Y};
  uniform mat4 uProjectionMatrix;
  uniform mat4 uModelMatrix;
  uniform mat4 uViewMatrix;
  uniform float uProgress;
  varying vec3 vColor;
  mat4 rotateX(float _angle){
    return mat4(
      1.0, 0.0, 0.0, 0.0,
      0.0, cos(_angle), -sin(_angle), 0.0,
      0.0, sin(_angle), cos(_angle), 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  mat4 rotateY(float _angle){
    return mat4(
      cos(_angle), 0.0, sin(_angle), 0.0,
      0.0, 1.0, 0.0, 0.0,
      -sin(_angle), 0.0, cos(_angle), 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  mat4 rotateZ(float _angle){
    return mat4(
      cos(_angle), -sin(_angle), 0.0, 0.0,
      sin(_angle), cos(_angle), 0.0, 0.0,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  mat4 translateY(float _offset){
    return mat4(
      1.0, 0.0, 0.0, 0.0,
      0.0, 1.0, 0.0, -1.0 * _offset,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }
  void main(){
    gl_Position = uProjectionMatrix * uModelMatrix * uViewMatrix * rotateX(uProgress) * vec4(${ATTR.POSITION_START}, 1.0) * translateY(${ATTR.OFFSET_Y});
    gl_PointSize = 1.0;
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
