const Contact = () => 
{
    return(
        <div className="flex flex-col items-center gap-8">
            
            <div className="mt-20 flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-lime-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25V19.5a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5V8.25m18 0A2.25 2.25 0 0018.75 6H5.25A2.25 2.25 0 003 8.25m18 0v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0l-7.091-7.09A2.25 2.25 0 013 8.493V8.25"
                    />
                </svg>
                {/* call azure function endpoint for sendgrid email sending, use form here... */}
                <span className="font-mono text-lime-400 text-lg break-words">Contact Form coming soon, in the meantime reach me by LinkedIn...</span>
            </div>

        </div>
    );
}

export default Contact;