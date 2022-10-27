import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconEmail = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}>
    <Path
      fill="#A6D5DF"
      d="m10.844 9.253-1.609 1.32a.353.353 0 0 1-.44 0l-1.61-1.317-6.572 5.369h16.774l-6.543-5.372zM0 3.373v10.85l6.616-5.425L0 3.373z"
    />
    <Path
      fill="#A6D5DF"
      d="M.613 2.972 9 9.849l8.387-6.877H.613zm10.771 5.826L18 14.224V3.374l-6.616 5.424z"
    />
  </Svg>
);

export default IconEmail;
