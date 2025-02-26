const SingIn = () => {
  return (
    <div className="bg-colorBg w-full h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 space-y-6 shadow-md rounded-md">
        <h1 className="text-center font-bold text-[40px]">Please Login</h1>
        <form className="w-full">
          <label className="font-bold text-lg text-gray-700" htmlFor="">Email :</label><br />
          <input
              type="email"
              required
              className="mt-1 w-full rounded-md border focus:outline-blue-300 focus:right-2 bg-white text-sm text-gray-500 shadow-sm p-2"
            />
            <span className="text-red-600 mb-5"></span><br />
          <label className="font-bold text-lg text-gray-700 mt-[30px]" htmlFor="">Password :</label><br />
          <input required className="w-full rounded-md border focus:outline-blue-300 focus:right-2 bg-white text-sm text-gray-500 shadow-sm p-2" type="password" /><br />
          <span className="text-red-600"></span><br />
          <button className="py-2 rounded-md hover:bg-blue-600 w-full bg-blue-700 text-[#fff] font-bold text-[20px] mt-7">Log In</button>
        </form>
      </div>
    </div>
  )
}

export default SingIn