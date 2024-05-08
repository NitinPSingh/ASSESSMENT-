import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import {
  employeeOptions,
  experienceOptions,
  jobTypeOptions,
  roleOptions,
  salaryOptions,
} from "../constants/options";
import SelectMulti from "../componenets/SelectMulti";
// import { dummy } from "../dummy/DummyJobData";
import JobCard from "../componenets/JobCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchJobs } from "../features/jobsSlice";
import Grid from "@mui/material/Unstable_Grid2";

export default function SearchScreen() {
  const { jobs, loading, offset } = useSelector((data) => data.jobStore);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedSalary, setSelectedSalary] = useState(null);
  const [selectedJobTypes, setSelectedJobTypes] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [roles, setRoles] = useState([]);
  const loadMoreRef = useRef(null);

  const [searchCompany, setSearchCompany] = useState("");
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
        return false;
      }

      if (
        selectedSalary &&
        (item.minJdSalary
          ? selectedSalary.value >= item.minJdSalary
          : selectedSalary.value >= item.maxJdSalary)
      ) {
        return false;
      }
      if (!item.companyName.toLowerCase().includes(searchCompany.toLowerCase()) && !item.location.toLowerCase().includes(searchCompany.toLowerCase()))
        return false;

      if (selectedExperience && item.minExp<=selectedExperience.value )
        return false;

      if (selectedJobTypes ){
        if(selectedJobTypes.value==='remote' && item.location!="remote")
          return false;
        
        if(selectedJobTypes.value!=='remote' && item.location==="remote")
          return false;
      }
       
      

      return true;
    });
    if(filtered.length==0){
      if (offset <= 947) dispatch(fetchJobs({ limit: 10, offset }));
    }
    
    return filtered;
  };

  useEffect(() => {}, [
    jobs,
    roles,
    selectedEmployees,
    selectedSalary,
    selectedJobTypes,
    selectedExperience,
    searchCompany,
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (offset <= 947) dispatch(fetchJobs({ limit: 10, offset }));
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
    <Box display={"flex"} justifyContent={"center"}>
      <Box
        sx={{
          width: {
            xs: "100%", 
            sm: "80%", 
          },
        }}
      >
        <Box
          display="flex"
          flexGrow="1"
          columnGap={"20px"}
          zIndex={100}
          position={"fixed"}
          padding={"6px 0px"}
          flexWrap={"wrap"}
        >
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
            label={"Remote/On Site"}
            multi={false}
          />
          <SelectMulti
            
            data={selectedExperience}
            handleData={handleChangeExperience}
            options={experienceOptions}
            label={"Experience"}
            multi={false}
          />
          <TextField
            variant="outlined"
            sx={{
              backgroundColor: "white",
              maxHeight: "38px",
              "& .MuiInputBase-root": { maxHeight: "38px" },
            }}
            placeholder="Search Company/ location"
            onChange={(e) => setSearchCompany(e.target.value)}
            value={searchCompany}
          />
        </Box>

        <Box paddingTop={"100px"}>
          <Grid
            container
            spacing={3}
            sx={{
              justifyContent: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            {[...filteredArray()].map((i, _i) => (
              <Grid xs={10} sm={4} md={3} key={_i}>
                <JobCard key={_i} {...i} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          position="relative"
          width="100%"
          height="100px"
          zIndex={100}
          textAlign="center"
          ref={loadMoreRef}
          paddingTop="50px"
        >
          { jobs.length>=947 ? (
            <>NO MORE DATA AVAILABLE</>
          ) : (
            <> {loading && `Loading... ${offset}/947` }</>
          )}
        </Box>
      </Box>
    </Box>
  );
}
