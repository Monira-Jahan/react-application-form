import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../Model/models';
import { fetchPosts } from '../Model/api';
import { DataGrid } from '@mui/x-data-grid';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { Checkbox, Collapse, FormControlLabel, FormGroup, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';



const SecondPage = () => {
    // component-2
    const [open, setOpen] = useState(true);
    //Component-1
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'body', headerName: 'Body', width: 600 },
    ];
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        (async () => {
            const fetchedPosts = await fetchPosts();
            setPosts(fetchedPosts);
        })();
    }, []);
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');
    const navigate = useNavigate();
    useEffect(() => {
        if (!userDetails) {
            alert('Please provide your details first.');
            navigate('/');
        }
    }, []);

    // component-2  

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <div className='grid grid-cols-1 mb-7'>
            {/* Component-1 */}
            <div style={{ height: 400, width: '100%', margin: '0 50px 0 50px',backgroundColor:"" }}>
                <DataGrid rows={posts} columns={columns} pageSizeOptions={[10]} />
            </div>

            {/* Component-2 */}

            <div className=' border mt-8 mx-48 bg-gray-100'>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',marginRight:25,marginLeft:25}}
                component="nav"
                className='ml-36'
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="" />
                        </FormGroup>
                    </ListItemIcon>
                    <ListItemText primary="customer_service" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="" />

                                </FormGroup>
                            </ListItemIcon>
                            <ListItemText primary="support" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="" />

                                </FormGroup>
                            </ListItemIcon>
                            <ListItemText primary="customer-success" />
                        </ListItemButton>
                    </List>

                </Collapse>

                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="" />
                        </FormGroup>
                    </ListItemIcon>
                    <ListItemText primary="design" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="" />

                                </FormGroup>
                            </ListItemIcon>
                            <ListItemText primary="graphic_design" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="" />

                                </FormGroup>
                            </ListItemIcon>
                            <ListItemText primary="product_design" />
                        </ListItemButton>
                    </List>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox />} label="" />

                                </FormGroup>
                            </ListItemIcon>
                            <ListItemText primary="web_design" />
                        </ListItemButton>
                    </List>

                </Collapse>
            </List>
                </div>
        </div>
    );
};

export default SecondPage;