import HomeHero from '../components/sections/home/HomeHero'
import Product from '../components/sections/home/Product'
import FractureShowcase from '../components/sections/home/FractureShowcase'
import Projects from '../components/sections/home/Projects'
import Quality from '../components/sections/home/Quality'
import Infrastructure from '../components/sections/home/Infrastructure'
import SiteFooter from '../components/common/SiteFooter' 

function Home() {
  return (
    <main className="page-home">
      <HomeHero />
      <Product />
      <FractureShowcase />
      <Quality />
      <Projects />
      <Infrastructure />
     
      
   
    </main>
  )
}

export default Home
