import classNames from "classnames"
import boolValid from "../../../libs/boolValid"

export default function root ({relative, maxWScreenLg, xlMaxWScreenXl, mxAuto, darkText, TextGray}) {
  return classNames({
    'relative': boolValid(relative),
    'max-w-screen-lg': boolValid(maxWScreenLg),
    'xl:max-w-screen-xl': boolValid(xlMaxWScreenXl),
    'mx-auto': boolValid(mxAuto),
    'dark:text-gray-700': boolValid(darkText),
    'text-gray-600': boolValid(TextGray),
  })
}
