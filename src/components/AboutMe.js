import { Card, CardContent, CardHeader, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    media: {
        height: 420,
    }
}));

export function AboutMe() {

    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                title="🤘 The Luke Moran Portal 🚀"
                subheader="software enthusiast, musician, rock climber, skiier, gamer, technologist"
            />
            <CardMedia className={classes.media}
                image="/assets/sm_avatar.jpg" />
            <CardContent>
                <Typography>
                    I write software.
                    I play guitar sometimes.
                    Occasionally, I remember to feed my plants
                </Typography>
            </CardContent>
        </Card>
    );
}