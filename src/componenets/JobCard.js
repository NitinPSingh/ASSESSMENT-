import React, { useState } from "react";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, Button, Link, Modal } from "@mui/material";

const styles = {
  mask: {
    WebkitMaskImage:
      "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
    maskImage:
      "linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255), rgba(255, 255, 255, 0))",
  },
};
export default function JobCard(props) {
  const [showmore, setShowMore] = useState(false);

  return (
    <>
      <Modal
        open={showmore}
        onClose={() => setShowMore(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
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
          }}
        >
          {props?.jobDetailsFromCompany}
        </Box>
      </Modal>

      <Card sx={{ width: "100%" }} className="jobCard">
        <CardContent sx={{ padding: "0px 15px!important" }}>
          <Box padding={"5px 0px"}>
            <Box display="flex" gap="0.5rem">
              <Avatar src={props.logoUrl} aria-label="recipe"></Avatar>

              <Box>
                <div className="info-container">
                  <h3 id="companyname" className="capitalize">
                    {props.companyName}
                  </h3>
                  <h2 className="capitalize">{props.jobRole}</h2>
                </div>
                <p
                  className="capitalize"
                  style={{
                    marginTop: "5px",
                    fontSize: "11px",
                    fontWeight: 500,
                    marginBottom: "0px",
                  }}
                >
                  {props.location}
                </p>
              </Box>
            </Box>

            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight={400}
              fontSize={"14px"}
              margin={"8px 0px"}
            >
              Estimated Salary : {props.minJdSalary && `${props.minJdSalary}L-`}{" "}
              {props.maxJdSalary}L
            </Typography>
            <Box
              height="250px"
              overflow="hidden"
              sx={{ ...styles.mask }}
              zIndex={5}
            >
              <Typography fontWeight={600} fontSize={"1rem"}>
                About Company:
              </Typography>
              <Typography>{props.jobDetailsFromCompany}</Typography>
            </Box>
            <Box
              className=""
              style={{ cursor: "pointer" }}
              position={"relative"}
              onClick={() => setShowMore(true)}
              marginTop="-20px"
              zIndex={10}
              textAlign="center"
            >
              <Link underline="none">Show more</Link>
              {/* <button onClick={() => setShowMore(true)}>Show more</button> */}
            </Box>
            <Box>
              <Typography></Typography>
            </Box>

            <Box class="info-container">
              <h3 style={{ marginTop: "10px" }}>Minimum Experience</h3>
              <h2>{props.minExp?props.minExp:0} years</h2>
            </Box>
          </Box>
          <Box>
            <Button variant="contained" id="easy_applyBtn" fullWidth>
              ⚡ Easy Apply
            </Button>
          </Box>
          <Box>
            <Button variant="contained" id="refer_askBtn" fullWidth>
              <Avatar
                src={props.logoUrl}
                variant="dot"
                sx={{
                  width: 24,
                  height: 24,
                  marginRight: "10px",
                  filter: "blur(1px)",
                }}
              />
              Unlock referral asks
            </Button>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
