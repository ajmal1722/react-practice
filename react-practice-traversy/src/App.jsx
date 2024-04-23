import Navbar from './assets/components/navbar'
import Hero from './assets/components/Hero';
import HomeCards from './assets/components/HomeCards';
import JobListings from './assets/components/JobListings';
import ViewAllJobs from './assets/components/ViewAllJobs';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>  
    </>
  )
}

export default App
