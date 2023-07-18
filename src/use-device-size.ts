import { useEffect, useState } from 'react'

export interface DeviceSizesType {
  xsDown: boolean
  onlyXs: boolean
  xsUp: boolean
  smDown: boolean
  onlySm: boolean
  smUp: boolean
  mdDown: boolean
  onlyMd: boolean
  mdUp: boolean
  lgDown: boolean
  lgUp: boolean
}

export function useDeviceSize() {
  const deviceSizes: DeviceSizesType = {
    xsDown: useMediaQuery('(max-width: 576px)'),
    onlyXs: useMediaQuery('(min-width: 576px) and (max-width: 767px)'),
    xsUp: useMediaQuery('(min-width: 576px)'),
    smDown: useMediaQuery('(max-width: 767px)'),
    onlySm: useMediaQuery('(min-width: 768px) and (max-width: 991px)'),
    smUp: useMediaQuery('(min-width: 768px'),
    mdDown: useMediaQuery('(max-width: 991px)'),
    onlyMd: useMediaQuery('(min-width: 992px) and (max-width: 1199px)'),
    mdUp: useMediaQuery('(min-width: 992px)'),
    lgDown: useMediaQuery('(max-width: 1199px)'),
    lgUp: useMediaQuery('(min-width: 1200px)'),
  }
  return deviceSizes
}

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}
