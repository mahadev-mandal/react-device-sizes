import { useEffect, useState } from 'react'

// useMediaQuery hook return boolean
export interface MediaQueryType {
  query?: string
  width?: string | number
  maxWidth?: string | number
  minWidth?: string | number
}

const returnStringVal = (value: string | number) => {
  if (typeof value === 'number') {
    return value + 'px'
  }
  return value
}

const JSObjToCSS = (JSObj: any) => {
  let cssString = ''
  let i = 0
  // eslint-disable-next-line prefer-const
  for (let key in JSObj) {
    cssString +=
      (i > 0 ? ' and (' : '(') +
      key.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`) +
      ': ' +
      returnStringVal(JSObj[key]) +
      ')'
    i++
  }

  return cssString
}

// useMediaQuery hook return boolean
export function useMediaQuery(props: { query: string } | MediaQueryType) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(props.query ?? JSObjToCSS(props))
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, props])

  return matches
}
