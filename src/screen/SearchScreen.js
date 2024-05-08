import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box } from "@mui/material";
import {
  employeeOptions,
  experienceOptions,
  jobTypeOptions,
  roleOptions,
  salaryOptions,
} from "../constants/options";
import SelectMulti from "../componenets/SelectMulti";
import { dummy } from "../dummy/DummyJobData";
import JobCard from "../componenets/JobCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchJobs } from "../features/jobsSlice";
import Grid from '@mui/material/Unstable_Grid2';

export default function SearchScreen() {
  const { jobs, loading, offset } = useSelector((data) => data.jobStore);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [roles, setRoles] = useState([]);
  const loadMoreRef = useRef(null);

  const handleChangeRole = (selectedRoles) => {
    setRoles(selectedRoles);
  };

  const dispatch = useDispatch();

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

  const filteredArray = () => {
    let filtered = jobs.filter((item) => {
      if (
        roles.length > 0 &&
        !roles.some((role) => role.value === item.jobRole)
      ) {
        console.log("innn", item.jobRole);
        return false;
      }

      console.log(selectedSalary, item.maxJdSalary);

      return true;
    });
    console.log(filtered, "as");
    return filtered;
  };

  useEffect(() => {}, [
    jobs,
    roles,
    selectedEmployees,
    selectedSalary,
    selectedJobTypes,
    selectedExperience,
  ]);

  useEffect(() => {
    console.log("i am being called");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          dispatch(fetchJobs({ limit: 10, offset }));
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadMoreRef]);

  return (
    <Box display={"flex"} justifyContent={"center"} >
 <Box   sx={{
  width: {
    xs: '100%', // Full width on extra small screens
    sm: '80%',  // 70% width on small screens and above
  },
}}> 
      <Box display="flex" gap={"20px"} position={"fixed"} flexWrap={"wrap"} width="100%">
        <SelectMulti
          data={roles}
          handleData={handleChangeRole}
          options={roleOptions}
          label={"Roles"}
        />
        <SelectMulti
          disable
          data={selectedEmployees}
          handleData={handleChangeEmployees}
          options={employeeOptions}
          label={"Number of Employees"}
        />
        <SelectMulti
          data={selectedSalary}
          handleData={handleChangeSalary}
          options={salaryOptions}
          label={"Base Salary"}
          multi={false}
        />
        <SelectMulti
          data={selectedJobTypes}
          handleData={handleChangeJobTypes}
          options={jobTypeOptions}
          label={"Job Types"}
        />
        <SelectMulti
          disable
          data={selectedExperience}
          handleData={handleChangeExperience}
          options={experienceOptions}
          label={"Experience"}
          multi={false}
        />
      </Box>
     
      <Grid container spacing={3} >
        {[...filteredArray()].map((i, _i) => (
         <Grid xs={10} sm={4} md={3} key={_i}>
          <JobCard key={_i} {...i} />
          </Grid>
        ))}
      </Grid>

      <Box
        position="relative"
        width="100%"
        height="20px"
        zIndex={100}
        textAlign="center"
        ref={loadMoreRef}
      >
        {947 === jobs.length ? (
          <>NO MORE DATA AVAILABLE</>
        ) : (
          <> {loading && "Loading..."}</>
        )}
      </Box>
      </Box>
      </Box>
  );
}
