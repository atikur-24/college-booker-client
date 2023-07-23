import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
    const notify = () => toast.success('Here is your toast.');

    return (
        <div>
            <button className='my-btn' onClick={notify}>Make me a toast</button>
            <Toaster />
        </div>
    );
};

export default Home;