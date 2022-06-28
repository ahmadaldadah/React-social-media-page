import React, {useState} from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {Mail, Notifications} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
})
const Search = styled("div")(({theme}) =>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%"
}))
const Icons = styled(Box)(({theme}) =>({
    display:"none" , alignItems:"center" , gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}))

const UserBox = styled(Box)(({theme}) =>({
    display:"flex" , alignItems:"center" , gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))

const Navbar = () => {
        const [open,setOpen] = useState(false);
        return (
            <AppBar position="sticky">
                <StyledToolbar>
                    <Typography variant="h5" sx={{display:{xs:"none" , sm:"block"}}}> AHMAD ALDADAH </Typography>
                    <DensityMediumIcon sx={{display:{xs:"block" , sm:"none"}}}/>
                    <Search> <InputBase  placeholder="search..."/> </Search>
                    <Icons >
                        <Badge badgeContent={4} color="error">
                             <Mail/>
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <Notifications/>
                        </Badge>
                        <Avatar
                            sx={{width:30 , height:30}}
                            src="https://s.gravatar.com/avatar/6325db173efe0ab6ac1461f2b03c63c7?s=80"
                            onClick={e=>setOpen(true)}
                        />
                    </Icons>
                    <UserBox onClick={e=>setOpen(true)}>
                        <Avatar
                            sx={{width:30 , height:30}}
                            src="https://s.gravatar.com/avatar/6325db173efe0ab6ac1461f2b03c63c7?s=80"
                        />
                        <Typography variant="span">Ahmad</Typography>
                    </UserBox>
                </StyledToolbar>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={e=>setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>

            </AppBar>
        );

}

export default Navbar;