import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Post } from '../Model/models';
import { fetchPosts } from '../Model/api';
import { DataGrid } from '@mui/x-data-grid';

const SecondPage = () => {
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

    return (
        <div>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={posts} columns={columns} pageSizeOptions={[10]} />
            </div>
        </div>
    );
};

export default SecondPage;