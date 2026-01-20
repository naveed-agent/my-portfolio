export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0b1025] via-[#111a3a] to-[#0b1025] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl text-white">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center mb-2">Contact Me</h1>
        <p className="text-center text-gray-300 mb-8">
          Let’s Create an AI Solution Customized for You
        </p>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows={4}

              placeholder="Project Details"
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Direct Contact */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold mb-4">Or Reach Me Directly</h3>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:mohsinbhowana302@gmail.com"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 transition p-4 rounded-xl"
            >
              📧 <span>mohsinbhowana302@gmail.com</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923207886133"
              target="_blank"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 transition p-4 rounded-xl"
            >
              📱 <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}