import * as React from 'react';

interface IFormContainerProps {
}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
    return (
        <div className='container mx-auto p-2'>
            <div className='bg-cyan-950 my-8 rounded-xl bg-cover bg-center'>
                <div className='w-full h-full rounded-xl p-20'>
                    <h2 className='text-white text-4xl text-center py-2'>URL SHORTNER</h2>
                    <p className='text-white text-center pb-2 text-l font-extralight'>
                        Paste your link here
                    </p>
                    <form>
                        <div className='flex'>
                            <div className='relative w-full'>
                                <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-slate-800'>urlshortner.link /</div>
                                <input type='text' placeholder='add your link' required className='block w-full p-4 ps-32 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500'></input>
                                <button type='submit' className='absolute top-0 end-0 p-3 text-sm font-medium h-full text-white bg-sky-800 rounded-lg border border-ring-300 focus:ring-4 focus:outline-none focus: ring-sky-300'>
                                    Shorten URL
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default FormContainer;
