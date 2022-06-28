import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography
} from "@mui/material";
import {Favorite, FavoriteBorder, MoreVert, Share} from "@mui/icons-material";

const Post = ()=>{
    return(
        <Card sx={{margin:5}}>
            <CardHeader
                avatar={
                    <Avatar  alt="AHMAD ALDADAH"
                             src="https://s.gravatar.com/avatar/6325db173efe0ab6ac1461f2b03c63c7?s=80"/>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="AHMAD ALDADAH"
                subheader="JUNE 28, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2&fbclid=IwAR15d4ZziQNQ6TkL-YcpHXI4Z6i4q_cHeORllXI3vU5r78BArOxs7YVbegU"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />

                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>

            </CardActions>
        </Card>
    )
}
export default Post;