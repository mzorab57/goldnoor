import HomeHero from '../components/sections/home/HomeHero'
import Product from '../components/sections/home/Product'
import FractureShowcase from '../components/sections/home/FractureShowcase'
import Projects from '../components/sections/home/Projects'
import Quality from '../components/sections/home/Quality'

function Home() {
  return (
    <main className="page-home">
      <HomeHero />
      <Product />
      <FractureShowcase />
      <Projects />
      <Quality />
    </main>
  )
}

export default Home
