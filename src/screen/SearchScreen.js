import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';
import { employeeOptions, experienceOptions, jobTypeOptions, roleOptions, salaryOptions } from '../constants/options';
import SelectMulti from '../componenets/SelectMulti';
import { dummy } from '../dummy/DummyJobData';
import JobCard from '../componenets/JobCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchJobs } from '../features/jobsSlice';

export default function SearchScreen() {
  const {
    jobs, loading, offset 
   
  } = useSelector((data) => data.jobStore);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [roles,setRoles] = useState([])
  const loadMoreRef = useRef(null);

  const handleChangeRole = (selectedRoles) => {
    setRoles(selectedRoles);
  };

  const dispatch = useDispatch()

  const handleChangeEmployees = (selectedOptions) => {
    setSelectedEmployees(selectedOptions);
  };

  const handleChangeSalary = (selectedOptions) => {
    setSelectedSalary(selectedOptions);
  };

  const handleChangeJobTypes = (selectedOptions) => {
    setSelectedJobTypes(selectedOptions);
  };

  const handleChangeExperience = (selectedOptions) => {
    setSelectedExperience(selectedOptions);
  };

  
 

  const filteredArray = (data) => {
    let filtered = jobs.filter(item => {
      // Apply role filter
      if (roles.length > 0 && !roles.some(role => role.value === item.jobRole)) {
        return false;
      }
      // // Apply number of employees filter
      // if (selectedEmployees.length > 0 && !selectedEmployees.some(option => option.value === item.numberOfEmployees)) {
      //   return false;
      // }
      // // Apply base salary filter
      // if (selectedSalary.length > 0 && !selectedSalary.some(option => option.value === item.baseSalary)) {
      //   return false;
      // }
      // // Apply job types filter
      // if (selectedJobTypes.length > 0 && !selectedJobTypes.some(option => option.value === item.jobType)) {
      //   return false;
      // }
      // // Apply experience filter
      // if (selectedExperience ==null && !selectedExperience.some(option => option.value === item.experience)) {
      //   return false;
      // }
      return true;
    });
    return filtered
  };

  // useEffect(() => {
  //   if (triggerdReq !== 0 && jobs.length == 0 ) {
  //     dispatch(fetchJobs({limit:10,offset}))
  //   }
  // }, [triggerdReq]);

  useEffect(() => {
    console.log("i am being called")

    const observer = new IntersectionObserver(
      (entries) => {
        
        if (entries[0].isIntersecting) {
          dispatch(fetchJobs({limit:10,offset}))
        
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [ loadMoreRef]); 

  return (
    <div>
      <Box display="flex" width="100%">
        <SelectMulti data={roles} handleData={handleChangeRole} options={roleOptions} label={"Roles"} />
        <SelectMulti data={selectedEmployees} handleData={handleChangeEmployees} options={employeeOptions} label={"Number of Employees"} />
        <SelectMulti data={selectedSalary} handleData={handleChangeSalary} options={salaryOptions} label={"Base Salary"} />
        <SelectMulti data={selectedJobTypes} handleData={handleChangeJobTypes} options={jobTypeOptions} label={"Job Types"} />
        <SelectMulti data={selectedExperience} handleData={handleChangeExperience} options={experienceOptions} label={"Experience"} multi={false}/>
      </Box>
      {console.log(jobs)}
      <Box display="flex" width="100%" flexWrap="wrap">
      {jobs.map((i)=><JobCard key={i.jdUid} {...i} />)}
      
      <Box position="relative" ref={loadMoreRef}>

</Box>
      </Box>
    

    

      
    </div>
  );
}