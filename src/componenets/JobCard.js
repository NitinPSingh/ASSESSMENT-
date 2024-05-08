import React, { useState } from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Button, Modal  } from "@mui/material";

// const props =     {
//   "jdUid": "cfff363b-053c-11ef-83d3-06301d0a7178-92032",
//   "jdLink": "https://weekday.works",
//   "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
//   "maxJdSalary": 103,
//   "minJdSalary": 86,
//   "salaryCurrencyCode": "USD",
//   "location": "mumbai",
//   "minExp": 10,
//   "maxExp": 15,
//   "jobRole": "ios",
//   "companyName": "Rakuten",
//   "logoUrl": "https://logo.clearbit.com/rakuten.com"
// }
export default function JobCard(props) {

  const [showmore,setShowMore] = useState(false)


  return (
    <>
          <Modal
        open={showmore}
        onClose={()=>setShowMore(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: 300,
            maxWidth: 650,
            height: 500,
            bgcolor: "background.paper",
            boxShadow: 24,
            overflowY: "scroll",
            borderRadius: 5,
            p: 4,
          }}>
            {props?.jobDetailsFromCompany}
      
        </Box>
      </Modal>
    
  
    <Card sx={{ width: 345 }}>
      <CardContent>
        <Box display="flex">
          <Avatar
            src={props.logoUrl}
            aria-label="recipe"
          ></Avatar>

          <Box>
            <div class="info-container">
              <h3 class="MuiBox-root css-rulwqv">{props.companyName}</h3>
              <h2>{props.jobRole}</h2>
            </div>
            <p class="cards-sub-text">{props.location}</p>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary">
          Estimated Salar : {props.minJdSalary}L-  {props.maxJdSalary}L 
        </Typography>
        <Box>
          <Typography></Typography>
          <Box className="card_about_wrapper">
          <div className="show_more">
            <button onClick={() => setShowMore(true)}>Show more</button>
          </div>
          </Box>
        </Box>
        <Box>
          <Typography></Typography>
        </Box>

        <Box>
          <h3>Minimum Experience</h3>
          <h2>{props.minExp} years</h2>
        </Box>
      </CardContent>
      <Box>
        <Button variant="contained" id="easy_applyBtn">
          ⚡ Easy Apply
        </Button>
      </Box>
    </Card>
    </>
  );
}
