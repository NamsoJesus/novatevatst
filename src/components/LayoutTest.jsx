import { Outlet} from 'react-router-dom'

const LayoutTest = () => {


    return (
        <div className="container">
            <main className="main">
                <Outlet/> 
            </main>
        </div>
    );
};

export default LayoutTest;