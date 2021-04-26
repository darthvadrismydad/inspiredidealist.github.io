import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles, Typography } from "@material-ui/core";
import { faLinkedinIn, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    link: {
        color: 'white'
    }
}));

export const SocialLinks = () => {
    const classes = useStyles();

    const links = [
        {
            icon: faLinkedinIn,
            url: 'https://www.linkedin.com/in/lucas-moran-b2084024'
        },
        {
            icon: faGithub,
            url: 'https://github.com/InspiredIdealist'
        },
        {
            icon: faMedium,
            url: 'https://medium.com/@lucas.moran40'
        }
    ];

    const asIcon = (link) => (
        <a key={link.url} href={link.url} className={classes.link} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={link.icon} size="lg" />
        </a>
    );

    return (
        <Typography className={classes.root}>
            {links.map(asIcon)}
        </Typography>
    )
};