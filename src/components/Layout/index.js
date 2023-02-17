import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout=()=>{
    return (
        <div className="App"><Sidebar/>

      
        <div className='page'>
        <div className='container'>
        <span className='tags tag-html'>&lt; html &gt;</span>
        <br></br>
            <span className='tags top-tags'>&lt; body &gt;

        </span>
        <Outlet>

        </Outlet>
        <span className='tags bottom-tags'>&lt; /body &gt;</span>
        <br></br>
        <span className='tags bottom-tag-html'>&lt; /html &gt;
        </span>
      
        </div>
        </div>
        </div>
    )
}

export default Layout