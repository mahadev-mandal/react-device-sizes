# React device sizes

React Device Sizes is a React library that provides hooks to easily determine the current device size or create custom breakpoints for responsive designs.
## Install

```console
$ npm install react-device-sizes --save
```

## Usage

### With Hooks

#### Predefined breakpoints

```jsx
import React from 'react'
import { useDeviceSize } from 'react-device-sizes'

const MyCompontent = () => {
  const deviceSizes = useDeviceSize()

  const {
    isXsDown,
    isOnlyXs,
    isXsUp,
    isSmDown,
    isOnlySm,
    isSmUp,
    isMdDown,
    isOnlyMd,
    isMdUp,
    isLgDown,
    isLgUp
  } = deviceSizes;

  return (
    <div>
      <h1>Device Test!</h1>
      {isXsDown && <p>You are an XsDown device</p>}
      {isOnlyXs && <p>You have an OnlyXs device</p>}
      {/* ... */}
    </div>
  )
}
```
#### Custom Breakpoints

```jsx
import React from 'react'
import { useMediaQuery } from 'react-device-sizes'

const MyComponent = () => {
  const isMobileDevice = useMediaQuery({ maxWidth: 767 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 })
  const isLaptops = useMediaQuery({ minWidth: 1224 })
  const is900 = useMediaQuery({ width: 900 })
  const sizeWithQuery = useMediaQuery({ query: '(min-width: 576px) and (max-width: 767.98px)' })

  return <div>...</div>
}
```