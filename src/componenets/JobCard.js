import React from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";


export default function JobCard() {


  return (
    <Card sx={{ width: 345 }}>
      <CardContent>
        <Box display="flex">
          <Avatar
            src="https://logo.clearbit.com/dropbox.com"
            aria-label="recipe"
          ></Avatar>

          <Box>
            <div class="info-container">
              <h3 class="MuiBox-root css-rulwqv">Zuma</h3>
              <h2>Founding Staff Frontend Software Engineer</h2>
            </div>
            <p class="cards-sub-text">Bengaluru</p>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary">
          Estimated Salar : 10L- 35L 
        </Typography>
        <Box>
          <Typography></Typography>
          <Box>
            This is a sample job and you must have displayed it to understand
            that its not just some random lorem ipsum text but something which
            was manually written. Oh well, if random text is what you were
            looking for then here it is: Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages and now in this assignment.
          </Box>
        </Box>
        <Box>
          <Typography></Typography>
        </Box>

        <Box>
          <h3>Minimum Experience</h3>
          <h2>1 years</h2>
        </Box>
      </CardContent>
      <Box>
        <Button variant="contained" id="easy_applyBtn">
          ⚡ Easy Apply
        </Button>
      </Box>
    </Card>
  );
}
