
import { 
    Avatar,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    makeStyles,
    Typography,
 } from '@material-ui/core';
import { blue, green, pink, red } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';

import React from 'react';

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note) => {
            if (note.category === 'work') {
                return red[700]
            }
            if (note.category === 'reminders') {
                return blue[500]
            }
            if (note.category === 'money') {
                return green[500]
            }
            return pink[500]
            
        }  
    }
})

function NoteCard({ note, handleDelete }) {

    const classes = useStyles(note);

    return (
        <div>
            <Card elevation={1}>
                <CardHeader 
                    avatar={
                        <Avatar 
                            src={`./avatars/${note.person}.jpeg`}
                            className={classes.avatar}>
                            {note.person[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note.id)}>
                            <DeleteOutlined />
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                
                <CardContent>
                    <Typography 
                        variant="body2"
                        color="textSecondary"
                    >
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard;
