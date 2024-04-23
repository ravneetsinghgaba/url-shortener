import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../interface/UrlData';
import axios from 'axios';
import { serverUrl } from '../../helpers/Constants';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
    const [data, setdata] = React.useState<UrlData[]>([]);
    
    const fetchTableData =async () => {
        const response = await axios.get(`${serverUrl}/shortUrl`);
    }

    return (
        <>
            <FormContainer />
        </>
    )
};

export default Container;
