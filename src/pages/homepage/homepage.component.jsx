import React from 'react';
import './homepage.styles.scss'
import Directory from "../../components/directory/directory.component";

// below if using "{}" after the arrow, "return" has to be written, if using "()", no "return" needed.
export const HomePage = () => (
    <div className='homepage'>
       <Directory />
    </div>
);

// export default HomePage

