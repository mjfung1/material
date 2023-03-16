
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
import { DeleteOutlined } from '@material-ui/icons';
import { formatDistance } from 'date-fns';

import React from 'react';



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
              <Avatar src={`../the-office/avatars/${note.person}.jpeg`} />
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
