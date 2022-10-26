import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Arrow = (props) => (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M30 0a30 30 0 1 0 0 60 30 30 0 0 0 0-60zm0 55.714a25.714 25.714 0 1 1 0-51.427 25.714 25.714 0 0 1 0 51.427z"
    />
    <Path
      fill="#fff"
      d="m25.971 15.621-3.021 3.043L34.286 30 22.95 41.336l3.021 3.043 11.336-11.357a4.286 4.286 0 0 0 0-6.043L25.971 15.622z"
    />
  </Svg>
)

export default Arrow