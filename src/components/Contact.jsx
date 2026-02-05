export default function Contact() {
    const contacts = [
        {
            label: "Phone",
            value: "+1 8502647731", // ← put your real number
            href: "tel:+1469XXXXXXX",
        },
        {
            label: "Email",
            value: "shamburunval@gmail.com",
            href: "mailto:shamburunval@gmail.com",
        },
        {
            label: "LinkedIn",
            value: "www.linkedin.com/in/shambu-r-17a85624b\n" +
                "\n",
            href: "https://linkedin.com/in/shambu-runval",
        },
        {
            label: "GitHub",
            value: "github.com/shambu07",
            href: "https://github.com/shambu07",
        },
    ];

    return (
        <section id="contact" className="py-20">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold">Let’s Connect</h2>
                    <p className="text-white/60 mt-2">
                        Open to Backend • AI • Cloud Engineering opportunities
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">

                    {contacts.map((c) => (
                        <a
                            key={c.label}
                            href={c.href}
                            target={c.label === "Phone" || c.label === "Email" ? "_self" : "_blank"}
                            rel="noreferrer"
                            className="
                                group rounded-2xl border border-white/10 bg-white/5 p-6
                                hover:border-yellow-400/40 hover:-translate-y-1
                                transition text-center
                            "
                        >
                            <div className="text-sm text-white/50 mb-2">
                                {c.label}
                            </div>

                            <div className="text-yellow-200 font-semibold break-all">
                                {c.value}
                            </div>
                        </a>
                    ))}

                </div>
            </div>
        </section>
    );
}
