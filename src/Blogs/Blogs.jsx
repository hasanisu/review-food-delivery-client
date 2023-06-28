import React from 'react';

const Blogs = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 lg:mt-20 lg:mb-20 lg:pb-9">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-gray-400">Here`s mentined the important think about Server and client side.</p>
                <div className="space-y-4">
                    <details className="w-full basic-border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What is the difference between SQL and MySQL?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">SQL is developed by Microsoft Corporation. MySQL was developed by MySQL AB but is currently acquired and owned by Oracle Corporation. SQL is a structured query language used for managing and retrieving data from the database system. MySQL is a Relational database system that uses SQL to query data from the databases. </p>
                    </details>
                    <details className="w-full basic-border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What is JWT?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JWT, or JSON Web Token, is an open standard used to share information between two
                            parties securely — a client and a server. In most cases, it’s an encoded JSON containing a set of claims and a signature. It’s usually used in the
                            context of other authentication mechanisms like OAuth, OpenID to share user-related information. It’s also a popular way to authenticate/authorize
                            users in a microservice architecture.. </p>
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">How does JWT work??</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">When it comes to API authentication and server-to-server authorization, JSON web token (JWT) is particularly a useful technology. In terms of Single Sign-On (SSO), it means that a service provider can receive trustworthy information from the authentication server.

                            By sharing a secret key with the Identity Provider, the Service Provider can hash a part of a token it receives and compare it to the signature of the token. Now, if that result matches the signature, the SP knows that the information provided has come from the other entity possessing the key. </p>
                    </details>
                    <details className="w-full basic-border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">What is the difference between javascript and node js?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Java is a general-purpose language whereas node. js was designed for use with the browser. This means that Java has huge libraries of code and can be used to develop software for different types of platforms, whereas node. js can only be used to create web applications.. </p>
                    </details>
                    <details className="w-full basic-border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ri">How does node js handle multiple requests at the same time?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded </p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blogs;