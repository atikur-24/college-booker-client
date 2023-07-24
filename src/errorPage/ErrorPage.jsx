import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error} = useRouteError();

    return (
        <section className='my-container flex flex-col lg:flex-row items-center justify-between'>
            <div className='w-1/2'>
            <img className='' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1690206345~exp=1690206945~hmac=3f3b43f82f76f4ed9e4a2ac49245e03b75d29028ec29efa9a3b8a0d3ce1c4ffc" alt="error img" />
            </div>
            <div className='space-y-10 mr-16 lg:mr-20'>
                <h2 className='text-4xl tracking-wide font-bold'>Page Not Found</h2>
                <h5 className='font-semibold'>{error?.message}</h5>
                <button className='lg:pt-10'>
                <Link to='/' className='my-btn'> Back to Home page</Link>
                </button>
            </div>
        </section>
    );
};

export default ErrorPage;