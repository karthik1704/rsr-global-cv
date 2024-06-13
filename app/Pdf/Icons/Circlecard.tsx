import { Path, Svg } from "@react-pdf/renderer";
import React from "react";
import resumeConfig from "../../edit-me/resume-config";
import { getNeutralColor } from "../../helpers/colors";

const theme = resumeConfig.pdfTheme;
const neutralColor = getNeutralColor(12, theme);

export const CircleIdCard: React.FC<PdfIconProps> = ({ size }) => {
  return (
    <Svg style={{ height: size, width: size }} viewBox="0 0 512 512">
      <Path
        fill={neutralColor}
        d="M0,256C-0,115.563 115.563,0 256,0C396.437,-0 512,115.563 512,256C512,396.437 396.437,512 256,512C115.563,512 0,396.437 0,256ZM91.25,164.472L420.75,164.472C420.75,144.279 404.332,127.861 384.139,127.861L127.861,127.861C107.668,127.861 91.25,144.279 91.25,164.472ZM91.25,182.778L91.25,347.528C91.25,367.721 107.668,384.139 127.861,384.139L384.139,384.139C404.332,384.139 420.75,367.721 420.75,347.528L420.75,182.778L91.25,182.778ZM127.861,341.407C127.861,324.531 141.533,310.917 158.351,310.917L225.51,310.917C242.385,310.917 256,324.589 256,341.407C256,344.782 253.254,347.528 249.879,347.528L133.982,347.528C130.607,347.528 127.861,344.782 127.861,341.407ZM191.931,219.389C212.015,219.389 228.542,235.916 228.542,256C228.542,276.084 212.015,292.611 191.931,292.611C171.846,292.611 155.319,276.084 155.319,256C155.319,235.916 171.846,219.389 191.931,219.389ZM292.611,228.542C292.611,223.508 296.73,219.389 301.764,219.389L374.986,219.389C380.02,219.389 384.139,223.508 384.139,228.542C384.139,233.576 380.02,237.694 374.986,237.694L301.764,237.694C296.73,237.694 292.611,233.576 292.611,228.542ZM292.611,265.153C292.611,260.119 296.73,256 301.764,256L374.986,256C380.02,256 384.139,260.119 384.139,265.153C384.139,270.187 380.02,274.306 374.986,274.306L301.764,274.306C296.73,274.306 292.611,270.187 292.611,265.153ZM292.611,301.764C292.611,296.73 296.73,292.611 301.764,292.611L374.986,292.611C380.02,292.611 384.139,296.73 384.139,301.764C384.139,306.798 380.02,310.917 374.986,310.917L301.764,310.917C296.73,310.917 292.611,306.798 292.611,301.764Z"
      />
    </Svg>
  );
};