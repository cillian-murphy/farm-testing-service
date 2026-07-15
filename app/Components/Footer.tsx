import Form from 'next/form'
export default function Footer() {
    return(
            <footer className=" bg-blue-600">
                <section className="min-h-70">

    <div className="flex flex-col gap-4 md:flex-row">

        <div className="flex-1 rounded-lg p-8">
            <h3 className="mb-4 text-2xl font-semibold">
                Contact Us
            </h3>

            <p>
                phone number and social media?
            </p>
        </div>

        <div className="flex-1 rounded-lg border border-zinc-800 p-8 shadow">
            <h3 className="mb-4 text-2xl font-semibold">
                Mobile Testing
            </h3>

            <p>
                We provide convenient on-site testing so farmers and
                veterinarians don&apos;t have to wait for results.
            </p>
        </div>

        <div className="min-w-0 flex-1 rounded-lg border border-zinc-800 p-8 shadow">
            <h3 className="mb-4 text-2xl font-semibold">
                Make An Enquiry
            </h3>
        <Form action="" className='w-full'>
            <div className="flex flex-col gap-1 md:flex-row">
            <input className="min-w-0 flex-1 border border-zinc-600 px-4 py-3 bg-white"  placeholder="Enter First Name" name="Fname"/>

            <input className="min-w-0 flex-1 border border-zinc-600 px-4 py-3 bg-white" placeholder="Enter Last Name" name="Lname"/>
            </div>

            <div className="flex flex-col gap-1 md:flex-row">
            <input className="min-w-0 flex-1 border border-zinc-600 px-4 py-3 bg-white"  placeholder="Enter Email" name="Email"/>
            </div>

             <div className="flex flex-col gap-1 md:flex-row">
            <textarea className="min-w-0 flex-1 border border-zinc-600 px-4 py-3 bg-white"  placeholder="Enter your message here" name="Message"/>
            </div>
            
            <div className="flex-1">
            <button type="submit">Submit</button>
            </div>
        </Form>
            
        </div>
    </div>

                </section>
            </footer>
    );
}