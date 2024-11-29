import React from 'react'
import FeatureSection from './components/FeatureSection'
import Testimonial from './components/Testimonial'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import FeatureSections from './components/FeatureSections'



const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <FeatureSections></FeatureSections>
      <FeatureSection></FeatureSection>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <Blog></Blog>
      <CTA></CTA>
      <Footer></Footer>

      
    </div>
  )
}

export default App
