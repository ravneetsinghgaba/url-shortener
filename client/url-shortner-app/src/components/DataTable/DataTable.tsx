import * as React from 'react';
import { UrlData } from '../../interface/UrlData';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../helpers/Constants';

interface IDataTableProps {
    data: UrlData[];
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const { data } = props;
    console.log(data)
    const renderTableData = () => {
        return data.map((item) => {
            return (
                <tr
                    key={item._id}
                    className='border-b text-black bg-sky-200 hover:bg-sky-900/90 hover:text-white'
                >
                    <td className='px-6 py-3 break-words'>
                        <Link to={item.fullUrl} target='_blank' rel="noreferrer noopener">
                            {item.fullUrl}
                        </Link>
                    </td>
                    <td className='px-6 py-3'>
                        <Link
                            to={`${serverUrl}/shortUrl/${item.shortUrl}`}
                            target='_blank'
                            rel="noreferrer noopener"
                        >
                            {item.shortUrl}
                        </Link>
                    </td>
                    <td className='px-6 py-3'>
                        {item.clicks}
                    </td>
                    <td className='px-6 py-3'></td>
                    
                </tr>
            )
        })
    }

    return (
        <div className='container mx-auto p-2 pb-10'>
            <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'> {/* overflow-x-auto will give the container a scrollbar */}
                <table className='w-full table-fixed text-sm text-left rtl:text-right text-gray-500'>
                    <thead className='text-md uppercase text-gray-50 bg-sky-950'>
                        <tr>
                            <th scope='col' className='px-6 py-3 w-6/12'>
                                FullUrl
                            </th>
                            <th scope='col' className='px-6 py-3 w-3/12'>
                                ShortUrl
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Clicks
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTableData()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
