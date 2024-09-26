import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox.jsx"
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const {loading, signup} = useSignup()

  const handleCheckboxChange = (gender) => {
    setInputs({...inputs, gender})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-50 bg-clip-padding backdrop-filter">
            <h1 className="text-3xl font-semibold text-center text-gray-500">
                Sign Up <span className="text-violet-500"> Yapper</span>
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-violet-500">Full Name</span>
                    </label>
                    <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10 bg-violet-300 text-gray-500" 
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-violet-500">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10 bg-violet-300 text-gray-500"
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-violet-500">Password</span>
                    </label>
                    <input type="text" placeholder="Enter password" className="w-full input input-bordered h-10 bg-violet-300 text-gray-500" 
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-violet-500">Confirm Password</span>
                    </label>
                    <input type="text" placeholder="Re-enter password" className="w-full input input-bordered h-10 bg-violet-300 text-gray-500" 
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>

                <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />

                <Link to={"/login"} className="text-sm hover:underline hover:text-violet-500 mt-2 inline-block" href="#">
                    Already have an account?
                </Link>
                
                <div>
                    <button className="btn btn-block btn-sm mt-2 border bg-violet-700 hover:bg-violet-950" disabled={loading}>
                        {loading ? <span className="loading loading-spinner"></span> : "Sign up"}
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp;

// STARTER CODE FOR SIGNUP PAGE

// import GenderCheckbox from "./GenderCheckbox.jsx"

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//         <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//             <h1 className="text-3xl font-semibold text-center text-gray-300">
//                 Sign Up <span className="text-blue-500"> Yappr</span>
//             </h1>

//             <form>
//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Full Name</span>
//                     </label>
//                     <input type="text" placeholder="Enter Full Name" className="w-full input input-bordered h-10" />
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Username</span>
//                     </label>
//                     <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Password</span>
//                     </label>
//                     <input type="text" placeholder="Enter password" className="w-full input input-bordered h-10" />
//                 </div>

//                 <div>
//                     <label className="label p-2">
//                         <span className="text-base label-text">Confirm Password</span>
//                     </label>
//                     <input type="text" placeholder="Re-enter password" className="w-full input input-bordered h-10" />
//                 </div>

//                 <GenderCheckbox />

//                 <a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" href="#">
//                     Already have an account?
//                 </a>
                
//                 <div>
//                     <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default SignUp