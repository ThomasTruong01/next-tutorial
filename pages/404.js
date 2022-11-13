import Link from 'next/link';

const PageNotFound = () => {
    return (
        <div>
            <h1>Page Not Found!</h1>
            <h3>Check if you went to the right page</h3>
            <Link href="/">Click here to go home</Link>
        </div>
    )
}

export default PageNotFound;