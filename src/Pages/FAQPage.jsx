import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, makeStyles, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  

function FAQPage(props) {
    const classes = useStyles();

    return (
        <Fade in timeout={ 1000 }>
        <Container style={{textAlign: "center"}}>
            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>How will Lunar Banquet work online?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our pre-show activities/games will start on <a target="_blank" rel="noreferrer" href="http://ter.ps/csazoom">Zoom</a> at 7pm.
                        Then, we will begin the show stream on <a target="_blank" rel="noreferrer" href="https://www.twitch.tv/umcpcsa">Twitch</a>. 
                        Everyone can stay on Zoom to discuss the show and hang out while watching the stream individually on Twitch! (For the best quality 😏)
                        Before and during Lunar Banquet, feel free to <Link to="/dares">donate</Link> towards a dare for one of our members!
                        All of the proceeds will be donated to Feeding America to help fight hunger.
                        <br /><br />
                        We hope to see you there!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>When does the Twitch stream start?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Our Twitch stream will start after we conclude pre-activities on Zoom! We're aiming to start the stream at 7:30pm.
          </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>How do dares work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Each board member has a list of dares. Once their donation meter meets a certain threshold, they will perform
                        the dare and post it on the 'Completed Dares' tab. You can name your own price for the donation, and all proceeds
                        will go to the nonprofit organization Feeding America.
                        <br /><br />
                        You can check the dares list for each member by clicking 'View Dares'! Your donation will work towards the next
                        tier dare for that member.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}>How do I pay by Venmo?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        You can go to the Venmo app and give @CSA-UMCP your desired donation. Leave the person(s) you want
                        to donate to as a note and we will count it towards their dare threshold!
                        <br /><br />
                        You do not need to use the cart on this website if paying by Venmo. :)
          </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
        </Fade>
    );
}

export default FAQPage;