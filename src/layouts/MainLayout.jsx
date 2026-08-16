import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { useLenis } from 'lenis/react'
import SiteHeader from '../components/common/SiteHeader'
import SiteFooter from '../components/common/SiteFooter'

function ScrollToTopOnRouteChange() {
  const location = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    lenis?.scrollTo(0, { immediate: true, force: true })
  }, [location.pathname, lenis])

  return null
}

function MainLayout() {
  return (
    <div className="app-shell">
      <ScrollToTopOnRouteChange />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </div>
  )
}

export default MainLayout
