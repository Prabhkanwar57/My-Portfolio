const Contact = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        📍 Toronto, Ontario, Canada
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        📧 Email:{' '}
        <a
          href="mailto:kanwarsabharwal@gmail.com"
          className="underline text-blue-600 dark:text-blue-400"
        >
         kanwarsabharwal@gmail.com
        </a>
      </p>

      {/* QR Code for vCard Contact */}
      <div className="flex flex-col items-center mb-10">
        <img
          src="/Prabhkanwar_Singh_Sabharwal.png"
          alt="QR Code to download contact card"
          className="w-48 h-48 shadow-lg rounded"
        />
        <p className="text-sm text-gray-500 mt-2">
          📇 Scan to save my contact card (.vcf)
        </p>
      </div>

      {/* QR Code for LinkedIn */}
      <div className="flex flex-col items-center">
        <img
          src="/qr-contact.png"
          alt="QR Code to LinkedIn profile"
          className="w-40 h-40 shadow-md rounded"
        />
        <p className="text-sm text-gray-500 mt-2">
          🔗 Scan to view my LinkedIn profile
        </p>
      </div>
    </section>
  );
};

export default Contact;
