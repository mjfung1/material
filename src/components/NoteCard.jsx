
import { 
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    makeStyles,
    Typography,
 } from '@material-ui/core';
import { blue, green, pink, red } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';
import { formatDistance } from 'date-fns';

import React from 'react';
import mose from "../avatars/mose.jpeg";
import angelaMartin from "../avatars/angelaMartin.jpeg";
import dwightSchrute from "../avatars/dwightSchrute.jpeg";
import gabeLewis from "../avatars/gabeLewis.jpeg";
import kellyKapoor from "../avatars/kellyKapoor.jpeg";
import kevinMalone from "../avatars/kevinMalone.jpeg";
import michaelScarn from "../avatars/michaelScarn.jpeg";
import michaelScott from "../avatars/michaelScott.jpeg";
import oscarMartinez from "../avatars/oscarMartinez.jpeg";
import pamBeesly from "../avatars/pamBeesly.jpeg";
import prisonMike from "../avatars/prisonMike.jpeg";
import stanleyHudson from "../avatars/stanleyHudson.jpeg";
import tobyFlenderson from "../avatars/tobyFlenderson.jpeg";


const useStyles = makeStyles({
    timeago: {
        fontSize: '10px'
    },
    contact: {
        fontSize: '12px'
    }
})

function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note);
    console.log(note.person);
    return (
      <div>
        <Card elevation={1}>
          <CardHeader
            avatar={
              // <Avatar
              //     src={`../avatars/${note.person}.jpeg`}
              // />
              <Avatar
                className={classes.avatar}
                src={'../avatars/michaelScott.jpeg'}
              />
            }
            action={
              <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutlined />
              </IconButton>
            }
            title={note.title}
            subheader={
              // `@${note.person} ${ formatDistance(new Date(note.createdAt), new Date(), { addSuffix: true })}`
              <Grid container>
                <Grid item>
                  <Typography variant="body2" className={classes.contact}>
                    @{note.person}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" className={classes.timeago}>
                    {formatDistance(new Date(note.createdAt), new Date(), {
                      addSuffix: true,
                    })}
                  </Typography>
                </Grid>
              </Grid>
            }
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {note.details}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
}

export default NoteCard;
