import * as React from 'react';

interface IDataTableProps {
}

const DataTable: React.FunctionComponent<IDataTableProps> = () => {
    const renderTableData = () => {}
    
    return (
        <div className='container mx-auto p-2 pb-10'>
            <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'> {/* overflow-x-auto will give the container a scrollbar */}
                <table className='w-full table-fixed text-sm text-centre rtl:text-right text-gray-500'>
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
