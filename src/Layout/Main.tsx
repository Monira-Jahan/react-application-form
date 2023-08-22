import FormPage from "../components/FormPage";

import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
           <FormPage></FormPage> 
           <Outlet></Outlet>
        </div>
    );
};

export default Main;