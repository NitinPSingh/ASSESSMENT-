import React, { useState } from 'react';
import { Box } from '@mui/material';
import { employeeOptions, experienceOptions, jobTypeOptions, roleOptions, salaryOptions } from '../constants/options';
import SelectMulti from '../componenets/SelectMulti';

export default function SearchScreen() {
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState([]);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [roles,setRoles] = useState([])
  const handleChangeRole = (selectedRoles) => {
    setRoles(selectedRoles);
  };


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

 

  
  return (
    <div>
      <Box display="flex" width="100%">
        <SelectMulti data={roles} handleData={handleChangeRole} options={roleOptions} label={"Roles"} />
        <SelectMulti data={selectedEmployees} handleData={handleChangeEmployees} options={employeeOptions} label={"Number of Employees"} />
        <SelectMulti data={selectedSalary} handleData={handleChangeSalary} options={salaryOptions} label={"Base Salary"} />
        <SelectMulti data={selectedJobTypes} handleData={handleChangeJobTypes} options={jobTypeOptions} label={"Job Types"} />
        <SelectMulti data={selectedExperience} handleData={handleChangeExperience} options={experienceOptions} label={"Experience"} multi={false}/>
      </Box>
    </div>
  );
}