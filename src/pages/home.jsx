import React from 'react'
import ServiceContainer from '../Components/App/Containers/ServiceContainer/ServiceContainer';
import TestimonialsContainer from '../Components/App/Containers/TestimonialsContainer/TestimonialsContainer';
import Layout from '../Components/Layout';
import VideoContainer from '../Components/App/Containers/VideoContainer/VideoContainer';

import Header from '../Components/App/Header/Header';
export default function Home() {
  return (
    <Layout>
    <div class="app">
    <Header />
      <ServiceContainer />
      <TestimonialsContainer />
      <VideoContainer />

    </div>
  </Layout>
  )
}
