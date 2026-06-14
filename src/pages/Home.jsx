import HomeHero from '../components/sections/home/HomeHero'
import Product from '../components/sections/home/Product'
import HomeSections from '../components/sections/home/HomeSections'

function Home() {
  return (
    <main className="page-home">
      <HomeHero />
      <Product />
      <HomeSections />
    </main>
  )
}

export default Home
