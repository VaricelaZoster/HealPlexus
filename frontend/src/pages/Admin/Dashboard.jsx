import React from 'react'
import Glance from '../../components/dashboardComponents/Glance'
import Latest from '../../components/dashboardComponents/Latest'

const Dashboard = () => {
  return (
    <div className='space-y-8'>
      <div><Glance/></div>
      <div><Latest/></div>
    </div>
  )
}

export default Dashboard