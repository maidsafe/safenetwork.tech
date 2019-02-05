export const genRandomKey = () => (
  Math.random().toString(36).slice(2)
)

export const isMenuLight = pathname => (
  pathname === '/get-involved/'
)
