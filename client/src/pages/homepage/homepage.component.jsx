import React from 'react';
import './homepage.styles.scss'
import Directory from "../../components/directory/directory.component";
import {HomePageContainer} from "./homepage.styles";

// below if using "{}" after the arrow, "return" has to be written, if using "()", no "return" needed.
export const HomePage = () => (
    <HomePageContainer>
       <Directory />
    </HomePageContainer>
);

// export default HomePage

