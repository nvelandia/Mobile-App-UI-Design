import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const IconLock = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={18}
    fill="none"
    {...props}>
    <Path
      fill="#A6D5DF"
      d="M11.957 6.495v-2.69C11.957 1.706 9.957 0 7.5 0S3.043 1.707 3.043 3.804v2.69H0V18h15V6.495h-3.043zm-7.61-2.69c0-1.485 1.415-2.692 3.153-2.692s3.152 1.207 3.152 2.691v2.69H4.348v-2.69zm9.349 13.082H1.304V7.608h12.392v9.279z"
    />
    <Path fill="#A6D5DF" d="M14.529 7.2H.471v10.2h14.058V7.2z" />
    <Path
      fill="#6DA7B2"
      d="M6.848 12.546v1.988h1.304v-1.988c.514-.209.87-.656.87-1.173 0-.717-.683-1.3-1.522-1.3-.84 0-1.522.583-1.522 1.3 0 .517.356.964.87 1.173z"
    />
  </Svg>
);

export default IconLock;
