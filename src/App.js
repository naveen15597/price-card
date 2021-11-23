import './App.css';
import {Button} from 'react-bootstrap';
import Card from './Card.js';
import { useState } from 'react';
function App() {
  // const data=[{"Free":["Single User","5GB Storage","Unlimited Public Projects"]}]
  const free = {
    title:"FREE",
    price: "0",
    user: "Single User",
    userEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subDomain:"Free Subdomain",
    subDomainEnabler:false,
    monthlyStatus:"Monthly Status Reports",
    monthlyStatusEnabler:false
  }
  const plus = {
    title:"PLUS",
    price: "9",
    user: "5 User",
    userEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Free Subdomain",
    subDomainEnabler:true,
    monthlyStatus:"Monthly Status Reports",
    monthlyStatusEnabler:false
  }
  const pro = {
    title:"PRO",
    price: "49",
    user: "Unlimited User",
    userEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomainPrefix:"Unlimited",
    subDomain:" Free Subdomain",
    subDomainEnabler:true,
    monthlyStatus:"Monthly Status Reports",
    monthlyStatusEnabler:true
  }
  return (
    <section className="pricing py-5">
    <div className="container">
      <div className="row">        
        <Card type={free}/>        
        <Card type={plus}/>      
        <Card type={pro}/>      
      </div>
    </div>
  </section>
  );
}

export default App;
