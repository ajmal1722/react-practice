import Navbar from './assets/components/navbar'
import Hero from './assets/components/Hero';
import HomeCards from './assets/components/HomeCards';
import JobListings from './assets/components/JobListings';
import ViewAllJobs from './assets/components/ViewAllJobs';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      <Hero >Becomes a react Dev</Hero>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>  
    </div>
  )
}

export default App
